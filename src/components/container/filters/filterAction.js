import { callPostWebService, callGetWebService } from '../../../utils/https';
import {api} from '../../../utils/api';
import { fetchtableSuccess } from '../table/tableAction.js';
import {
    FILTER_BEGIN,
    FILTER_SUCCESS,
    FILTER_FAILED,
    TABLE_FILTERS_UPDATE_VALUE
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

export const updateValue = (id, value) => {
    return {
      type: TABLE_FILTERS_UPDATE_VALUE,
      id,
      value
    }
}

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

export const fetchpostfilter = (type,data) => {
    debugger;
    //dispatch(fetchfilterBegin());
    const URL = api.baseUrl+api.tableApi;
    // const params = {data:data};
    const params = {};
    const request = callPostWebService(URL, data);
    return (dispatch) => {
        request.then(({
            data
        }) => {
            switch (type) {
                case FILTER_SUCCESS:
                {
                    dispatch(fetchtableSuccess(data));
                    break;
                }
            }
        }).catch(error => {
            dispatch(fetchfilterFail(error));
        });
    }
}
