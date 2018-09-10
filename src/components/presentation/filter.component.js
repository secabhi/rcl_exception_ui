import React from 'react';
import { map } from 'underscore';
import { Button, Form, FormGroup, InputGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Label } from 'react-bootstrap';
import '../container/filters/filter.scss';

export const FilterComponent = (props) => {
        const { tableFilters, asOfDate, labelName, dqRuleType, dqSubRuleType, tableName, dqAttr } = props;
        const asOfDateFilters = tableFilters.asOfDate ? tableFilters.asOfDate : [];
        const labelFilters = tableFilters.labelName && tableFilters.labelName[asOfDate] ? tableFilters.labelName[asOfDate] : [];
        const dqRuleTypeFilters = tableFilters.dqRuleType && tableFilters.dqRuleType[labelName] ? tableFilters.dqRuleType[labelName] : [];
        const dqSubRuleTypeFilters = tableFilters.dqSubRuleType && tableFilters.dqSubRuleType[dqRuleType] ? tableFilters.dqSubRuleType[dqRuleType] : [];
        const tableNameFilters = tableFilters.tableName && tableFilters.tableName[dqSubRuleType] ? tableFilters.tableName[dqSubRuleType] : [];
        const dqAttrFilters = tableFilters.dqAttr && tableFilters.dqAttr[tableName] ? tableFilters.dqAttr[tableName] : [];

    return (
        <Form className='FormFilter' onChange={props.handleChange} onSubmit={props.handleSearch}>
            <FormGroup>
                <ControlLabel>AS OF DATE</ControlLabel>
                <FormControl componentClass="select" placeholder="select" bsClass="form-control date-control" value={asOfDate} id="asOfDate" >
                    <option value="-1">select</option>
                    {
                        asOfDateFilters.map((date, index) => {
                            return (
                                <option value={date} key={'dates' + index}>{date}</option>
                            )
                        })
                    }
                </FormControl>
            </FormGroup>
            <FormGroup>
                <ControlLabel>LABEL NAME</ControlLabel>
                <FormControl componentClass="select" placeholder="select" value={labelName} id="labelName" >
                    <option value="-1">select</option>
                    {
                        labelFilters.map((label, index) => {
                            return (
                                <option value={label} key={'rules' + index}>{label}</option>
                            )
                        })
                    }
                </FormControl>
            </FormGroup>
            <FormGroup>
                <ControlLabel>RULE TYPE</ControlLabel>
                <FormControl componentClass="select" placeholder="select" value={dqRuleType} id="dqRuleType" >
                    <option value="-1">select</option>
                    {
                        dqRuleTypeFilters.map((rule, index) => {
                            return (
                                <option value={rule} key={'rules' + index}>{rule}</option>
                            )
                        })
                    }
                </FormControl>
            </FormGroup>
            <FormGroup>
                <ControlLabel>RULE SUB TYPE</ControlLabel>
                <FormControl componentClass="select" placeholder="select" value={dqSubRuleType} id="dqSubRuleType">
                    <option value="select">select</option>
                    {
                        dqSubRuleTypeFilters.map((rule, index) => {
                            return (
                                <option value={rule} key={'rulesubtypes' + index}>{rule}</option>
                            )
                        })
                    }
                </FormControl>
            </FormGroup>
            <FormGroup>
                <ControlLabel>TABLE NAME</ControlLabel>
                <FormControl componentClass="select" placeholder="select" value={tableName} id="tableName">
                    <option value="select">select</option>
                    {
                        tableNameFilters.map((category, index) => {
                            return (
                                <option value={category} key={'table' + index}>{category}</option>
                            )
                        })
                    }
                </FormControl>
            </FormGroup>
            <FormGroup>
                <ControlLabel>ATTRIBUTE</ControlLabel>
                <FormControl componentClass="select" placeholder="select" value={dqAttr} id="dqAttr">
                    <option value="select">select</option>
                    {
                        dqAttrFilters.map((category, index) => {
                            return (
                                <option value={category} key={'attributes' + index}>{category}</option>
                            )
                        })
                    }
                </FormControl>
            </FormGroup>
            <FormGroup>
                <Button bsStyle="primary" bsSize="large" block onClick={props.handleSearch}>
                    Search
          </Button>
            </FormGroup>
        </Form>
    )
}