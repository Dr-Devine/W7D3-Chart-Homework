import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';

const ChartBox = () => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = function(){
      fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(response => response.json())
      .then(songs => setSongs(songs.feed.entry.song["im:name"]))
    }

  return (
      <div>
          <h2>A box</h2>
          <ul>
              <SongList songs={songs}/>
          </ul>
      </div>
  )
}


export default ChartBox;