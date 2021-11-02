import Section_c from "./HowCanIHElp";
import  heroImage from '../../public/hero_pics.jpg';
import HeroSection from "./hero_section";
import MindOfABuisnessSection from "./MindOfABuisnessSection";
import TestingSwiper from "../test";
import HowCanIHElp from "./HowCanIHElp";
import HomePageEvents from "./homePageEvents";
import Resources from "../../component/resources";
import Gallery from "../../component/Gallery";
import Testimonials from "../../component/Testimonials";
import { Link } from "react-router-dom";

const HomePage = ()=>{

    return (



<>

        {/* <TestingSwiper /> */}

            
        <HeroSection />
         
        <MindOfABuisnessSection />
        <HowCanIHElp />

        <HomePageEvents />


        <Resources />

        <Gallery />

        <Testimonials />


            <br /><br/>
            <div className="about_me ">

                <div className="hero_section">
                    <div className=" hero_section__container ">
                        <div className="hero_section__container_image">
                            <div className="blur_box one"></div>
                            <div className="blur_box two"></div>
                            <div className="blur_box three"></div>
                            <img src={heroImage} alt="" />
                        </div>
        
                        <div className="hero_section__container_content">
                            <p>
                            Debo Adebayo, a Fellow of the  Business Process Management Institute (Nigeria). He is also an Accountant by training and a seasoned management consultant with years of experience in Business Process Management, Enterprise Transformation, and Performance Management. He is a business strategist as well as a coach who believes continuous learning is required for relevance
                            <br /><br />

                            <Link to='/about' className="linear_text" style={{borderBottom:"1px solid black"}}>Read More</Link>
                    
                            </p>
                        
                            <div>
                                <h1>About DB ~ Adebayo</h1>
                                {/* <!-- <hr className="h1line"></div> --> */}
                            </div>
                        
                </div>
                
                        
                </div>
            </div>

        
        
            </div>
        
        


    </>






        
    )
}


export default HomePage