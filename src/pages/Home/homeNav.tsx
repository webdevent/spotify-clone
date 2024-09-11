import react, { useEffect, useRef } from "react"
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faBell } from '@fortawesome/free-regular-svg-icons'
import "./homeNav.css"

function HomeNav() {
    const headerRef = useRef(null);
    const home = document.querySelector('.home-right')
    
    
    return (
            <div className="home-nav-top" ref={headerRef}>
                    <div className="home-top-left">
                        <button className="switch-left" onClick={() => {window.history.back()}}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button className="switch-right">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                    <div className="home-top-right">
                        <button className="signup-btn">Explore Premium</button>
                        <button className="login-btn">
                            <FontAwesomeIcon icon={faCircleDown} />                           
                            <p>Install App</p> 
                        </button>
                        <button className="bell-icon">
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                        <div className="profile-container">
                            <span className="bg-blue-500 w-full h-full rounded-full text-center font-bold al">G</span>
                        </div>
                    </div>
            </div>
    )
}

export default HomeNav;