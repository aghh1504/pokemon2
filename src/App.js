import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import PokeList from './PokeList.jsx';
require('./scss/main.scss');

export default class App extends Component {
      render() {
        return (
          <div className="wraper">
            <Header welcomeText={"Welcome to the Pokedex!"}/>
            <PokeList />
        </div>
      )
    }
}
