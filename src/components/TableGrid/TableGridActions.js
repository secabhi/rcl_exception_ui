import axios from 'axios';
import Config from '/config/endpoints.json';
import { TABLE_DATA_INIT } from '/config/constants.js';
import { makeData, Logo, Tips } from "../../utils/utils.js";

export const initTableData = () => {
    return {
        type: TABLE_DATA_INIT,
        tableGrid: makeData()
    };
};
