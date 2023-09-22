const axios = require("axios");

const username = 'anish.kumar@crowdbotics.com'; // Replace with your Kiwi TCMS username
const password = 'bcHV3w94wUJ7GsU';
const apiUrl = 'http://cbtcms.herokuapp.com/json-rpc/';
const login = async () => {
    const body = {
        jsonrpc: "2.0",
        method: "Auth.login",
        id: "jsonrpc",
        params: [username, password],
    };
    //  const port = 38332;
    try {
        const response = await axios.post(apiUrl, body, {
        });
        console.log(response.data);
    } catch (error) {
        console.log(error.response.data);
    }
};

queryValues = {
    'author_id': 14
}

const fetchTestPlans = async () => {
     
    const testPlanData = {
        jsonrpc: "2.0",
        method: 'Category.filter',
        params: [queryValues],
        id: "jsonrpc",
        name: 'Anish Test Plan',
        description: 'This is a test plan created using Cypress and Axios.',
        product: 3, // Replace with the appropriate product ID
        product_version: 3, // Replace with the appropriate product version ID
    };
    try {

        const response = await axios.post(apiUrl, testPlanData, {
            auth: {
                username : 'anish.kumar@crowdbotics.com',
                password : 'bcHV3w94wUJ7GsU'
            },
            
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response.data);
    } catch (error) {
        console.log(error.response.data);
    }
};

fetchTestPlans();
//login();
