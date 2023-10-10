import { authenticator } from 'otplib';
import { loginPost, getPosts } from '../api_helpers';

describe('API Tests', () => {
    let auth_key;
    it('should be logged in', () => {
        const token = authenticator.generate("574WTVJOJ562OOSF2FCFPBJM6FIKHQBR");
        const postData = { 'email': 'testsneh@crowdbotics.com', 'password': 'devstringx@123', 'token': token };

        loginPost(postData).should((response) => {
            expect(response.status, "this is the login status code").to.eq(200) // Ensure the request was successful
            expect(response.body.key, "api auth key is generated")
            auth_key = response.body
            console.log('api auth key is generated ', auth_key);
            
        });
        cy.log('api auth key is generated ', auth_key)
        // console.log('api auth key is generated ', auth_key);
    });

    // it('should retrieve a list of posts', () => {
    //     getPosts().should((response) => {
    //         expect(response.status).to.eq(200); // Ensure the request was successful
    //         expect(response.body).to.be.an('array');
    //         expect(response.body.length).to.be.greaterThan(0);
    //     });
    // });

    // Add more test cases as needed
});
