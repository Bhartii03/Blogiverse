import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"

function LogoutBtn(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const userName = userData?.name || "User";

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate('/'); // Added this
        })
    }

    return(
        <button className="inline-block px-6 py-2 duration-200 hover:bg-gray-700 hover:text-white rounded-2xl"
        onClick={logoutHandler}>
            Logout :{userName}
        </button>
    )
}

export default LogoutBtn;
