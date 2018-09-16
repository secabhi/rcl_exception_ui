import React from 'react';
import { Breadcrumb, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import './TableSubHeader.scss';

export const TableSubHeaderComponent = (props) => {
    return (
      <React.Fragment>
        <Row>
          <Col md={9}>
            <p className="results-col">219 Results</p>
          </Col>
          <Col md={3}>
            <ButtonGroup>
              <Button>ALL</Button>
              <Button>ACTIVE</Button>
              <Button>IGNORED</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </React.Fragment>
    )
}
