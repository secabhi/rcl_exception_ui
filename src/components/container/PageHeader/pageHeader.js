import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPageheaderBegin } from './pageHeaderAction';
import { PageHeaderComponent } from './pageHeader.component';
class PageHeader extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchPageheaderBegin();
    }

    componentDidUpdate(prevProps) {
    }

    render() {

        return (
          <PageHeaderComponent />
        );
    }
}

function mapStateToProps(state) {
    return{
        ...state.pageheader
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPageheaderBegin: fetchPageheaderBegin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
