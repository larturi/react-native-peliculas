import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a6c660c309daa96a66064788072ed995',
    language: 'es-ES',
  },
});

export default movieDB;
