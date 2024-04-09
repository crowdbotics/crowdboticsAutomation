/// <reference types = "cypress"/>
export const doGetOrganizationPRDList = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDList'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

export const doGenerateOrganizationPRD = (auth_key) => {
    return cy.fixture('api_generateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
           // url: Cypress.env('baseUrl') + Cypress.env('generateOrganizationPRD'),
            url: 'https://crowdbotics-slack-dev.herokuapp.com/api/v1/prd/generate-prd/',
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetOrganizationPRDById = (auth_key,generatePrd_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDById1')+generatePrd_id+ Cypress.env('getOrganizationPRDById2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doPutOrganizationPRD = (auth_key,generatePrd_id) => {
    return cy.fixture('api_putGenerateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putOrganizationPRDById1')+generatePrd_id+ Cypress.env('putOrganizationPRDById2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doPatchOrganizationPRD = (auth_key,generatePrd_id) => {
    return cy.fixture('api_patchGenerateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchOrganizationPRDById1')+generatePrd_id+ Cypress.env('patchOrganizationPRDById2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteOrganizationPRD = (auth_key,generatePrd_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteOrganizationPRD1')+generatePrd_id+Cypress.env('deleteOrganizationPRD2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

export const dogetOrganizationPRDEstimate = (auth_key,generatePrd_id) => {
    return cy.fixture('api_generateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDEstimate1')+generatePrd_id+Cypress.env('getOrganizationPRDEstimate2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetOrganizationPRDCategoryList = (auth_key,generatePrd_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDCategoryList1')+generatePrd_id+ Cypress.env('getOrganizationPRDCategoryList2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doCreateOrganizationPRDCategory = (auth_key,generatePrd_id) => {
    return cy.fixture('api_CreateOrganizationPRDCategory.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createOrganizationPRDCategory1')+generatePrd_id+Cypress.env('createOrganizationPRDCategory2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetOrganizationPRDCategoryUsingId = (auth_key,generatePrd_id,category_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDCategoryUsingId1')+generatePrd_id+ Cypress.env('getOrganizationPRDCategoryUsingId2')+category_id+Cypress.env('getOrganizationPRDCategoryUsingId3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doPutOrganizationPRDCategory = (auth_key,generatePrd_id,category_id) => {
    return cy.fixture('api_putOrganizationPRDCategoryUsingId.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putOrganizationPRDCategoryUsingId1')+generatePrd_id+Cypress.env('putOrganizationPRDCategoryUsingId2')+category_id+Cypress.env('putOrganizationPRDCategoryUsingId3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doPatchOrganizationPRDCategory = (auth_key,generatePrd_id,category_id) => {
    return cy.fixture('api_patchOrganizationPRDCategoryUsingId.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchOrganizationPRDCategoryUsingId1')+generatePrd_id+Cypress.env('patchOrganizationPRDCategoryUsingId2')+category_id+Cypress.env('patchOrganizationPRDCategoryUsingId3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteOrganizationPRDCategoryUsingId = (auth_key,generatePrd_id,category_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteOrganizationPRDCategoryUsingId1')+generatePrd_id+ Cypress.env('deleteOrganizationPRDCategoryUsingId2')+category_id+Cypress.env('deleteOrganizationPRDCategoryUsingId3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doMoveFetaureIntoCategoryOrganizationPRD = (auth_key,generatePrd_id,category_id) => {
    return cy.fixture('api_moveFeatureIntoCategory.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('moveFeatureIntoCategory1')+generatePrd_id+Cypress.env('moveFeatureIntoCategory2')+category_id+Cypress.env('moveFeatureIntoCategory3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetAllfeatureOrganizationPRD = (auth_key,generatePrd_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllfeatureOrganizationPRD1')+generatePrd_id+ Cypress.env('getAllfeatureOrganizationPRD1'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doCreatefeatureOrganizationPRD = (auth_key,generatePrd_id) => {
    return cy.fixture('api_createFeaturePRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createfeatureOrganizationPRD1')+generatePrd_id+Cypress.env('createfeatureOrganizationPRD1'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetfeatureUsingIdOrganizationPRD = (auth_key,generatePrd_id,feature_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getfeatureUsingIdOrganizationPRD1')+generatePrd_id+ Cypress.env('getfeatureUsingIdOrganizationPRD2')+feature_id+Cypress.env('getfeatureUsingIdOrganizationPRD3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doPutfeatureUsingIdOrganizationPRD = (auth_key,generatePrd_id,feature_id) => {
    return cy.fixture('api_PutfeatureUsingIdOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putfeatureUsingIdOrganizationPRD1')+generatePrd_id+Cypress.env('putfeatureUsingIdOrganizationPRD2')+feature_id+Cypress.env('putfeatureUsingIdOrganizationPRD3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doPatchfeatureUsingIdOrganizationPRD = (auth_key,generatePrd_id,feature_id) => {
    return cy.fixture('api_PatchfeatureUsingIdOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchfeatureUsingIdOrganizationPRD1')+generatePrd_id+Cypress.env('patchfeatureUsingIdOrganizationPRD2')+feature_id+Cypress.env('patchfeatureUsingIdOrganizationPRD3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doDeletefeatureUsingIdOrganizationPRD = (auth_key,generatePrd_id,feature_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deletefeatureUsingIdOrganizationPRD1')+generatePrd_id+ Cypress.env('deletefeatureUsingIdOrganizationPRD2')+feature_id+Cypress.env('deletefeatureUsingIdOrganizationPRD3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doAddModuleIntofeatureOrganizationPRD = (auth_key,generatePrd_id,feature_id) => {
    return cy.fixture('api_addModuleIntoFeatureOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addModuleIntoFeatureOrganizationPRD1')+generatePrd_id+Cypress.env('addModuleIntoFeatureOrganizationPRD2')+feature_id+Cypress.env('addModuleIntoFeatureOrganizationPRD3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doRemoveModuleIntoFeatureOrganizationPRD = (auth_key,generatePrd_id,feature_id) => {
    return cy.fixture('api_removeModuleIntoFeatureOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('removeModuleIntoFeatureOrganizationPRD1')+generatePrd_id+Cypress.env('removeModuleIntoFeatureOrganizationPRD2')+feature_id+Cypress.env('removeModuleIntoFeatureOrganizationPRD3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetAllPhaseOrganizationPRD = (auth_key,generatePrd_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllPhaseOrganizationPRD1')+generatePrd_id+ Cypress.env('getAllPhaseOrganizationPRD2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};