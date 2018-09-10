import { callPostWebService, callGetWebService } from '../../../utils/https';
import {api} from '../../../utils/api';

import {
    FILTER_BEGIN,
    FILTER_SUCCESS,
    FILTER_FAILED
} from "../../../constants/constants";

export const fetchfilterBegin = () => {
    return {
        type: FILTER_BEGIN
    };
};

export const fetchfilterSuccess = (data) => {
    return {
        type: FILTER_SUCCESS,
        payload:data
    };
};

export const fetchfilterFail = (error) => {
    return {
        type: FILTER_FAILED,
        payload: error
    };
};

// Call Api

export const fetchfilter = (type) => {
    //dispatch(fetchfilterBegin());
    const URL = api.baseUrl+api.filterApi;
    const params = {};
    const request = callGetWebService(URL, params);
    return (dispatch) => {
        request.then(({
            data
        }) => {
            switch (type) {
                case FILTER_SUCCESS:
                {
                    dispatch(fetchfilterSuccess(data));
                    break;
                }
            }
        }).catch(error => {
            dispatch(fetchfilterFail(error));
        });
    }
}