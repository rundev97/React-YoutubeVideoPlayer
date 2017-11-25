import React, { Component } from 'react';
import logo from './youtube.jpg';
import './App.css';
import YoutubeApiSearch from 'youtube-api-search';
import VideoList from './videoList';
import SearchForm from './searchForm';
import VideoDetail from './videoDetail';


class App extends Component {

  constructor(props){
    super(props);

    this.state = { videos: [] };

    console.log('===========Initial state===============');
    console.log(this.state);

    const API_KEY = 'AIzaSyC8lT8WnUx5bY8NSIKDaLLd5foR5Oue7qY';
    YoutubeApiSearch({key: API_KEY, term:'coldplay'}, data => {
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
          <nav className="navigation">
            <a href='/'><img className='logo' src={logo} alt="logo" /></a>
            <SearchForm />
          </nav>
        </header>

        <div className='container'>
          <div className='row'>
            <VideoDetail />
            <VideoList  videos={this.state.videos}/>

          </div>
        </div>



      </div>
    );
  }
}

export default App;
