import React from 'react'
import { Link } from 'react-router-dom'

export const IplTems = () => {

    var teams=[
        {teamId:1,teamName:"Chennai Super Kings"},
        {teamId:2,teamName:"Mumbai Indians"},
        {teamId:3,teamName:"Royal Challengers Bangalore"},
        {teamId:4,teamName:"Kolkata Knight Riders"},
        {teamId:5,teamName:"Delhi Capitals"},
        {teamId:6,teamName:"Rajasthan Royals"},
        {teamId:7,teamName:"Sunrisers Hyderabad"},
        {teamId:8,teamName:"Punjab Kings"},
        {teamId:9,teamName:"Gujarat Titans"},
        {teamId:10,teamName:"Lucknow Super Giants"},

    ]
  return (
    <div style={{textAlign:'center'}}>
           <h1>IplTems</h1>
           {teams.map((team)=>{
            return <li>
                <Link to={`/teamdetail/${team.teamName}`}> {team.teamName} </Link>
            </li>
           })}
    </div>
  )
}
