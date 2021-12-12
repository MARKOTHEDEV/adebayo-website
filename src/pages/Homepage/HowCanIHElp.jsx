import image2 from '../../public/Image 4.jpg'
import  heroImage from '../../public/image1.jpg'

const HowCanIHElp = ()=>{

    const sectioncCardInfo = [
        {id:3,heading:`Do You want to speak to with db?`,
        content:'Click here to Book an appointment',
        image:heroImage,url:"https://calendly.com/dbadebayo/corporate-speaking-engagement-training"},
        {id:4,heading:`Do you want to speak with DB`,content:`invite DB to speak at your retreats/corporate events`,image:image2,url:'https://calendly.com/dbadebayo/speak-with-db-adebayo'},
        ]

    return (


           <>
                {/* <!-- start of section_c --> */}
                <div className="section_c ">
                    <h2 className="section_heading">HOW I CAN HELP YOU</h2>
                    
            
                    <section className="section_c__card_container" 
                    
                    >

                        {/* <!-- start section_c__card first card --> */}
                        {
                            sectioncCardInfo.map(({id,heading,url,image})=>{

                                return (
                                <div 
                                style={{'cursor':"pointer"}}
                                // whileHover={{scale:1.1}}  whileTap={{scale:1}}
                                className="section_c__card" key={id}
                                // onClick={(e)=>history.push(`/registration/${id}`)}
                                
                                >
                                    
                                    <div className="section_c_card__image_container">
                                        <img src={image} alt="" />
                                    </div>
                                    <h2 className="section_c__card__headText">{heading}</h2>
                                    {/* <p>{form_message}</p> */}
                                    <a href={url} style={{color:"blue"}}>Click here  to book an appointment with db</a>
                                </div>
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