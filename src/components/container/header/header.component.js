import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "../utils/utils";
import { Grid, Row, Col } from 'react-bootstrap';

export default class HeaderContainer extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        const { data } = this.state;
        return (
            <div className="headercmp">
                <Row className="show-grid">
                    <Col xs={12} style={{paddingTop:'20px'}}>
                        <div style={{textAlign:'center'}}>
                            <strong>RCL EXCEPTION UI</strong>
                        </div> 
                    </Col>
                </Row>
                <br />
            </div>
        );
    }
}