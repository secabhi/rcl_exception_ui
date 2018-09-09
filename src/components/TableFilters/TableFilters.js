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
      this.props.initTableFilters();
    }

    componentDidUpdate(prevProps) {
      console.log(this.props)
    }

    render() {
        const { dates=[], rules=[], labels=[], rulesubtypes=[], tables=[], attributes=[] } = this.props;
        return (
            <Form className='FormFilter' onChange={this.handleChange} onSubmit={this.handleSearch}>
                <FormGroup>
                  <ControlLabel>AS OF DATE</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" bsClass="form-control date-control" value={this.state.labelName} id="asOfDate" >
                      <option value="-1">select</option>
                      {
                          dates.map((date, index) => {
                              return(
                                  <option value={date} key={'dates' + index}>{date}</option>
                              )
                          })
                      }
                    </FormControl>
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
                        rulesubtypes.map((rule, index) => {
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
                        tables.map((category, index) => {
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
                        attributes.map((category, index) => {
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
