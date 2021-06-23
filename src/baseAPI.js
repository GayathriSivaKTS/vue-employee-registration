import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:44383/api',
  headers: {
    'Content-type': 'application/json'
  }
})
