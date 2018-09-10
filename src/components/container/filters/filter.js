import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchfilterBegin, fetchfilterSuccess } from './filterAction';
import { fetchchartBegin,fetchchartSuccess } from '../chart/chartAction';
import { fetchtableBegin, fetchtableSuccess } from '../table/tableAction';

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
        this.setState({ data: this.props.data })
    }

    handleChange(e) {
        console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })
        this.props.action();
    }

    render() {
        const { data } = this.state;
        return (
            <Form className='FormFilter' onChange={this.handleChange} onSubmit={this.handleSearch}>
                <FormGroup controlId="asOfDateControl">
                    <ControlLabel>AS OF DATE</ControlLabel>
                    <FormControl type="date" bsClass="form-control date-control" placeholder="Select date" />
                </FormGroup>

                {map(data.data, (item, i) => {
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
        fetchfilterBeginInvoker:fetchfilterBegin,
        fetchfilterSuccessInvoker:fetchfilterSuccess,
        fetchchartBeginInvoker:fetchchartBegin,
        fetchchartSuccessInvoker:fetchchartSuccess,
        fetchtableBeginInvoker:fetchtableBegin,
        fetchtableSuccessInvoker:fetchtableSuccess
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
