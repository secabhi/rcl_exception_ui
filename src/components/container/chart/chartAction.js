export {
  CHART_BEGIN,
  CHART_SUCCESS,
  CHART_FAILED
} from "../../../constants/constants";

export const fetchchartBegin = () => {
  return {
    type: CHART_BEGIN
  };
};

export const fetchchartSuccess = () => {
  return {
    type: CHART_SUCCESS
  };
};

export const fetchchartFail = () => {
  return {
    type: CHART_FAILED
  };
};
