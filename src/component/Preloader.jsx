import proloaderImage from "../public/preloader.gif"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState";

const Preloader= (prop)=>
{
    const {isLoading} =useContext(GlobalContext)
    console.log(isLoading,"SS")

return  (    <div className="" style={
        {
            position:"fixed",
            width:"100vw",height:"100%",top:"0",
            left:0,
            display:`${isLoading?'flex':'none'}`,
            backgroundColor:"white",zIndex:"200000",alignItems:"center",justifyContent:"center"
        }
    }>
        <div
         style={{textAlign:"center"}}
        >
            <img src={proloaderImage} alt="" />
            <p>Loading... please wait</p>
        </div>
    </div>
)
}

export default Preloader