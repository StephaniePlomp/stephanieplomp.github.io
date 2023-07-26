import React, { useRef } from 'react'

export const Education = () => {
  const ref = useRef(null);

  // const [height, setHeight] = useState(0);

  // useLayoutEffect(() => {
  //   setHeight(ref.current.clientHeight);
  //   document.documentElement.style.setProperty('--heightdiv', `${height}px`);
  // }, [height]);


  return (
    <>  
    <div className="about-content" ref={ref}>
        <div className='resume-line'>
    <p className='resume-title-edu'>Frontend Developer</p>
    <p className='resume-location'>Jersey City, New Jersey</p>
    </div>
    <div className='resume-line'>
    <p className='resume-institute'>Self-taught</p>
    <p className='resume-year'>Jan 2021 - Present</p>
    </div>
        <hr className='resume-break'/>
  
      <div className='resume-line'>
     <p className='resume-title-edu'>Bachelor of Laws (LLB)</p>
    <p className='resume-location'>Tilburg, the Netherlands</p>
    </div>
    <div className='resume-line'>
    <p className='resume-institute'>Fontys University</p>
    <p className='resume-year'>Sept 2013 - July 2019</p>
    </div>
    <hr className='resume-break'/>
    </div>
    </>
  )
}