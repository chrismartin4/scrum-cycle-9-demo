import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1'
const token=sessionStorage.getItem('token');
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
export default axios;