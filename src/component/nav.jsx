import { useState } from "react"
import { Link } from "react-router-dom"

const Nav = ()=>{
    const [hamburger,Sethamburger] =useState(false);

    const toggleHam =()=>{
        hamburger == true?Sethamburger(false):Sethamburger(true)
    }
    return (
        <nav className='markoNav' style={{width:"100%"}}>
        <div className="markoNav-logo-wrapper" style={{border:"1px solid white",padding:".4rem",borderRadius:"10px"}}>
            <div className="logo">
                <p className="logo" style={{color: "white"}}>
                    <span className="bigtextLogo">DB</span>
                    <span className="mediumtextLogo">Adebayo</span>
                    <span className="smalltextLogo">The Mind of Business</span>
                </p>
            </div>

        </div>
        <div  className={`hamburger `} onClick={toggleHam} style={{color:'white'}}>
            
            {hamburger?<i className="fas fa-times"></i>: <i className="fas fa-bars"></i>}
            {/* <!--  --> */}
        </div>
       
        <div className={`navlinks_container ${hamburger==true? 'show':""}`} >
            <div className="navlink_group_a">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about' >About</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><a href="https://www.youtube.com/channel/UCE4yb0yAwSCS5bF7MzRueiw" target="https://www.youtube.com/channel/UCE4yb0yAwSCS5bF7MzRueiw">DB-Adebayo TV</a></li>
                {/* <li><Link to='/resources'>Resources</Link></li>     */}
                <li><a target={"_blank"} href="https://www.facebook.com/dbadebayo/"><i class="fab fa-facebook"></i></a></li>
                <li><a target={"_blank"} href="https://www.linkedin.com/in/db-adebayo-8809061a"><i class="fab fa-linkedin-in"></i>    </a></li>
                <li><a target={"_blank"} href="https://www.instagram.com/dbadebayo/"><i class="fab fa-instagram"></i></a></li>
            </div>

            <div className="navlink_group_b">
               <div> 

                   <Link to='/contact' className="btn nav_btn" style={{textDecoration:'none'}} >Contact Us</Link>
                   {/* <button >Contact Us</button> */}
                   {/* <!-- <i className="fas fa-search nav_search_icon"></i> --> */}
                </div>
                {/* <!-- please!! dont delete thi section it a quick fix!! --> */}
                <section></section>
            </div>
        </div>
    </nav>
    )
}

export default Nav