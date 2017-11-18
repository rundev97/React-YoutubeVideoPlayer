import React, {Component} from 'react';

class SearchForm extends Component{

  constructor(props){
    super(props);

    this.state = { term: ''}
  }

  render(){
    return(
      <div>
        <form className='searchBox'>
          <input value = {this.state.term} className="searchForm" type="search" placeholder=" Search on youtube" aria-label="Search" onChange={ event => this.setState({term: event.target.value})}/>
          {console.log(this.state.term)}
          <button className="searchButton" type="submit">Search</button>
        </form>
      </div>

    );
  }

}

export default SearchForm;
