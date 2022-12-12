import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/getMovies';
import { useState, useEffect } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    getMovieCredits(movieId)
      .then(result => setCast(result))
      .finally(setIsLoad(true));
  }, [movieId]);

  return (
    <>
      {isLoad && (
        <>
          <p>Cast</p>
          <ul>
            {cast.map(actor => {
              const { id, name, profile_path, character } = actor;
              return (
                <li key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXlnwW5Beaf7usPsiqtlik2aKsB0AqX3nMiVGH2pD8va7pWsKyOCi5XI5o3rCQO212mo&usqp=CAU'
                    }
                    alt={name}
                    width="100"
                    height="150"
                  />
                  <p>Name: {name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Cast;