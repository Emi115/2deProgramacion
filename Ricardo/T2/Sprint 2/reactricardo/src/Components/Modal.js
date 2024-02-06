import React from 'react';
import styles from './GaleriaEstilos.module.css';

const Modal = ({ imagen, cerrarModal, irImagenAnterior, irImagenSiguiente }) => (
  <div className={styles.modal}>
    <span className={styles.close} onClick={cerrarModal}>&times;</span>
    <button className={styles.modalNav} onClick={irImagenAnterior}>&lt;</button>
    <img src={imagen.urls.regular} alt={imagen.description} className={styles.modalContent} />
    <button className={styles.modalNav} onClick={irImagenSiguiente}>&gt;</button>
  </div>
);

export default Modal;
