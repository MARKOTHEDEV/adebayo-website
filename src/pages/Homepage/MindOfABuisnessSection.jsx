import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

const MindOfABuisnessSection = ()=>{
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE4yb0yAwSCS5bF7MzRueiw&maxResults=10&order=date&type=video&key=AIzaSyC25rMPK8tc3iIeAigQtbtcDvfOKviD3TI`
    const [notMainVideos,setNotMainVideos] = useState([])
    
    // useEffect(()=>{

    //     fetch(youtubeUrl)
    //     .then(data=>data.json())
    //     .then(data=>{
    //         console.log(data)
    //         setNotMainVideos(data.items.map((eachData)=>{
    //             return {'Imageurl':eachData.snippet.thumbnails.high.url,'videoID':eachData.id.videoId}
    //         }))
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
                                                    
                            {/* <iframe className="section_b__image_container___main_image"
                            src={`https://www.youtube.com/embed/${'H7krcuw62yc'}`}>
                            </iframe>  */}

                            <iframe className="section_b__image_container___main_image" src="https://www.youtube.com/embed/H7krcuw62yc?rel=0" 
                            title="Db AdeBayo" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             >

                            </iframe>
                            {/* <!-- <img className="section_b__image_container___main_image" src="./images/wearing_native.jpg" alt=""> --> */}
                        
                        </div>

                        {/* <!-- <div className="dot_container">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div> --> */}



                    <div className="conatainer_for_not_main_images">
                    {/* https://i.ytimg.com/vi/H7krcuw62yc/hqdefault.jpg */}
                        

{
notMainVideos.length !=0?
notMainVideos.slice(0,3).map(({Imageurl,videoID},index)=>(
<a href={`https://www.youtube.com/watch?v=${videoID}`} target="_blank"  className="section_b__image_container__not_main_image" 
                        style={{cursor:"pointer"}} key={index}>
                            <img src={Imageurl}  style={{'width':"100%","height":"100%"}} />
</a>
))

:""
}
    
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