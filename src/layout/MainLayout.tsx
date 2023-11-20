import { Outlet } from "react-router-dom";

// project import
import SideBar from "./SideBar";
import Header from "./Header";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className="flex flex-row p-3 bg-black h-auto min-h-screen">
                <div className="basis-1/6 bg-slate-800 rounded-[50px] m-3">
                    <SideBar />
                </div>
                <div className="basis-5/6 bg-slate-800 rounded-[50px] m-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;