import React from 'react';
import {IModalProps} from '../App';
import MobileCheck from './MobileCheck';

// This components returns an image with an onClick hanlder that triggers a modal
// It reciever the src and alt for the image and dynamically fills it.
// The description is styled under each image if it is not empty ('')

export default function ClickImg({
  src,
  alt,
  desc,
  modalProps,
  className,
  id,
}: {
  src: string;
  alt: string;
  desc: string;
  modalProps: IModalProps;
  className?: string;
  id?: string;
}) {
  const copysrc = src;
  const splitStr = copysrc.split('photos/');
  let finalsrc = copysrc;
  // If it is a screen that less than or equal to a 2560px (4k screen) render the properly sized images
  const mobile = MobileCheck();
  if (mobile <= 2560) {
    finalsrc = splitStr[0] + 'photos/Desktop/' + splitStr[1];
  }
  // If it is a screen that less than or equal to a 468px (Large Phone) render the properly sized images
  if (mobile <= 468) {
    finalsrc = splitStr[0] + 'photos/Mobile/' + splitStr[1];
  }

  const modData = {
    src: src,
    desc: desc,
  };
  return (
    <img
      className={className}
      id={id}
      src={finalsrc}
      alt={alt}
      onClick={() => {
        modalProps.openModal();
        modalProps.setModalData(modData);
      }}
    />
  );
}
