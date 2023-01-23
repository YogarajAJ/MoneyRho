import { Navigate } from "react-router-dom";

const Protected = ({ condition, children, redirectTo = "/" }) => {
  if (!condition) {
    return <Navigate to={redirectTo} replace />;
  }
  return children;
};
export default Protected;
