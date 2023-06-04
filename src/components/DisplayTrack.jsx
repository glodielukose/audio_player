import React from 'react'

function DisplayTrack({currentTrack, audioRef}) {

  return (
    <div className='DisplayTrack'>
      <audio src={currentTrack.audio} ref={audioRef} ></audio>

      <div className='cover'>
        <img 
          src={currentTrack.image}
          alt="cover"
          />
      </div>

      <div>
        <h3>{currentTrack.author} - <span>{currentTrack.title}</span></h3>
        <p>{currentTrack.album}</p>
      </div>
     
    </div>
  )
}

export default DisplayTrack
