import { createBrowserRouter } from "react-router";
import Add from "../pages/Add";
import Update from "../pages/Update";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotAllowed from "../pages/NotAllowed";
import AdminPage from "../pages/AdminPage";
import UserPage from "../pages/UserPage";
import Profile from "../pages/Profile";
import ModAndAdminPage from "../pages/ModAndAdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
{
  path: "/add",
  element: (
    <AdminPage>
      <Add />
    </AdminPage>
  ),
},
  {
    path: "/update/:id",
    element:(
    <ModAndAdminPage>
      <Update />
    </ModAndAdminPage>
  ),
  },

  {
    path: "register",
    element: <Register />,
  },
 {
    path: "login",
    element: <Login />,
  },
 {
    path: "notallowed",
    element: <NotAllowed />,
  },

  {
path: "adminpage",
    element: <AdminPage /> ,

  },

   {
path: "profile",
    element: (
    <UserPage>
      <Profile />
    </UserPage>
  ),
  }

]);
export default router;
