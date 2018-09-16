import { callPostWebService, callGetWebService } from '../../../utils/https';
import {api} from '../../../utils/api';

import {
    TABLE_BEGIN,
    TABLE_SUCCESS,
    TABLE_FAILED
  } from "../../../constants/constants";
  
  export const fetchtableBegin = () => {
    return {
      type: TABLE_BEGIN
    };
  };
  
  export const fetchtableSuccess = (data) => {
    return {
      type: TABLE_SUCCESS,
      payload:data
    };
  };
  
  export const fetchtableFail = (error) => {
    return {
      type: TABLE_FAILED,
      payload:error
    };
  };


  // API call

  export const fetchtable = (type,params={}) => {
    //dispatch(fetchtableBegin());
    const URL = api.baseUrl+api.tableApi;
    
    const request = callPostWebService(URL, params);
    return (dispatch) => {
        request.then(({
            data
        }) => {
            switch (type) {
                case TABLE_SUCCESS:
                {
                    dispatch(fetchtableSuccess(data));
                    break;
                }
            }
        }).catch(error => {
            dispatch(fetchtableFail(error));
        });
    }
}