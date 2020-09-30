import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-8670a.cloudfunctions.net/api',
  // 'http://localhost:5001/clone-8670a/us-central1/api', // localhost
  // + call the cloud function api
});

export default instance;
