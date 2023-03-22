import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const getTime = (time) => {
    return Math.floor(time / 60) + ':' + Math.floor(time % 60);
  };
  return (
    <div className='player'>
      <div className='time-control'>
        <p> {getTime(songInfo.currentTime)} </p>
        <input type='range' />
        <p> {getTime(songInfo.duration)} </p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          className='skip-back'
          icon={faAngleLeft}
          size='2x'
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className='play'
          icon={faPlay}
          size='2x'
        />

        <FontAwesomeIcon
          className='skip-forward'
          icon={faAngleRight}
          size='2x'
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
