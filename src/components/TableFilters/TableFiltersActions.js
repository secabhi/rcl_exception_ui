import axios from 'axios';
import Config from '/config/endpoints.json';
import { TABLE_FILTERS_INIT, TABLE_FILTERS_INIT_SUCCESS } from '/config/constants.js';

export const initTableFilters = () => {
    const request = axios.get(`${Config.endpoints.baseUrl + Config.endpoints.filterDataUrl }`);
    return {
        type: TABLE_FILTERS_INIT,
        payload: request
    };
};

export const initTableFiltersSuccess = (resp) => {
  return {
    type: TABLE_FILTERS_INIT_SUCCESS,
    tableFilters: resp.payload.data
  }
}
