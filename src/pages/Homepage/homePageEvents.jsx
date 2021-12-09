
import { Link ,useHistory } from 'react-router-dom';
import EventCard from '../../component/EventCard'
import event1 from "../../public/event (1).png"
import event2 from "../../public/event (2).png"
import event3 from "../../public/event (3).png"
import EveningWithBossImage from '../../public/eveningWiththeBoss.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAxiosGet } from '../../component/useAxios';
import Preloader from '../../component/Preloader';

const HomePageEvents = ()=>{

    const history = useHistory()
    // const events_info = useState([])
    // const events_info =[
    //    { id:0,heading:'Thinking Out Loud ',content:'',
    //    'image':event1},
    //     {id:1,heading:`Time Out With DB-Adebayo` ,content:'',image:event2},
    //     {id:2,heading:`DB-Adebayo Annual C-suite RoundTable`,content:'',image:event3},
    //     // {id:3,heading:'An Evening with DB for Career Proffesional',content:'A Bi-monthly in-person buisness talk show with entrepreneurs',image:BigHeadPics},
    // ]

    const { "axiosdata":events_info,axioserrorMessage,isaxiosError}=useAxiosGet('https://db-adebayo-portfolio-backend.herokuapp.com/api/get_all_events/')
        // console.log( axiosdata,axioserrorMessage,isaxiosError)
    // console.log(events_info)
    return (
        <div className="section_d "
        //  style={{margin:"1rem .8rem",}}
        
        >
      {/* <Preloader show={true} /> */}

                <h2 className="section_heading">Events</h2>
                <div className="list_of_not_main_content">
                       
                        {
                            events_info.filter(({is_how_can_help})=>is_how_can_help!=true).map((event_data)=>{

                                return (



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
                                   

                                )
                            })
                        }
                        
                    </div>
                {/* <div className="section_d__content_container" >
                    <div className="section_d__main_content_container"  >
                        <img src={EveningWithBossImage} alt="" style={{borderRadius:"10px"}} />
                        
                        <p>
                        Debo Adebayo, a Fellow of the  Business Process Management Institute (Nigeria). He is also an Accountant by training and a seasoned management consultant with years of experience in Business Process Management..
                            <br />

                            <Link to='/about' className="linear_text" style={{borderBottom:"1px solid black"}}>Read More</Link>
                    
                        </p>
                    </div>

                    <div className="list_of_not_main_content">
                       
                        {
                            events_info.map((event_data)=>{

                                return (



                    <div className="card mb-3"
                     
                    whileHover={{scale:1.1}}  whileTap={{scale:1}}
                        style={{maxWidth: "540px",borderRadius:"10px",color:'black'
                        ,maxHeight:"450px",border:"1px solid red"}} key={event_data.id}>
                        <div className=" ">
                            <div className="col-md-13">
                            <img src={event_data.image} className="img-fluid rounded-start" alt="" style={{height:"100%",objectFit:'cover'}}/>
                            </div>
                            <div className="col-md-13">
                            <div className="card-body">
                                <h5 className="card-title">{event_data.heading}</h5>
                                <p className="card-text">{event_data.content}</p>
                                <p className="card-text"><small className="text-muted">Click  To Register</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                                   

                                )
                            })
                        }
                        
                    </div>

                </div> */}
            </div>
    )
}

export default HomePageEvents