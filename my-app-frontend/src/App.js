import React from 'react';
import './App.css';
import { useEffect, useState} from 'react';
import Navbar from './Components/NavBar/Index';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Publishers from './Pages/Publishers';
import Games from './Pages/Games';
import Genres from './Pages/Genres';
import GameInfo from './Pages/GameInfo';
import PublisherInfo from './Pages/PublisherInfo';
import GenreInfo from './Pages/GenreInfo';



function App() {

const [videoGames, setVideoGames] = useState([])
const [gamePublishers, setGamePublishers] = useState([])
const [gameGenres, setGameGenres] = useState([])
const [gameClicked, setGameClicked] = useState({})
const [genreClicked, setGenreClicked] = useState({})
const [publisherClicked, setPublisherClicked] = useState({})

useEffect(() => {
fetch('http://localhost:9292/games')
.then(resp => resp.json())
.then(setVideoGames)
}, []);

useEffect(() => {
  fetch('http://localhost:9292/publishers')
  .then(resp => resp.json())
  .then(setGamePublishers)
}, [])

useEffect(() => {
  fetch('http://localhost:9292/genres')
  .then(resp => resp.json())
  .then(setGameGenres)
}, [])


function handleGenreClick(genreClicked) {
  setGenreClicked(genreClicked)
}


function handleGameClick(gameClicked) {
setGameClicked(gameClicked)
}

function handlePublisherClick(publisherClicked) {
  setPublisherClicked(publisherClicked)
}


// console.log(videoGames, 'app')


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Publishers' element={<Publishers gamePublishers ={gamePublishers} handlePublisherClick={handlePublisherClick}/>} />
        <Route path='/Games' element={<Games videoGames ={videoGames} gamePublishers ={gamePublishers} handleGameClick={handleGameClick}/>} />
        <Route path='/Genres' element={<Genres gameGenres={gameGenres} handleGenreClick={handleGenreClick}/>} />
        <Route path='/GameInfo' element={<GameInfo gameClicked={gameClicked} gamePublishers ={gamePublishers} gameGenres={gameGenres}/>} />
        <Route path='/PublisherInfo' element={<PublisherInfo publisherClicked={publisherClicked} videoGames={videoGames} gameGenres={gameGenres}/>}/>
        <Route path='/GenreInfo' element={<GenreInfo genreClicked={genreClicked} videoGames={videoGames}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
