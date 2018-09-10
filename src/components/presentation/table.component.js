import React from "react";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export const TableComponent =(props)=> {
  return(
    <ReactTable
          data={props.data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "RCL Exception",
              columns: [
                {
                  Header: "As of Date",
                  id: "asOfDate",
                  accessor: d => d.asOfDate,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["asOfDate"] }),
                  filterAll: true
                  
                },
                {
                  Header: "Label Name",
                  id: "labelName",
                  accessor: d => d.labelName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["labelName"] }),
                  filterAll: true
                },
                {
                  Header: "DQ Rule Id",
                  id: "dqRuleId",
                  accessor: d => d.dqRuleId,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dqRuleId"] }),
                  filterAll: true
                },
                {
                  Header: "DQ Entity",
                  id: "dq_entity",
                  accessor: d => d.dq_entity,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dq_entity"] }),
                  filterAll: true
                },
                {
                  Header: "DQ Rule type",
                  id: "dqRuleType",
                  accessor: d => d.dqRuleType,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dqRuleType"] }),
                  filterAll: true
                },
                {
                  Header: "DQ Attribute Value",
                  id: "dqAttrVal",
                  accessor: d => d.dqAttrVal,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dqAttrVal"] }),
                  filterAll: true
                },
                {
                  Header: "DQ Exception Msg",
                  id: "dqExcpMsg",
                  accessor: d => d.dqExcpMsg,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dqExcpMsg"] }),
                  filterAll: true
                },
                {
                  Header: "Primary Key",
                  id: "primaryKeySet",
                  accessor: d => d.primaryKeySet,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["primaryKeySet"] }),
                  filterAll: true
                },
                {
                  Header: "Table Name",
                  id: "tableName",
                  accessor: d => d.tableName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["tableName"] }),
                  filterAll: true
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />

  )
}