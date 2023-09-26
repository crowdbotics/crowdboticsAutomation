it("create an app", () => {
    let app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    cy.request({
        method: 'POST',
        url: baseURL+'/api/v1/github-repos/',
        body: {
            "app_type": "mobile-app",
            "custom_name": app_name,
            "lang_framework": "react_native"
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        cy.log('api auth key is generated ' + response.body)
        expect(response.status).to.eq(201)
        app_id = response.body.id

        cy.log('App is created and app ID is ' + app_id)
    })
})