import React, { useEffect, useState } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/movies')  // adjust endpoint to your Flask API
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h2>All Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;