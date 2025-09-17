import { Navigate } from "react-router";
import  {useAuthContext} from "../context/auth.context";

const ModAndAdminPage = ({children}) => {
  const { user } = useAuthContext();  

  if (!user) {
    return <Navigate to="/login"  />;
  }

  if(user?.authorities.includes("ROLES_ADMIN") || 
     user?.authorities.includes("ROLES_MODERATOR")) {
    return children;
  }

  return <Navigate to = "/notallowed"></Navigate>
};

export default ModAndAdminPage;