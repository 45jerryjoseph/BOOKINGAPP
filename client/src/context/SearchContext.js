//context API


import { useReducer } from "react";
import { createContext } from "react";

const INITIAL_STATE ={
    city : undefined,
    dates :[],
    options : {
        adult:  undefined,
        Children: undefined,
        room: undefined
    },
};


export const SearchContext = createContext(INITIAL_STATE);

// writtinng our Actions 
const SearchReducer =(state ,action) =>{
    switch(action.type){
        case "NEW_SEARCH" :
        // our payload is the selection of Where you are going , dates and adult....
        return action.payload
        case "RESET _SEARCH" :
            return INITIAL_STATE
        default:
            return state


    }
}
// cchildren is the components that we want to reach this data 
export const SearchContextProvider = ({children}) =>{
    const [state ,dispatch] = useReducer (SearchReducer,INITIAL_STATE);

    return (
        // so that when we update our payload it will call to the case NEW_SEARCH
        <SearchContext.Provider value ={{city :state.city, dates:state.dates,options:state.options,dispatch}}>
            {children}
        </SearchContext.Provider>
    )

}