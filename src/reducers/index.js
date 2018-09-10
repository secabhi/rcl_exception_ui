
import { combineReducers } from 'redux';

import chartReducer from '../components/container/chart/chartReducer';
import filterReducer from '../components/container/filters/filterReducer';
import tableReducer from '../components/container/table/tableReducer';


export default combineReducers({
    chart:chartReducer,
    filters:filterReducer,
    table:tableReducer
})