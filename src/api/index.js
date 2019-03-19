import axios from 'axios';

export const fetch = () => axios.get(
    '/IsminiD/devices-json/raw/master/devices.json'
)