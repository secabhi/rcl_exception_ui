import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { map } from 'underscore';

import { Chart } from '../../presentation/chart.component';
import { exceptionChart } from '../data/chart';

class DashboardChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

    }

    componentDidMount() {

        //$('.block').tooltip();
    }

    render() {
        const { data } = this.props;
        return (
            <Chart data={data} />
        );
    }
}

export default DashboardChart;