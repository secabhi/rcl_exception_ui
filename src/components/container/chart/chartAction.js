/*eslint no-undef: "error"*/
/*eslint-env node*/

import { callPostWebService, callGetWebService } from '../../../utils/https';
import {api} from '../../../utils/api';
import {
  CHART_BEGIN,
  CHART_SUCCESS,
  CHART_FAILED
} from "../../../constants/constants";

export const fetchchartBegin = () => {
  return {
    type: CHART_BEGIN
  };
};

export const fetchchartSuccess = (data) => {
  return {
    type: CHART_SUCCESS,
    payload:data
  };
};

export const fetchchartFail = (error) => {
  return {
    type: CHART_FAILED,
    payload:error
  };
};

// API call

export const fetchchart = (type) => {
    //dispatch(fetchchartBegin());
    const URL = api.baseUrl+api.chartApi;
    const params = {};
    const request = callGetWebService(URL, params);
    return (dispatch) => {
        request.then(({
            data
        }) => {
            switch (type) {
                case CHART_SUCCESS:
                {
                    dispatch(fetchchartSuccess(data));
                    break;
                }
            }
        }).catch(error => {
            dispatch(fetchchartFail(error));
        });
    }
}