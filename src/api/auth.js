import axios from 'axios';

export const signin = async (userInfo) => {
    return await axios.post('http://localhost:8080/users/login', {
        email: userInfo.id,
        password: userInfo.password
    })
    .catch((error) => error.response);
}

export const signup = async (userInputValue) => {
    return await axios.post('http://localhost:8080/users/create', {
        email: userInputValue.email,
        password: userInputValue.password
    })
    .catch(error => error.response);
}