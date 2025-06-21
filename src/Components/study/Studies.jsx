import React from 'react'
import img1 from "../../assets/project-8-1.webp"
import img2 from "../../assets/project-8-3.webp"
import img3 from "../../assets/project-8-4.webp"
import img4 from "../../assets/project-8-2.webp"
const Studies = () => {
  return (
   <>
   <section className='study-info'>
<div className="container">
    
    <div className="top-heading">
        <p className="top-para">
            Recent Cases
        </p>
        <h2>New Case Studies</h2>
    </div>
    <div className="rows">
    <div className="bussines-info">
        <div className="imge-content">
            <img src={img1} alt="" />
            <h2 className='bussiness'>Business
											Growth</h2>
        </div>
    </div>
     <div className="bussines-info">
        <div className="imge-content">
             <img src={img2} alt="" />
            <h2 className='bussiness'>Business
											Growth</h2>
        </div>
    </div>
     <div className="bussines-info">
        <div className="imge-content">
             <img src={img3} alt="" />
            <h2 className='bussiness'>Business
											Growth</h2>
        </div>
    </div>
     <div className="bussines-info">
        <div className="imge-content">
             <img src={img4} alt="" />
            <h2 className='bussiness'>Business
											Growth</h2>
        </div>
    </div>
    </div>
</div>
   </section>
   </>
  )
}

export default Studies