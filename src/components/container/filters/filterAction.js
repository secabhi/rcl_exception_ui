export {
    FILTER_BEGIN,
    FILTER_SUCCESS,
    FILTER_FAILED
  } from "../../../constants/constants";
  
  export const fetchfilterBegin = () => {
    return {
      type: FILTER_BEGIN
    };
  };
  
  export const fetchfilterSuccess = () => {
    return {
      type: FILTER_SUCCESS
    };
  };
  
  export const fetchfilterFail = () => {
    return {
      type: FILTER_FAILED
    };
  };
  