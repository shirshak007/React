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
                <p>
                    Select a Song
            </p>
            </div>
        );

    }
    return (
        <div>
            <h3>
                Details:
            </h3>
            <p>
                Title: {songSelectedFromButton.title}
                <br />
                Duration: {songSelectedFromButton.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { songSelectedFromButton: state.selectedSong } //reducer index selectedSong
};

export default connect(mapStateToProps)(SongDetail);
