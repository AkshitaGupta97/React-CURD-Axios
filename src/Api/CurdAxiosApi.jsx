import axios from 'axios'


const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
// https://jsonplaceholder.typicode.com/posts

// get method

export const getMethod = () => {
    return api.get('/posts')
}





