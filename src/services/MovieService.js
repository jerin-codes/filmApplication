import axios from "axios";
// const axios=require("axios").defaults
import { TMDB_BASE_URL } from "../constans/Urls";
import { TMDB_IMAGE_BASE_URL,apiUrl,ENDPOINTS } from "../constans/Urls";


const TMDB_HTTP_REQUEST = axios.create({
    baseURL: TMDB_BASE_URL, // Corrected property name
    params: {
      api_key: apiUrl, // Corrected API key parameter
    },
  });

const getNowPlaying = async () => {
    try {
      console.log("Fetching now playing movies...");
      const response = await TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIE);
      return response; // Assuming movie array is in the 'results' property
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
  

// const getPoster=(path)=> `$(TMDB_IMAGE_BASE_URL)/original$(path)`;
const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;
const getALlGenres=()=> TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRE);
export{getNowPlaying,getPoster,getALlGenres}