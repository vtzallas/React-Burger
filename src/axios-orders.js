import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8ede6-default-rtdb.firebaseio.com/'
});

export default instance;