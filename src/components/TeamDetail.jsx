import React from 'react'
import { useParams } from 'react-router-dom';

export const TeamDetail = () => {
    const teamName=useParams().name;
  return (
   <div style={{textAlign:"center"}}>
        <h1>TEAM PLAYING.....{teamName}</h1>
    </div>
  )
}
