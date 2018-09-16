const defaultState = {
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "PAGEHEADER_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    default:
      return {
        ...state
      };
  }
};
