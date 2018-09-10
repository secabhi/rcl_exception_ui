import {
  TABLE_DATA_INIT,
  TABLE_DATA_ASSIGN
} from '/config/constants';

const defaultState = {
  tableGrid: []
};

const TGReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TABLE_DATA_INIT:
            return { ...state, tableGrid: action.tableGrid };
        case TABLE_DATA_ASSIGN:
            return {...state, tableGrid: action.data};
        default:
            return state;
    }
};

export default TGReducer;
