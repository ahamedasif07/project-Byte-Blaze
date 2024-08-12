import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-52px)]">
            <Hero></Hero>
        </div>
    );
};

export default Home;