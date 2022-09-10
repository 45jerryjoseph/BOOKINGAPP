import axios from "axios";
import { useContext, useState }from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext ";
// import { AuthContext } from "../../context/AuthContext ";
import "./login.scss";



// issue experienced in Login Page


const Login = () => {
    const [ credentials , SetCredentials] = useState({
        username:undefined,
        password:undefined,
    });
    const  {loading , error , dispatch} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleChange = (e) =>{
        SetCredentials((prev) => ({...prev,[e.target.id] : e.tagret.value}));
    }
    const handleClick = async(e) =>{
        // if you do not place that prevent default it will refresh your page 
        e.preventDefault()
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", credentials);
            if(res.data.isAdmin){
                dispatch({type : "LOGIN_SUCCESS" , payload : res.data.details});
                navigate("/")
            }else{
              dispatch({type : "LOGIN_FAILURE" , payload:{message : "You are not Allowed"}});
            }
        } catch (err) {
            dispatch({type : "LOGIN_FAILURE" , payload:err.response.data});
        }
    }
  return  <div className="login">
     <div className="lcontainer">
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="LInput" />
        <input type="password" placeholder="Password" id="password" onChange={handleChange} className="LInput" />
        <button onClick={handleClick} className="lButton"> Login</button>

        {error && <span>{error.message}</span>}
     </div>


    </div>
  
}

export default Login