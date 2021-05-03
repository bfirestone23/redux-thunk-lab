import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats();
  }

  handleLoading = () => {
    if(this.props.loading) {
      return <div><h3>Loading...</h3></div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    console.log("catPics prop", this.props.catPics)
    console.log("loading", this.props.loading)
    return (
      <div>
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { catPics: state.cats, loading: state.loading };
}

const mapDispatchToProps = dispatch => {
  return { fetchCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

