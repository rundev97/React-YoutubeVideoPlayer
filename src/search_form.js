import React, {Component} from 'react';

class SearchForm extends Component{

  constructor(props){
    super(props);

    this.state = { term: 'madona'}
  }

  render(){
    return(
      <div>
        <form className='searchBox'>
          <input value = '' className="searchForm" type="search" placeholder=" Search on youtube" aria-label="Search" )}/>
          <button className="searchButton" type="submit">Search</button>
        </form>
      </div>

    );
  }

}

export default SearchForm;
