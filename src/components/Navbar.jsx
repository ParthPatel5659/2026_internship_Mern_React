import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Netflix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/netflixhome">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/netflixtv">
                TV
              </Link> */}
            {/* </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixsearch">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixsports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixcategories">
                Categories
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/IPLtems">
                IPL Tems
              </Link>
            </li>
               <li className="nav-item">
              <Link className="nav-link" to="/functiondemo1">
                FunctionDemo1
              </Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo1">
                UsestateDemo1
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo2">
                UsestateDemo2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo3">
                UsestateDemo3
              </Link>
            </li> */}
             {/* <li className="nav-item">
              <Link className="nav-link" to="/employees">
                employees
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/inputdemo">
                InputDemo
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/inputdemo2">
                InputDemo2
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/formdemo1">
               formdemo1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo2">
               formdemo2
              </Link>
            </li> */}
             {/* <li className="nav-item">
              <Link className="nav-link" to="/formdemo3">
               formdemo3
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo4">
               formdemo4
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/formdemo5">
               formdemo5
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/formdemo7">
               formdemo7
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/formdemo8">
               formdemo8
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/formwatch">
               formwatch
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo1">
              ApiDemo1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo2">
              ApiDemo2
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/apidemo3">
              ApiDemo3
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/apidemo4">
              ApiDemo4
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/apidemo5">
              ApiDemo5
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/omdbsearch">
             OMdb Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
