import React, {Component} from 'react';
import './App.css';

class SearchForm extends Component{
  render(){
    return(
      <form className='searchBox'>
      <input className="searchForm" type="search" placeholder=" Search on youtube" aria-label="Search" />
      <button className="searchButton" type="submit">Search</button>
      </form>

    )
  }
}

export default SearchForm;
