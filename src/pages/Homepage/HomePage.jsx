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
import Quotes from "../../component/Quotes"
import Skits from "../../component/Skits";

const HomePage = ()=>{

    return (



<>

        {/* <TestingSwiper /> */}

            
        <HeroSection />

            <br /><br />
        <MindOfABuisnessSection />
        <HomePageEvents /><br /><br /><br /><br /><br />
        
        <div className="flex_components_for_skit_and_howcanIhelp_u" >
            <div className="skits_section" >
                <h2 className="section_heading">Skits</h2>
                <div className="skit_card_container">


                <iframe className="skit_card" src="https://www.youtube.com/embed/z2noEjj-MX4?rel=0" 
                            title="Db AdeBayo" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;allowfullscreen"
            allowfullscreen="true"
                        >

                            </iframe>

                            <iframe className="skit_card" src="https://www.youtube.com/embed/yOVNQ-mhxSY?rel=0" 
                            title="Db AdeBayo" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true">

                            </iframe>                            <iframe className="skit_card" src="https://www.youtube.com/embed/eP4mxFQU0xk?rel=0" 
                            title="Db AdeBayo" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
                            >

                            </iframe>  
                 <iframe className="skit_card" src="https://www.youtube.com/embed/Hte2NtU8-hQ?rel=0" 
                            title="Db AdeBayo" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
                           
                           >

                            </iframe>


                            
<iframe className="skit_card" src="https://www.youtube.com/embed/aaEGlTjCRiE?rel=0" 
title="Db AdeBayo" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen="true"
></iframe>

<iframe className="skit_card" src="https://www.youtube.com/embed/O0x_9WPS7vY?rel=0" 
title="Db AdeBayo" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen="true"
></iframe>

                            {/*  */}
                    {/* <div className="skit_card"></div> */}
                </div>
            </div>


        <HowCanIHElp />
        </div>



        {/* <Resources /> */}
        
        {/* <Skits /> */}

        {/* <Quotes /> */}
        <Gallery />
        {/* <Testimonials /> */}


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