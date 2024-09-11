import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import artistList from '../Home/Artist.js'
import "./playerlist.css"

function PlayerList({ onSelectSong }) {
    const [artists, setArtists] = useState(null)
    const params = useParams(); // Get the entire params object
  const artistName = params.id; 


    useEffect(() => {
        const selectedArtist = artistList.find((artist) => artist.name === artistName)
        setArtists(selectedArtist);
        
    }, [artistName])

       
       
    
   return(
        <>
        {artists && (
            <div className="full p-0" style={{background: `linear-gradient(to bottom, ${artists.color} 30%, transparent )`}}>
                <div className="playlist-nav"  style={{  backgroundImage: `url(${artists.image})` }}>
                        <div className="right-top-detail">
                            <h1 className="text-8xl font-extrabold text-white">{artists.name}</h1>
                        </div>
                </div>  
                <div className="playerlist">
                    <div>
                            <div className="controls-layout" >
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
                    <h1 className="title m-5">Popular</h1>
                    <ul className="p-3">
                        {artists.songs.map((track, index: number) => {
                            return (
                            <li className="tracks" key={index} onClick={() => onSelectSong(track.songname)}>
                                    <div className="track-details">
                                        <h2>{track.id}</h2>
                                        <img src={track.songimage} className="w-10 h-10 rounded-lg"/>
                                        <div>
                                            <h2 className="text-lg text-white font-bold">{track.songname}</h2>
                                            <p className="text-gray-400 text-xs">{artists.name}</p>
                                        </div>
                                    </div>
                                <span className="playlist-time">3:06</span>
                            </li>
                            );
                        })}
                    </ul>
                </div>
        </div>
        )}
    </>
    )
}

export default PlayerList;