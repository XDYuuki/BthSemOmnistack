import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
}); //baseURL é o endreço padrão em todas as chamadas. O domínio da aplicação

export default api;