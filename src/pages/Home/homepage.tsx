import {useEffect} from 'react'
import PopularArtist from "./PopularArtist.tsx";
import PopularAlbum from "./PopularAlbum.js"
import HomeNav from "./homeNav.js"
import GenreDisplay from "./genreDisplay.js";

function HomePage() {
   useEffect(() => {
    document.title = 'Spotify Home'
   })
    return (
        <div className="home-page">
            <HomeNav/>
            <PopularArtist />
            <PopularAlbum />
            <GenreDisplay />
        </div>
    )
}
export default HomePage;