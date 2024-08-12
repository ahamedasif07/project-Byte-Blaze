import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;