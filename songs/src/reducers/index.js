import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Shape of you', duration: '4:05' },
        { title: 'Faded', duration: '3:50' },
        { title: 'On my Way', duration: '4:43' },
        { title: 'In the End', duration: '3:46' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
songs: songsReducer, //this songs will be used in SongList
selectedSong:selectedSongReducer
});