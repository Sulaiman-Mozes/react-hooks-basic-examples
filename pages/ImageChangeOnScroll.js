import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll'


const ImageChangeOnScroll = () => (
    <>
        <ImageToggleOnScroll primaryImg="/static/img/flower-1.jpg" secondaryImg="/static/img/flowers-2.jpg" />
        <ImageToggleOnScroll primaryImg="/static/img/animals.jpg" secondaryImg="/static/img/oranges.jpg" />
        <ImageToggleOnScroll primaryImg="/static/img/heidelberg.jpg" secondaryImg="/static/img/mountains.jpg" />
        <ImageToggleOnScroll primaryImg="/static/img/forest.jpg" secondaryImg="/static/img/road.jpg" />
    </>
)

export default ImageChangeOnScroll; 
