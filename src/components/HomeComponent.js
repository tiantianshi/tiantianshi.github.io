import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PhotoGallery from './PhotoGalleryComponent';
import Contact from './ContactComponent';

class Home extends Component {

    render() {

        const traits = this.props.traits.map((trait) => {
            return (
              <div className="col-lg-4 col-md-10 mb-4 mb-lg-0 text-center">
                  <h1 className="heading-text highlight">
                      {trait.heading}
                  </h1>
                  <span className="paragraph-text">
                      {trait.description}
                  </span>
              </div>
            );
        });


        return(
            <div className="container">
                <div className="row" style={{height:"40px"}}>
                </div>
                <div className="row jumbotron">
                    <div className="col-12 col-md-5 mb-5">
                        <h1 className="jumbofont">Hello<span style={{color: "#ffe6e6"}}>.</span></h1>
                        <span className="paragraph-text">My name is Tiantian Shi. I am a law student and the best girlfriend ever.</span> <br /><br />
                        <div className="d-flex justify-content-center">
                            <a className="paragraph-text text-decoration-none" href="assets/ttresume.pdf">[ Resume ]</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 offset-md-1 mb-2">
                        <img className="img-fluid" src="assets/images/profile-photo.jpeg" width="100%" alt="tiantian" />
                    </div>
                </div>
                <div id="about-row-start" className="row" style={{height:"100px"}}>
                    <div className="col-md-2 offset-md-10 d-none d-md-block">
                        <a className="paragraph-text text-decoration-none" href="#about-row-start">SCROLL<i className="fa fa-arrow-down"></i></a>
                    </div>
                </div>
                <div className="row pe-5 ps-5 about-row">
                    {traits}
                </div>
                <div className="row" style={{height:"150px"}}>
                </div>
                <div className="row">
                    <PhotoGallery images={this.props.images}/>
                </div>
                <div className="row" style={{height:"150px"}}>
                </div>
                <div className="row">
                    <Contact />
                </div>
            </div>
        );
    }
}

export default Home;
