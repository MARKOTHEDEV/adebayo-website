

const Footer =()=>{


    return (

        <footer>
        <br /><br /><br /><br /><br />
        {/* <!-- start of gooter container --> */}
        <div class="footer-container">
            {/* <!--  foooter nav pane --> */}
            <div class="footer-nav-pane">

                <div class="footer-logo ">
                    
                   
                </div>
           
                <div class="footer-navlinks">
                    <li><a href={"https://www.youtube.com/channel/UCE4yb0yAwSCS5bF7MzRueiw"}>DB-Adebayo TV</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">CONTACT</a></li>
                </div>
           
            </div>
            {/* <!-- end foooter nav pane --> */}

            {/* <!-- start of anyhting that has to do wit adreess plus social links --> */}
            
            <div class="footer-addresses">
                {/* <!-- start of building addresse info --> */}
                    <div class="building-addresse-info">

                        <div class="building_addresse_one">
                            <p class="building-addresse-info_text_thick">DB Adebayo</p>
                            <p>3886 Wellington Street</p>
                            <p>Ikeja,Lagos M9C 3J5</p>
                        </div>


                        <div class="building_addresse_two">
                            <p class="building-addresse-info_text_thick">
                                Contact Us (Central Office)
                            </p>
                            <p>P: 08162047348</p>
                            <p>M: ogechuwkumatthew@gmail.com</p>
                        </div>


                    </div>
                {/* <!-- end of building addresse info --> */}
                
                {/* <!-- start of social addresse info --> */}
                <div class="social-addresse-info">
                        <a href="" class="socials_links"><img src={"./images/facebook_logo.svg"} alt="" /></a>
                        <a href="" class="socials_links"><img src={"./images/youtube.svg"} alt="" /></a>
                        <a href="" class="socials_links"><img src={"./images/twitter_logo.svg"} alt="" /></a>
                        {/* <!-- <a href="" class="socials_links"><img src="./images/pinintrest.svg" alt=""></a> --> */}
                        <a href="" class="socials_links"><img src={"./images/instagram.svg"} alt="" /></a>
                </div>
                {/* <!-- end of social addresse info --> */}

            </div>
            
            {/* <!-- end of anyhting that has to do wit adreess plus social links --> */}


            

        </div>
        {/* <!-- end of gooter container --> */}
    </footer>
    
    )
}

export default Footer