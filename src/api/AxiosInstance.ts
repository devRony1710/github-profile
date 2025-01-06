import axios from 'axios'

export const ApiInstance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
})
