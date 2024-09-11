
import { Link } from 'react-router-dom'
import './PopularAlbum.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import albumList from './Album.js'


function PopularAlbum() {

    
    return (
        <div className="popular-album">
            <div className='top-details'>
                <h2 className='title'>Popular Albums</h2>
                <p className='show-all'>Show all</p>
            </div>
            <ul className='deck'>
                {albumList.map((album, index) => {
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
export default PopularAlbum;