//context API


import { useEffect, useReducer } from "react";
import { createContext } from "react";

const INITIAL_STATE ={
    user : JSON.parse(localStorage.getItem("user")) || null,
    loading :false,
    error :null
};


export const AuthContext = createContext(INITIAL_STATE);

// writtinng our Actions 
const AuthReducer =(state ,action) =>{
    switch(action.type){
        case "LOGIN_START" :
        
        return {
            user :null,
            loading : true,
            error :null
        };
        case "LOGIN_SUCESS" :
        
        return {
            user :action.payload,
            loading :false,
            error :null
        };
        case "LOGIN_FAILURE" :
        
        return {
            user :null,
            loading : true,
            error : action.payload
        };
        case "LOGOUT" :
        
        return {
            user :null,
            loading : true,
            error : action.payload
        };
        default:
            return state


    }
}
// cchildren is the components that we want to reach this data 
export const AuthContextProvider = ({children}) =>{
    const [state ,dispatch] = useReducer (AuthReducer,INITIAL_STATE);
    useEffect( ()=>{
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user])
    return (
        // so that when we update our payload it will call to the case NEW_SEARCH
        <AuthContext.Provider value ={{user:state.user, loading:state.loading,error:state.error,dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}