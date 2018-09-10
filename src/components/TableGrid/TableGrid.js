import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "../../utils/utils.js";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import './TableGrid.scss';

const CheckboxTable = checkboxHOC(ReactTable);

class TableGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.initTableData();
  }

  render() {
    const { tableGrid } = this.props;
    return (
      <div className="TableGrid">
        <ReactTable
          data={tableGrid}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "DATE",
              accessor: "asOfDate",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "LABEL NAME",
              accessor: "labelName",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "DQ RULE ID",
              accessor: "dqRuleId",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "RULE TYPE",
              accessor: "dqRuleType",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "RULE SUB TYPE",
              accessor: "dqRuleSubType",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "TABLE NAME",
              accessor: "tableName",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "EXCEPTION MESSAGE",
              accessor: "dqExcpMsg",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "ATTRIBUTE",
              accessor: "dqAttr",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "ATTR VALUE",
              accessor: "dqAttrValue",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "PRIMARY KEY",
              accessor: "primaryKeySet",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "PRIMARY VALUE",
              accessor: "primaryValueSet",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "DQ RULE DESC",
              accessor: "dqRuleDesc",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "MAPPING NAME",
              accessor: "mappingName",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "LOAD DATE",
              accessor: "loadDate",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "ERROR CODE",
              accessor: "errorCode",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "ERROR MESSAGE",
              accessor: "errorMessage",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}

export default TableGrid;
