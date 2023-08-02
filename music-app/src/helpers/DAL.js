import axios from 'axios';
const baseURL = 'https://painassasin.online/'

export const fetchAllTracks = () => {
  return axios.get(baseURL + 'catalog/track/all/').then((response) => {
      return response.data;
    })
};

export const fetchAllPlaylists = () => {
  return axios
  .get(baseURL + 'catalog/selection/')
  .then((response) => response.data);
};

export const fetchPlaylist = (id) => {
  return axios
    .get(baseURL + `catalog/selection/${id}`)
    .then((response) => response.data);
};

export const regNewUser = (email, pass, userName) => {
  return axios
    .post(baseURL + 'user/signup/', {
      email: email,
      password: pass,
      username: userName,

      headers: {
        'content-type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};
export const fetchLogin = (email, pass) => {
  return axios
    .post(baseURL + 'user/login/', {
      email: email,
      password: pass,

      headers: {
        'content-type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};