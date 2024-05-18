import { Outlet } from "react-router-dom/dist";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import UseAuth from "../Hook/useAuth";
import { ToastContainer } from "react-toastify";


const Root = () => {
    const { loading } = UseAuth();
    if (loading) {
// set loading
        return <div className="bg-[#2F7955] h-screen flex justify-center items-center">
            <div>
                <span className=" text-white m-auto loading loading-spinner w-20"></span>
                <div className="flex items-center justify-center  -ml-[30%]">

                    <h1 className="mt-5 mr-10 tracking-widest text-[#FFFFFF] font-Prata font text-5xl">PLATE SWAP</h1>
                </div>
            </div>


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