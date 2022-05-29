import React from 'react'
import { Bottom } from './style'

function SectionBottom() {
  return (
    <Bottom style={{backgroundImage:`url("/images/bg-bottom.png")`}}>
        <div className='container'>
           <div className='row justify-content-evenly py-5'>
               <div className='col-sm-8 col-md-5'>
                   <img className='img-fluid' src="/images/about.png" alt="aboutus img"/>
               </div>
               <div className='col-12 col-md-6 mt-5 mt-md-0'>
                 <h2 className='mb-0'>The place </h2>
                 <h1 style={{fontWeight:900}}>We call home</h1>
                 <p style={{fontWeight: 300}}>Makadi Heights is a town built over 3.4 million square meters planned for development, with an elevation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units. 
Envisioned as a comprehensive town.</p>
                  <div className='buttons d-flex justify-content-start'>
                    <button className='me-3'>Download Brochure</button>
                    <button>Show Master plan</button>
                  </div>
               </div>
           </div>
        </div>
    </Bottom>
  )
}

export default SectionBottom