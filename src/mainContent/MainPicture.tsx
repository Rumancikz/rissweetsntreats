import React from 'react';
import './mainPicture.css';
import {IModalProps} from '../App';
import ClickImg from './ClickImg';

// This component return the three pictures that showcase some of the client's products
// Each image is a ClickImg component that can open into a modal

export default function MainPicture({modalProps}: {modalProps: IModalProps}) {
  const cakeWedding = './photos/Weddings/CakeWedding.jpg';
  const CakeFlowers2 = './photos/Weddings/CakeFlowers2.jpg';
  const CakeFlowers = './photos/Weddings/CakeFlowers.jpg';
  return (
    <div className="mainPicture">
      <ClickImg
        modalProps={modalProps}
        src={cakeWedding}
        alt="Wedding Cake"
        desc="Wedding Cake with Royal Icing"
      />
      <ClickImg
        modalProps={modalProps}
        src={CakeFlowers2}
        alt="Cake with Flowers"
        desc="Small Round Cake with Flowers on it"
      />
      <ClickImg
        modalProps={modalProps}
        src={CakeFlowers}
        alt="Cake with Pearls and Flowers"
        desc="Small Round Cake with Pink Flowers on it"
      />
    </div>
  );
}
