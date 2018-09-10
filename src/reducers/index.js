import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import DCReducer from '/components/DashboardChart/DashboardChartReducer.js';
import TFReducer from '/components/TableFilters/TableFiltersReducer.js';
import TGReducer from '/components/TableGrid/TableGridReducer.js';

const rootReducer = combineReducers({
    DashboardChart: DCReducer,
    TableFilters: TFReducer,
    TableGrid: TGReducer,
    routing: routerReducer
  });

export default rootReducer;
