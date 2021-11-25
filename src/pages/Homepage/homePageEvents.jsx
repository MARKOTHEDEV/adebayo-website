
import { Link } from 'react-router-dom';
import EventCard from '../../component/EventCard'
import event1 from "../../public/event (1).jpeg"
import event2 from "../../public/event (2).jpeg"
import event3 from "../../public/event (3).jpeg"
import EveningWithBossImage from '../../public/eveningWiththeBoss.jpg';
import { motion } from 'framer-motion';
const HomePageEvents = ()=>{
    const events_info =[
       { id:0,heading:'DB Adebayo Annual SMEs Submit ',content:'',
       'image':event1},
        {id:1,heading:`Evening with DB for Career Proffesional` ,content:'',image:event2},
        {id:2,heading:`DB Adebayo Annual C-Suite Roundtable`,content:'',image:event3},
        // {id:3,heading:'An Evening with DB for Career Proffesional',content:'A Bi-monthly in-person buisness talk show with entrepreneurs',image:BigHeadPics},
    ]
    
    return (
        <div className="section_d " style={{margin:"1rem .8rem",}}>
                <h2 className="section_heading">Events</h2>
                <div className="list_of_not_main_content">
                       
                        {
                            events_info.map((event_data)=>{

                                return (



                    <motion.div className="card mb-3"
                     
                    whileHover={{scale:1.1}}  whileTap={{scale:1}}
                        style={{maxWidth: "540px",borderRadius:"10px",color:'black'
                        ,maxHeight:"450px",}} key={event_data.id}>
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