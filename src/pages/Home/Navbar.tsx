import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import artists from './Artist.js'
import TopNav from './TopNav.tsx'
import { Link } from 'react-router-dom'
import { faMagnifyingGlass, faList, faPlus, faArrowRight, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    
    return (
        <nav className="navbar">
            <TopNav/>
            <div className='bottom-navbar'>
                <div className="flex flex-row justify-between m-2">
                    <div className="flex-row" onClick={() => {
                        const nav = document.querySelector('.navbar');
                        nav.style.width = '100px'
                        nav.style.overFlow = 'hidden'
                    }}>
                        <h3 className='library-btn'><FontAwesomeIcon icon={faLayerGroup} /> Your Library</h3>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <FontAwesomeIcon icon={faPlus} className='text-gray-400 text-xl p-1 hover:bg-gray-700 rounded-full h-5 w-5' aria-details=''/>
                        <FontAwesomeIcon icon={faArrowRight} className='text-gray-400 text-xl p-1 hover:bg-gray-700 rounded-full h-5 w-5' />
                    </div>
                </div>
                <ul className='recent-artist-list'>
                    <li>
                        <div className="flex flex-row justify-between m-2 items-center">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-400 text-base'/>
                            <button className='hover:text-white'>
                                <span className='text-gray-400 font-semibold '>Recent</span>
                                <FontAwesomeIcon icon={faList} className='text-gray-400 px-2'/>
                            </button> 
                        </div> 
                    </li>
                    {artists.map((artist, index) => {
                        return(
                            <Link to={`/artist/${artist.name}`}  key={index}>
                                <li className="recent-artist">
                                    <img src={artist.image} alt="Artist" className='recent-artist-img'/>
                                    <div>
                                        <h4 className='artist-name'>{artist.name}</h4>
                                        <span className='sub-text'>Artist</span>
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;