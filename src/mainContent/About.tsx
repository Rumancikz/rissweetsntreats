import React from 'react';
import './about.css';
import {IModalProps} from '../App';
import ClickImg from './ClickImg';

//  This component returns a description, image, and contact section for the client

export default function About({modalProps}: {modalProps: IModalProps}) {
  return (
    <div className="about">
      <p>
        Hey friends, my name is Larissa and I’m the face behind Ris’ Sweets &
        Treats. I’m an Occupational Therapist by day and baker by night, always
        trying new recipes for cookies, pies, cakes, and everything in between!
        I started this journey over 16 years ago when my Memaw took me under her
        wing and showed me all there is to know about cake decorating. Ever
        since, I’ve LOVED the creative outlet and how it affords me the
        opportunity to help others celebrate the most important milestones in
        their lives! I’ve done weddings, kid and adult birthday parties, baby
        showers, gender reveals, as well as graduation and anniversary parties.
        I’m ALWAYS open to trying new flavor combos and designs, so message me
        with your requests and together we’ll design the perfect combination of
        baked goods unique to your event. I look forward to working with you!
      </p>
      <div className="inner">
        <ClickImg
          modalProps={modalProps}
          className="pic"
          id="contact"
          src="./photos/risPic.jpg"
          alt="Larissa Miller"
          desc="Larissa Miller"
        />
        <div className="innerDiv">
          <p>Contact me for more details:</p>
          <p>
            Larissa Miller:{' '}
            <a href="mailto:lam2811@comcast.net">lam2811@comcast.net</a>
          </p>
        </div>
      </div>
    </div>
  );
}
