import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>NetflixShows</h1>

      <ul>
        <li>
          <Link to="/watch/Breaking Bad">Watch Breaking Bad</Link>
        </li>
        <li>
          <Link to="/watch/Stranger Things">Watch Stranger Things</Link>
        </li>
        <li>
          <Link to="/watch/The Crown">Watch The Crown</Link>
        </li>
      </ul>
      </div>
  )
}
