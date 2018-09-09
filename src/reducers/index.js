import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import DCReducer from '/components/DashboardChart/DashboardChartReducer.js';
import TFReducer from '/components/TableFilters/TableFiltersReducer.js';

const rootReducer = combineReducers({
    DashboardChart: DCReducer,
    TableFilters: TFReducer,
    routing: routerReducer
  });

export default rootReducer;
