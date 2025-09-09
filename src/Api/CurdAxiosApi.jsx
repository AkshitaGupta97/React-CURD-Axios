import axios from 'axios'


const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
// https://jsonplaceholder.typicode.com/posts

// get method

export const getMethod = () => {
    return api.get('/posts')
}

// delete method

export const deleteMethod = (id) => {
    return api.delete(`/posts/${id}`)
}

// post Method

export const postMethod = (ele) => {  // here ele is the item that you want to add
    return api.post('/posts', ele)
}



