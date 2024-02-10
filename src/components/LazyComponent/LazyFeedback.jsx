import React from 'react'
import "./lazyfeedbackstyles.css"

const LazyFeedback = ({minHeight}) => {
  return (
    <div className={`w-full relative `} style={{height: minHeight}}>
      <img src="/loaderbackground.webp" alt="No Data..." className={`loader h-full`}/>
      <div className={`effect h-full`}></div>
    </div>
  )
}

export default LazyFeedback
