import HomeGalleryList from '../components/GalleryList/HomeGalleryList';
import { useState, useEffect } from 'react';
import { getTrendsOfMovies } from '../services/getMovies';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    getTrendsOfMovies(page).then(movies => {
      setMovies(prevState => [...prevState, ...movies.results]);
      setTotal(movies.total_pages);
    });
  }, [page]);

  const handleLoadMoreButton = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <HomeGalleryList movies={movies} state={{ from: location }} />
      {total !== page && <LoadMoreButton onClick={handleLoadMoreButton} />}
    </>
  );
};

export default Home;