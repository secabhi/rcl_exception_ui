import {
  TABLE_FILTERS_INIT,
  TABLE_FILTERS_INIT_SUCCESS,
  TABLE_FILTERS_UPDATE_VALUE
} from '/config/constants';

const defaultState = {
  tableFilters: {},
  asOfDate: '-1',
  labelName: '-1',
  dqRuleType: '-1',
  dqSubRuleType: '-1',
  tableName: '-1',
  dqAttr: '-1'
};

const TFReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TABLE_FILTERS_INIT:
            return defaultState;
        case TABLE_FILTERS_INIT_SUCCESS:
            return { ...state, tableFilters: {...action.tableFilters}};
        case TABLE_FILTERS_UPDATE_VALUE:
            return {...state, [action.id]: action.value};
        default:
            return state;
    }
};

export default TFReducer;
