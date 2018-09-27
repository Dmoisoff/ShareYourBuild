import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Link, withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.redirect = this.redirect.bind(this);
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  redirect() {
    if (this.state.search !== "") {
      this.props.history.push(`/projects/search/${this.state.search}`);
      this.setState({ search: "" });
    }
  }

  render() {
    return (
      <div>
        <form
          className="search-bar-form"
          id="search"
          onSubmit={e => {
            e.preventDefault();
            this.redirect();
          }}
        >
          <input
            form="search"
            type="text"
            placeholder="Let's Build ..."
            name="search2"
            className="search-bar-input"
            onChange={e => this.updateSearch(e)}
            onClick={e => e.preventDefault()}
            value={`${this.state.search}`}
          />
          <i
            className="fas fa-search search-bar-button"
            onClick={e => {
              e.preventDefault();
              this.redirect();
            }}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
