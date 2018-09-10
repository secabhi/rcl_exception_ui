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
    "asOfDate": '4 SEP 2018 10:12',
    "labelName": 'LINK_DQ_ID_' + Math.floor(Math.random() * 30),
    "dqRuleId": 'LINKAGE_CHECK_' + Math.floor(Math.random() * 30),
    "dqRuleType": 'LINK_DQ_ID_' + Math.floor(Math.random() * 30),
    "dqRuleSubType": 'CONTRACT vs PARTY' + Math.floor(Math.random() * 30),
    "tableName": 'TABLE_' + Math.floor(Math.random() * 30),
    "dqAttr":'ATTRIBUTE_' + Math.floor(Math.random() * 30),
    "dqAttrVal": 'ATTRIBUTE_VALUE_' + Math.floor(Math.random() * 30),
    "primaryKeySet": 'PRIMARY_KEY_' + Math.floor(Math.random() * 30),
    "primaryValueSet": 'PRIMARY_VALUE_' + Math.floor(Math.random() * 30),
    "dqExcpMsg": 'DQ_EXCEPTION_MESSAGE_' + Math.floor(Math.random() * 30),
    "dqRuleDesc": 'DQ_RULE_DESC_' + Math.floor(Math.random() * 30),
    "mappingName": 'MAPPING_NAME_' + Math.floor(Math.random() * 30),
    "loadDate": 'MAPPING_NAME_' + Math.floor(Math.random() * 30),
    "errorCode": null,
    "errorMessage": null
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
