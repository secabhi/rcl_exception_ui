const defaultState = {
  tableFilters:{}, asOfDate: '-1', labelName:'-1', dqRuleType: '-1', dqSubRuleType:'-1', tableName: '-1', dqAttr: '-1'
}

export default (state = defaultState, action) => {
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
