
import image2 from '../../public/Image 2.jpg'
import  heroImage from '../../public/hero_pics.jpg'

const HowCanIHElp = ()=>{

    const sectioncCardInfo = [
        {id:0,heading:`DB Adebayo Direct ${<br />} (One-On-One with DB)`,content:'Brief Based-Book for a paid engagement appointment with db via calendly',image:heroImage},
        {id:0,heading:`Corporate Speaking  ${<br />} Engagement`,content:`invite DB to speak at your retreats/corporate events`,image:heroImage},
        {id:0,heading:`Training Engagement`,content:'Brief Based-Book for a paid engagement appointment with db via calendly ',image:heroImage},
    ]

    return (


           <>
                {/* <!-- start of section_c --> */}
                <div className="section_c">
                    <h2 className="section_c__headText linear_text">HOW I CAN HELP YOU</h2>
                    
            
                    <section className="section_c__card_container">

                        {/* <!-- start section_c__card first card --> */}
                        {
                            sectioncCardInfo.map(({id,heading,content,image})=>{

                                return (
                                <div className="section_c__card" key={id}>
                                    <div className="section_c_card__image_container">
                                        <img src={image} alt="" />
                                    </div>
                                    <h2 className="section_c__card__headText">{heading}</h2>
                                    <p>{content}</p>
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