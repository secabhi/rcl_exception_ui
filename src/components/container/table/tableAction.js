export {
    TABLE_BEGIN,
    TABLE_SUCCESS,
    TABLE_FAILED
  } from "../../../constants/constants";
  
  export const fetchtableBegin = () => {
    return {
      type: TABLE_BEGIN
    };
  };
  
  export const fetchtableSuccess = () => {
    return {
      type: TABLE_SUCCESS
    };
  };
  
  export const fetchtableFail = () => {
    return {
      type: TABLE_FAILED
    };
  };
  