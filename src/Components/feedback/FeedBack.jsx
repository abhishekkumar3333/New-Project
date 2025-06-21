import React from 'react'
import { FaStar } from "react-icons/fa";
import img4 from "../../assets/image4.webp";
import img5 from "../../assets/testi-8-2.webp";
import img6 from "../../assets/testi-8-1.webp"
import { BiSolidRightArrow } from "react-icons/bi";
const FeedBack = () => {
    return (
        <>
            <section className='feedback'>
                <div className="container">
                    <div className="top-heading">
                        <p className="top-para">
                            Customers Feedbacks
                        </p>
                        <h2>What They’re Saying</h2>
                    </div>
                    <div className="outer-box">
   <div className="ratings">
                        <div className="inners-content">
                            <div className="star">
                                <ul className='start'>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                </ul>
                            </div>
                            <p>I was impresed by the company services, lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.</p>
                            <div className="users">
                                <img src={img4} alt="" />
                               <span className='user-name'>
                                    Christine Eve<br></br>
                                    <span className='user-info'>Customers</span>
                                </span>
                            </div>
                        </div>
                    </div>
                     <div className="ratings">
                        <div className="inners-content">
                            <div className="star">
                                <ul className='start'>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                </ul>
                            </div>
                            <p>I was impresed by the company services, lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.</p>
                            <div className="users">
                                <img src={img5} alt="" />
                                <span className='user-name'>
                                    Christine Eve<br></br>
                                    <span className='user-info'>Customers</span>
                                </span>
                            </div>
                        </div>
                    </div>
                     <div className="ratings">
                        <div className="inners-content">
                            <div className="star">
                                <ul className='start'>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                    <li>  <FaStar /></li>
                                </ul>
                            </div>
                            <p>I was impresed by the company services, lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.</p>
                            <div className="users">
                                <img src={img6} alt="" />
                                <span className='user-name'>
                                    Christine Eve<br></br>
                                    <span className='user-info'>Customers</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                 
                </div>
                <div className="videos-section">
                    <div className="background-images">
                        <div className="background-content">
                            <h2>Mission is to Protect Your Business & More</h2>
                            <button className='play-btn'><BiSolidRightArrow /></button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default FeedBack