import { useParams } from "react-router-dom"
import {useState,useEffect} from "react"
import { useHistory } from 'react-router-dom';
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios"



const Contact =()=>{
    // register_contact/
    const {setIsloading} =useContext(GlobalContext)
    const history = useHistory()

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone_number,setPhone_number]=useState("");
    const [message,setMessage]=useState("");
    const [showCongratMessage,setShowCongratMessage]=useState(false)
    const handleSubmit =(e)=>{
e.preventDefault();
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
setIsloading(true)
        if(name.length ==0){
                    return false

        }

        if(!email.match(validRegex)){
            // console.log('s')
                      return false

        }

    if(phone_number.length ==0){
              return false
        }

      


      

    

  if(message.length ==0){
              setMessage("No message for you sir")
        }



        axios.post(`https://db-adebayo-portfolio-backend.herokuapp.com/api/register_contact/`,{
        "name":name,"email":email,"phone_number":phone_number,"message":message
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
        <div className="contact_container" style={{position:"relative"}}>


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
            <h2>Contact Us</h2>
            <p>Ready to take it to the next level?idea and find out 
                how we help your buisness grow.</p>
            <p>Or you just want to have a chat with me? why not fill in the details</p>
        </div>

        <div className="contact_container_form">
            <form >

                <div className="form_group">
                    <input type="text"
                    
                        onChange={(e)=>setName(e.target.value)}
                     placeholder="Name" required/>
                </div>

                <div className="form_group">
                    <input
                        onChange={(e)=>setEmail(e.target.value)}
                    
                     type="email" placeholder="Email Addresse" required/>
                </div>
                <div className="form_group">
                    <input type="text"
                        onChange={(e)=>setPhone_number(e.target.value)}
                    
                     placeholder="Phone" required/>
                </div>

                <div className="form_group">
                   <textarea 
                        onChange={(e)=>setMessage(e.target.value)}
                   
                   name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                </div>

                <button className="btn formBtn" onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    </div>
    )
}


export default Contact