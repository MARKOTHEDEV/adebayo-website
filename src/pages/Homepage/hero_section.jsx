import  heroImage from '../../public/hero_pics.jpg'

const HeroSection = ()=>{


    return (
        <>
            <div className="hero_section">
                {/* <!-- start of hero_section__container --> */}
                <div className="hero_section__container" >
                    <div className="hero_section__container_image">
                        <div className="blur_box one"></div>
                        <div className="blur_box two"></div>
                        <div className="blur_box three"></div>
                        <img src={heroImage} alt="" />
                    </div>

                    <div className="hero_section__container_content">
                        <p>My assignment is to help build successfull long lasting business
                            through entrepreneurial mind transformation.
                        </p>
                    
                        <div>
                            <h1>DB~Adebayo</h1>
                            <hr className="h1line"/></div>
                        </div>
                    
                        
                </div>
                {/* <!-- end of hero_section__container --> */}
            </div>
          <br /><br /><br /><br />

    </>

    )
}

export default HeroSection