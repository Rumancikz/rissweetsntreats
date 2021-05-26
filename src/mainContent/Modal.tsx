import React from 'react';
import './modal.css';

// This component returns a modal that can close itself by updating it's paren't state

export default function Modal({
  src,
  desc,
  closeModal,
}: {
  src: string;
  desc: string;
  closeModal: any;
}) {
  return (
    <div className="bg">
      <div className="modal" onClick={closeModal}>
        <img onClick={closeModal} src={src} alt="" />
        {desc !== '' && desc !== null ? (
          <div className="desc">
            <p>{desc}</p>
          </div>
        ) : null}
        <button className="x" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}
