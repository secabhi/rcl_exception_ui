export default function(state = [], action) {
  switch (action.type) {
    case "CHART_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "CHART_SUCCESS":
      return {
        ...state,
        isLoading: false,
        chartData: action.payload,
        success: true
      };
    case "CHART_FAILED":
      return {
        ...state,
        isLoading: false,
        chartData: action.payload,
        success: false
      };
  }
}
