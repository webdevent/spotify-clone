import {useEffect, useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faMagnifyingGlass, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import artistList from './Artist.ts'
import albumList from './Album.ts'
import './search.css'

interface Artist {
    name: string,
    image: string,
}

interface Album {
    image: string,
    title: string,
    artist: string
}
function Search() {
    const [searchTerm, setSearchTerm] = useState([]);
    const [searchTermAlbum, setSearchTermAlbum] = useState([])
    const searchInputRef = useRef(null)
    useEffect(() => {
        document.title = "Search - Music Player"
       
    }, [])
    const handleSearch = () => {
        const searchInput = searchInputRef.current;
        const searchText = searchInput.value;
        const searchResults = artistList.filter(artist => artist.name.toLowerCase().startsWith(searchText.toLowerCase()));
        const searchResultAlbum = albumList.filter(album => album.title.toLowerCase().startsWith(searchText.toLowerCase()));
        setSearchTerm(searchResults);
        setSearchTermAlbum(searchResultAlbum);
        const reco = document.querySelector('.recomendation-items');
        const title = document.querySelector('.artist-title');
        if(searchText === '') {
            reco.style.display = 'none';
            title.style.display = 'none';
            setSearchTerm([]);
            setSearchTermAlbum([]);
        } else {
            reco.style.display = 'block';
            title.style.display = 'block';
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
            <h1 className="title artist-title">artists</h1>
            <ul className="search-listing">
                {searchTerm.map((artist: Artist, index: number) => (
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
                        <div className="play-btn" data-attr={`Play ${artist.name}`}>
                            <FontAwesomeIcon icon={faPlay} className='play-btn-icon'/>
                        </div>
                        <span className="artist-name">{artist.name}</span>
                        <span className="song-name text-s text-gray-500">artist</span>
                    </div>
                    </Link>
                </li>
                ))}
            </ul>
            <h1 className="title">albums</h1>
            <ul className="search-albums">
                {searchTermAlbum.map((album: Album, index: number) => {
                    return (
                        <Link to={`/album/${album.title}`} key={index}>
                            <li className='card'  onMouseEnter={(event) => {
                                const card = event.target.closest(".card");
                                const btn = card.querySelector('.play-btn');
                                btn.style.display = "flex"
                                btn.style.bottom = "30%"
                            }}
                            onMouseLeave={(event) => {
                                const card = event.target.closest(".card");
                                const btn = card.querySelector('.play-btn');
                                btn.style.display = "none"
                                btn.style.bottom = "10%"
                            }}>
                                <img src={album.image} className='album-cover'/>
                                <button className="play-btn" id='play-btn' data-attr={album.title}>
                                    <FontAwesomeIcon icon={faPlay} className='play-btn-icon'/>
                                </button>
                                <h3 className="album-name">
                                    {album.title}
                                </h3>
                                <span className='sub-text'>{album.artist}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}
export default Search;