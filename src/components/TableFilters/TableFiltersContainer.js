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
              if(resp.error){
                
              }
              dispatch(initTableFiltersSuccess(resp));
            })
            .catch((error) => {
                console.log(error);
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableFilters);
