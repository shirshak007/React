import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID zEhCb04AenGnttYQDTQZy5XxeOxGU-Ref1ypMgBduDE'
    }
});