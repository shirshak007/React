import React, { Component } from 'react'; //as an eg both named and default is shown
import { connect } from 'react-redux'; //only SongList needs to create connect function
import { selectSong } from '../actions'; //Named Export so curly braces //no need to put '../actions/index'

class SongList extends Component //if {Component} was not imported i have to put React.Component
{
    renderList() //helper function
    {
        return this.props.songs.map((aSong) => { //map produce array
            return ( //this one return some jsx to mapping func
                <div className="item" key={aSong.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(aSong)}
                        >
                            Select
                            </button>
                    </div>
                    <div className="content">
                        {aSong.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

//by convention
const mapStateToProps = (state) => //state is named so that easy to understand you can use anything
{
    return {
        songs: state.songs
        /*a key which is a prop to our component SongList...
        This was declared in combineReducers*/
    };
};

//export default SongList;    //PREVIOUSLY  
/*
export default connect(mapStateToProps)(SongList); //() returns first func ()invokes the func we got returned
*/
/*
export default connect(mapStateToProps,{
    selectSong:selectSong
})(SongList);
*/
export default connect(mapStateToProps, { selectSong })(SongList);
/*connect take action that gets returned and throw it into dispatch func*/