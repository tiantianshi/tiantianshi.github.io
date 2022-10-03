import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


/*
class PhotoGallery extends Component({props}) {
    constructor(props) {
      super(props);

      this.toggleModal = this.toggleModal.bind(this);
      this.state = {
          isModalOpen: false,
      };
    }


    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }


    render() {
    return(
        <div>
        <div class="container">
            <div class="row mb-4">
                <div className="col-6 offset-3 text-center">
                    <p className="heading-text">Photography</p>
                </div>
            </div>
            <div class="row pe-5 ps-5">
                <div class="col-lg-4 col-md-10 mb-4 mb-lg-0 ">
                    <img
                    src={images.src}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                    onClick={this.toggleModal()}
                    />

                    <img
                    src={images.src}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                    src="assets/images/cartoon.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                    />

                    <img
                    src="assets/images/view.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                    src="assets/images/wedding.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                    />

                    <img
                    src="assets/images/nh.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Yosemite National Park"
                    />
                </div>
                <div className="row" style={{height:"150px"}}>
                </div>
            </div>
        </div>
        <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader className="border-0" toggle={this.toggleModal}><Logo /></ModalHeader>
            <ModalBody>
            </ModalBody>
        </Modal>
    </div>
    );
    }
}
*/
