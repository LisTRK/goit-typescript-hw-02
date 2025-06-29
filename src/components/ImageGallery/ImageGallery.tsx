import { UnsplashImage } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps{
  imageGallery: UnsplashImage[];
  onClickImage: (img: UnsplashImage) => void;
}

export default function ImageGallery({ imageGallery, onClickImage }: ImageGalleryProps) {
  const render = imageGallery.map((img: UnsplashImage) => {
    return (
      <li
        key={img.id}
        className={css.imageItem}
        onClick={() => onClickImage(img)}
      >
        <ImageCard card={img} />
      </li>
    );
  });
  return <ul className={css.imageList}>{render}</ul>;
}
