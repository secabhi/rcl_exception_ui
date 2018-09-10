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
        this.state={
            data:[]
        }

    }

    componentDidMount() {
        this.props.fetchchartInvoker(CHART_SUCCESS);
        //$('.block').tooltip();
    }

    // componentWillReceiveProps(nextprops){

    //     this.setState({data:})
    // }

    render() {
        const { chartData } = this.props.chart;
        return (
            <div>{chartData?<Chart data={chartData} />:null}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        chart: state.chart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        fetchchartInvoker:fetchchart
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardChart);