import { useParams } from "react-router-dom"
import { useAxiosGet,useAxiosPost } from '../../component/useAxios';
import {useState,useEffect} from "react"
import { useHistory } from 'react-router-dom';
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import axios from "axios"
 const Registration =()=>{
    const {setIsloading} =useContext(GlobalContext)


    const { registration_for } = useParams();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone_number,setPhone_number]=useState("");
    const [triggerSend,setTriggerSend]=useState(0) 
    const [showCongratMessage,setShowCongratMessage] =useState(false)
    const history = useHistory()
// let allEvents =[]
    const { "axiosdata":allEvents,axioserrorMessage,isaxiosError}=useAxiosGet('https://db-adebayo-portfolio-backend.herokuapp.com/api/get_all_events/')

const EventDetail = allEvents.filter(data=>registration_for==data.id)

// console.log(data_registering_for)

    const HandleSubmit=()=>{
        // e.preventDefault()
        setIsloading(true)
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let isvalid = true;
        
        if(name.length ==0){
            isvalid= false
        }

        if(!email.match(validRegex)){
            // console.log('s')
              isvalid=  false
        }

    if(phone_number.length ==0){
              isvalid= false
        }


if(!isvalid){

    return isvalid
}
// setTriggerSend(triggerSend++)
    

    axios.post(`https://db-adebayo-portfolio-backend.herokuapp.com/api/registerForEvent/${registration_for}/`,{
        "name":name,"email":email,"phone_number":phone_number
    },{}).then(response=>{
        setIsloading(false)

        console.log(response)
        if(response.status == 200){

            setShowCongratMessage(true)

            setTimeout(() => {
                history.push('/')
            }, 3000);
        }
    }).catch((error)=>{

         let errorMessage=''
           try{
            errorMessage=(error.response.data.detail||error.response.data.message) 
           }
           catch{
                errorMessage= error.message
           }

           console.log(errorMessage)
    })
    }    




    return (
        <div className="contact_container" style={{position:'relative'}}>
        

        <section style={{padding:"1rem","color":"whitesmoke",position:"absolute",top:"0",
        left:"0","width":"100%","alignItems":"center",
        backgroundColor:"rgb(67, 81, 44)",textAlign:"center","display":`${showCongratMessage?"flex":"none"}`,"justifyContent":"space-between"
        }}>
            <p style={{padding:0,margin:0}}>We have Received Your Request my team will get back to you... </p>
            <i class="far fa-times-circle" style={{fontSize:"1rem"}}
                onClick={()=>setShowCongratMessage(false)}
            ></i>
        </section>

        
        <div className="contact__container_content">
            <h2>Registration</h2>
            <p>Please fill in your details my team will get back to you. <br /> Thank you and enjoy the rest of your day</p>
        </div>

        <div className="contact_container_form" style={{padding:"3rem"}}>
            <form >

                <div className="form_group">
                    <input type="text"
                        onChange={(e)=>setName(e.target.value)}
                     placeholder="Full Name" required/>
                </div>

                                <div className="form_group">
                    <input type="text" placeholder={(allEvents.length!=0)?allEvents[0].event_name:"Please Refresh this page"}  disabled/>
                </div>

                <div className="form_group">
                    <input type="email" 
                        onChange={(e)=>setEmail(e.target.value)}
                    
                    placeholder="Email Addresse" required/>
                </div>
                <div className="form_group">
                    <input type="text"
                        onChange={(e)=>setPhone_number(e.target.value)}
                    
                     placeholder="Phone" required/>
                </div>

                

                {/* <div className="form_group">
                   <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                </div> */}

                <button className="btn formBtn" onClick={(e)=>{ e.preventDefault(); HandleSubmit()}}>Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Registration