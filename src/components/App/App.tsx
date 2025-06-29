import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from '../ImageModal/ImageModal';
import { MoonLoader } from 'react-spinners';
import { ErrorMessage } from '../ErrorMessage/ErrorMesage';
import { fetchImages } from '../../api/fun-api';
import {UnsplashImage} from '../../types/index'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [imgData, setImgData] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<UnsplashImage | null>(null);

 

  const openModalImage = (image: UnsplashImage): void => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
    setModalData(image);
  };

  const closeModalImage = (): void => {
    document.body.style.overflow = 'visible';
    setIsModalOpen(false);
    setModalData(null);
  };

  const submitForm = (newQuery: string): void => {
    setPage(1);
    setTotalPages(1);
    setIsError(false);
    setQuery(newQuery);
    setImgData([]);
  };

  const onChange = (): void => {
    setPage((prevPage:number) => prevPage + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetchImages(query, page);
        setImgData((prevImgData: UnsplashImage[]) => [...prevImgData, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (error: unknown) {
        if( error instanceof Error)
        console.log('error:', error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={submitForm} />

      {!isError ? (
        imgData.length > 0 && (
          <ImageGallery imageGallery={imgData} onClickImage={openModalImage} />
        )
      ) : (
        <ErrorMessage message={'Something went wrong...'} />
      )}

      {totalPages > page && <LoadMoreBtn onClick={onChange} />}

      {isLoading && (
        <MoonLoader
          cssOverride={{
            display: 'block',
            margin: '0 auto',
            borderColor: 'red',
          }}
        />
      )}
      {isModalOpen && modalData && (
        <ImageModal
          image={modalData as UnsplashImage}
          isClose={closeModalImage}
          isOpen={isModalOpen}
        />
      )}
    </>
  );
}

export default App;
