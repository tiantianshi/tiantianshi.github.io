import React, { Component  } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import PhotoGallery from './PhotoGalleryComponent';
import Contact from './ContactComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { IMAGES } from '../shared/images.js';
import { ABOUT } from '../shared/about.js';
import { TRAITS } from '../shared/traits.js';


class Main extends Component {


  render() {
    return (
      <div>
        <Header />
          <Routes>
              <Route path='/*' element={<Home traits={TRAITS} images={IMAGES.slice(0, Math.max(6, IMAGES.length))} />} />
              <Route path='/about' element={<About about={ABOUT}/>} />
              <Route path='/photos' element={<PhotoGallery images={IMAGES}/>} />
              <Route path='/contact' element={<Contact/>} />
          </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;

