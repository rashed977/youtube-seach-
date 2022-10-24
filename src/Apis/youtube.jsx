import axios from 'axios';

const KEY = 'AIzaSyDDMNGLb7TQ8hudlGGMn98kkEkiS9oI6_E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        part: 'snippet',
        maxResults: 5,
    }
});