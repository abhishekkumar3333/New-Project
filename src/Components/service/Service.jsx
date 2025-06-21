import React from 'react'
import img2 from "../../assets/headhunter_6597025.png";
import img3 from "../../assets/image5.webp"
const Service = () => {
    return (
        <>
            <section className='service-list'>
                <div className="container">
                    <div className="top-heading">
                        <p>Our Services List</p>
                        <h2>What We’re Offering
                        </h2>
                    </div>
                    <div className="services-providing">
                        <div className="service-card">
                            <div className="inner-service-card">
                                <h3>Consumer <br />
                                    Products</h3>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="inner-service-card">
                                <h3>Audit <br />
                                    Marketing</h3>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="inner-service-card">
                                <h3>Advice  <br />
                                    Bankings</h3>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="inner-service-card">
                                <h3>Marketing  <br />
                                    Rules</h3>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="outer">
                    <div className="images-section">
                        <img src={img3} alt="" />
                    </div>
                    <div className="descriptions">
                        <p className='top-para'>Why Choose Us</p>
                        <h2>The Largest Business Experts</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className="customer">
                            <span>01</span>
                            <div>
                                <h4>Customer Experience</h4>
                                <p className="review">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Dolor sit amet, adipsicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="customer customer-two">
                            <span>02</span>
                            <div>
                                <h4>Customer Experience</h4>
                                <p className="review">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Dolor sit amet, adipsicing elit.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Service;