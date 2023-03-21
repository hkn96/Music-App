import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './data';
import { useState } from 'react';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
