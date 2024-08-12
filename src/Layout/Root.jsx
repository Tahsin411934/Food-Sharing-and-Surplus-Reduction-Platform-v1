import { Outlet } from "react-router-dom/dist";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import UseAuth from "../Hook/useAuth";
import { ToastContainer } from "react-toastify";


const Root = () => {
    const { loading } = UseAuth();
    if (loading) {
        // set loading
        return <div className="bg-[#2F7955] h-screen flex justify-center items-center w-[100%]">
            <div className="mx-auto text-center">
                <span className="w-20 text-white  loading loading-spinner "></span>
                <h1 className="mt-5 mr-10 tracking-widest text-[#FFFFFF] font-Prata font text-5xl">PLATE SWAP</h1>

            </div>

            {/* <div className="flex items-center justify-center  w-[70%] mx-auto">

                
            </div> */}
        </div>
    }
    return (
        <div className="bg-[#EDEDED]">
            <ToastContainer></ToastContainer>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;