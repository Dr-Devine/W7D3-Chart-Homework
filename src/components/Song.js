import React from 'react';

const Song = ({song}) => {

    return <li>{song.feed.entry.song["im:name"]}</li>
}

export default Song;