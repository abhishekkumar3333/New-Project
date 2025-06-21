import React from 'react'
import img1 from "../../assets/about-11-1-1.webp"
import img2 from "../../assets/headhunter_6597025-removebg-preview.png"
import img3 from "../../assets/image2.webp"
import img4 from "../../assets/image4.webp"
const About = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="services ">
                        <div className="service-profiles">
                            
                            <img src={img1} alt="Service" />

                            <div className="nested-pic">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                        <div className="service-features">
                            <p>Our Company Introduction</p>
                            <h2>We Ensure Only<br></br>
                                Quality Consulting<br></br>
                                Services for our Clients<br></br>
                            </h2>
                            <p className='summary'>Quis aliqua sunt nisi consectetur anim ullamco ea deserunt non<br></br>
                                voluptate nisi sit elit exercitation eu Lorem. Mollit occaecat nisi<br></br>
                                occaecat fugiat ullamco.</p>
                            <div className="quality">
                                <div className="consulators">
                                    <img src={img2} alt="" />
                                    <p className='titile'>Qualified <br />
                                        Consultants</p>
                                </div>
                                <div className="trusted">
                                    <img src={img2} alt="Service" />
                                    <p className='titile'>Trusted <br />
                                        Since 1987
                                    </p>
                                </div>
                            </div>
                            <div>
                                <span className="about-even">Finance & Consulting</span>
                            </div>
                            <div className="progress-bar">
                                <span
                                    className="count"
                                    data-percent="77%"
                                    style={{ width: "77%" }}
                                >
                                    <b>77%</b>
                                </span>
                            </div>

                            <div className="users">
                                <img src={img4} alt="" />
                                <p className='user-name'>
                                    Christine Eve<br></br>
                                    <span className='user-info'>Co Founder & Consultant</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About;