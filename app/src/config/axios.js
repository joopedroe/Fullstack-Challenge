import axios from 'axios';
import {
  urls, NODE_ENV
} from '../../.env.js';

let url;

if (urls.hasOwnProperty(NODE_ENV))
  url = urls[NODE_ENV];

const http = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json'
  },
  responseType: 'json'
});


export default http;
