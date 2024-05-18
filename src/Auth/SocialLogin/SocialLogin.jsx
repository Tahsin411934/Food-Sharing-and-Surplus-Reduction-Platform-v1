import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
const SocialLogin = () => {
    const {googleLogin,githubLogin,setLoading} = UseAuth()
    const location = useLocation();
    const navigate = useNavigate()

//google login
   const handleGoogleLogin=()=>{
    googleLogin()
    .then(()=>{
        
        navigate(location?.state ? location.state : "/");
        setLoading(false)
    })
    .catch((error)=>{
        setLoading(false)
      
       Swal.fire(`${error}`);
    })
}

//github login
   const handleGithubLogin=()=>{
   
    githubLogin()
    .then(()=>{
        
        navigate(location?.state ? location.state : "/");
        setLoading(false)
    })
    .catch((error)=>{
        toast.error(error.Message);
        setLoading(false)
    })
}
    
    return (
        <div>
            <div className="w-[17rem] mx-auto"><p>--------- Login with  --------</p></div>
            <div className="form-control mt-6">
          <button onClick={handleGoogleLogin} type="submit" className="btn text-xl bg-slate-300"><FcGoogle />Google </button>
          <button onClick={handleGithubLogin} type="submit" className="btn text-xl mt-5 bg-slate-300"><FaGithub />Github </button>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogin;