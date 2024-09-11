import react, {useEffect, useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faMagnifyingGlass, faX, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import artistList from './Artist.js'
import './search.css'

function Search() {
    const [searchTerm, setSearchTerm] = useState([])
    const searchInputRef = useRef(null)
    useEffect(() => {
        document.title = "Search - Music Player"
       
    }, [])
    const handleSearch = () => {
        const searchInput = searchInputRef.current;
        const searchText = searchInput.value;
        const searchResults = artistList.filter(artist => artist.name.toLowerCase().startsWith(searchText.toLowerCase()));
        setSearchTerm(searchResults);
        const reco = document.querySelector('.recomendation-items');
        if(searchText === '') {
            reco.style.display = 'none';
        } else {
            reco.style.display = 'block';
            reco.innerHTML = searchText;
        }     
    }
        
    return (
        <div className="search">
            <div className="search-box">
                <button className='search-btn text-white '>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input type="text" ref={searchInputRef} placeholder="what do you want to play?" className='search-input' onChange={handleSearch}/>
                <button className="browse-btn ">
                    <FontAwesomeIcon icon={faFolderOpen} />
                </button>
            </div>
            <div className="recommendation">
                <ul className="recommendation-listing">
                        <li className="recomendation-items"></li>
                </ul>
            </div>
            <h1 className="title">artists</h1>
            <ul className="search-listing">
                {searchTerm.map((artist, index) => (
                <li  key={index} className="searched-song"
                onMouseEnter={(event) => {
                    const card = event.target.closest(".searched-song");
                    const btn = card.querySelector('.play-btn');
                    btn.style.display = "flex"
                    btn.style.bottom = "30%"
                }}
                onMouseLeave={(event) => {
                    const card = event.target.closest(".searched-song");
                    const btn = card.querySelector('.play-btn');
                    btn.style.display = "none"
                    btn.style.bottom = "10%"
                }}
                >
                    <Link to={`/artist/${artist.name}`}>
                    <img src={artist.image} alt="" className="artist-image" />
                    <div className="search-song-details">
                        <div className="play-btn">
                            <FontAwesomeIcon icon={faPlay} className='play-btn-icon'/>
                        </div>
                        <span className="artist-name">{artist.name}</span>
                        <span className="song-name text-s text-gray-500">artist</span>
                    </div>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}
export default Search;