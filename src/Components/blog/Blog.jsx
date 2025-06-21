import React from 'react'
import img1 from "../../assets/blog-8-1.webp"
import img2 from "../../assets/blog-8-2.webp"
import img3 from "../../assets/blog-8-3.webp"
import { FaRegUserCircle } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

const Blog = () => {
    return (
        <>
            <section className='blog-section'>
                <div className="container">
                    <div className="top-heading">
                        <p className="top-para">
                            From the Blog
                        </p>
                        <h2>News & Articles</h2>
                    </div>
                    <div className="covers">

                        <div className="inor">
                            <div className="fist-col">
                                <img src={img1} alt="" />
                                <div className="paragrapgh">
                                    <button className='date'>sep 16</button>
                                    <div className="innere-text">
                                        <h4>Made two Companies Stronger than Ever</h4>
                                        <p>Lorem ipsum dolor sit amet, conse elit sed do eiusm od tempor ut labore.</p>
                                        <div className="admin-coment">
                                            <div className="admin">
                                                <FaRegUserCircle />
                                                <span>by Admin</span>
                                            </div>
                                            <div className="admin-comet">
                                                <div className="coments">
                                                    <FaComments />
                                                    <span>2 comments</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>



                        <div className="inor">
                            <div className="fist-col">
                                <img src={img2} alt="" />
                                <div className="paragrapgh">
                                    <button className='date'>sep 16</button>
                                    <div className="innere-text">
                                        <h4>Made two Companies Stronger than Ever</h4>
                                        <p>Lorem ipsum dolor sit amet, conse elit sed do eiusm od tempor ut labore.</p>
                                        <div className="admin-coment">
                                            <div className="admin">
                                                <FaRegUserCircle />
                                                <span>by Admin</span>
                                            </div>
                                            <div className="admin-comet">
                                                <div className="coments">
                                                    <FaComments />
                                                    <span>2 comments</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="inor">
                            <div className="fist-col">
                                <img src={img3} alt="" />
                                <div className="paragrapgh">
                                    <button className='date'>sep 16</button>
                                    <div className="innere-text">
                                        <h4>Made two Companies Stronger than Ever</h4>
                                        <p>Lorem ipsum dolor sit amet, conse elit sed do eiusm od tempor ut labore.</p>
                                        <div className="admin-coment">
                                            <div className="admin">
                                                <FaRegUserCircle />
                                                <span>by Admin</span>
                                            </div>
                                            <div className="admin-comet">
                                                <div className="coments">
                                                    <FaComments />
                                                    <span>2 comments</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Blog