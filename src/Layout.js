import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <div>
                <Footer />
            </div>
        </>
    );
}
export default Layout;