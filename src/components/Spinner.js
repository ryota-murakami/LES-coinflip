import React from 'react';
import '../styles/spinner.scss';
import { Modal, Image } from 'react-bootstrap';

import SpinnerIcon from '../assets/loading-buffering.gif';

function Spinner(props) {
  const { loadingProps, setLoadingFunc } = props;

  const show = loadingProps;
  const setShow = setLoadingFunc;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show}>
        <Image src={SpinnerIcon} />
      </Modal>
    </>
  );
}

export default Spinner;