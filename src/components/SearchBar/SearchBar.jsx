import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count ",
    };
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this)
  }

  getSortedByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) return "active";
    else return "";
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value })
    
  }

  handleLocationChange(e) {
    this.setState({location:e.target.value})
  }

  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault()
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          onClick={(e) => this.handleSortByChange(sortByOptionValue, e)}
          className={this.getSortedByClass(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
      //deuxieme option si je ne bind pas la méthode dans le constructeur. Cela assure que c'est la bonne valeur qui est passée dans la fonction.
      // return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this,sortByOptionValue)} className={this.getSortedByClass(sortByOptionValue)}>{sortByOption}</li>
    });
  }

  render() {

    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={(e)=>this.handleTermChange(e)}/>
          <input placeholder="Where?" onChange={(e) => this.handleLocationChange(e)} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={(e)=>this.handleSearch(e)}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
