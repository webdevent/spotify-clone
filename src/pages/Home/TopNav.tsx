import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './TopNav.css'

function TopNav() {
    return(
        <div className="topnav">
            <ul className='navlist'>
                <li>
                    <Link to='/' className="home-route"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </li>
                <li className='text-gray-400'>
                    <Link to='/search' className="search-route"><FontAwesomeIcon icon={faMagnifyingGlass}  className='text-xl'/> Search</Link>
                </li>
            </ul>
        </div>
    )
}

export default TopNav;