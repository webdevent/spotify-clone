import {useState, useEffect} from 'react'
import Navbar from "./Navbar.tsx";
import GenrePage from '../player/Genrepage.tsx';
import Player from '../player/player.tsx'
import HomePage from "./homepage.tsx"
import PlayerList from '../player/playlist.tsx';
import AlbumPage from '../player/albumpage.tsx';
import Search from './search.tsx';
import ShowAll from './showall.tsx';
import { Route, Routes } from 'react-router-dom'
import "./Home.css";


function Home() {
  const [selectedSong, setSelectedSong] = useState(null);
    return (
        <div className="home">
            <div className="home-top">
                <Navbar/>
                <div className="home-right">
                    <div className="home-topBottom">
                       <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/artist/:id" element={<PlayerList  onSelectSong={setSelectedSong}/>} />
                            <Route path="/genre/:name" element={<GenrePage onSelectSong={setSelectedSong}/>}/>
                            <Route path='/album/:name' element={<AlbumPage onSelectSong={setSelectedSong}/>}/>
                            <Route path="/search" element={<Search/>}/>
                            <Route path="/show" element={<ShowAll/>}/>
                       </Routes>
                    </div>
                </div>
            </div>
            <div className="home-bottom">
            <Player selectedSong={selectedSong}/>
            </div>      
        </div>
    )
}

export default Home;