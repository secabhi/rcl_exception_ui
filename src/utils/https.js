import axios from 'axios';

export function callPostWebService(url, params) {
    console.log('------------Web Service Call Details------------');
    var header = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    console.log("Request Type: POST");
    console.log("URL: ", url);
    console.log("Header: ", header);
    console.log("Params: ", params);
    console.log('------------------------------------------------');

    const config_timeout = '25000';

    axios.defaults.timeout = config_timeout;
    axios.transformResponse = axios.defaults.transformResponse.concat((data) => {
        console.log(data) // this should now be JSON
    })
    var requestObject = axios.post(url, params, header);
    //debugger;
    return new Promise(
        function (resolve, reject) {
            requestObject.then((data) => {
                // debugger;
                console.log('----------------Success Response----------------');
                console.log("Response Status: ", data.status);
                console.log("Response Data: ", data.data);
                console.log('------------------------------------------------');
                resolve(data);
            }, (error) => {
                // debugger;
                console.log('----------------Error Response------------------');
                // debugger;
                console.log("Response Status: ", error);
                console.log("Response Data: ", error.response);
                console.log('------------------------------------------------');
                //showalert(error)
                //if((error.status == "404")&&(error.response.data ='Could not verify password due to system error.'))
                // resolve(error.response);
                if ((error.message == "Network Error") || (error.message.substring(0, 7) == "timeout")) {

                    //resolve({data: error}); //to handle the 404 not found for login errors
                    // store.dispatch({
                    //             type: 'SHOW_EXCEPTION',
                    //             payload: {showException:true,error:{failedModule:'',failureReason:error.message,failureDescription:'API:'+url}},

                    //         });

                }
                else if ((error.response.status == "404")) {

                    resolve(error.response);
                }
                else {

                    //resolve('Network Error: No Response received due as webservice call timedout');
                }
                if (error.status == "422") { //Workaround code to handle issue with SaleItemSplitCommission API
                    reject(error);
                }
                //reject(error);
                if ((error.message != "Network Error") && (error.message.substring(0, 7) != "timeout")) {
                    resolve(error.response);
                }

            });

        }
    );
}

export function callGetWebService(url, params) {

    console.log('------------Web Service Call Details------------');
    var header = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    console.log("Request Type: GET");
    console.log("URL: ", url);
    console.log("Header: ", header);
    console.log("Params: ", params);
    console.log('------------------------------------------------');
    var requestObject = axios.get(url, params, header);
    return new Promise(
        function (resolve, reject) {
            requestObject.then((data) => {
                console.log('----------------Success Response----------------');
                console.log("Response Status: ", data.status);
                console.log("Response Data: ", data.data);
                console.log('------------------------------------------------');
                resolve(data);
            }, (error) => {
                //alert('test');
                console.log('----------------Error Response------------------');
                console.log("Response Status: ", error.status);
                console.log("Response Data: ", error.data);
                console.log('------------------------------------------------');
                // store.dispatch({
                //     type: 'START_SPINNER',
                //     payload:false,

                // });
                if (error.status == "422") { //Workaround code to handle issue with SaleItemSplitCommission API
                    reject(error);
                }
                //reject(error);
            });

        }
    );
}