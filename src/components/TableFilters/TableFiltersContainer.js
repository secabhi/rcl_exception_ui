import { connect } from 'react-redux';
import { initTableFilters, initTableFiltersSuccess } from './TableFiltersActions.js';
import TableFilters from './TableFilters.js';

function mapStateToProps (state) {
    return {
        //send sample state to the component
        ...state.TableFilters
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        initTableFilters:() =>{
          dispatch(initTableFilters())
            .then((resp) => {
              console.log(resp);
              dispatch(initTableFiltersSuccess(resp));
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableFilters);
