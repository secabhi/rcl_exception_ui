import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {CHART_SUCCESS} from '../../../constants/constants';

import { map } from 'underscore';

import { Chart } from '../../presentation/chart.component';
import { fetchchart } from '../chart/chartAction';


class DashboardChart extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
        this.props.fetchchartInvoker(CHART_SUCCESS);
        //$('.block').tooltip();
    }

    render() {
        const { chart } = this.props;
        return (
            <div>{chart?<Chart data={chart} />:null}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        chart: state.charData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        fetchchartInvoker:fetchchart
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardChart);