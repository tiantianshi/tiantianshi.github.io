import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import PhotoGallery from './components/PhotoGalleryComponent';
import Contact from './components/ContactComponent';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
