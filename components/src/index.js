import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


function getTime() {
    return (new Date()).toLocaleTimeString();
}
function getDate() {
    return (new Date()).toLocaleDateString();
}

const App = () => {
    return (
        <div     className='ui container comments'>
           
            <ApprovalCard>
                <CommentDetail author="Sam" time={getTime()} date={getDate()} img={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="John" time={getTime()} date={getDate()} img={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Ron" time={getTime()} date={getDate()} img={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));