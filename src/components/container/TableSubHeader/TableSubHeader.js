import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTableSubHeaderBegin } from './TableSubHeaderAction';
import { TableSubHeaderComponent } from './TableSubHeader.component';
class TableSubHeader extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchTableSubHeaderBegin();
    }

    componentDidUpdate(prevProps) {
    }

    render() {

        return (
          <TableSubHeaderComponent />
        );
    }
}

function mapStateToProps(state) {
    return{
        ...state.tablesubheader
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchTableSubHeaderBegin: fetchTableSubHeaderBegin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSubHeader);
