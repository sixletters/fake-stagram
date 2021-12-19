import axios from 'axios';

const url = 'http://localhost:5000/users';

export const registerUser = (newUser) => axios.post(url, newUser);
export const loginUser = (userInfo) => axios.post(url, userInfo);