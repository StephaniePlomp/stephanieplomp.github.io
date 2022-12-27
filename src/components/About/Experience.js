import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'

export const Experience = () => {


  return (
    <>
      <div className="about-content">        
        <div className='resume-line'>
          <p className='resume-title'>Court Clerk</p>
          <p className='resume-year'>July 2020 - July 2021</p>
        </div>
        <div className='resume-line work'>
          <p className='resume-institute'>Administrative High Court</p>
          <p className='resume-location'>Utrecht, the Netherlands</p>
        </div>

        <ul className='resume-list'>
          <p>
            <li>Scheduled and coordinated trials and other court events</li>
            <li>Composed non-routine correspondence</li>
            <li>Completed subpoenas, writs or other related legal documents</li>
            <li>Requested and provided information from/to appellants, lawyers and judges</li>
          </p>
        </ul>
        <hr className='resume-break' />
     <div className='resume-line'>
          <p className='resume-title'>Tax collector/assessor</p>
          <p className='resume-year'>Jan 2020 - July 2020</p>
        </div>
        <div className='resume-line work'>
          <p className='resume-institute'>Involon</p>
          <p className='resume-location'>Wijchen, the Netherlands</p>
        </div>
   
        <ul className='resume-list'>
          <p>
            <li>Collected and processed property tax data</li>
            <li>Negotiated settlements for property tax assessment appeals</li>
            <li>Prepared judgments on property tax assessment appeals and issued value advice</li>

          </p>
        </ul>
        <hr className='resume-break' />
      <div className='resume-line'>
              <p className='resume-title'>Sales Associate</p>
              <p className='resume-year'>Aug 2012 - Dec 2019</p>
            </div>
        <div className='resume-line work'>
          <p className='resume-institute'>Topshelf/Sportsworld</p>
          <p className='resume-location'>Leerdam, the Netherlands</p>
        </div>
      
        <ul className='resume-list'>
          <p>
            <li>Maintained and operated cash registers</li>
            <li>Maintained the sales floor by restocking shelves, updating pricing information and completing inventory management tasks</li>
            <li>Provided product and brand knowledge and differentiated customer service by anticipating customer needs</li>
          </p>
        </ul>
        <hr className='resume-break' />
      </div>
    </>
  )
}