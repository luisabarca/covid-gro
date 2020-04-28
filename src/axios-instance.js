import axios from 'axios';

const axios_instance = axios.create({
    baseURL: 'https://tudominio.com/api',
});

axios_instance.defaults.headers.common['Authorization'] = '__TU_TOKEN_APP__';
axios_instance.defaults.headers.common['X-App-Name'] = 'CovidGro';
axios_instance.defaults.headers.common['X-App-Version'] = '1.0.0';

axios_instance.defaults.timeout = 5000;

export default axios_instance;