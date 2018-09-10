import React, { Component } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import DashboardChart from './components/container/chart/chart'
import Filters from './components/container/filters/filter'
import HeaderContainer from './components/container/header/header.component'
import TableContainer from './components/container/table/table'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class App extends Component {
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

export default App;