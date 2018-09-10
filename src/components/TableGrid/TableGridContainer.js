import { connect } from 'react-redux';
import { initTableData } from './TableGridActions.js';
import TableGrid from './TableGrid.js';

function mapStateToProps (state) {
    return {
        ...state.TableGrid
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      initTableData: () => {
        dispatch(initTableData());
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableGrid);
