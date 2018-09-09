import React, { Component } from 'react';
import { Button, Form, FormGroup, InputGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Label} from 'react-bootstrap';
import './TableFilters.scss';
class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date:'',
          labelName: '-1',
          ruleType: '-1',
          ruleSubType: '-1',
          tableName: '-1',
          attribute: '-1'
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleSearch(e){
      e.preventDefault();
      console.log(this.state);
      alert('searching\n');
    }

    handleChange(e){
      console.log(e);
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    componentWillMount(){
        this.setState({
          categories: [
              { Id: 'c1', Name: 'Category-1'},
              { Id: 'c2', Name: 'Category-2'},
              { Id: 'c3', Name: 'Category-3'},
              { Id: 'c4', Name: 'Category-4'},
              { Id: 'c5', Name: 'Category-5'},
              { Id: 'c6', Name: 'Category-6'},
              { Id: 'c7', Name: 'Category-7'},
              { Id: 'c8', Name: 'Category-8'},
              { Id: 'c9', Name: 'Category-9'},
              { Id: 'c10', Name: 'Category-10'}
          ],
          rules: [
                { Id: 'r1', Name: 'Rule-1'},
                { Id: 'r2', Name: 'Rule-2'},
                { Id: 'r3', Name: 'Rule-3'},
                { Id: 'r4', Name: 'Rule-4'},
                { Id: 'r5', Name: 'Rule-5'},
                { Id: 'r6', Name: 'Rule-6'},
                { Id: 'r7', Name: 'Rule-7'},
                { Id: 'r8', Name: 'Rule-8'},
                { Id: 'r9', Name: 'Rule-9'},
                { Id: 'r10', Name: 'Rule-10'}
            ],
            labels: [
                  { Id: 'r1', Name: 'label-1'},
                  { Id: 'r2', Name: 'label-2'},
                  { Id: 'r3', Name: 'label-3'},
                  { Id: 'r4', Name: 'label-4'},
                  { Id: 'r5', Name: 'label-5'},
                  { Id: 'r6', Name: 'label-6'},
                  { Id: 'r7', Name: 'label-7'},
                  { Id: 'r8', Name: 'label-8'},
                  { Id: 'r9', Name: 'label-9'},
                  { Id: 'r10', Name: 'label-10'}
              ]
        });
    }

    render() {
        const { products, rules, labels, categories } = this.state;
        return (
            <Form className='FormFilter' onChange={this.handleChange} onSubmit={this.handleSearch}>
                <FormGroup controlId="asOfDateControl">
                  <ControlLabel>AS OF DATE</ControlLabel>
                    <FormControl type="date" bsClass="form-control date-control" placeholder="Select date"/>
                </FormGroup>
                <FormGroup controlId="labelNameControl">
                  <ControlLabel>LABEL NAME</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" value={this.state.labelName} id="labelName" >
                    <option value="-1">select</option>
                    {
                        labels.map((label, index) => {
                            return(
                                <option value={label.Id} key={'rules' + index}>{label.Name}</option>
                            )
                        })
                    }
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="ruleTypeControl">
                  <ControlLabel>RULE TYPE</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" value={this.state.ruleType} id="ruleType" >
                    <option value="-1">select</option>
                    {
                        rules.map((rule, index) => {
                            return(
                                <option value={rule.Id} key={'rules' + index}>{rule.Name}</option>
                            )
                        })
                    }
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="ruleSubTypeControl">
                  <ControlLabel>RULE SUB TYPE</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" value={this.state.ruleSubType} id="ruleSubType">
                    <option value="select">select</option>
                    {
                        rules.map((rule, index) => {
                            return(
                                <option value={rule.Id} key={'rulesubtypes' + index}>{rule.Name}</option>
                            )
                        })
                    }
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>TABLE NAME</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" value={this.state.tableName} id="tableName">
                    <option value="select">select</option>
                    {
                        categories.map((category, index) => {
                            return(
                                <option value={category.Id} key={'categories' + index}>{category.Name}</option>
                            )
                        })
                    }
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>ATTRIBUTE</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" value={this.state.attribute} id="attribute">
                    <option value="select">select</option>
                    {
                        categories.map((category, index) => {
                            return(
                                <option value={category.Id} key={'attributes' + index}>{category.Name}</option>
                            )
                        })
                    }
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <Button bsStyle="primary" bsSize="large" block onClick={this.handleSearch}>
                    Search
                  </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Filters;
