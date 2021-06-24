import React from 'react'

const FooterLayout = () => {
    return (
        <>

        {/* <!-- Newsletter --> */}

<div className="newsletter">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                    <div className="newsletter_title_container">
                        <div className="newsletter_icon"><img src="images/send.png" alt=""/></div>
                        <div className="newsletter_title">Sign up for Newsletter</div>
                        <div className="newsletter_text">
                            <p>...and receive %20 coupon for first shopping.</p>
                        </div>
                    </div>
                    <div className="newsletter_content clearfix">
                        <form action="#" className="newsletter_form">
                            <input type="email" className="newsletter_input" required="required" placeholder="Enter your email address"/>
                            <button className="newsletter_button">Subscribe</button>
                        </form>
                        <div className="newsletter_unsubscribe_link"><a href="#">unsubscribe</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                    {/* <!-- Footer --> */}

<footer className="footer">
    <div className="container">
        <div className="row">

            <div className="col-lg-3 footer_col">
                <div className="footer_column footer_contact">
                    <div className="logo_container">
                        <div className="logo"><a href="#">OneTech</a></div>
                    </div>
                    <div className="footer_title">Got Question? Call Us 24/7</div>
                    <div className="footer_phone">+38 068 005 3570</div>
                    <div className="footer_contact_text">
                        <p>17 Princess Road, London</p>
                        <p>Grester London NW18JR, UK</p>
                    </div>
                    <div className="footer_social">
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fab fa-google"></i></a></li>
                            <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-2 offset-lg-2">
                <div className="footer_column">
                    <div className="footer_title">Find it Fast</div>
                    <ul className="footer_list">
                        <li><a href="#">Computers & Laptops</a></li>
                        <li><a href="#">Cameras & Photos</a></li>
                        <li><a href="#">Hardware</a></li>
                        <li><a href="#">Smartphones & Tablets</a></li>
                        <li><a href="#">TV & Audio</a></li>
                    </ul>
                    <div className="footer_subtitle">Gadgets</div>
                    <ul className="footer_list">
                        <li><a href="#">Car Electronics</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-2">
                <div className="footer_column">
                    <ul className="footer_list footer_list_2">
                        <li><a href="#">Video Games & Consoles</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Cameras & Photos</a></li>
                        <li><a href="#">Hardware</a></li>
                        <li><a href="#">Computers & Laptops</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-2">
                <div className="footer_column">
                    <div className="footer_title">Customer Care</div>
                    <ul className="footer_list">
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">Wish List</a></li>
                        <li><a href="#">Customer Services</a></li>
                        <li><a href="#">Returns / Exchange</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Product Support</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</footer>
        </>
    )
}

export default FooterLayout
