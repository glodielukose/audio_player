import React, {useEffect, useState} from 'react'

//import des datas
import { tracks } from '../datas/tracks'

import {
        FaPlay, 
        FaPause, 
        FaStepForward, 
        FaStepBackward, 
        FaVolumeUp 
      } from 'react-icons/fa';


function Controls({audioRef, onTrack}) {

  const [volume, setVolume] = useState(60)
  const [track, setTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    audioRef.current.volume = volume / 100
  }, [volume, audioRef])

  useEffect(() => {
    onTrack(track)
  },[onTrack,track])

  const play = () => {
    audioRef.current.play()

    setIsPlaying(false)
  }

  const pause = () => {
    audioRef.current.pause()

    setIsPlaying(true)
  }

  const back = (e) => {
      if (track <= 0 ) {
        setTrack(0)
      } else {
        setTrack(track => track - 1)
      }

    setIsPlaying(true)


  }

  const next = (e) => {

    if (track >= tracks.length -1) {
      setTrack(tracks.length -1)
    } else {
      setTrack(track => track + 1)
    }

    setIsPlaying(true)

  }


  function handleVolumeChange(e) {
    setVolume(e.target.value)
  }

  return (
    <div className='Controls'>
      <div className="btn-group">
        <FaStepBackward className='btn' onClick={back}></FaStepBackward>
        {
          isPlaying ?  <FaPlay className='btn-center btn' onClick={play}></FaPlay> :
          <FaPause className='btn-center btn' onClick={pause}></FaPause>
        }
        <FaStepForward className='btn' onClick={next}>S</FaStepForward>
      </div>

      <div className="volume">
        <FaVolumeUp className="vol-btn"/>
        <input 
          type="range" 
          name="volume" 
          id="volume"
          min={0}
          max={100}
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}

export default Controls
