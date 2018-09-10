import React, { Component } from 'react';
import TableGrid from './TableGrid/TableGridContainer.js';
import TableFilters from './TableFilters/TableFiltersContainer.js';
import {Grid, Row, Col} from 'react-bootstrap';
import DashboardChart from './DashboardChart/DashboardChartContainer.js';
import './root.scss';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import {DashboardChart} from './container/chart/dashboard.component'
import {Filters} from './container/filters/filter'
import {HeaderContainer} from './container/header/header.component'
import {TableContainer} from './container/table/table'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class RootComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      clicked : false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const clicked = !this.state.clicked;
    this.setState({
      clicked
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <HeaderContainer />
        <Grid className="GridApp" fluid={true}>
          <Row>
            <Col md={12}>
              <Filters />
            </Col>
          </Row>
          <Row className="">
            <Col md={12}>
              <DashboardChart />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <TableContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(RootComponent);