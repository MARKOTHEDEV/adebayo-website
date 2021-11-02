
import  heroImage from '../../public/hero_pics.jpg';
import EveningWithBossImage from '../../public/eveningWiththeBoss.jpg';
import BigHeadPics from '../../public/bigheadpics.jpg';
import { Link } from 'react-router-dom';
import EventCard from '../../component/EventCard'


const HomePageEvents = ()=>{
    const events_info =[
       { id:0,heading:'An Evening with DB for Career Proffesional',content:'A bi-monthly in-person buiness talk show with career professional','image':heroImage},
        {id:1,heading:`DB Adebayo Annual CEO'S Roundtable` ,content:'',image:heroImage},
        {id:2,heading:'DB Adebayo Annual SMEs Submit',content:'',image:BigHeadPics},
        // {id:3,heading:'An Evening with DB for Career Proffesional',content:'A Bi-monthly in-person buisness talk show with entrepreneurs',image:BigHeadPics},
    ]
    
    return (
        <div className="section_d">
                <h2 className="section_d__headText linear_text small_headingCenter">Events</h2>
                
                <div className="section_d__content_container" >
                    <div className="section_d__main_content_container"  >
                        <img src={EveningWithBossImage} alt="" />
                        
                        <p>
                        Debo Adebayo, a Fellow of the  Business Process Management Institute (Nigeria). He is also an Accountant by training and a seasoned management consultant with years of experience in Business Process Management, Enterprise Transformation, and Performance Management. He is a business strategist as well as a coach who believes continuous learning is required for relevance
                            <br /><br />

                            <Link to='/about' className="linear_text" style={{borderBottom:"1px solid black"}}>Read More</Link>
                    
                        </p>
                    </div>

                    <div className="list_of_not_main_content">
                       
                        {
                            events_info.map((event_data)=>{

                                return (



                        <EventCard {...event_data}  />
                                   
                                    //     <div className="section_d_not_main_container" key={id}>

                                    //     <div className="section_d_not_main_container__image_box">
                                    //         <img src={image} alt=""/>
                                    //     </div>
                                    //     <div className="section_d_not_main_container__content_box">
                                    //             <div className="content">
                                    //                 <h2>{heading}</h2>
                                    //             <p>{content}</p>
                                                
                                    //             </div>
                                                
                                    //             {/* <!-- <br> <br> --> */}
                                    //             <button className="btn section_d_not_main__btn">
                                    //                 <div className="section_d_line"></div>
                                    //                 Click here to register
                                    //                 <div className="section_d_line"></div>
                                    //             </button>
            
                                    //     </div>
                                    // </div>
                                )
                            })
                        }
                        
                    </div>

                </div>
            </div>
    )
}

export default HomePageEvents