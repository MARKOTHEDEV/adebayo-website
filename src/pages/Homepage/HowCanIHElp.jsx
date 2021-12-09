
import image2 from '../../public/Image 2.jpg'
import  heroImage from '../../public/hero_pics.jpg'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom';
import { useAxiosGet } from '../../component/useAxios';

const HowCanIHElp = ()=>{
    const history = useHistory()

    // const sectioncCardInfo = [
    //     {id:3,heading:`Do You want to speack to with db?`,content:'Click here to Book an appointment',image:heroImage},
    //     {id:4,heading:`Corporate Speaking Engagement/Training`,content:`invite DB to speak at your retreats/corporate events`,image:heroImage},
    //     ]
    const { "axiosdata":sectioncCardInfo,axioserrorMessage,isaxiosError}=useAxiosGet('https://db-adebayo-portfolio-backend.herokuapp.com/api/get_all_events/')

    return (


           <>
                {/* <!-- start of section_c --> */}
                <div className="section_c ">
                    <h2 className="section_heading">HOW I CAN HELP YOU</h2>
                    
            
                    <section className="section_c__card_container" 
                    
                    >

                        {/* <!-- start section_c__card first card --> */}
                        {
                            sectioncCardInfo.filter(({is_how_can_help})=>is_how_can_help==true).map(({id,event_name,form_message,event_photo})=>{

                                return (
                                <motion.div 
                                style={{'cursor':"pointer"}}
                                whileHover={{scale:1.1}}  whileTap={{scale:1}}
                                className="section_c__card" key={id}
                                onClick={(e)=>history.push(`/registration/${id}`)}
                                
                                >
                                    
                                    <div className="section_c_card__image_container">
                                        <img src={event_photo} alt="" />
                                    </div>
                                    <h2 className="section_c__card__headText">{event_name}</h2>
                                    <p>{form_message}</p>
                                </motion.div>
                                )
                            })
                        }

                        {/* <!-- end section_c__card first card --> */}


                    </section>
                </div>
                {/* <!-- end of section_c --> */}
           </>
    )
}

export default HowCanIHElp