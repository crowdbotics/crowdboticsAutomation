export function loginPost(postData) {
  return cy.callAPI('POST', '/api/endpoint/api/v2/totp-login/', {}).then((response) => {
    // You can access the response here
    console.log("thwiehroiw", response.body); // Access the response body
    // Add more assertions or actions based on the response
  });
}

export function getPosts() {
  return cy.callAPI('GET', '/posts');
}

// Add more functions for other API endpoints and actions
