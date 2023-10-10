import { API_BASE_URL } from &#39;../config&#39;;
import { getAuthHeaders, validateResponse } from &#39;../utils/apiUtils&#39;;
import UserApi from ../pageObjects/apiEndpoints&#39;;

describe(&#39;User API Tests&#39;, () =&gt; {
const userApi = new UserApi();

it(&#39;should get user details&#39;, () =&gt; {
cy.request({
method: &#39;GET&#39;,
url: `${API_BASE_URL}/users/1`,
headers: getAuthHeaders(),
}).then((response) =&gt; {
validateResponse(response);
// Add more assertions based on the API response
});
});
});