import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 paragraph-text text-center">
                    <p>© Copyright 2022 Andrew Carp Web Design</p>
                </div>
                <div className="col-12 offset-md-4 col-md-2 text-center">
                    <Link className="me-3 paragraph-text text-decoration-none" to="/home">Home</Link>
                    <Link className="me-3 paragraph-text text-decoration-none" to="/about">About</Link>
                    <Link className="me-3 paragraph-text text-decoration-none" to="/photos">Photos</Link>
                    <Link className="me-3 paragraph-text text-decoration-none" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;
