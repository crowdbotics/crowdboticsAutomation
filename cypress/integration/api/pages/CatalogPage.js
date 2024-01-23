/// <reference types = "cypress"/>

export const doAddCatalogFeature = (auth_key, feature_title, feature_slug, feature_description) => {
    cy.readFile('cypress/fixtures/api_addCatalogFeature.json').then((data) => {
        data.title = feature_title
        data.slug = feature_slug
        data.description = feature_description
        cy.writeFile('cypress/fixtures/api_addCatalogFeature.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogFeature.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addCatalogfeature'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetCatologFeature = (auth_key, feature_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogFeature') + feature_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doAddCatalogCategory = (auth_key, category_title) => {
    cy.readFile('cypress/fixtures/api_addCatalogCategory.json').then((data) => {
        data.title = category_title;
        cy.writeFile('cypress/fixtures/api_addCatalogCategory.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogCategory.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addCatalogCategory'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const doGetCatologCategory = (auth_key, category_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogFeature') + category_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doAddCatalogModule = (auth_key, module_title, module_slug, features_id, module_description) => {
    cy.readFile('cypress/fixtures/api_addCatalogModule.json').then((data) => {
        data.title = module_title;
        data.slug = module_slug;
        data.features = features_id;
        data.description = module_description;
        cy.writeFile('cypress/fixtures/api_addCatalogModule.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogModule.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addCatalogModules'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetCatologModule = (auth_key, module_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogModules') + module_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doImportFeature = (auth_key, app_id) => {

    return cy.fixture('api_ImportFeature.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('importFeature') + app_id,
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doImportModule = (auth_key, app_id, group_id) => {

    return cy.fixture('api_importModule.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('importModule1') + group_id + Cypress.env('importModule2') + app_id,
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetArchetype = (auth_key, archetype_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getArchetype') + archetype_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doAsset = (auth_key) => {

    return cy.fixture('api_catalogAsset.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('asset'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doCatalogCodeModule = (auth_key, slug) => {
    cy.readFile('cypress/fixtures/api_catalogCodeModule.json').then((data) => {
        data.slug = slug;
        cy.writeFile('cypress/fixtures/api_catalogCodeModule.json', JSON.stringify(data));
    });
    return cy.fixture('api_catalogCodeModule.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('catalogCodeModule'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetEmbeddingSearch = (auth_key) => {

    return cy.fixture('api_catalogEmbeddingSearch.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('catalogEmbeddingSearch'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};