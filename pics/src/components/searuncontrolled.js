import React from 'react';

  class SearchBar extends React.Component
{
    onInputChange(event)
    {
        console.log(event.target.value);
        //<input type="text" id="text" onChange={(event)=>console.log(event.target.value)} />
    }

    render()
    {
        return (
            <div     className="ui segment">
                <form     className="ui form">
                    <div     className="field">
                        <label htmlFor="text">Image Search</label>
                    <input type="text" id="text" onChange={this.onInputChange} />
                    </div>
                </form>
                </div>
        );
    }
}


export default SearchBar;