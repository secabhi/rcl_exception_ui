import {
  TABLE_FILTERS_INIT,
  TABLE_FILTERS_INIT_SUCCESS
} from '/config/constants';

const defaultState = {
  filterData: {},
  asOfDate: '-1',
  labelName: '-1',
  ruleType: '-1',
  ruleSubType: '-1',
  tableName: '-1',
  attribute: '-1'
};

const TFReducer = (state = defaultState, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case TABLE_FILTERS_INIT:
            console.log(action);
            return defaultState;
        case TABLE_FILTERS_INIT_SUCCESS:
            console.log(action)
        default:
            return state;
    }
};

export default TFReducer;
