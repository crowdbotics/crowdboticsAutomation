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
  const body = {
    jsonrpc: "2.0",
    method: "TestPlan.filter",
    id: "jsonrpc",
    params: [queryValues],
  };
  try {
    const response = await axios.post(apiUrl, body, {
        auth: {
            username: "anish.kumar@crowdbotics.com",
            password: "bcHV3w94wUJ7GsU",
        },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

fetchTestPlans();
//login();
