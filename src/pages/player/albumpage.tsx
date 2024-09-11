import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import logoImg from "../Home/pictures/spotify-logo.png"
import albumList from '../Home/Album.js'
import "./albumpage.css"


function AlbumPage({onSelectSong}) {
    const params = useParams(); // Get the entire params object
    const genreName = params.name;  // Get the name from the params object

    const [album, setAlbum] = useState(null)
    

    useEffect(() => {
          const selectedGenre = albumList.find((genre) => genre.title === genreName);
          setAlbum(selectedGenre);
          
    }, [genreName])
    return(
        <>
            {album && (
                        <div className = "album-page" style={{background: `linear-gradient(to bottom, ${album.color} 30%, transparent)`}}>
                        <div className="album-page-nav">
                                <img src={album.image} className="album-pfp"/>
                                <div className="right-top-detail">
                                    <h1 className="text-8xl font-extrabold text-white">{album.title}</h1>
                                    <ul className="artist-featuring">
                                        
                                    </ul>
                                    <div className="spotify-mark">
                                        <img src={logoImg} className="spotify-logo"/>
                                        <h3 className="text-white">Spotify</h3>
                                    </div>
                                </div>
                        </div>  
                        <div className="playerlist">
                            <div>
                                    <div className="controls-layout">
                                        <button className="playerlist-btn h-14 w-14 rounded-full bg-green-500 text-xl justify-center items-center hover:bg-green-400">
                                            <FontAwesomeIcon icon={faPlay} />
                                        </button>
                                        <button className="h-8 w-8 rounded-full border-2 border-gray-400 text-lg text-gray-400 hover:border-white hover:text-white ">
                                            <FontAwesomeIcon icon={faPlus}/>
                                        </button>
                                        <button className="menu">
                                            <FontAwesomeIcon icon={faEllipsis}/>
                                        </button>
                                    </div>
                                    <div className="top-detail">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>                   
                            </div> 
                            <div className="track-title" >
                                <span>Title</span>
                                <span>Album</span>
                                <span>Date added</span>
                                <FontAwesomeIcon icon={faClock}/>
                            </div>
                            <ul className="p-3">
                                {album.songs.map((song, index) => {
                                        return(
                                            <li className="tracks" key={index}>
                                                    <div className="track-details" onClick={() => onSelectSong(song.songname)}>
                                                        <h2>{song.id}</h2>
                                                        <img src={song.cover} className="w-10 h-10 rounded-lg"/>
                                                        <div>
                                                            <h2 className="text-lg text-white font-bold">{song.songname}</h2>
                                                            <p className="text-gray-400 text-xs">{song.artistname}</p>
                                                        </div>
                                                    </div>
                                                <span className="text-gray-400">{album.title}</span>
                                                <span className="w-7/12"></span>
                                                <span className="playlist-time">{song.duration}</span>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </div>
                </div>
           )}
        </>
    )
}
export default AlbumPage;