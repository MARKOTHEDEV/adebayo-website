
import  heroImage from '../../public/hero_pics.jpg';
import EveningWithBossImage from '../../public/eveningWiththeBoss.jpg';
import BigHeadPics from '../../public/bigheadpics.jpg';
import EventCard from '../../component/EventCard'

import event1 from "../../public/event (1).png"
import event2 from "../../public/event (2).png"
import event3 from "../../public/event (3).png"
import { motion } from 'framer-motion';
import { Link ,useHistory } from 'react-router-dom';
import { useAxiosGet } from '../../component/useAxios';
import { useState } from 'react';



const Events = ()=>{

    const history = useHistory()


//     const events_info =[
// { id:0,heading:`DB Adebayo Annual SME's Submit`,
// content:'',
// 'image':event1},
// {id:1,heading:`Evening with DB for Career Proffesional` ,content:''
// ,image:event2},
// {id:2,heading:'DB Adebayo Annual C-Suite Roundtable',content:'',
// image:event3},
// // {id:3,heading:'An Evening with DB for Career Proffesional',
// // content:'A Bi-monthly in-person buisness talk show with entrepreneurs',image:BigHeadPics},
//      ]
const { "axiosdata":events_info,axioserrorMessage,isaxiosError}=useAxiosGet('https://db-adebayo-portfolio-backend.herokuapp.com/api/get_all_events/')

    return (
        <div class="events_card_list">
       
            {
                events_info.filter(({is_how_can_help})=>is_how_can_help!=true).map((event_data)=>{

                    return (


                        // <EventCard {...event_data}  />


                        
                    <motion.div className="card mb-3"
                     
                    whileHover={{scale:1.1}}  whileTap={{scale:1}}
                        style={{maxWidth: "540px",borderRadius:"10px",color:'black'
                        ,maxHeight:"450px",}} key={event_data.id}
                        onClick={(e)=>history.push(`/registration/${event_data.id}`)}
                        
                        >
                        <div className=" ">
                            <div className="col-md-13">
                            <img src={event_data.event_photo} className="img-fluid rounded-start" alt="" style={{height:"100%",objectFit:'cover'}}/>
                            </div>
                            <div className="col-md-13">
                            <div className="card-body">
                                <h5 className="card-title">{event_data.event_name}</h5>
                                <p className="card-text">{event_data.content}</p>
                                <p className="card-text"><small className="text-muted">Click  To Register</small></p>
                            </div>
                            </div>
                        </div>
                    </motion.div>
                    // <>
                    )
                })
            }
                    <br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>)
}



export default Events