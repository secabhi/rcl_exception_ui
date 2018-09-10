import axios from 'axios';
import Config from '/config/endpoints.json';
import { TABLE_FILTERS_INIT, TABLE_FILTERS_INIT_SUCCESS, TABLE_FILTERS_UPDATE_VALUE, TABLE_FILTERS_SEARCH, TABLE_DATA_ASSIGN } from '/config/constants.js';

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

export const updateValue = (id, value) => {
  return {
    type: TABLE_FILTERS_UPDATE_VALUE,
    id,
    value
  }
}

export const searchForData = (values) => {
  // const reqObj = {
  //     "labelName" : values["labelName"],
  //     "dqRuleType": values["dqRuleType"],
  //     "dqSubRuleType": values["dqSubRuleType"],
  //     "dqAttr": values["dqAttr"],
  //     "Pagenum":1
  //   }
  // console.log(reqObj);
  // const request = axios.post(`${Config.endpoints.baseUrl + Config.endpoints.filterDataUrl }`);
  // return {
  //     type: TABLE_FILTERS_INIT,
  //     payload: request
  // };

  const request = axios.get(`${Config.endpoints.baseUrl + Config.endpoints.searchDataUrl }`);
  return {
      type: TABLE_FILTERS_SEARCH,
      payload: request
  };

}

export const searchForDataSuccessful = (data) => {
  return {
      type: TABLE_DATA_ASSIGN,
      data
  };

}

export const searchForDataError = (resp) => {
  return {
      type: TABLE_DATA_CLEAR
  };

}
