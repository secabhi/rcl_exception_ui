import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchfilter } from './filterAction';
import {FILTER_SUCCESS} from '../../../constants/constants';



import { map } from 'underscore';

import { Button, Form, FormGroup, InputGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Label } from 'react-bootstrap';
import './filter.scss';
class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            labelName: 'Select'
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSearch(e) {
        e.preventDefault();
        console.log(this.state);
        alert('searching\n');
    }

    componentDidMount() {
       this.props.fetchfilterInvoker(FILTER_SUCCESS);
    }

    handleChange(e) {
        console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })
        this.props.action();
    }

    render() {
        const { filters } = this.props;
        return (
            <Form className='FormFilter' onChange={this.handleChange} onSubmit={this.handleSearch}>
                <FormGroup controlId="asOfDateControl">
                    <ControlLabel>AS OF DATE</ControlLabel>
                    <FormControl type="date" bsClass="form-control date-control" placeholder="Select date" />
                </FormGroup>

                {map(filters.data, (item, i) => {
                    return <FormGroup key={item.key} controlId="labelNameControl">
                        <ControlLabel>{item.display}</ControlLabel>

                        <FormControl componentClass="select" placeholder="select" value={this.state.key} id={item.key} >
                            {map(data[item.key], (val, i) => {
                                return <option value={val} key={val + i}>{val}</option>
                            })}
                        </FormControl>

                    </FormGroup>
                })}



                <FormGroup>
                    <Button bsStyle="primary" bsSize="large" block onClick={this.handleSearch}>
                        Search
                  </Button>
                </FormGroup>
            </Form>
        );
    }
}



function mapStateToProps(state) {
    return {
        filters: state.filters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        fetchfilterInvoker:fetchfilter
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
