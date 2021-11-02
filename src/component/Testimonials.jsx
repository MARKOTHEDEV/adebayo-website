import hero_image from '../public/wearing_native.jpg'


const Testimonials =()=>{

    return (

        <div className="testimonials">

        <h2 className="section_g_headText small_headingCenter">Testimonials</h2>

        <div className="testimonials_card_list">

        <div className="testimonial__card">
        <p className="testimonials__card__content">
        The Mind of buisness really was the medicine that i actually neede to get my start up Running!!
        </p>


        <img className="testimonials__card__image" src={hero_image} alt="" />


        <p className="testimonials__card_author">Lorem, ipsum.</p>
        </div>
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