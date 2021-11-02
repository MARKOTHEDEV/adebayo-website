


const Contact =()=>{

    return (
        <div className="contact_container">

        
        <div className="contact__container_content">
            <h2>Contact Us</h2>
            <p>Ready to take it to the next level? Let's talk about Your project or idea and find out 
                how we help your buisness grow.
                If You are looking for unique digital experiences that's 
                relatable to your users, drop us a line.</p>
        </div>

        <div className="contact_container_form">
            <form >

                <div className="form_group">
                    <input type="text" placeholder="Name" />
                </div>

                <div className="form_group">
                    <input type="email" placeholder="Email Addresse" />
                </div>
                <div className="form_group">
                    <input type="text" placeholder="Phone" />
                </div>

                <div className="form_group">
                   <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                </div>

                <button className="btn formBtn">Submit</button>
            </form>
        </div>
    </div>
    )
}


export default Contact