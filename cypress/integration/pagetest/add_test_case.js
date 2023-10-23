const axios = require("axios");

const login = async () => {  
	const body = {
    jsonrpc: "2.0",
    method: "Auth.login",
    id: "jsonrpc",
    params: ['cbsneh', 'dssneh@123'],
    };
try {
    const response = await axios.post(`http://cbtcms.herokuapp.com/json-rpc/`, body, {});
		console.log(response.data); 
    response_data=response.data.result; 
} catch (error) {
    console.log(error.response.data);
  }
  return response_data;
};

const createTestRun = async () => {
    const loginResponse = await login();

    const testRunData = {
        'plan': 8,
        'name': 'My Test Run',
        'build': 3,
        'manager': 'cbsneh',
        'summary': "This is run created by cypress automation"
    };

    const bodyCreateTestRun = {
        jsonrpc: "2.0",
        method: "TestRun.create",
        id: "jsonrpc",
        params: [testRunData],
    };

    const headers = {
        "Content-Type": "application/json",
        Cookie: 'sessionid=' + loginResponse,
    };

    try {
       
        const responseCreateTestRun = await axios.post(
            `http://cbtcms.herokuapp.com/json-rpc/`,
            bodyCreateTestRun,
            { headers }
        );
        
        const testRunId = responseCreateTestRun.data.result.id;
        console.log('Test Run created successfully! ID:', testRunId);

       
        let testCasesToAdd = 4; 
        const bodyAddTestCases = {
            jsonrpc: "2.0",
            method: "TestRun.add_case",
            id: "jsonrpc",
            params: [testRunId, testCasesToAdd],
        };

        const responseAddTestCases = await axios.post(
            `http://cbtcms.herokuapp.com/json-rpc/`,
            bodyAddTestCases,
            { headers }
        );

        console.log('Test cases added to the test run:', responseAddTestCases.data);

    } catch (error) {
        console.error('Error:', error.response.data);
    }
};
createTestRun;
