import React from "react";
import { render } from "react-dom";

import { TableComponent } from '../../presentation/table.component';
import { Grid, Row, Col } from 'react-bootstrap';

export default class TableContainer extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        const { tableData } = this.props;
        return (
            <div>
                <Row className="show-grid">
                    <Col xs={12} style={{paddingTop:'20px'}}>
                        <TableComponent data={tableData} />
                    </Col>
                </Row>
                <br />
            </div>
        );
    }
}