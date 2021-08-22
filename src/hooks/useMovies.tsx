import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDbResponse, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDbResponse>('/now_playing');
    setNowPlaying(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    nowPlaying,
    isLoading,
  };
};
