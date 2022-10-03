import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay} from 'reactstrap';
import { Modal, ModalBody, ModalHeader} from 'reactstrap';
import Logo from './LogoComponent';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators,
        CarouselCaption, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function ModalImageToRender({image}) {
    if (image == null) {
        return (<div></div>);
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <Media>
                        <Media object className="img-fluid modal-img" src={image.src} alt={image.altText}/>
                        <Media body className="paragraph-text text-center mt-1">
                            {image.description}
                        </Media>
                    </Media>
                    </div>
                </div>
            </div>
        );
    }
}


class PhotoGallery extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.setModalImage = this.setModalImage.bind(this);
        this.state = {
            isModalOpen: false,
            modalImage: null
        };
    }

    setModalImage(image) {
        this.setState({
            modalImage: image
        });
        this.toggleModal();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
        const gallery = this.props.images.map((value, index, elements) => {
            if (index >= elements.length - 1) {
                return;
            }

            if (index % 2 == 1) {
                return;
            }

            return (
                <div class="col-lg-4 col-md-10 mb-4 mb-lg-0 ">
                    <img
                    key={elements[index].id}
                    src={elements[index].src}
                    class="gallery-img w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                    onClick={() => this.setModalImage(elements[index])}/>
                    <img
                    key={elements[index + 1].id}
                    src={elements[index + 1].src}
                    class="gallery-img w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                    onClick={() => this.setModalImage(elements[index + 1])}/>
                </div>
            );
        });

        return (
            <div className="container">
                <div class="row mb-4">
                    <div className="col-6 offset-3 text-center">
                        <p><Link className="heading-text nav-link text-decoration-none" to="/photos">Photography</Link></p>
                    </div>
                </div>
                <div class="row pe-5 ps-5">
                    {gallery}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="border-0" toggle={this.toggleModal}></ModalHeader>
                    <ModalBody>
                        <ModalImageToRender image={this.state.modalImage} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default PhotoGallery;
