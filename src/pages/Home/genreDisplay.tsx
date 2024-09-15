import {Link} from "react-router-dom"
import genreList from './genre.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import "./genreDisplay.css"

interface Genre {
    name: string
    cover: string
    image: string
}

function GenreDisplay() {
    return(
        <div className="genreDisplay">
            <ul className="genre-grid">
                {genreList.map((genre: Genre, index: number) => (
                    <Link to={`/genre/${genre.name}`} key={index}>
                        <li className="genre-diplay-card">
                        <img src={genre.cover} alt="Album Cover" className="genre-cover"/>
                        <div className="genre-display-info">
                            <img src={genre.image} alt="" className="genre-img"/>
                            <h2>{genre.name}</h2>
                        </div>
                        <div className="genre-controls">
                                <button className="h-14 w-14 rounded-full bg-white text-xl justify-center items-center hover:bg-gray-400">
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                                <button className="h-8 w-8 rounded-full border-2 border-gray-400 text-lg text-gray-400 hover:border-white hover:text-white ">
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                                <button className="text-2xl text-gray-400 hover:text-white">
                                    <FontAwesomeIcon icon={faEllipsis}/>
                                </button>
                        </div>
                        </li>
                    </Link>
                ))}
            </ul>
            <span className="create-comment text-3xl font-bold mt-10 text-white">By <a href="https://webdevent.github.io/Portfolio/" className="by-user text-green-600">Daniel Ennis</a></span>
        </div>
    )
}
export default GenreDisplay;