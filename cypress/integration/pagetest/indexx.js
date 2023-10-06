const axios = require("axios");
const login = async () => {  
	const body = {
    jsonrpc: "2.0",
    method: "Auth.login",
    id: "jsonrpc",
    params: ['anish.kumar@crowdbotics.com', 'cHV3w94wUJ7GsU'],
  };
try {
    const response = await axios.post(`http://cbtcms.herokuapp.com/json-rpc/`, body, {});
		console.log(response.data);  
} catch (error) {
    console.log(error.response.data);
  }};

  values = {
    'product': 3,
    'product_version': 3,
    'name': 'Edward Test Plan',
    'type': 5,
    'parent': null,
    'text':'Edward new test plan',
}

const createTestPlan = async () => {
  const body = {
    jsonrpc: "2.0",
    method: "TestPlan.create",
    id: "jsonrpc",
    params: [values],
  };
  const headers = {
    "Content-Type": "application/json",
    Cookie: `l9xjkj8c48wetmihwsc7g0681amzuss1`,
  };
  try {
    const response = await axios.post(
      `http://cbtcms.herokuapp.com/json-rpc/`,
      body,
      { headers }
    );
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
  const response = await axios.post(`http://cbtcms.herokuapp.com/json-rpc/`, body, {});
  console.log(response.data);
} catch (error) {
  console.log(error.response.data);
}
};
createTestPlan();