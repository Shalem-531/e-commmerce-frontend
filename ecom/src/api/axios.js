import axios from 'axios';

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API
});

export const ecomApi = axios.create({
  baseURL: import.meta.env.VITE_ECOM_API
});