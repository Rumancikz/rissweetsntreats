import React from 'react';
import imageLoader from '../images';
import ClickImg from './ClickImg';
import {IModalProps} from '../App';
import './gallery.css';

// This component loads the path, description, and alt of each image and then loops through each one.
// Each image's information is passd to the ClickImg component

export default function Gallary({modalProps}: {modalProps: IModalProps}) {
  const images = imageLoader();
  const assoretedCakes = images[0];
  const cookies = images[1];
  const cupcakes = images[2];
  const weddings = images[3];
  return (
    <div className="gallery" id="gallery">
      <h1>Assorted Cakes</h1>
      <div className="assortedCakes innerGallery">
        {assoretedCakes.map(({src, desc, alt}) => {
          return (
            <ClickImg
              key={src}
              className="galleryImg"
              src={src}
              desc={desc}
              alt={alt}
              modalProps={modalProps}
            />
          );
        })}
      </div>
      <h1>Cookies</h1>
      <div className="cookies innerGallery">
        {cookies.map(({src, desc, alt}) => {
          return (
            <ClickImg
              key={src}
              className="galleryImg"
              src={src}
              desc={desc}
              alt={alt}
              modalProps={modalProps}
            />
          );
        })}
      </div>
      <h1>Cupcakes</h1>
      <div className="cupcakes innerGallery">
        {cupcakes.map(({src, desc, alt}) => {
          return (
            <ClickImg
              key={src}
              className="galleryImg"
              src={src}
              desc={desc}
              alt={alt}
              modalProps={modalProps}
            />
          );
        })}
      </div>
      <h1>Weddings</h1>
      <div className="weddings innerGallery">
        {weddings.map(({src, desc, alt}) => {
          return (
            <ClickImg
              key={src}
              className="galleryImg"
              src={src}
              desc={desc}
              alt={alt}
              modalProps={modalProps}
            />
          );
        })}
      </div>
    </div>
  );
}
