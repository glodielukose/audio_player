import React, {useEffect, useState} from 'react'

function ProgressBar({progressBarRef, audioRef}) {

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(audioRef.current.currentTime)
      setDuration(audioRef.current.duration)
    }, 500)
  },[duration, currentTime, audioRef])

  useEffect(() => {
    progressBarRef.current.max = duration
    progressBarRef.current.value = currentTime
  }, [progressBarRef, duration, currentTime])

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

   const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value
   }

  return (
    <div className='ProgressBar'>
      <span className='setTime'>{formatTime(currentTime)}</span>

      <input 
        type="range" 
        name="progressBar" 
        id="progressbar" 
        ref={progressBarRef}
        style={{width: "500px"}}
        onChange={handleProgressChange}
      />
      
      <span className='duration'>{formatTime(duration)}</span>
    </div>
  )
}

export default ProgressBar
