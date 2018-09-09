import React from "react";
import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    as_of_date: '4 SEP 2018 10:12',
    labelName: 'LINK_DQ_ID_' + Math.floor(Math.random() * 30),
    dq_rule_id: 'LINKAGE_CHECK_' + Math.floor(Math.random() * 30),
    category: 'CONTRACT vs PARTY' + Math.floor(Math.random() * 30),
    progress: 'TABLE_' + Math.floor(Math.random() * 30),
    dq_entity:'EXCEPTION_MESSAGE_' + Math.floor(Math.random() * 30),
    dq_attr:'ATTRIBUTE_' + Math.floor(Math.random() * 30),
    dq_attr_value: 'ATTRIBUTE_VALUE_' + Math.floor(Math.random() * 30),
    primarykey: 'PRIMARY_KEY_' + Math.floor(Math.random() * 30)
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
