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
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="TableGrid">
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "DATE",
              accessor: "as_of_date",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "DQ RULE ID",
              accessor: "labelName",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "RULE TYPE",
              accessor: "dq_rule_id",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "RULE SUB TYPE",
              accessor: "category",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "TABLE NAME",
              accessor: "progress",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "EXCEPTION MESSAGE",
              accessor: "dq_entity",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "ATTRIBUTE",
              accessor: "dq_attr",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "ATTR VALUE",
              accessor: "dq_attr_value",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "PRIMARY KEY",
              accessor: "primarykey",
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
