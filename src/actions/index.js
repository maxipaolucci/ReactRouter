import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type : FETCH_POSTS,
        payload : request //as we are using redux-promise (see main index.js) assigning the request to the payload makes redux to automatically resolve the request promise an set the result to payload. 
    };
}