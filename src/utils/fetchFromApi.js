import axios from "axios";

//const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  method: 'GET',
  params: {maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': "699fd6f12dmshc970563a3daf195p12c62ejsndbf27738d57d" ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}