import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { UnsplashImage } from '../../types';

const customStyles = {
  overlay: {
    backgroundColor: 'rgb(12 11 11 / 77%)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

interface ImageModalProps{
  image: UnsplashImage;
  isOpen: boolean;
  isClose:()=>void;
}

export function ImageModal({ image, isOpen, isClose }:ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={css.info}>
        <p className={css.author}>{image.user.first_name}</p>
        <a
          href={image.user.links.html}
          target="blank"
          className={css.portfolio}
        >
          View Portfolio
        </a>
      </div>

      <img
        className={css.modalImage}
        src={image.urls.regular}
        alt={image.alt_description}
        width={400}
        height={600}
      />

      <div className={css.imageInfo}>
        <span>Likes: {image.likes}</span>
        {image.user.location && <span>Location: {image.user.location}</span>}
      </div>
    </Modal>
  );
}
