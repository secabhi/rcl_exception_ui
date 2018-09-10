import React from "react";
import { render } from "react-dom";

import { TableComponent } from '../../presentation/table.component';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        const { table } = this.props;
        return (
            <div>
                <Row className="show-grid">
                    <Col xs={12} style={{paddingTop:'20px'}}>
                        <TableComponent data={table} />
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

function mapDispatchToProps() {

}

export default connect(mapStateToProps)(TableContainer);
