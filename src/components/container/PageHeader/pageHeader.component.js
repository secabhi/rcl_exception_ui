import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';
import './pageHeader.scss';

const options = [
  { value: 'rb599c americas region', label: 'RB599C AMERICAS REGION' },
  { value: 'rb599c asia pacific', label: 'RB599C ASIA PACIFIC' }
]

export const PageHeaderComponent = (props) => {
    return (
      <React.Fragment>
        <Row>
          <Col md={8}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">DATA VIEW</Breadcrumb.Item>
              <Breadcrumb.Item href="#">FDW</Breadcrumb.Item>
              <Breadcrumb.Item active>EXCEPTIONS</Breadcrumb.Item>
            </Breadcrumb>
            <p className="sub-breadcrumb">CONTRACT</p>
          </Col>
          <Col md={4}>
            <p className="select-heading">LEGAL ENTITY</p>
            <Select
              closeMenuOnSelect={true}
              components={Animated()}
              isMulti
              options={options}
              />
          </Col>
        </Row>
      </React.Fragment>
    )
}
