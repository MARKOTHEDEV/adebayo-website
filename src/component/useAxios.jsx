import axios from "axios"
import { useState,useEffect } from "react"
   
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const useAxiosGet = (url)=>{
    const [axiosdata,setaxiosdata]=useState([]);
    const [axioserrorMessage,setAxioserrorMessage]=useState('');
    const [isaxiosError,setIsaxiosError]=useState(false);
    const {setIsloading} =useContext(GlobalContext)
//    console.log(setIsloading)
    useEffect(() => {
        setIsloading(true)
       axios.get(url).then(response=>{
        setaxiosdata(response.data.data)
        setIsaxiosError(response.data.success)
        setIsloading(false)

       })
       .catch(error=>{
           let errorMessage=''
           try{
            errorMessage=(error.response.data.detail||error.response.data.message) 
           }
           catch{
                errorMessage= error.message
           }
           setAxioserrorMessage(errorMessage)
           setIsaxiosError(true)
        setIsloading(false)

       })
    }, [url])


    return {
        axiosdata,axioserrorMessage,isaxiosError
    }
}




