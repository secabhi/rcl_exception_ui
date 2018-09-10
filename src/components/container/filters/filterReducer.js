export default (state = [], action) => {
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
        tableFilters: action.payload,
        success: true
      };
    case "FILTER_FAILED":
      return {
        ...state,
        isLoading: false,
        tableFilters: action.payload,
        success: false
      };
    case "TABLE_FILTERS_UPDATE_VALUE":
      return {...state, [action.id]: action.value};  
    default:
      return {
        ...state
      };
  }
};
