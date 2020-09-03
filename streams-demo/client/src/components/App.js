import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

/*TEST
const PageOne = () => {
    return (
        <div>
            PageOne
            { <a href="/pagetwo">GotoPageTwo</a>Dont use Anchor tag...BAD!! }
            <Link to="/pagetwo">GotoPageTwo</Link>
        </div>
    );
};
const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to="/">GotoPageOne </Link>
            <button>
                ClickMe
                </button>
        </div>
    );
};
*/

const App = () => {
    return (
        <div     className="ui container">
            
            <BrowserRouter>
            <div>
            <Header />{/*Because we can not use Link outside Router..so move header inside BrowserRouter*/}
                {/* exact is important. And this is how to add comment in JSX 
                <Route path='/' exact component={PageOne} /> 
                <Route path='/pagetwo' exact component={PageTwo} />*/}
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit' exact component={StreamEdit} />
                <Route path='/streams/delete' exact component={StreamDelete} />
                <Route path='/streams/show' exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;