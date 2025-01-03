import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import SignUp from "../SignUp/signup";
import Login from "../Login/Login";
import User from "../User";
import UserProfile from "../UserProfile";
import UserSettings from "../UserSettings";
import PrivateRoute from "../PrivataRoute/PrivateRoute";
import Home from "../../Home/Home";
import Checkout from "../Checkout/Checkout";
import AuthProvider from "../AuthProvider/AuthProvider";

function Router() {
  // const router = createBrowserRouter({path:"/",element:<App/>},{path:'/signup',element:<SignUp/>})
  // <RouterProvider router={router}/>
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/user/profile" element={<UserProfile />} /> */}

        <Route path="/user" element={<User />}>
          {/* children = outlet component */}
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<UserSettings />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute/>}>
            <Route path="/home"  element={<Home/>}/>
            <Route path="/checkout"  element={<Checkout/>}/>
          <Route/>
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default Router;
