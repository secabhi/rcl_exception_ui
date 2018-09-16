import React from "react";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export const TableComponent = (props) => {
  return (
    <ReactTable
      manual // Forces table not to paginate or sort automatically, so we can handle it server-side
      data={props.data}
      pages={props.pages} // Display the total number of pages
      loading={props.loading} // Display the loading overlay when we need it
      onFetchData={props.fetchData} // Request new data when things change
      filterable
      defaultPageSize={10}
      className="-striped -highlight"
      columns={[
        {
          Header: "",
          columns: [
            {
              Header: "As of Date",
              id: "asOfDate",
              accessor: d => d.asOfDate


            },
            {
              Header: "Label Name",
              id: "labelName",
              accessor: d => d.labelName,

            },
            {
              Header: "DQ Rule Id",
              id: "dqRuleId",
              accessor: d => d.dqRuleId,

            },
            {
              Header: "DQ Entity",
              id: "dq_entity",
              accessor: d => d.dq_entity,

            },
            {
              Header: "DQ Rule type",
              id: "dqRuleType",
              accessor: d => d.dqRuleType,

            },
            {
              Header: "DQ Attribute Value",
              id: "dqAttrVal",
              accessor: d => d.dqAttrVal,

            },
            {
              Header: "DQ Exception Msg",
              id: "dqExcpMsg",
              accessor: d => d.dqExcpMsg,

            },
            {
              Header: "Primary Key",
              id: "primaryKeySet",
              accessor: d => d.primaryKeySet,

            },
            {
              Header: "Primary Value",
              id: "primaryValueSet",
              accessor: d => d.primaryValueSet,

            },
            {
              Header: "DQ Sub Rule Type",
              id: "dqRuleSubType",
              accessor: d => d.dqRuleSubType,

            },
            {
              Header: "Load Date",
              id: "loadDate",
              accessor: d => d.loadDate,

            }
          ]
        }
      ]}
    />

  )
}