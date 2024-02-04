import React, { useState } from 'react'

export default function LikeImage() {

  const [likeImageCounter, setLikeImageCounter] = useState(0);

  const handleLikeImageCount = ()=>{
    setLikeImageCounter(likeImageCounter+1);
  }

  return (
    <div>
      <button style={{backgroundColor:"yellowgreen",color:"black",fontSize:"16px"}} onClick={handleLikeImageCount}>Like Image : {likeImageCounter}</button>
    </div>
  )
}