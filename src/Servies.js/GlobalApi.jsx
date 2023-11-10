import axios from "axios";
const key="cb86695378a5452c8ac172dd4b1ce383"
const axioCreate= axios.create({
    baseURL: "https://api.rawg.io/api",
    // params: {
    //   key: "cb86695378a5452c8ac172dd4b1ce383",
    // },
  });
  
const getPopularGame=axioCreate.get('/games?key='+key)
const getMovieDetails=(id)=>axioCreate.get('/games/'+id+'/movies')
const getGameListByGenreId=(id)=>axioCreate.get('/games?key='+key+'&genres='+id)
export default{
    getPopularGame,
    getMovieDetails,
    getGameListByGenreId
}