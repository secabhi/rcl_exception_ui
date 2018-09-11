import React, { Component } from 'react';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchfilter, fetchpostfilter,updateValue } from './filterAction';

import { FILTER_SUCCESS } from '../../../constants/constants'

import {FilterComponent} from '../../presentation/filter.component';
class Filters extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.postData = {};
    }

    handleSearch(e) {

        e.preventDefault();
        //this.props.handleSearch(this.postData);
        this.props.fetchPostfilterInvoker(FILTER_SUCCESS);
    }

    handleChange(e) {
        this.props.handleChangeValueInvoker(e.target.id, e.target.value);
        this.postData[e.target.id] = e.target.value;

    }

    componentWillMount() {
        this.props.fetchfilterInvoker(FILTER_SUCCESS);
    }

    componentDidUpdate(prevProps) {
    }

    render() {

        return (

            <div>{this.props.tableFilters?<FilterComponent
                {...this.props}
                handleSearch={this.handleSearch}
                handleChange={this.handleChange}/>:null}</div>

        );
    }
}

function mapStateToProps(state) {
    return{
        ...state.filters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchfilterInvoker: fetchfilter,
        fetchPostfilterInvoker: fetchpostfilter,
        handleChangeValueInvoker:updateValue
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
