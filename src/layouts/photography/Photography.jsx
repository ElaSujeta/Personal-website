import React from 'react';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import "./photography.css"


const photosCulinary = [
    { src: require('./images/kulinarna/13.JPG'), width: 4, height: 2.5 },
    { src: require('./images/kulinarna/12.JPG'), width: 4, height: 2.5 },
    { src: require('./images/kulinarna/11.JPG'), width: 4, height: 2.5 },
    { src: require('./images/kulinarna/10.JPG'), width: 4, height: 3 },
    { src: require('./images/kulinarna/9.JPG'), width: 4, height: 3  },
    { src: require('./images/kulinarna/8.JPG'), width: 3, height: 2  },
    { src: require('./images/kulinarna/7.JPG'), width: 3, height: 2  },
    { src: require('./images/kulinarna/6.JPG'), width: 4, height: 2.5  },
    { src: require('./images/kulinarna/5.JPG'), width: 4, height: 2.5 },
    { src: require('./images/kulinarna/4.JPG'), width: 3, height: 2 },
    { src: require('./images/kulinarna/3.JPG'), width: 3, height: 2 },
    { src: require('./images/kulinarna/2.JPG'), width: 3, height: 2 },
    { src: require('./images/kulinarna/1.JPG'), width: 4, height: 2.5 }
];

const photosWater = [
    { src: require('./images/woda/10.jpg'), width: 3, height: 2 },
    { src: require('./images/woda/9.JPG'), width: 3, height: 2 },
    { src: require('./images/woda/8.JPG'), width: 3, height: 2 },
    { src: require('./images/woda/7.JPG'), width: 3, height: 2 },
    { src: require('./images/woda/6.jpg'), width: 4, height: 3  },
    { src: require('./images/woda/5.jpg'), width: 3, height: 2  },
    { src: require('./images/woda/4.JPG'), width: 3, height: 2  },
    { src: require('./images/woda/3.JPG'), width: 4, height: 2.5  },
    { src: require('./images/woda/2.JPG'), width: 4, height: 2.5 },
    { src: require('./images/woda/1.JPG'), width: 3, height: 2 }
];

const photosPortraits = [
    { src: require('./images/portrety/2.jpg'), width: 5, height: 7 },
    { src: require('./images/portrety/5.jpg'), width: 5, height: 7 },
    { src: require('./images/portrety/4.jpg'), width: 4, height: 2.5 },
    { src: require('./images/portrety/1.jpg'), width: 5, height: 7 },
    { src: require('./images/portrety/3.jpg'), width: 4, height: 2.5 }
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
                    <Gallery photos={photosCulinary} onClick={this.openLightbox} />
                    <Lightbox images={photosCulinary}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                    />
                </section>

                <section className='gallery-wrapper'>
                    <h4 className='gallery-header'>Żywioł wody</h4>
                    <Gallery photos={photosWater} onClick={this.openLightbox} />
                    <Lightbox images={photosWater}
                              onClose={this.closeLightbox}
                              onClickPrev={this.gotoPrevious}
                              onClickNext={this.gotoNext}
                              currentImage={this.state.currentImage}
                              isOpen={this.state.lightboxIsOpen}
                    />
                </section>

                <section className='gallery-wrapper'>
                    <h4 className='gallery-header'>Portrety</h4>
                    <Gallery photos={photosPortraits} onClick={this.openLightbox} />
                    <Lightbox images={photosPortraits}
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
