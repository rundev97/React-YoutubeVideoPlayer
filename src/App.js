import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubeApiSearch from 'youtube-api-search';
import VideoList from './videoList';


class App extends Component {

  constructor(props){
    super(props);

    this.state = { videos: [] };

    console.log('===========Initial state===============');
    console.log(this.state);

    const API_KEY = 'AIzaSyC8lT8WnUx5bY8NSIKDaLLd5foR5Oue7qY';
    YoutubeApiSearch({key: API_KEY, term:'toronto'}, data => {
      console.log('===========Fetched Data===============');
      console.log(data);
      this.setState({videos: data});
      console.log('===========State===============');
      console.log(this.state.videos);

    } )

  }



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <VideoList videos={this.state.videos}/>

      </div>
    );
  }
}

export default App;
