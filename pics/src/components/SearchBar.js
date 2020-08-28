import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'search here...' };

    /*USE ARROW FUNCTION  then use
    previously..]
    onFormSubmit=(event) =>    
    {
        event.preventDefault();
        console.log(this.state.term);
    }
    .. in render

    <form onSubmit={this.onFormSubmit} className="ui form"> in render
    
    */
    onFormSubmit(event) 
    {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(event)=>this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label htmlFor="text">Image Search</label>
                        <input type="text" id="text" value={this.state.term}
                        onClick={(e) => this.setState({ term: ''})} 
                        onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;