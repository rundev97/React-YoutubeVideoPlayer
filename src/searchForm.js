import React, {Component} from 'react';
import './App.css';

class SearchForm extends Component{

  constructor(props){
    super(props);

    this.state = { term: '' };
  }



  render(){
    return(
      <form className='searchBox'>
        <input className="searchForm" type="search" placeholder=" Search on youtube" value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
        <button className="searchButton" type="submit">Search</button>
      </form>

    )
  }

  onInputChange(term){

    this.setState({ term: term});
    this.props.onSearchTermChange(term);


  }

}

export default SearchForm;
