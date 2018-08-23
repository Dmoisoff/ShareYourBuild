import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Link, withRouter } from 'react-router-dom';


class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ''
    };
  }


  updateSearch(e){
    this.setState({search: e.target.value});
  }


  button(){
    if(this.state.search === ''){
      return <Link to={{pathname:'/'}}>
          <i className="fas fa-search search-bar-button"></i>
          </Link>;
    }else{
      return <Link to={{pathname:`/projects/search/${this.state.search}`, state: this.state.search}} onClick={ () => {
          debugger
          this.setState({search: ''});}}>
          <i className="fas fa-search search-bar-button"></i>
          </Link>;
    }
  }


  render(){

    return(
      <div>
        <form className='search-bar-form' id='search' onSubmit={(e) => {e.preventDefault();}}>
          <input form='search' type="text" placeholder="Let's Build ..." name="search2" className='search-bar-input' onChange={(e) => this.updateSearch(e)} onClick={(e) => e.preventDefault()} value={`${this.state.search}`} />
          {this.button()}
        </form>
      </div>
    );
  }
}


export default SearchBar;
