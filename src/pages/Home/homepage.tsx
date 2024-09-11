import {useEffect} from 'react'
import PopularArtist from "./PopularArtist.tsx";
import PopularAlbum from "./PopularAlbum.tsx"
import HomeNav from "./homeNav.tsx"
import GenreDisplay from "./genreDisplay.tsx";

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