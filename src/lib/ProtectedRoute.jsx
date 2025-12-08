import { Navigate } from "react-router-dom";
import Helper from "../helper/Helper";

export default function ProtectedRoute({ children, allowedRole }) {
  const helper = new Helper();
  const  token  = helper.getToken();
  const  role  = helper.getRole();

  if (!token) {
    return <Navigate to="/signin" replace />
  }

  // restrict based on role
  if (allowedRole && allowedRole !== role) {
    return <Navigate to="/signin" replace />
  }

  return children;
}

