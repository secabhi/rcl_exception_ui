import {
    PAGEHEADER_BEGIN,
    PAGEHEADER_SUCCESS,
    PAGEHEADER_FAILED
} from "../../../constants/constants.js";

export const fetchPageheaderBegin = () => {
    return {
        type: PAGEHEADER_BEGIN
    };
};
