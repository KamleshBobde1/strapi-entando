import axios from 'axios';

export const coreAPIEndpoint = 'http://localhost:1337'
const strapiEndPoint = `${coreAPIEndpoint}/api`

export const getPost = async () => {
    const data = await axios.get(`${strapiEndPoint}/posts`);
    return data;
}

export const getCustomer = async () => {
    const data = await axios.get(`${strapiEndPoint}/customers`);
    return data;
}

export const postCustomer = async (data) => {
    return axios.post(`${strapiEndPoint}/customers`, data)
}

export const getProject = async () => {
    const data = await axios.get(`${strapiEndPoint}/projects?populate=*`);
    return data;
}