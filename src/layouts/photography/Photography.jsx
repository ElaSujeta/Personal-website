import React from 'react';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import "./photography.css"


const photos = [
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
    { src: require('./images/kulinarna/1.JPG'), width: 4, height: 2.5 },

    { src: require('./images/natura/14.jpg'), width: 3, height: 2 },
    { src: require('./images/natura/13.jpg'), width: 3, height: 2 },
    { src: require('./images/natura/12.jpg'), width: 3, height: 2 },
    { src: require('./images/natura/11.jpg'), width: 3, height: 2 },
    { src: require('./images/natura/10.jpg'), width: 3, height: 2 },
    { src: require('./images/natura/9.JPG'), width: 3, height: 2 },
    { src: require('./images/natura/8.JPG'), width: 3, height: 2 },
    { src: require('./images/natura/7.JPG'), width: 3, height: 2 },
    { src: require('./images/natura/6.jpg'), width: 4, height: 3  },
    { src: require('./images/natura/5.jpg'), width: 3, height: 2  },
    { src: require('./images/natura/4.JPG'), width: 3, height: 2  },
    { src: require('./images/natura/3.JPG'), width: 4, height: 2.5  },
    { src: require('./images/natura/2.JPG'), width: 4, height: 2.5 },
    { src: require('./images/natura/1.JPG'), width: 3, height: 2 },
    
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
                    <h4 className='gallery-header'></h4>
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
