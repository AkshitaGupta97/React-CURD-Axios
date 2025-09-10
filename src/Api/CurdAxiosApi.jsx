import axios from 'axios'


const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
// https://jsonplaceholder.typicode.com/posts

// get method  -> C : Create

export const getMethod = () => {
    return api.get('/posts')
}

// delete method    -> D : Delete

export const deleteMethod = (id) => {
    return api.delete(`/posts/${id}`)
}

// post Method      -> R : Read

export const postMethod = (ele) => {  // here ele is the item that you want to add
    return api.post('/posts', ele)
}

// Put Method  -> U : Update

export const putMethod = (id, post) => {
    return api.put(`/posts/${id}`, post)  // here post indicate the data which we are updating.
}
