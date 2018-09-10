export default (state = [], action) => {
  switch (action.type) {
    case "TABLE_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "TABLE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        tableData: action.payload,
        success: true
      };
    case "TABLE_FAILED":
      return {
        ...state,
        isLoading: false,
        tableData: action.payload,
        success: false
      };
    default:
      return {
        ...state
      };
  }
};
