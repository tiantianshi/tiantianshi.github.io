import React, { Component } from 'react';
import { List, Navbar, NavbarBrand, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from './LogoComponent';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css'

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <Navbar className="navbar-expand-md">
                        <NavbarBrand href="/"><Logo /></NavbarBrand>
                        <a onClick={this.toggleModal}>
                            <span className="paragraph-text menu">MENU <span className="fa fa-bars fa-lg" onClick={this.toggleNav} ></span></span>
                        </a>
                    </Navbar>
                </div>
                <Modal className="modal-fullscreen" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="border-0" toggle={this.toggleModal}><Logo /></ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-4 offset-8">
                                    <List type="unstyled">
                                        <li><Link className="nav-font nav-link text-decoration-none" to="/home" onClick={this.toggleModal}>Home</Link></li>
                                        <li><Link className="nav-font nav-link text-decoration-none" to="/about" onClick={this.toggleModal}>About</Link></li>
                                        <li><Link className="nav-font nav-link text-decoration-none" to="/photos" onClick={this.toggleModal}>Photos</Link></li>
                                        <li><Link className="nav-font nav-link text-decoration-none" to="/contact" onClick={this.toggleModal}>Contact</Link></li>
                                    </List>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;
