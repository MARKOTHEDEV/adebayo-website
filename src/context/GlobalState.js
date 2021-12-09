import React,{createContext,useReducer} from "react"
import AppReducer from './AppReducer'
const initialState={
    isLoading:false

}



// creATE context

export const GlobalContext = createContext(initialState)

//Provider Component

export const GlobalProvider=({children})=>{
    const [state,dispatch] =useReducer(AppReducer,initialState);


    function setIsloading(boolean){
        dispatch({
            payload:boolean,
            type:"setIsLoading"
        })
    }
    return(
        <GlobalContext.Provider  value={{
            isLoading:state.isLoading,setIsloading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}