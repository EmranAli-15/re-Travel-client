import { FcGoogle } from "react-icons/fc";
import useAuth from '../hooks/useAuth';


const SocialLogin = () => {

        const { googleLogin } = useAuth();

        const handleLogin = () => {
                googleLogin()
                        .then((result: any) => {
                                console.log(result.user)
                        })
                        .catch((error: any) => console.log(error.message))
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