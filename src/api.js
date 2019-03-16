import axios from 'axios';

export const fetch = () => axios.get('https://api.openbrewerydb.org/breweries')