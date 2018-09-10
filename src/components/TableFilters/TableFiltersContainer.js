import { connect } from 'react-redux';
import { initTableFilters, initTableFiltersSuccess, updateValue, searchForData, searchForDataSuccessful } from './TableFiltersActions.js';
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
        },
        handleChangeValue:(id, value) =>{
          dispatch(updateValue(id, value));
        },
        handleSearch: (values) =>{
          dispatch(searchForData(values))
          .then((resp) =>{
              if(resp.error){
                dispatch(searchForDataError(resp));
              } else {
                dispatch(searchForDataSuccessful(resp.payload.data));
              }
          })
          .catch((error) => {
            console.log(error);
          });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableFilters);
