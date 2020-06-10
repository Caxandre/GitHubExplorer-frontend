import axios from 'axios';

export const gitHubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const api = axios.create({
  baseURL: 'http://localhost:3010',
});
