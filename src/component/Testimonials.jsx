import hero_image from '../public/wearing_native.jpg'

import Carousel from 'react-elastic-carousel'

const Testimonials =()=>{

    const dummyData = [
        {id:0,name:"matt",content:'wowjrjfrjgrjgirjgrgrg'},
        {id:1,name:"locke",content:'Very Nice But Cool'},
        {id:2,name:"zipping",content:'Just Some Dummy Daata'},
        {id:2,name:"zipping",content:'Just Some Dummy Daata'},
    ]

    return (

        <div className="testimonials">

        <h2 className="section_g_headText small_headingCenter">Testimonials</h2>

        <div className="testimonials_card_list">
        <Carousel enableAutoPlay autoPlaySpeed={1500} showArrows={false}>

                {
                    dummyData.map(({id,name,content})=>(
                        <div className="testimonial__card">
                        <p className="testimonials__card__content">
                        The Mind of buisness really was the medicine that i actually neede to get my start up Running!!
                        </p>
            
            
                        <img className="testimonials__card__image" src={hero_image} alt="" />
            
            
                        <p className="testimonials__card_author">Lorem, ipsum.</p>
                        </div>                        
                    ))
                }
        </ Carousel>
        {/* 
        <!-- <div className="testimonial__card">
        <p className="testimonials__card__content">
        The Mind of buisness really was the medicine that i actually neede to get my start up Running!!
        </p>


        <img className="testimonials__card__image" src="./images/wearing_native.jpg" alt="">


        <p className="testimonials__card_author">Lorem, ipsum.</p>
        </div> --> */}

        </div>
        </div>
    )
}

export default Testimonials