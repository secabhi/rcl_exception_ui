import React from "react";
import { render } from "react-dom";
import { bindActionCreators } from 'redux';
import {debounce} from 'underscore';

import { TableComponent } from '../../presentation/table.component';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";

import { TABLE_SUCCESS } from '../../../constants/constants';

import { fetchtable } from '../table/tableAction';

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            pages: 10,
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchtableInvoker(TABLE_SUCCESS);
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.table.tableData) {
            this.setState({
                tableData: nextprops.table.tableData,
                loading: false
            })
        }

    }

    fetchData=(state, instance)=> {
        // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
        // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
        
        // Request the data however you want.  Here, we'll use our mocked service we created earlier
        
        debounce(this.callapi(state),2000)
    }

    callapi=(state)=>{
        this.setState({ loading: true });
        this.props.fetchtableInvoker(TABLE_SUCCESS, state.filtered)
    }

    render() {
        const { tableData } = this.state;
        return (
            <div>
                <Row className="show-grid">
                    <Col xs={12} style={{ padding: '10px' }}>
                        {tableData ? <TableComponent
                            data={tableData}
                            pages={this.state.pages}
                            loading={this.state.loading} 
                            fetchData={this.fetchData}/> : null}
                    </Col>
                </Row>
                <br />
            </div>
        );
    }
}




function mapStateToProps(state) {
    return {
        table: state.table
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchtableInvoker: fetchtable
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
