import {
    PAGEHEADER_BEGIN,
    PAGEHEADER_SUCCESS,
    PAGEHEADER_FAILED
} from "../../../constants/constants.js";

export const fetchTableSubHeaderBegin = () => {
    return {
        type: PAGEHEADER_BEGIN
    };
};
