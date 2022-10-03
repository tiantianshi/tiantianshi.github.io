import React, { Component } from 'react';

function About(about) {
    const exp = about.about.experience;
    const experience = [];
    for (var i = 0; i < exp.length; i += 4) {

        const tmp = [];
        for (var j = i; j < i + 4 && j < exp.length; j++) {
            tmp.push(
                <div className="col-12 col-md-3">
                    <h2>{exp[j].heading}</h2>
                    <p>{exp[j].dates}</p>
                    <p>{exp[j].description}</p>
                </div>
            );
        }

        experience.push(
            <div className="row">
                {tmp}
            </div>
        );
    }

    const awd = about.about.awards;
    const awards = [];
    for (var i = 0; i < awd.length; i += 4) {

        const tmp = [];
        for (var j = i; j < i + 4 && j < awd.length; j++) {
            tmp.push(
                <div className="col-12 col-md-3">
                    <h2>{awd[j].heading}</h2>
                    <p>{awd[j].dates}</p>
                    <p>{awd[j].description}</p>
                </div>
            );
        }

        awards.push(
            <div className="row">
                {tmp}
            </div>
        );
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 mb-3">
                    <span className="heading-text">Experience</span>
                </div>
            </div>
            {experience}
            <div className="row" style={{height:"40px"}}>
            </div>
            <div className="row">
                <div className="col-12 mb-3">
                    <span className="heading-text">Awards</span>
                </div>
            </div>
            {awards}
        </div>
    );
}

export default About;
