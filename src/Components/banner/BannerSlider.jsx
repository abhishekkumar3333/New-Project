import React from 'react'

export default function BannerSlider() {

  return (
    <>
      <section className='banner'>
        <div className="container">
          <div className="inner-bg">
            <div className="content">
              <p>Helping businesses since 1987</p>
              <h2>Reach the<br></br>
                 Limits with<br></br>
                Consulting<br></br>
                Agency.</h2>
            </div>
            <div className="get-contact row-box">
              <button className='btn-blue'>case studies</button>
              <button className='btn-yellow'>contact now</button>
            </div>
          </div>
        </div>
        <div className="bg-yellow  banner-bottom">
          <div className="container">
            <div className="row">
              <h4>Linoor Finance & Consultation HTML Template</h4>
              <button className='btn-blue purchase'>purchase now</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
