import { useState, useRef} from 'react';

// import des datas
import { tracks } from '../datas/tracks';

// import des differents composants
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';


function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0])
  const audioRef = useRef()
  const progressBarRef = useRef()

  const handleTrack = (track) => {
      setCurrentTrack(tracks[track])
  }


  return (
    <div className="App">
      <DisplayTrack 
          currentTrack={currentTrack} 
          audioRef={audioRef}
      />
      
      <Controls 
          currentTrack={currentTrack} 
          audioRef={audioRef} 
          onTrack={handleTrack} 
          
      />

      <ProgressBar 
          progressBarRef={progressBarRef}
          audioRef={audioRef}
      />
    </div>
  );
}

export default AudioPlayer;
