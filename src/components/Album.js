import React from 'react';
import ImageGallery from 'react-image-gallery';

import rocas01 from './photos/rocasfoto01.jpg';



class Album extends React.Component {

  render() {

    const images = [
      {
        original: {rocas01},
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: {rocas01},
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: {rocas01},
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
        <div>
            <ImageGallery items={images} />
        </div>
    );
  }
}

export default Album;