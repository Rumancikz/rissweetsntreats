import React, {useState} from 'react';
import './App.css';
import About from './mainContent/About';
import CakeIcingOptions from './mainContent/CakeIcingOptions';
import Gallary from './mainContent/Gallary';
import Header from './mainContent/Header';
import Location from './mainContent/Location';
import MainPicture from './mainContent/MainPicture';
import Modal from './mainContent/Modal';
import Navbar from './mainContent/Navbar';
import Rates from './mainContent/Rates';

// This component contains the main layout and modal creation
const App = () => {
  // Creates a string varible to store the width calulation for the dynamic size of the page
  const dynamicWidth = 'calc(100%-6rem)';
  // Creates the modal state for when it opens
  const [modalData, setModalData] = useState<IModalData>({
    src: '',
    desc: '',
  });
  // Is the modal shown
  const [modal, setModal] = useState(false);
  // is the gallery shown
  const [gallery, setGallery] = useState(false);
  // Opens the modal
  const openModal = () => {
    setModal(true);
  };
  // Closes the modal
  const closeModal = () => {
    setModal(false);
  };
  const modalProps: IModalProps = {
    setModalData: setModalData,
    openModal: openModal,
  };
  // Opens the gallery
  const openGallery = () => {
    setGallery(true);
  };
  // If modal then show the modal component
  // If gallery then show gallery component
  return (
    <div className="main" style={{width: dynamicWidth}}>
      {modal ? (
        <Modal
          closeModal={closeModal}
          src={modalData.src}
          desc={modalData.desc}
        />
      ) : null}
      <Header />
      <Navbar />
      <MainPicture modalProps={modalProps} />
      <Location />
      <Rates />
      <CakeIcingOptions />
      <About modalProps={modalProps} />
      {gallery ? (
        <Gallary modalProps={modalProps} />
      ) : (
        <button
          id="gallery"
          className="galleryButton"
          onClick={() => {
            openGallery();
          }}
        >
          See Some Of My Work{' '}
          <img className="arrow" src="./photos/arrow.png" alt="" />
        </button>
      )}
    </div>
  );
};
export default App;
export interface IModalData {
  src: any;
  desc: string;
}
export interface IModalProps {
  setModalData: React.Dispatch<React.SetStateAction<IModalData>>;
  openModal: () => void;
}
