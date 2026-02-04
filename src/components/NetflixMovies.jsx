import React from 'react'
import { Link } from 'react-router-dom'

export  const NetflixMovies = () => {
  var movies=[{
         movieId:1,
          movieName:"Inception"
  },{
          movieId:2,
          movieName:"Dhurandher"
  },{
          movieId:3,
          movieName:"kill"
  }]
  return (
    <div style={{textAlign:'center'}}>
      <h1>netfliexmovies</h1>

      {movies.map((movie)=>{
         return <li>
          <Link to={`/watch/${movie.movieName}`}>Watch {movie.movieName}</Link>
         </li>
      })}
      </div>
  )
}



