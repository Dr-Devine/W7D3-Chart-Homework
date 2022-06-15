import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {

    const songList = songs.map((song, index) => {
        return <Song song={song.feed.entry} key={index}/>
    });

    return (
        <div>
            <ul>
                {songList}
            </ul>
        </div>
    )
}

export default SongList;