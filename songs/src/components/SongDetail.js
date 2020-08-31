//import React, { Component } from 'react'; 
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ songSelectedFromButton }) => {
    if (!songSelectedFromButton) { //when no song selected
        return (
            <div>
                <h3>
                    Details:
                    </h3>
                 
                    Select a Song
              
            </div>
        );

    }
    return (
        <div>
            <h3>
                Details:
            </h3>
             
                Title: {songSelectedFromButton.title}
                <br />
                Duration: {songSelectedFromButton.duration}
              
        </div>
    );
};

const mapStateToProps = (state) => {
    return { songSelectedFromButton: state.selectedSong } //reducer index selectedSong
};

export default connect(mapStateToProps)(SongDetail);
