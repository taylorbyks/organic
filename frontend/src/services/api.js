import axios from 'axios'

const api = axios.create({
    baseURL: 'https://organicjs.herokuapp.com/'
})

export default api