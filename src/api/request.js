import axios from 'axios';
let instance;

const axiosInstance = () => {
  if (!instance) {
    instance = axios.create({
      timeout: 10000,
      // withCredentials: true,
      // responseType: 'json',
      crossDomain: true,
      headers: {
      'Content-Type': 'application/json'
    },
    });
  }
    instance.interceptors.request.use((request) => request);

  return instance;
};

const  {mainAddress} = window;

const host = `${document.location.protocol}//${mainAddress.basepath}`;

const get = urlMethod => axiosInstance(host + urlMethod).get(host + urlMethod);

const post = (urlMethod, payload) => axiosInstance(host + urlMethod).post(host + urlMethod, payload);

const deleteId = (urlMethod, payload) => axiosInstance(host + urlMethod).delete(host + urlMethod, { "data": payload });

export default {
  get,
  post,
  deleteId,
};
