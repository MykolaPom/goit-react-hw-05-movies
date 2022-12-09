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
          {total !== page && <LoadMoreButton onClick={handleLoadMoreButton} />}
        </>
      )}
    </>
  );
};

export default Movies;

// import { useEffect, useState } from 'react';
// import { getCustomers } from '../services/getMovies';
// import { SearchBox } from 'components/SearchBox/SearchBox';
// import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { useMemo } from 'react';

// export const Customers = () => {
//   const location = useLocation();
//   const [customers, setCustomers] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const filterParams = searchParams.get('filter') ?? '';

//   useEffect(() => {
//     getCustomers().then(setCustomers);
//   }, []);

//   const changeFilter = value => {
//     setSearchParams(value !== '' ? { filter: value } : {});
//   };

//   const visibleCustomers = useMemo(() => {
//     return customers.filter(customer =>
//       customer.name.toLowerCase().includes(filterParams.toLowerCase())
//     );
//   }, [customers, filterParams]);

//   return (
//     <main>
//       <SearchBox value={filterParams} onChange={changeFilter} />

//       {visibleCustomers.length > 0 && (
//         <ul>
//           {visibleCustomers.map(customer => (
//             <li key={customer.id}>
//               <Link to={`${customer.id}`} state={{ from: location }}>
//                 {customer.name}
//               </Link>
//               {/*створився тег <a> на кожному імені кастомера */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// };
