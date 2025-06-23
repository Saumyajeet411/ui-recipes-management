import axios from 'axios';
import { toast } from 'react-toastify';

const REST_API_URL = 'http://localhost:8080/api/v1/recipes';

const api = axios.create({
    baseURL: REST_API_URL,
    timeout: 5000
})

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response) {
            const { status } = error.response;
            if(status === 500){
                toast.error('Server error, please try again later');
            }
        } else {
            toast.error('Network Error, Please check your connection')
        }
        return Promise.reject(error);
    }
)

export default api;