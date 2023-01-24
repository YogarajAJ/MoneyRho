import {
  getDownloadURL,
  getMetadata,
  ref,
  uploadBytesResumable
} from "firebase/storage";
import { storage } from "../config/Firebase";
import { getData } from "../config/RealtimeDatabase";
import store from "../store";
import {
  updateFileDataFields
} from "../store/slices/FileDataSlice";
import { updateLoaderFields } from "../store/slices/LoaderSlice";
import { updateLoginFields } from "../store/slices/LoginSlice";

export const uploadFile = async (file, tag) => {
  store.dispatch(
    updateLoaderFields({
      load: true,
    })
  );
  // 'file' comes from the Blob or File API
  try {
    const storageRef = ref(storage, tag);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        console.log(percent);
      },
      (err) => {
        console.log(err);
        store.dispatch(
          updateLoaderFields({
            load: false,
            alertText: "Upload Failed",
            severity: "error",
          })
        );
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          store.dispatch(
            updateFileDataFields({
              fileUrl: downloadURL,
            })
          );
        });
        store.dispatch(
          updateLoaderFields({
            load: false,
            alertText: "Report Uploaded Sucessfully",
            severity: "success",
          })
        );
      }
    );
  } catch (e) {
    console.log("exception");
    store.dispatch(
      updateLoaderFields({
        load: false,
        alertText: "Upload Failed",
        severity: "error",
      })
    );
  }
};

export const getFileUrl = async (tag = "") => {
  if (!tag) return null;
  try {
    const url = await getDownloadURL(ref(storage, tag));
    return url;
  } catch (e) {
    console.error(e);
    store.dispatch(
      updateFileDataFields({ file: null, fileUrl: "", reportMetaData: "" })
    );
  }
  return null;
};

export const searchDocument = async (tag = "") => {
  if (!tag) return null;
  store.dispatch(
    updateLoaderFields({
      load: true,
    })
  );
  const forestRef = ref(storage, tag);
  // Get metadata properties
  try {
    const metadata = await getMetadata(forestRef);
    console.log(metadata);
    store.dispatch(
      updateLoaderFields({
        load: false,
        alertText: "Report Fetched Successfully",
        severity: "success",
      })
    );
    return metadata;
  } catch (e) {
    console.log("Exception - ", e);
    store.dispatch(
      updateLoaderFields({
        load: false,
        alertText: "Report Not Found",
        severity: "error",
      })
    );
    return null;
  }
};

const validateLogin = (
  email = "",
  password = "",
  currentEmail = "",
  currentPassword = ""
) => {
  return (
    email.toLowerCase() === currentEmail.toLowerCase() &&
    password === currentPassword
  );
};
export const loginUser = async (currentEmail, currentPassword) => {
  try {
    store.dispatch(updateLoaderFields({ load: true }));
    const { email, password } = await getData("admin");
    store.dispatch(updateLoaderFields({ load: false }));
    if (validateLogin(email, password, currentEmail, currentPassword)) {
      store.dispatch(
        updateLoaderFields({
          alertText: "Logged in Successfully",
          severity: "success",
        })
      );
      store.dispatch(
        updateLoginFields({
          loggedIn: true,
        })
      );
      return true;
    }
    store.dispatch(
      updateLoaderFields({
        alertText: "Login Failed - Invalid Email/Password",
        severity: "error",
      })
    );
    return false;
    // ...
  } catch (error) {
    console.error(error);
    console.error(error.code);
    console.error(error.message);

    store.dispatch(
      updateLoaderFields({
        alertText: "Login Failed - Invalid Email/Password",
        severity: "error",
      })
    );
    return false;
  }
};
