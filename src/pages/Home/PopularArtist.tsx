
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import artistList from "./Artist.ts"
import './PopularArtist.css'

interface Artist {
    name: string,
    image: string,
}
function PopularArtist() {
   

    return (
        <div className="popular-artist">
            <div className='top-details'>
                <h1 className="title">Popular artists</h1>
                <Link to={`/show`}><p className="show-all">Show all</p></Link>
            </div>
            <div className="popular-artist">
                <ul className="deck">
                    {artistList.map((artist: Artist, index: number) => (
                        
                    <li className="card" key={index}
                        onMouseEnter={(event) => {
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
                        }}
                        >
                            <Link to={`/artist/${artist.name}`} key={index}>
                            <img src={artist.image} alt="hero" className="artist-pfp" />
                            <div className="play-btn" data-attr={`Play ${artist.name}`}>
                                <FontAwesomeIcon icon={faPlay} className='play-btn-icon'/>
                            </div>
                            <h3 className="artist-name">{ artist.name}</h3>
                            <span className='sub-text'>Artist</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PopularArtist;