import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SectionList from './components/SectionList';

class App extends Component {
  render() {
    return (
      <div>
        <Header
          name="Juan Carlos Hazbun"
          title="Ingeniero de Sistemas"
          university="Universidad del Norte"
          address="Carrera 52 # 79 - 42"
        />
      <SectionList />
      </div>
    );
  }
}

export default App;
