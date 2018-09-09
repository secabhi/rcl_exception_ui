import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import './TableActions.scss';
class TableActions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="TableActions">
            <Button bsStyle="default">
              ASSIGN
            </Button>
            <Button bsStyle="default">
              VIEW
            </Button>
            <Button bsStyle="default" bsClass="download btn">
              DOWNLOAD
            </Button>
          </div>
        );
    }
}

export default TableActions;
