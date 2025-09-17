import { Navigate } from "react-router";
import  {useAuthContext} from "../context/auth.context";

const UserPage = ({children}) => {
  const { user } = useAuthContext();  

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  

  return children
}

export default  UserPage;