import chrisBrown from './pictures/chris-brown.jpg'
import chrisBrownCover from './pictures/chrisBrown-sensational.jpeg'
import chrisBrownCoverTwo from "./pictures/chris-brown-dont-judge-img.jpeg"
import chrisBrownCoverThree from './pictures/chris-brown-freaky-friday.png'
import chrisBrownAlbumCover from "./pictures/cbcover.png"
import summerWalker from './pictures/summer-walker.jpg'
import summerWalkerCover from './pictures/summerWalker-Playing_Games.png'
import summerWalkerCoverTwo from "./pictures/summer-walker-thru-img.jpeg"
import summerWalkerCoverThree from './pictures/summer-walker-body.webp'
import theWeeknd from './pictures/wkcover.webp'
import theWeekndCover from './pictures/TheWeeknd-The_Hills.jpg'
import theWeekndCoverTwo from "./pictures/TheWeeknd-Starboy-img.jpeg"
import theWeekndCoverThree from './pictures/TheWeeknd-creepin-img.jpg'
import rihanna from './pictures/rihanna.webp'
import rihannaCover from './pictures/rihanna-songcover.jpg'
import rihannaCoverTwo from './pictures/rihanna-wild-img.png'
import lilMosey from './pictures/lilMoseyCover-image.jpeg'
import lilMoseyCover from './pictures/lilMoseypfp-image.jpeg'
import lilMoseyCoverTwo from "./pictures/lilMosey-notice-img.jpg"
import lilMoseyCoverThree from './pictures/lilMosey-Wrong.jpg'
import rajahWild from './pictures/rajahwild.jpg'
import rajahWildCover from './pictures/rajahwildcover.jpg'
import rajahwildCoverTwo from "./pictures/rajahwild-lights-off-img.jpeg"
import popSmoke from './pictures/pop-smoke-img.jpeg'
import popSmokeCover from './pictures/pop-smoke-song-img.jpg'
import popSmokeCoverTwo from "./pictures/pop-smoke-cover-two.jpg"
import brysonTillerImg from "./pictures/brsyson-tiller-pfp-img.jpeg"
import brysonTillerCover from "./pictures/brsyson-tiller-cover-img.jpeg"
import brysonTillerCoverTwo from "./pictures/bryson-tiller-blame-img.jpg"
import brysonTillerCoverThree from './pictures/bryson-tiller-outta-time-img.jpg'
import wizkhalifeImage from './pictures/wizkhaimage.jpg'
import wizkhalifeCover from './pictures/wizkhacover.jpg'
import wizkhalifeCoverTwo from "./pictures/wizkhalifa- see-you-again-img.jpg"
import kendrickLamarImg from './pictures/kendrick-lamar-img.jpeg'
import kendrickLamarCover from './pictures/ken-lam-not-like-us.jpeg'
import eddyGBombaImg from './pictures/eddygbomba-img.jpeg'
import eddyGBombaCover from "./pictures/eddygbomba-song-img.jpg"

