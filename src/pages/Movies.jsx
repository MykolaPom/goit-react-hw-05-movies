import SearchForm from 'components/SearchForm/SearchForm';
import MoviesGalleryList from 'components/GalleryList/MoviesGalleryList';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import { useState, useEffect } from 'react';
import { getSearchQuery } from '../services/getMovies';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    if (searchQuery !== query) {
      setMovies([]);
    }

    getSearchQuery(page, query).then(data => {
      setMovies(prevState => [...prevState, ...data.results]);
      setTotal(data.total_pages);
      setSearchQuery(query);
    });
  }, [query, page, searchQuery]);

  const handleSumbitFrom = query => {
    setPage(1);
    setTotal(0);
    setSearchParams({ query: query.searchMovie });
  };

  const handleLoadMoreButton = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <SearchForm onSubmit={handleSumbitFrom} />
      {movies.length > 0 && (
        <>
          <MoviesGalleryList movies={movies} state={{ from: location }} />
          {/* <LoadMoreButton onClick={handleLoadMoreButton} /> */}
          {total !== page && <LoadMoreButton onClick={handleLoadMoreButton} />}
        </>
      )}
    </>
  );
}

// const Movies = () => {
//   const [page, setPage] = useState(1);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [movies, setMovies] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');

//   const query = searchParams.get('query');
//   const location = useLocation();

//   useEffect(() => {
//     if (!query) {
//       return;
//     }
//     if (searchQuery !== query) {
//       setMovies([]);
//     }

//     getSearchQuery(page, query).then(data => {
//       setMovies(prevState => [...prevState, ...data.results]);
//       setTotal(data.total_pages);
//       setSearchQuery(query);
//     });
//   }, [query, page, searchQuery]);

//   const handleSumbitFrom = query => {
//     setPage(1);
//     setTotal(0);
//     setSearchParams({ query: query.searchMovie });
//   };

//   const handleLoadMoreButton = () => {
//     setPage(prevState => prevState + 1);
//   };

//   return (
//     <>
//       <SearchForm onSubmit={handleSumbitFrom} />
//       {movies.length > 0 && (
//         <>
//           <MoviesGalleryList movies={movies} state={{ from: location }} />
//           {total !== page && <LoadMoreButton onClick={handleLoadMoreButton} />}
//         </>
//       )}
//     </>
//   );
// };

export default Movies;