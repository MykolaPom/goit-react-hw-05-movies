import { MovieInfoItemStyled } from 'components/MovieInfoItem/MovieInfoItem.styled';
import { getMovieInfo } from '../services/getMovies';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    getMovieInfo(movieId).then(result => {
      setMovie(result.data);
      setIsLoad(true);
    });
  }, [movieId]);
  const { title, poster_path, release_date, popularity, overview, genres } =
    movie;
  const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const releaseYear = new Date(release_date).getFullYear();
  return (
    <div>
      {isLoad ? (
        <>
          <Link to={backLink}>
            <IoArrowBack size="10" />
            Back
          </Link>
          <MovieInfoItemStyled>
            <img src={imageURL} width="300" alt={title} />
            <div>
              <h1>
                {title} ({releaseYear})
              </h1>
              <h2>Popularity: {Math.round(popularity)} </h2>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              {genres.map(genre => {
                return <p key={genre.id}>{genre.name}</p>;
              })}
            </div>
          </MovieInfoItemStyled>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: backLink }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLink }}>
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
        </>
      ) : (
        <TailSpin
          height="80"
          width="80"
          color="#000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <Outlet />
    </div>
  );
};

export default MovieInfo;

// import { NavLink, Outlet } from 'react-router-dom';
// import styled from 'styled-components';
// import { Box } from '../components/Box/Box';

// const navItems = [
//   { href: 'analytics', text: 'Analytics' },
//   { href: 'invoices', text: 'Invoices' },
//   { href: 'deposits', text: 'Deposits' },
// ];

// const NavItem = styled(NavLink)`
//   padding: ${p => p.theme.space[2]}px;
//   color: ${p => p.theme.colors.text};
//   text-decoration: none;
//   &.active {
//     color: ${p => p.theme.colors.primary};
//   }
// `;

// export const Sales = () => {
//   return (
//     <Box as="main" display="flex" flexDirection="column">
//       <Box as="header" borderBottom="1px solid black" p={4}>
//         <Box as="ul" display="flex">
//           {navItems.map(({ href, text }) => (
//             <NavItem key={href} to={href}>
//               {text}
//             </NavItem>
//           ))}
//         </Box>
//       </Box>
//       <Outlet />
//     </Box>
//   );
// };
