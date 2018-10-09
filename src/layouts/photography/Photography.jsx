import React from 'react';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import "./photography.css"


const photos = [
    { src: require('./images/13.JPG'), width: 4, height: 2.5 },
    { src: require('./images/12.JPG'), width: 4, height: 2.5 },
    { src: require('./images/11.JPG'), width: 4, height: 2.5 },
    { src: require('./images/10.JPG'), width: 4, height: 3 },
    { src: require('./images/9.JPG'), width: 4, height: 3  },
    { src: require('./images/8.JPG'), width: 3, height: 2  },
    { src: require('./images/7.JPG'), width: 3, height: 2  },
    { src: require('./images/6.JPG'), width: 4, height: 2.5  },
    { src: require('./images/5.JPG'), width: 4, height: 2.5 },
    { src: require('./images/4.JPG'), width: 3, height: 2 },
    { src: require('./images/3.JPG'), width: 3, height: 2 },
    { src: require('./images/2.JPG'), width: 3, height: 2 },
    { src: require('./images/1.JPG'), width: 4, height: 2.5 }
];


export class Photography extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    render() {
        return (
            <div>
                <section className='gallery-wrapper'>
                    <h4 className='gallery-header'>Fotografia kulinarna</h4>
                    <Gallery photos={photos} onClick={this.openLightbox} />
                    <Lightbox images={photos}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                    />
                </section>
            </div>
        )
    }
}
