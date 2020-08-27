import React, { Component } from 'react';
import logo from './hellofresh-logo.svg';
import { connect } from 'react-redux';
import { fetchRecipes } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps({ recipes: recipesReducer }) {
  return { recipes: recipesReducer.recipes };
}

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(App);
