import axios from 'axios';

export const fetchFromSource = () => axios.get(
    '/api/scr/scrapping-sources'
);

export const initSource = () => axios.post(
    '/api/scr/init',
    {
        "scrappingSourceId": "ac54cffb-eeeb-43d1-8c2b-eb8238f34342",
        "minPageId": 1,
        "maxPageId": 1
    }
);