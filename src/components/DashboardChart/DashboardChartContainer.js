import { connect } from 'react-redux';
import { initDashboard } from './DashboardChartActions.js';
import DashboardChart from './DashboardChart.js';

function mapStateToProps (state) {
    return {
        //send sample state to the component
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        //map dispatch to the component functions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardChart);