const artistList = [
  { 
    id: 1,
    name: "Chris Brown", 
    image: chrisBrown,
    color: 'rgba(197, 6, 255, 0.363)',
    songs: [
        {
          id: 1,
          songname: "Sensational",
          songimage: chrisBrownCover,
        },
        {
          id: 2,
          songname: "Don't Judge",
          songimage: chrisBrownCoverTwo,
        },
        {
          id: 3,
          songname: 'Freaky Friday',
          songimage: chrisBrownCoverThree
        },
        {
          id: 4,
          songname: "Lower Body FT Davido",
          songimage: chrisBrownAlbumCover
      },
      {
          id: 6,
          songname: "Nose Dive",
          songimage: chrisBrownAlbumCover
      },
      {
          id: 7,
          songname: "Under Influence",
          songimage: chrisBrownAlbumCover
      },
      {
          id: 8,
          songname: "Over Time",
          songimage: chrisBrownAlbumCover
      },
    ]
  },
  {
    id: 2, 
    name: "Summer Walker", 
    image: summerWalker,
    color: "rgba(255, 6, 222, 0.363)",
    songs: [
        {
          id: 1,
          songname: "Playing Games",
          songimage: summerWalkerCover,
        },
        {
          id: 2,
          songname: "Come Thru",
          songimage: summerWalkerCoverTwo,
        },
        {
          id: 3,
          songname: 'Body',
          songimage: summerWalkerCoverThree
        }
    ]
  },
  { 
    id: 3,
    name: "The Weeknd", 
    image: theWeeknd,
    color: "rgba(255, 6, 6, 0.363)",
    songs: [
      {
        id: 1,
        songname: "The Hills",
        songimage: theWeekndCover,
      },
      {
          id: 2,
          songname: "Starboy",
          songimage: theWeekndCoverTwo,
      },
      {
        id: 3,
        songname: 'Creepin',
        songimage: theWeekndCoverThree
      }
    ]
  },
  { 
    id: 4,
    name: "Rihanna", 
    image: rihanna,
    color: "rgba(255, 255, 255, 0.363)",
    songs: [
        {
          id: 1,
          songname: "Diamonds",
          songimage: rihannaCover,
        },
        {
          id: 2,
          songname: "Wild Thoughts",
          songimage: rihannaCoverTwo,
        },
        {
          id: 3,
          songname: "Wild Thoughts",
          songimage: rihannaCover,
        },
    ]
  },
  {
    id: 5,
    name: "Lil Mosey",
    image: lilMosey,
    color: 'rgba(0, 0, 255, 0.205)',
    songs: [
        {
          id: 1,
          songname: "Blueberry Faygo",
          songimage: lilMoseyCover,
        },
        {
          id: 2,
          songname: "Notice",
          songimage: lilMoseyCoverTwo,
        },
        {
          id: 3,
          songname: 'Wrong',
          songimage: lilMoseyCoverThree
        }
    ]
  },
  {
    id: 6,
    name: "Pop Smoke",
    image: popSmoke,
    color: 'rgba(0, 0, 255, 0.205)',
    songs: [
        {
          id: 1,
          songname: "The Woo",
          songimage: popSmokeCover,
        },
        {
          id: 2,
          songname: "WHAT YOU KNOW ABOUT LOVE",
          songimage: popSmokeCoverTwo,
        }
    ]
  },
  {
    id: 7,
    name: "Rajah Wild",
    image: rajahWild,
    color: 'rgb(214, 25, 0, 0.500)',
    songs: [
      {
        id: 1,
        songname: "Wild Out",
        songimage: rajahWildCover,
      },
      {
        id: 2,
        songname: "Lights Off",
        songimage: rajahwildCoverTwo,
      }
    ]
  },
  {
    id: 8,
    name: "Bryson Tiller",
    image: brysonTillerImg,
    color: 'rgba(255, 6, 6, 0.363)',
    songs: [
      {
        id: 1,
        songname: "Right My Wrong",
        songimage: brysonTillerCover,
      },
      {
        id: 2,
        songname: "Blame",
        songimage: brysonTillerCoverTwo,
      },
      {
        id: 3,
        songname: 'Outta Time',
        songimage: brysonTillerCoverThree
      },
      {
        id: 4,
        songname: 'Sorry not sorry',
        artistname: 'Bryson Tiller',
        songimage: brysonTillerCover,
    }
    ]
  },
  {
    id: 9,
    name: "Wiz khalifa",
    image: wizkhalifeImage,
    color: 'rgba(232, 39, 197, 0.500)',
    songs: [
      {
          id: 1,
          songname: "Dem Boyz",
          songimage: wizkhalifeCover,
      },
      {
          id: 2,
          songname: "See You Again",
          songimage: wizkhalifeCoverTwo,
      }
    ]
  },
  {
    id: 10,
    name: "Kendrick Lamar",
    image: kendrickLamarImg,
    color: 'rgba(224, 222, 224, 0.500)',
    songs: [
      {
          id: 1,
          songname: "Not Like Us",
          songimage: kendrickLamarCover,
      },
      {
          id: 2,
          songname: "Humble",
          songimage: wizkhalifeCoverTwo,
      }
    ]
  },
  {
    id: 9,
    name: "Eddy G Bomba",
    image: eddyGBombaImg,
    color: 'rgba(0, 0, 255, 0.205)',
    songs: [
      {
          id: 1,
          songname: "NO CAP",
          songimage: eddyGBombaCover,
      },
    ]
  }
]

export default artistList;