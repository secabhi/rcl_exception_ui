export default function(state = [], action) {
  switch (action.type) {
    case "FILTER_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "FILTER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        filterData: action.payload,
        success: true
      };
    case "FILTER_FAILED":
      return {
        ...state,
        isLoading: false,
        filterData: action.payload,
        success: false
      };
  }
}
