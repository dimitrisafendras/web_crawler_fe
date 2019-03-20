import axios from 'axios';

export const fetch = () => axios.post(
    '/api/scrapping/init',
    {
        "scrappingSourceId": "e86fb98a-75f0-4689-bc4d-395cf7d0f749",
        "minPageId": 1,
        "maxPageId": 1
    }
)