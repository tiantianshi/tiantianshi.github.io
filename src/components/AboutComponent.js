import React, { Component } from 'react';

function aboutSection(section)
{
    const sec = [];
    const tmp1 = [];
    for (var i = 0; i < section.content.length; i += 4) {

        const tmp2 = [];
        tmp2.push(
        );
        for (var j = i; j < i + 4 && j < section.content.length; j++) {
            tmp2.push(
                <div key={section.content[j].id} className="col-12 col-md-3">
                    <h2>{section.content[j].heading}</h2>
                    <p>{section.content[j].dates}</p>
                    <p>{section.content[j].description}</p>
                </div>
            );
        }

        tmp1.push(
            <div className="row">
                {tmp2}
            </div>
        );
    }
    sec.push(
        <div className="container">
            <div className="row">
                <div key={section.id} className="col-12 mb-3">
                    <span className="heading-text">{section.type}</span>
                </div>
            </div>
            {tmp1}
        </div>
    );

    return sec;
}

function About(about) {
    const aboutSec = [];
    for (var i = 0; i < about.about.about.length; i++) {
        aboutSec.push(aboutSection(about.about.about[i]));
    }

    return(aboutSec);
}

export default About;
