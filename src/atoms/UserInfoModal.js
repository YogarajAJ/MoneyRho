import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Icon,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Div from "../components/Div";
import Spacing from "../components/Spacing";
import { addData } from "../config/RealtimeDatabase";
import { STYLED_TYPO_PROPS } from "../organisms/Login";
import { updateFileDataFields } from "../store/slices/FileDataSlice";
import { updateLoaderFields } from "../store/slices/LoaderSlice";

const UserInfoModal = () => {
  const { userModal, name, email, mobile } = useSelector(
    ({ fileData }) => fileData
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(
      updateFileDataFields({
        userModal: false,
      })
    );
  };

  const handleChange = (e) => {
    dispatch(
      updateFileDataFields({
        [e.target.name]: e.target.value,
      })
    );
  };

  const validateFields = () => {
    return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile);
  };

  const saveData = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }
    let user = { email, mobile, name };
    dispatch(
      updateLoaderFields({
        load: true,
      })
    );
    await addData(user, "guestUser/");
    dispatch(
      updateLoaderFields({
        load: false,
        alertText: "Thank you",
        severity: "success",
      })
    );
    localStorage.setItem("user", 1);
    dispatch(
      updateFileDataFields({
        email: "",
        mobile: "",
        name: "",
      })
    );
    closeModal();
  };
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={userModal}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",

        "& .MuiDialog-paper": {
          backgroundColor: "#181818",
        },
      }}
    >
      <DialogTitle>
        <Typography align="end">
          <CloseIcon
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={closeModal}
          />
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography align="center" color="primary" variant="h6">
            Fetch reports as a guest
          </Typography>
        </DialogContentText>
        {/* <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "fit-content",
          }}
          autoComplete="off"
          onSubmit={saveData}
        >
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <TextField
              sx={STYLED_TYPO_PROPS}
              label="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <TextField
              sx={STYLED_TYPO_PROPS}
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <TextField
              sx={STYLED_TYPO_PROPS}
              label="Mobile Number"
              name="mobile"
              type="number"
              value={mobile}
              onChange={handleChange}
              InputProps={{ inputMode: "numeric", pattern: "[1-9]{1}[0-9]{9}" }}
            />
          </FormControl>
          <br />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box> */}
        <form onSubmit={saveData} className="row">
          <Div className="col-sm-12">
            <label className="cs-primary_color">Full Name*</label>
            <input
              type="text"
              className="cs-form_field"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <Spacing lg="20" md="20" />
          </Div>
          <Div className="col-sm-12">
            <label className="cs-primary_color">Email*</label>
            <input
              className="cs-form_field"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <Spacing lg="20" md="20" />
          </Div>

          <Div className="col-sm-12">
            <label className="cs-primary_color">Mobile*</label>
            <input
              type="tel"
              className="cs-form_field"
              name="mobile"
              value={mobile}
              onChange={handleChange}
            />
            <Spacing lg="20" md="20" />
          </Div>

          <button className="cs-btn cs-style1">
            <span>Send Message</span>
            <Icon icon="bi:arrow-right" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default UserInfoModal;
