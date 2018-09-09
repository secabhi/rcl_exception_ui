import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { DashboardChart } from '/components/DashboardChart/DashboardChartReducer.js';
import { TableFilters } from '/components/TableFilters/TableFiltersReducer.js';

const rootReducer = combineReducers({
    DashboardChart,
    TableFilters,
    routing: routerReducer
  });

export default rootReducer;
