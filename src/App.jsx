import { } from 'react'
import {HeaderComponent} from './components/HeaderComponent';
import {FooterComponent} from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import { MapDemo1 } from './components/MapDemo1';
import { MapDemo2 } from './components/MapDemo2';
import MapDemo3 from './components/MapDemo3';
import { MapDemo4 } from './components/MapDemo4';
import { MapDemo5 } from './components/MapDemo5';
import { MapDemo6 } from './components/MapDemo6';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NetflixHome } from './components/NetflixHome';
import { NetflixShows } from './components/NetflixShows';
import { HomeComponent } from './components/HomeComponent';
import { NetflixMovies } from './components/NetflixMovies';
import { NetflixTv } from './components/NetflixTv';
import { NetflixSearch } from './components/NetflixSearch';
import { NetflixSports } from './components/NetflixSports';
import { NetflixCategories } from './components/NetflixCategories';
import { MapDemo7 } from './components/MapDemo7';
import { ErrorNotFound } from './components/ErrorNotFound';
import { Watch } from './components/Watch';
import { TeamDetail } from './components/TeamDetail';
import { IplTems } from './components/IplTems';
import { FunctionDemo1 } from './components/FunctionDemo1';
import { UsestateDemo1 } from './components/UsestateDemo1';
import { UsestateDemo2 } from './components/UsestateDemo2';
import { UsestateDemo3 } from './components/UsestateDemo3';
import { Employees } from './components/Employees';
import { InputDemo } from './components/InputDemo';
import { InputDemo2 } from './components/Input/InputDemo2';
import { FormDemo1 } from './components/Form/FormDemo1';
import { FormDemo2 } from './components/Form/FormDemo2';
import { FormDemo3 } from './components/Form/FormDemo3';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
 
  return (
    <>
    <div>
      <Navbar></Navbar>
       <Routes>
            <Route path="/netflixhome" element={<NetflixHome/>}></Route>
            <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
            <Route path="/netflixshows" element={<NetflixShows/>}></Route>
            <Route path="/netflixtv" element={<NetflixTv/>}></Route>
            <Route path="/netflixsearch" element={<NetflixSearch/>}></Route>
            <Route path="/netflixsports" element={<NetflixSports/>}></Route>
            <Route path="/netflixcategories" element={<NetflixCategories/>}></Route>
            <Route path="/" element={<HomeComponent/>}></Route>
            <Route path="/watch/:name" element={<Watch/>}></Route>
            <Route path="/IPLtems" element={<IplTems/>}></Route>
            <Route path="/teamdetail/:name" element={<TeamDetail/>}></Route>
            <Route path="/functiondemo1" element={<FunctionDemo1/>}></Route>
            <Route path="/usestatedemo1" element={<UsestateDemo1/>}></Route>
            <Route path="/usestatedemo2" element={<UsestateDemo2/>}></Route>
            <Route path="/usestatedemo3" element={<UsestateDemo3/>}></Route>
            <Route path="/employees" element={<Employees/>}></Route>
            <Route path="/inputdemo" element={<InputDemo/>}></Route>
            <Route path="/inputdemo2" element={<InputDemo2/>}></Route>
            <Route path="/formdemo1" element={<FormDemo1/>}></Route>
            <Route path="/formdemo2" element={<FormDemo2/>}></Route>
            <Route path="/formdemo3" element={<FormDemo3/>}></Route>
            <Route path="/*" element={<ErrorNotFound/>}></Route>
       </Routes>
    </div>
  </>

  )
}

export default App
