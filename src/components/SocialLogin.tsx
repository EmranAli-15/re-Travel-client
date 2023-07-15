import { FcGoogle } from "react-icons/fc";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

        const { googleLogin }: any = useAuth();
        const navigate = useNavigate();

        const handleLogin = () => {
                googleLogin()
                        .then(() => {
                                navigate("/")
                        })
                        .catch(() => { })
        }
        return (
                <div>
                        <button onClick={handleLogin} className="btn w-full">
                                <FcGoogle size={32}></FcGoogle>
                        </button>
                </div>
        );
};

export default SocialLogin;