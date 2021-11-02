import { useEffect } from "react";

const MindOfABuisnessSection = ()=>{
    // const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE4yb0yAwSCS5bF7MzRueiw&maxResults=10&order=date&type=video&key=AIzaSyC25rMPK8tc3iIeAigQtbtcDvfOKviD3TI`
    // useEffect(()=>{

    //     fetch(youtubeUrl)
    //     .then(data=>data.json())
    //     .then(data=>{
    //         console.log(data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })

    // },[])

    return (

        <>
              {/* <!-- start of section_b --> */}
              <div className="section_b" >
                    {/* <!-- start of section_b__image_container --> */}
                    <div className="section_b__image_container" >
                        
                        <div className="main_image_conainter">
                                                    
                            <iframe className="section_b__image_container___main_image"
                            src={`https://www.youtube.com/embed/${'blh2NomWQ3w'}`}>
                            </iframe> 
                            {/* <!-- <img className="section_b__image_container___main_image" src="./images/wearing_native.jpg" alt=""> --> */}
                        
                        </div>

                        {/* <!-- <div className="dot_container">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div> --> */}

                    <div className="conatainer_for_not_main_images">
                        <div  className="section_b__image_container__not_main_image"></div>
                        <div  className="section_b__image_container__not_main_image"></div>
                        <div  className="section_b__image_container__not_main_image"></div>
    
                    </div>
                    </div>
                    {/* <!-- end of section_b__image_container --> */}

                    <div className="section_b__content_container">
                        <div className="horizontal_thick_line"></div>
                        <h2 className="section_b__content_container__headingtext" style={{color:'black'}}>
                            <span>THE</span>
                            <span>MIND </span>
                            <span>OF</span>
                            <span>BUSINESS</span>
                        </h2>
                        <p className="section_b__content_container__subtext" style={{color:'black'}}>with DB ~ Adebayo</p>
                        <p className="section_b__content_container__justtext">The Mind of Business with DB Adebayo is a televison
                            show designed to promote knowledge sharing among the 
                            community of entrepreneurs and careers
                            professionals for the development of transgeneration business and the attainment
                            of career leadership...
                        </p>
                    </div>
            </div>
            {/* <!-- end of section_b --> */}
        </>
    )
}


export default MindOfABuisnessSection