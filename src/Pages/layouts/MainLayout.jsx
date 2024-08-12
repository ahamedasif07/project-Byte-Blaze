import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-150px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;