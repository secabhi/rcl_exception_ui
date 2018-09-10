import React from "react";
import { render } from "react-dom";
import { bindActionCreators } from 'redux';

import { TableComponent } from '../../presentation/table.component';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";

import {TABLE_SUCCESS} from '../../../constants/constants';

import { fetchtable } from '../table/tableAction';

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
       
    }

    componentDidMount(){
        this.props.fetchtableInvoker(TABLE_SUCCESS);
    }

    render() {
        const { table } = this.props;
        return (
            <div>
                <Row className="show-grid">
                    <Col xs={12} style={{paddingTop:'20px'}}>
                        {table.length >0 ?<TableComponent data={table} />:null}
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
        fetchtableInvoker:fetchtable
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TableContainer);
