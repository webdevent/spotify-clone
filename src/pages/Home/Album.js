import chrisBrownCover from "./pictures/cbcover.png"
import popSmokeCover from "./pictures/pscover.jpg"
import brysonTillerCover from "./pictures/brsyson-tiller-cover-img.jpeg"
import migosCover from "./pictures/mgcover.webp"
import wizKhalifa from "./pictures/wizkhacover.jpg"
import theWeekndCoverTwo from "./pictures/TheWeeknd-Starboy-img.jpeg"
import popSmokeCoverImg from './pictures/pop-smoke-song-img.jpg'
import popSmokeCoverTwo from "./pictures/pop-smoke-cover-two.jpg"


const albumList = [
    {
        id: 1,
        title: "Indigo",
        artist: "Chris Brown",
        image: chrisBrownCover,
        color: 'purple',
        songs: [
            {
                id: 1,
                artistname: 'Chris Brown',
                songname: "Lower Body FT Davido",
                cover: chrisBrownCover,
                duration: '3:06'
            },
            {
                id: 2,
                artistname: 'Chris Brown',
                songname: "Nose Dive",
                cover: chrisBrownCover,
                duration: '4:23'
            },
            {
                id: 3,
                artistname: 'Chris Brown',
                songname: "Under Influence",
                cover: chrisBrownCover,
                duration: '3:07'
            },
            {
                id: 4,
                artistname: 'Chris Brown',
                songname: "Over Time",
                cover: chrisBrownCover,
                duration: '3:40'
            },
        ]
    },
    {
        id: 2,
        title: "THE WOO",
        artist: "Pop Smoke",
        image: popSmokeCover,
        color: 'darkblue',
        songs: [
            {
                id: 1,
                songname: "The Woo",
                artistname: 'Pop Smoke',
                cover: popSmokeCoverImg,
                duration: '3:24'
            },
            {
                id: 2,
                songname: "WHAT YOU KNOW ABOUT LOVE",
                artistname: 'Pop Smoke',
                cover: popSmokeCoverTwo,
                duration: '2:50'
            },
            {
                id: 3,
                songname: "MEET THE WOO",
                artistname: 'Pop Smoke',
                cover: popSmokeCoverTwo,
                duration: '3:00'
            }
        ]
    },
    {
        id: 3,
        title: "TRAP SOUL",
        artist: "Bryson Tiller",
        image: brysonTillerCover,
        color: 'rgba(184, 0, 0, 0.571)',
        songs: [
            {
                id: 1,
                songname: "Right My Wrong",
                artistname: 'Bryson Tiller',
                cover: brysonTillerCover,
                duration: '4:30'
            },
            {
                id: 2,
                songname: "Exchange",
                artistname: 'Bryson Tiller',
                cover: brysonTillerCover,
                duration: '4:00'
            },
            {
                id: 3,
                songname: 'Sorry not sorry',
                artistname: 'Bryson Tiller',
                cover: brysonTillerCover,
                duration: '3:00'
            }
        ]
    },
    {
        id: 4,
        title: "O.N.I.F.C",
        artist: "Wiz Khalifa",
        image: wizKhalifa,
        color: 'rgba(255, 255, 255, 0.489)',
        songs: [
            {
                id: 1,
                artistname: 'Wiz Khalifa',
                songname: "Dem Boyz",
                cover: wizKhalifa,
                duration: '4:06'
            },
            {
                id: 2,
                artistname: 'Wiz Khalifa',
                songname: "Roll Up",
                cover: wizKhalifa,
                duration: '3:58'
            },
            {
                id: 3,
                artistname: 'Wiz Khalifa',
                songname: "Black and Yellow",
                cover: wizKhalifa,
                duration: '4:49'
            },
            {
                id: 4,
                artistname: 'Wiz Khalifa',
                songname: "No Sleep",
                cover: wizKhalifa,
                duration: '3:34'
            },
        ]
    },
    {
        id: 5,
        title: "Migos",
        artist: "Migos",
        image: migosCover,
        color: 'rgba(255, 255, 255, 0.796)',
        songs: [
            {
                id: 1,
                artistname: 'Migos',
                songname: "Slippery",
                cover: migosCover,
                duration: '3:06'
            },
            {
                id: 2,
                artistname: 'T-Shirt',
                songname: "Starboy",
                cover: migosCover,
                duration: '3:06'
            },
            {
                id: 3,
                artistname: 'Migos',
                songname: "Get Rich",
                cover: migosCover,
                duration: '3:00'
            },
            {
                id: 4,
                artistname: 'Migos',
                songname: "Bad and Bougie",
                cover: migosCover,
                duration: '4:00'
            },
        ]
    },
    
]

export default albumList;