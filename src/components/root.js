import React, { Component } from 'react';
import TableGrid from './TableGrid/TableGridContainer.js';
import TableFilters from './TableFilters/TableFiltersContainer.js';
import {Grid, Row, Col} from 'react-bootstrap';
import DashboardChart from './DashboardChart/DashboardChartContainer.js';
import '';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

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
        <header className="App-header">
          <h1 className="App-title">Exceptions</h1>
        </header>
        <Grid className="GridApp" fluid={true}>
          <Row>
            <Col md={12}>
              <TableFilters />
            </Col>
          </Row>
          <Row className="">
            <Col md={12}>
              <DashboardChart />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <TableGrid />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(RootComponent);