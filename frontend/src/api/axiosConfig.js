import axios from 'axios';
const API_BASE = 'http://localhost:5000/api';
export default axios.create({ baseURL: API_BASE });
