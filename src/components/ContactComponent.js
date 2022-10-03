import React, { Component } from 'react';

function Contact()  {
    return (
        <div className="container">
            <div className="row align-items-end">
                <div className="col-6 offset-3 text-center">
                    <p className="heading-text">Want to contact me?</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center paragraph-text">
                    <address>
                        114 Fenway, Apt 6<br />
                        Boston, MA 02115<br />
                        <i className="fa fa-phone"></i> 6176768058<br />
                        <a href="mailto: tiantianshi08@gmail.com" className="link-dark">
                            <i className="fa fa-envelope"></i>
                            tiantianshi08@gmail.com<br />
                        </a>
                    </address>
                </div>
            </div>
        </div>
    );
}

export default Contact;
