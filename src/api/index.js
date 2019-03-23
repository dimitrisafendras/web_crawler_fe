import axios from 'axios';

export const fetch = () => axios.post(
    '/api/scrapping/init',
    {
        "scrappingSourceId": "ac54cffb-eeeb-43d1-8c2b-eb8238f34342",
        "minPageId": 1,
        "maxPageId": 1
    }
)