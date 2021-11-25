
import  heroImage from '../../public/hero_pics.jpg';
import EveningWithBossImage from '../../public/eveningWiththeBoss.jpg';
import BigHeadPics from '../../public/bigheadpics.jpg';
import EventCard from '../../component/EventCard'

import event1 from "../../public/event (1).jpeg"
import event2 from "../../public/event (2).jpeg"
import event3 from "../../public/event (3).jpeg"

const Events = ()=>{
    const events_info =[
{ id:0,heading:'An Evening with DB for Career Proffesional',content:'A bi-monthly in-person buiness talk show with career professional',
'image':event1},
{id:1,heading:`DB Adebayo Annual CEO'S Roundtable` ,content:'',image:event2},
{id:2,heading:'DB Adebayo Annual SMEs Submit',content:'',image:event3},
{id:3,heading:'An Evening with DB for Career Proffesional',content:'A Bi-monthly in-person buisness talk show with entrepreneurs',image:BigHeadPics},
     ]

    return (
        <div class="events_card_list">
       
            {
                events_info.map((event_data)=>{

                    return (


                        <EventCard {...event_data}  />
                    //     <div class="section_d_not_main_container">

                    //     <div class="section_d_not_main_container__image_box">
                    //         <img src={image} alt=""/>
                    //     </div>
                    //     <div class="section_d_not_main_container__content_box">
                    //             <div class="content">
                    //                 <h2>{heading}</h2>
                    //             <p>{content}</p>
                                
                    //             </div>
                                
                    //             {/* <!-- <br> <br> --> */}
                    //             <button class="btn section_d_not_main__btn">
                    //                 <div class="section_d_line"></div>
                    //                 Click here to register
                    //                 <div class="section_d_line"></div>
                    //             </button>
    
                    //     </div>
                    // </div>
                    )
                })
            }
        </div>)
}



export default Events