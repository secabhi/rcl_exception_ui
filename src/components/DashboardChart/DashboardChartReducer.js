// import {
//     START_LOADING_SPINNER,
//     STOP_LOADING_SPINNER,
//     PRE_FETCH_PROJECT,
//     FETCH_PROJECT_SUCCESS,
//     PUSH_ERROR_MESSAGE,
//     POP_ERROR_MESSAGE,
//     SET_VIEWPORT,
//     CHECK_BREAKPOINT,
// } from '/config/constants';

const defaultState = {
    // height: window.innerHeight,
    // pos: window.scrollY,
    // viewport: checkBreakPoint(window.innerWidth),
    // loadingProcesses: 0,
    // pageTransition: false,
    // errorMessages: [],
    //
    // // there will be times when we need to know if we started big and went small
    // // eg, rotated ipad
    // initialViewport: checkBreakPoint(window.innerWidth),
    // width: app ? app.offsetWidth : window.innerWidth
    //
    //set default state
};

const DCReducer = (state = defaultState, action) => {
    switch (action.type) {

        // initial app set up
        case SET_VIEWPORT:
            return defaultState;

        case START_LOADING_SPINNER:
            return Object.assign({}, state, {
                loadingProcesses: state.loadingProcesses += 1
            });

        case STOP_LOADING_SPINNER:
            return Object.assign({}, state, {
                loadingProcesses: state.loadingProcesses -= 1
            });

        case PRE_FETCH_PROJECT:
            return Object.assign({}, state, {
                pageTransition: true
            });

        case PUSH_ERROR_MESSAGE:
            return {
                ...state,
                errorMessages: [action.payload].concat(state.errorMessages)
            };

        case POP_ERROR_MESSAGE:
            return {
                ...state,
                errorMessages: state.errorMessages.slice(0, -1)
            };

        default:
            return state;
    }
};

export default DCReducer;
