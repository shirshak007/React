import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';


  className App extends React.Component {
    /*
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID zEhCb04AenGnttYQDTQZy5XxeOxGU-Ref1ypMgBduDE'
            }

        }).then((response)=>{
            console.log(response.data.results);
        });
    } 
    updated below...
    async onSearchSubmit(term) {
       const response=await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID zEhCb04AenGnttYQDTQZy5XxeOxGU-Ref1ypMgBduDE'
            }

        });
            this.setState({images: response.data.results});
        
    } this will show error because of this.setState(...) so binding need to be done
    */
    state= {images: []};

    onSearchSubmit=async (term)=> {
       const response=await Unsplash.get('/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID zEhCb04AenGnttYQDTQZy5XxeOxGU-Ref1ypMgBduDE'
            }

        });
            this.setState({images: response.data.results});
        
    }
    render() {
        return (
            <div     className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
export default App;