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

    this.state = {
      videos: [],
      selectedVideo: null
    };
    // calling videoSearch function with an initil value
    this.videoSearch('coldplay');
  }


  videoSearch(term){

    const API_KEY = 'AIzaSyC8lT8WnUx5bY8NSIKDaLLd5foR5Oue7qY';

    YoutubeApiSearch({key: API_KEY, term: term}, data => {
      console.log('===========Fetched Data===============');
      console.log(data);

      this.setState(
        {
          videos: data,
          selectedVideo: data[0]
        }
      );

      console.log('===========State===============');
      console.log(this.state.videos);

    });


  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <nav className="navigation">
            <a href='/'><img className='logo' src={logo} alt="logo" /></a>
            <SearchForm onSearchTermChange={ term => this.videoSearch(term) }/>
          </nav>
        </header>

        <div className='container'>
          <div className='row'>

            <VideoDetail video={this.state.selectedVideo}/>

            <VideoList
              videos={this.state.videos}
              onSelectedVideo = { selectedVideo => this.setState({selectedVideo}) }
            />

          </div>
        </div>

      </div>
    );
  }
}

export default App;
