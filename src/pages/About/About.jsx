import  heroImage from '../../public/hero_pics.jpg'



const About = ()=>{
    

    return (

        <div  className="aboutHeroCover" style={{color:'white'}}>
 <section className="mh-home image-bg home-2-img" id="mh-home" >
            <div className="img-foverlay img-color-overlay">
                <div className="container">
                    <div className="row section-separator xs-column-reverse vertical-middle-content home-padding" style={{zIndex:5,position:'relative'}}>
                        <div className="col-sm-6" >
                            <div className="mh-header-info" >
                                <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                    <span>Hello I'm</span>
                                </div>
                                
                                <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s" >DB AdeBayo</h2>
                                <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">Ceo Tomation Solution</h4>
                                
                                <ul>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><i className="fa fa-envelope"></i><a href="mailto:">getemail@email.com</a></li>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><i className="fa fa-phone"></i><a href="callto:">+12 986 987 7867</a></li>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><i className="fa fa-map-marker"></i><address>37, Pollsatnd, New York, United State</address></li>
                                </ul>
                                
                                <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                                    <li><a href="#" style={{color:'white'}}><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" style={{color:'white'}}><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" style={{color:'white'}}><i className="fa fa-github"></i></a></li>
                                    <li><a href="#" style={{color:'white'}}><i className="fa fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                                <div className="img-border">
                                    <img src={heroImage} alt=""  className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
      
        <section className="mh-about" id="mh-about" style={{zIndex:5,position:'relative'}}>
            <div className="container">
                <div className="row section-separator">
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                            <img src={heroImage} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-about-inner" style={{textAlign:'center'}}>
                            <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About AdeBayo</h2>
                            <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                           Debo Adebayo, a Fellow of the  Business Process Management Institute (Nigeria). He is also an Accountant by training and a seasoned management consultant with years of experience in Business Process Management, Enterprise Transformation, and Performance Management. He is a business strategist as well as a coach who believes continuous learning is required for relevance. </p>

                           <p className="wow">
                           He has quantum experience in business management, financial advisory services, and human resources management. He consults for companies in sectors like; banking, insurance, pharmaceuticals, oil and gas, manufacturing, IT, Educational etc. He is currently the CEO of SPNS Consulting, a leading consulting firm in the areas of business process and performance management. He is presently the Vice President of the Business Process Management Institute.
                           </p>
                           <p className="wow">
                           Debo also serves on the board of various organizations such as, Savvy HR, Tomation (A process automation firm), Bond Pharmaceuticals, amongst others.
                           </p>
                           <p className="wow">
                           Debo speaks at business conferences, workshops, and writes for business publications. He is the publisher of a research-based magazine; Business Process & Performance Review, a publication that supplies CEOs, and other business decision makers insights aimed at aiding their business decision making. He is the promoter of the business process excellence awards, the premiere awards that focuses on recognizing organizations with the best set of business processes. 
                           </p>

                           <p className="wow">
Debo is a member of various relevant professional bodies among them are; Business Process Management Institute of Nigeria, Nigerian Institute of Management (Chartered), Nigeria Institute of Management Consultant, National Institute of Marketing of Nigeria, Nigeria Institute of Training and Development, Institute of Debt and Portfolio Management.
                           </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mh-about-tag mh-about-tag-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                            <p>Professional Body Membersship:</p>
                            <ul>
                                <li><span>Nigeria Institute of Management </span></li>
                                <li><span> National Institute of Marketing of Nigeria </span></li>
                                <li><span>Business Process Management Institute</span></li>
                                <li><span>Nigeria Institute of Training & Development </span></li>
                                <li><span>Debt & Portfolio Management Institute </span></li>
                                <li><span> Nigeria Institute of Management Consultant </span></li>
                                <li><span>Association of Business Process Management Professionals </span></li>
                                <li><span>Chartered Institute of Personnel Management-In View</span></li>

                                <br /><br />
                                <p>Portfolios:</p>
                                <li><span>Enterprice Metric Suite Solutions LLC, USA-Business Director, EMEA</span></li>
                                <li><span>Enterprise Metric Suite Solutions Nigeria- CEO</span></li>
                                <li><span>Bond Pharmaceuticals Limited- Director</span></li>
                                <li><span>Business Process Management Institute-Vice President </span></li>
                                <li><span>DB Adebayo The Mind of Business Incorp-Founder/President</span></li>
                                <li><span>Association of Professional Bodies of Nigeria-Past Secretary General</span></li>
                                <li><span>Producer/Host- Mind of Business with DB Adebayo TV Show</span></li>
                               
                                {/* <li><span>Disaster Recovery</span></li> --> */}
                            </ul>
                            {/* <!-- <a href="#" className="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">Downlaod CV <i className="fa fa-download"></i></a> --> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        

        </div>

    )
}


export default About