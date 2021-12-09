import  heroImage from '../../public/hero_pics.jpg'
import  nativePics from '../../public/wearing_native.jpg'
import  secImage from '../../public/Image 5.jpg'

import adeVideo from '../../public/adeVid.mp4'
import Carousel from 'react-elastic-carousel'

const HeroSection = ()=>{


    return (
        <>
            <div className="hero_section" style={{position:'relative'}}>
           
        {/* <Carousel enableAutoPlay autoPlaySpeed={1500} showArrows={false} 
        className="slider_container"
        style={{position:"absolute",top:0,left:0,border:"1px solid red",height:"100%",width:'100%'}}
        >
             
             
              <img src={secImage} alt="" style={{height:"100%",width:"100vw",}} />
              <img src={nativePics} alt="" style={{height:"100%",width:"100vw",}} />
        </ Carousel> */}
              
       
                {/* <!-- start of hero_section__container --> */}
                <div className="hero_section__container" >
   
                    <div className="hero_section__container_image">
                        <div className="blur_box one"></div>
                        <div className="blur_box two"></div>
                        <div className="blur_box three"></div>
                        <img src={heroImage} alt="" />
                        <h1 style={{textAlign:"center"}}>DB~Adebayo</h1>
        
                    </div>

                    <div className="hero_section__container_content" style={{color:'white',position:"relative",zIndex:10}} >
                        <p>My assignment is to help build successfull long lasting business
                            through entrepreneurial mind transformation.
                        </p>
                    
                        <div>
                            <h1>
                                {/* DB~Adebayo */}
                                </h1>
                            <hr className="h1line"/></div>
                        </div>

                        
                </div>
                {/* <!-- end of hero_section__container --> */}

            </div>
          {/* <br /><br /><br /><br /> */}

              
     
    </>

    )
}

export default HeroSection