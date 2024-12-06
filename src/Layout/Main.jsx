import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";


const Main = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;