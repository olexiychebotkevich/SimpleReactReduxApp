import React, { Component } from 'react';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-xl-6">
        <CreatePost/>
        </div>
        <div className="col-xl-6">
       <PostList/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
