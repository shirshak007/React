//Action Creator

export const selectSong = (songs) => //NAMED EXPORT
{
    return { //Action
        type: 'SONG_SELECTED',
        payload: songs
    };
};

/*export default selectSong; //DEFAULT EXPORT ...we will use NAMED EXPORT for different Functions*/