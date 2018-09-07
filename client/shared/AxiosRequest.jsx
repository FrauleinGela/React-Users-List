
import axios from 'axios';
import apiUrl from './constants.jsx';


/**
 * Axios Request, onSuccess, onError 
 */
const request = function (options) {
    const onSuccess = function (response) {
        // TODO: Add success alert?
        return response.data;
    }

    const onError = function (error) {
        if (error.response) {
            // TODO: Add error alert error.config, error.response.status
            // It's not a 200 status
        } else {
            // TODO: Add error alert  error.message
            // Request coudn't be processed
            console.error('Error Message:', error.message);
        }
        return Promise.reject(error.response || error.message);
    }

    return axios.create({
        baseURL: apiUrl
    })(options)
        .then(onSuccess)
        .catch(onError);
}

export default request;
