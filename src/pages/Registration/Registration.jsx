


const Registration =()=>{
   
   
    
    return (
        <div className="contact_container">

        
        <div className="contact__container_content">
            <h2>Registration</h2>
            <p>The event you about to Register for is goinh to blow your mind  by DB Adbayo</p>
        </div>

        <div className="contact_container_form" style={{padding:"3rem"}}>
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

                {/* <div className="form_group">
                   <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                </div> */}

                <button className="btn formBtn">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Registration