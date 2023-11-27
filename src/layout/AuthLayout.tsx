import { Outlet } from "react-router-dom";

// project import
import SideBar from "./SideBar";
import Header from "./Header";

const AuthLayout = () => {
    return (
        <Outlet />
    );
};

export default AuthLayout;