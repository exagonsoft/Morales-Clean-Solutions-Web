import React from 'react'
import "./lazyfeedbackstyles.css"

const LazyFeedback = ({minHeight}) => {
  return (
    <div className={`w-full relative`}>
      <img src="/loaderbackground.webp" alt="No Data..." className={`loader h-[${minHeight}]`} />
      <div className={`effect h-[${minHeight}]`}></div>
    </div>
  )
}

export default LazyFeedback
