import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import './player.css'
import song from "../Home/songs.js"
import testImage from "../Home/pictures/music-placeholder.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause, faUpRightAndDownLeftFromCenter, faForwardStep,faVolumeLow, faBackwardStep, faShuffle, faRepeat, faPlus, faMicrophone, faBars, faDesktop } from '@fortawesome/free-solid-svg-icons'

function Player({ selectedSong }) {
    
    const songPlayerRef = useRef(null);
    const loopBtnRef = useRef(null);
    const totalTimeElementRef = useRef(null)
   const [durationState, setDurationState] = useState(null)
    const playButtonRef = useRef(null);
    const pauseButtonRef = useRef(null)
    const [artistInfo, setArtitInfo] = useState(null)
    
    
    //updates the range bar with the duration of the current playing song
    const musicProgress = () => {
        const currentTime = songPlayerRef.current.currentTime;
        const duration = songPlayerRef.current.duration;
        const progress = (currentTime / duration) * 100;
        const durationInput = document.getElementById('music-duration');
        durationInput.value = progress;
    }
    //allows the user to manipulate the song progress
    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const duration = songPlayerRef.current.duration;
        const newTime = (newValue / 100) * duration;
        songPlayerRef.current.currentTime = newTime;
      };
   

    //updates the current time span with how much time the song has left
    const updateTimeLeft = () => {
        if (songPlayerRef.current) {
                const currentTime = songPlayerRef.current.currentTime;
                const duration = songPlayerRef.current.duration;
                const timeLeft = duration - currentTime;
                musicProgress()
                // Convert timeLeft to minutes and seconds
                const minutes = Math.floor(timeLeft / 60);
                const seconds = Math.floor(timeLeft % 60);
                // Update the total-time element with the time left
                const currentTimeElement = document.querySelector('.current-time');
                if (currentTimeElement) {
                    currentTimeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    
                }
        }
    };

    const duration = () => {
        const duration = songPlayerRef.current.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        const durationTimeElement = document.querySelector('.total-time');
        if (durationTimeElement) {
            durationTimeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;   
        }
        console.log(minutes)   
    }
   
    useEffect(() => {
        const artist = song.find((artist) => artist.name  === selectedSong)//Searchs the songs Array for the selected song
        setArtitInfo(artist);
        const intervalId = setInterval(updateTimeLeft, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [selectedSong]);

    
    return (
        <div className="player">
            {artistInfo && artistInfo.name?( 
                <>
                <div className="track-info">
                <img src={artistInfo.image} className='track-img'/>
                <div className="track-info-detail">
                    <audio id='song-player' autoPlay  ref={songPlayerRef}  key={artistInfo.song} onLoad={() => duration()}>
                        <source src={artistInfo.song} type = "audio/mpeg" />
                    </audio>
                    <h1 className='m-0 text-white text-lg font-bold'>{artistInfo.name}</h1>
                    <span className='m-0 text-gray-400 text-s'>{artistInfo.artist}</span>
                </div>
                <button className="flex items-center justify-center h-5 w-5 p-1 rounded-full border-2 border-gray-400 text-lg text-gray-400 hover:border-white hover:text-white ">
                    <FontAwesomeIcon icon={faPlus} className='text-xs text-center'/>
                </button>
            </div>
            
            <div className="contain-controls">
                <div className="player-controls">
                    <button className="shuffle controls" >
                        <FontAwesomeIcon icon={faShuffle}/>
                    </button>
                    <button className="previous-btn controls">
                        <FontAwesomeIcon icon={faBackwardStep} />
                    </button>
                    <button className="player-play-btn" ref={playButtonRef}  onClick={() => {
                        songPlayerRef.current.play();
                        pauseButtonRef.current.style.display = 'block'
                        playButtonRef.current.style.display = 'none'
                        }}>
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </button>
                    <button className="player-pause-btn" ref={pauseButtonRef} onClick={() => {
                        songPlayerRef.current.pause();
                        pauseButtonRef.current.style.display = 'none'
                        playButtonRef.current.style.display = 'block'
                        }}>
                        <FontAwesomeIcon icon={faCirclePause} />
                    </button>
                    <button className="forward-btn controls">
                        <FontAwesomeIcon icon={faForwardStep} />
                    </button>
                    <button className="repeat controls" ref={loopBtnRef} onClick={() => {
                        songPlayerRef.current.loop = !songPlayerRef.current.loop;
                        if(songPlayerRef.current.loop) {
                            loopBtnRef.current.classList.add('text-green-500')
                        } else {
                            loopBtnRef.current.classList.remove('text-green-500');
                            
                        }
                    }}>
                        <FontAwesomeIcon icon={faRepeat} />
                    </button>
                </div>

                <div className="progress-bar">
                    <span className="current-time text-white">
                        0:00
                    </span>
                   
                    <input type="range" id="music-duration" className="inner-progress-bar range" onChange={handleRangeChange}/>
                    
                    <span className="total-time text-white" ref={totalTimeElementRef}>
                        0:00
                    </span>
                </div>
            </div>

            <div className="sub-player-controls">
                <button className=''>
                    <FontAwesomeIcon icon={faMicrophone} className="hover:text-white"/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faBars} className="hover:text-white"/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faDesktop} className="hover:text-white"/>
                </button>
                <button onClick={() => {
                    const volRange = document.querySelector(".volume");
                    songPlayerRef.current.muted = !songPlayerRef.current.muted;
                    if(songPlayerRef.current.muted) {
                        volRange.value = 0;
                    } else {
                        volRange.value = 50;
                        songPlayerRef.current.volume = 50;
                    }
                }}>
                    <FontAwesomeIcon icon={faVolumeLow} className="hover:text-white"/>
                </button>
                <input type='range' className="volume" id='volume-switch' onChange={() => {
                    const volumeInput = document.getElementById('volume-switch')
                    songPlayerRef.current.volume = volumeInput.value / 100
                }}/>
                <button>
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="hover:text-white"/>
                </button>
            </div>
            </>
            ) : (
                <>
                    <div className="track-info invisible">
                    <img src={testImage} className='track-img'/>
                <div className="track-info-detail">
                    <h1 className='m-0 text-white'>Select a song to play</h1>
                    <span className='m-0 text-gray-400'>Song Title</span>

                </div>
                <button className="flex items-center justify-center h-5 w-5 p-1 rounded-full border-2 border-gray-400 text-lg text-gray-400 hover:border-white hover:text-white ">
                    <FontAwesomeIcon icon={faPlus} className='text-xs'/>
                </button>
            </div>
            
            <div className="contain-controls">
                <div className="player-controls">
                    <button className="shuffle controls">
                        <FontAwesomeIcon icon={faShuffle} />
                    </button>
                    <button className="previous-btn controls">
                        <FontAwesomeIcon icon={faBackwardStep} />
                    </button>
                    <button className="player-pause-btn" >
                        <FontAwesomeIcon icon={faCirclePause} />
                    </button>
                    <button className="forward-btn controls">
                        <FontAwesomeIcon icon={faForwardStep} />
                    </button>
                    <button className="repeat controls">
                        <FontAwesomeIcon icon={faRepeat} />
                    </button>
                </div>
                <div className="progress-bar">
                    <span className="current-time text-white">
                        0:00
                    </span>
                   
                    <input type="range" className="inner-progress-bar range"/>
                    
                    <span className="total-time text-white">
                        0:00
                    </span>
                </div>
            </div>
            <div className="sub-player-controls">
                <button className=''>
                    <FontAwesomeIcon icon={faMicrophone} className="hover:text-white"/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faBars} className="hover:text-white"/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faDesktop} className="hover:text-white"/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faVolumeLow} className="hover:text-white"/>
                </button>
                <input type='range' className="volume" id='volume-switch'/>
                <button>
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="hover:text-white"/>
                </button>
            </div>
                </>
            )}
        </div>
    )
}

export default Player;