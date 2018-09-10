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
                  accessor: "as_of_date",
                  filterMethod:function (filter, row){
                    debugger;
                   return row[filter.id].startsWith(filter.value) ||
                    row[filter.id].endsWith(filter.value)
                }},
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
                  id: "dq_rule_id",
                  accessor: d => d.dq_rule_id,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dq_rule_id"] }),
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
                  Header: "DQ Attribute",
                  id: "dq_attr",
                  accessor: d => d.dq_attr,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dq_attr"] }),
                  filterAll: true
                },
                {
                  Header: "DQ Attribute Value",
                  id: "dq_attr_value",
                  accessor: d => d.dq_attr_value,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dq_attr_value"] }),
                  filterAll: true
                },
                {
                  Header: "DQ Exception Msg",
                  id: "dq_excp_msg",
                  accessor: d => d.dq_excp_msg,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dq_excp_msg"] }),
                  filterAll: true
                },
                {
                  Header: "Primary Key",
                  id: "primarykey",
                  accessor: d => d.primarykey,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["primarykey"] }),
                  filterAll: true
                },
                {
                  Header: "Category",
                  id: "category",
                  accessor: d => d.category,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["category"] }),
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