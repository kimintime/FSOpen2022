import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = personsObject => {
    const request = axios.post(baseUrl, personsObject)
    return request.then(response => response.data)
}

const update = (id, personsObject) => {
    const request = axios.put(`${baseUrl}/${id}`, personsObject)
    return request.then(response => response.data)

}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response =>response.data)

}

const personsService = {
    getAll,
    create,
    update,
    remove
}

export default personsService