import { Navigate } from "react-router";
import { useAuthContext } from "../context/auth.context";

const AdminPage = ({ children }) => {
  const { user } = useAuthContext();

 
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user?.authorities.includes("ROLES_ADMIN")) {
    return <>{children}</>; // 
  }

  return <Navigate to="/notallowed" replace />;
};

export default AdminPage;
