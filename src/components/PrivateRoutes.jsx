import { Navigate } from "react-router-dom";

function PrivateRoutes({ isLogin, children }) {
  return isLogin ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;
