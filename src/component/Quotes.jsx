import hero_image from '../public/wearing_native.jpg'


const Quotes =()=>{
    return (
        <div className="testimonials">

        <h2 className="section_g_headText small_headingCenter">Quotes OF the Day</h2>

        <div className="testimonials_card_list">
                
        <div className="testimonial__card">
        <p className="testimonials__card__content">
        <i class="fas fa-quote-left" style={{paddingRight:".8rem",color:'#2f3d71'}}></i> 
        The Mind of buisness really was the medicine that i actually neede to get my start up Running!!
        <i class="fas fa-quote-right" style={{paddingLeft:".8rem",color:'#2f3d71'}}></i>
        </p>


        <img className="testimonials__card__image" src={hero_image} alt="" />


        <p className="testimonials__card_author">Lorem, ipsum.</p>
        </div>                        


        </div>
        </div>
    )
}

export default Quotes