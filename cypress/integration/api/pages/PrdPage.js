/// <reference types = "cypress"/>

//-------done---
export const prd_overview_tags = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createPRDTags.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createPRDTags.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDTags.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createTags') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const addPrdVersionStatus = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_addPrdVersionStatus.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_addPrdVersionStatus.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdVersionStatus.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createPrdVersionStatus'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

//---Done---
export const getPrdAiCategories = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdAiCategories1') + app_id + Cypress.env('getPrdAiCategories2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const getPendingInvite = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPendingInvite1') + app_id + Cypress.env('getPendingInvite2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const getAppPerformanceList = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppPerformanceList1') + app_id + Cypress.env('getAppPerformanceList2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const getCodeStateList = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCodestateList') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};


export const getRoles = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getRoles'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const getRolesUsingId = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getRoles'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const getAllFeatureFromBacklog = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllFeatureFromBacklog1') + app_id + Cypress.env('getAllFeatureFromBacklog2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};



export const getCurrentlyApprovedPrdVersion = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCurrentlyApprovedPrdVersion') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const getCBCarePlanUsingId = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCBCarePlanUsingId') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const getMilestoneIndex = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMilestoneIndex1') + app_id + Cypress.env('getMilestoneIndex2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const getMilestoneStatusSummy = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMilestoneSummy1') + app_id + Cypress.env('getMilestoneSummy2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};



//----Done-----
export const prd_overview_userRoles = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createPRDUserRoles.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createPRDUserRoles.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDUserRoles.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createUserRoles') + app_id,
            body: myFixture,
            headers: {

                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---Done----
export const prd_create_group = (auth_key, app_id, group_name) => {

    cy.readFile('cypress/fixtures/api_createPRDGroup.json').then((data) => {
        data.app = app_id
        data.name = group_name
        cy.writeFile('cypress/fixtures/api_createPRDGroup.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDGroup.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createprdGroup') + app_id,
            body: myFixture,
            headers: {

                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---Done---
export const prd_get_group = (auth_key, app_id) => {


    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getprdGroup') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//---Done----
export const prd_delete_group = (auth_key, app_id) => {


    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('deleteprdGroup') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//----Done-----
export const prd_create_item = (auth_key, app_id, group_id, item_name) => {

    cy.readFile('cypress/fixtures/api_createPRDItem.json').then((data) => {
        data.name = item_name
        data.group = group_id
        cy.writeFile('cypress/fixtures/api_createPRDItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDItem.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createprdItem') + app_id,
            body: myFixture,
            headers: {

                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//-----Done-----
export const prd_get_Item = (auth_key, group_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getprdItem') + group_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//------Done------
export const prd_delete_item = (auth_key, app_id, group_id, item_id) => {

    cy.readFile('cypress/fixtures/api_deleteprdItem.json').then((data) => {
        data.group_ids = [group_id];
        data.item_ids = [item_id];
        cy.writeFile('cypress/fixtures/api_deleteprdItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_deleteprdItem.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('deleteprdItem') + app_id,
            body: myFixture,
            headers: {

                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---done----
export const doPatchGroup = (auth_key, app_id, group_id, group_name) => {

    cy.readFile('cypress/fixtures/api_patchGroupItem.json').then((data) => {
        data.name = group_name;
        cy.writeFile('cypress/fixtures/api_patchGroupItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_patchGroupItem.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchGroup1') + group_id + Cypress.env('patchGroup2') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//------Done--------
export const doPatchItem = (auth_key, app_id, item_id, item_name) => {

    cy.readFile('cypress/fixtures/api_patchGroupItem.json').then((data) => {
        data.name = item_name;
        cy.writeFile('cypress/fixtures/api_patchGroupItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_patchGroupItem.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchItem1') + item_id + Cypress.env('patchItem1') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//-----not implemented in python-----------
export const doApprovePrd = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_approvePrd.json').then((data) => {
        data.app = [app_id];
        cy.writeFile('cypress/fixtures/api_approvePrd.json', JSON.stringify(data))
    })
    return cy.fixture('api_approvePrd.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('approvePrd'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//--------Done------------
export const doUpdatePrdVersionStatus = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_approvePrd.json').then((data) => {
        data.app = app_id;
        cy.writeFile('cypress/fixtures/api_approvePrd.json', JSON.stringify(data))
    })
    return cy.fixture('api_approvePrd.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('updatePrdVersionStatus'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//------Done-----
export const doImportCatalog = (auth_key, app_id, group_id, task_id) => {

    cy.readFile('cypress/fixtures/api_importCatalog.json').then((data) => {
        data.tasks_ids = task_id;
        cy.writeFile('cypress/fixtures/api_importCatalog.json', JSON.stringify(data))
    })
    return cy.fixture('api_importCatalog.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('importCatalog1') + group_id + Cypress.env('importCatalog2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//----DOne-----
export const doGetGroupUsingId = (auth_key, group_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getGroupUsingId') + group_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//---Done----
export const doPatchItemUpdateOrder = (auth_key, group_id, item_name) => {

    cy.readFile('cypress/fixtures/api_reorderPrdItems.json').then((data) => {
        data.new_order = item_name;
        cy.writeFile('cypress/fixtures/api_reorderPrdItems.json', JSON.stringify(data))
    })
    return cy.fixture('api_reorderPrdItems.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchItemUpdateOrder1') + group_id + Cypress.env('patchItemUpdateOrder2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---Done----
export const doGetItemsUsingId = (auth_key, item_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getItemUsingId') + item_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//----Done----
export const doAddPrdRoles = (auth_key, app_id, role_name) => {

    cy.readFile('cypress/fixtures/api_addPrdRole.json').then((data) => {
        data.app = app_id;
        data.name = role_name;
        cy.writeFile('cypress/fixtures/api_addPrdRole.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdRole.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addPrdRoles'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---Done-----
export const doRemovePrdRoles = (auth_key, item_id, role_id) => {

    cy.readFile('cypress/fixtures/api_removePrdRole.json').then((data) => {
        data.role_id = role_id;
        cy.writeFile('cypress/fixtures/api_removePrdRole.json', JSON.stringify(data))
    })
    return cy.fixture('api_removePrdRole.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('removePrdRoles1') + item_id + Cypress.env('removePrdRoles2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//-------Done------
export const doAddPrdTag = (auth_key, app_id, tag_name) => {

    cy.readFile('cypress/fixtures/api_addPrdTag.json').then((data) => {
        data.app = app_id;
        data.name = tag_name;
        cy.writeFile('cypress/fixtures/api_addPrdTag.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdTag.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addPrdTag'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//------Done--------
export const doGetPrdTag = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdTag') + app_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//------Done-----
export const doGetPrdTagUsingId = (auth_key, tag_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdTagUsingId') + tag_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//----Done-----
export const doDeletePrdTag = (auth_key, tag_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deletePrdTag') + tag_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//--------Done----------
export const doGetPrdVersions = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdVersion') + app_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//----Done----
export const doAddComment = (auth_key, app_id, comment, added_item_id) => {

    cy.readFile('cypress/fixtures/api_addPrdTtemComment.json').then((data) => {
        data.body = comment;
        data.item = added_item_id;
        cy.writeFile('cypress/fixtures/api_addPrdTtemComment.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdTtemComment.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addComment') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---Done----
export const doGetComment = (auth_key, comment_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getComment') + comment_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//---Done----
export const doGetChangeCommentStatus = (auth_key, comment_id, app_id, status) => {

    cy.readFile('cypress/fixtures/api_prdChangeCommentStatus.json').then((data) => {
        data.status = status;
        cy.writeFile('cypress/fixtures/api_prdChangeCommentStatus.json', JSON.stringify(data))
    })
    return cy.fixture('api_prdChangeCommentStatus.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('getChangeCommentStatus1') + comment_id + Cypress.env('getChangeCommentStatus2') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//-----Done-----
export const doGetViewInStudioPrd = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getViewInStudioPrd1') + app_id + Cypress.env('getViewInStudioPrd2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//---Done-----
export const doDeleteComment = (auth_key, comment_id, app_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteComment1') + comment_id + Cypress.env('deleteComment2') + app_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//----Done----
export const doEditComment = (auth_key, comment_id, app_id, comment, added_item_id) => {

    cy.readFile('cypress/fixtures/api_addPrdTtemComment.json').then((data) => {
        data.body = comment;
        data.item = added_item_id;
        cy.writeFile('cypress/fixtures/api_addPrdTtemComment.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdTtemComment.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('editComment1') + comment_id + Cypress.env('editComment2') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doAddSuggestedFeatures = (auth_key, app_id, app_name) => {

    cy.readFile('cypress/fixtures/api_addSuggestedFeatures.json').then((data) => {
        data.app_name = app_name;
        cy.writeFile('cypress/fixtures/api_addSuggestedFeatures.json', JSON.stringify(data))
    })
    return cy.fixture('api_addSuggestedFeatures.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addSuggestedFeatures1') + app_id + Cypress.env('addSuggestedFeatures1'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//----Done-----
export const doAddFeatureIntoPrd = (auth_key, app_id) => {
    return cy.fixture('api_addPrdImportFeature.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addFeatureIntoPrd') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//----Done----
export const doAddModuleIntoPrd = (auth_key, app_id, prd_custom_feature_id) => {
    return cy.fixture('api_addPrdImportModule.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addModuleIntoPrd1') + prd_custom_feature_id + Cypress.env('addModuleIntoPrd2') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//----Done----
export const doAddArchetypeIntoPrd = (auth_key, app_id) => {
    return cy.fixture('api_addPrdImportArchetype.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addArchetypeIntoPrd') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---Done-----
export const doGetCodeStatusPrd = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCodeStatusPrd') + app_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doGetStartOverPrdAi = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getStratOverPrdAi1') + app_id + Cypress.env('getStratOverPrdAi2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetPaymentReceipt = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPaymentReceipt1') + app_id + Cypress.env('getPaymentReceipt2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doGetUsefullLinks = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUsefullLinks1') + app_id + Cypress.env('getUsefullLinks2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doGetStatementOfWork = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        //url: Cypress.env('baseUrl') + Cypress.env('getStatementOfWork1') + app_id+Cypress.env('getStatementOfWork2'),
        url: Cypress.env('baseUrl') + '/api/v2/apps/' + app_id + '/code_packages/',

        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
// export const doAddInstallerInstall = (auth_key, app_id) => {
//     return cy.request({
//         method: 'POST',
//         url: Cypress.env('baseUrl') + Cypress.env('installerInstall1') + app_id+Cypress.env('installerInstall2'),
//         headers: {
//             'Authorization': 'Token ' + auth_key,
//         }

//     }).then((response) => {
//         return response;
//     })
// };

// export const doGetaAnalyzeRisks = (auth_key, app_id) => {
//     return cy.request({
//         method: 'GET',
//         url: Cypress.env('baseUrl') + Cypress.env('getAnalyzeRisk1') +app_id+Cypress.env('getAnalyzeRisk2'),
//         headers: {
//             'Authorization': 'Token ' + auth_key,
//         }

//     }).then((response) => {
//         return response;
//     })
// };
export const doGetCurrentPrdPdf = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCurrentPrdPdf1') + app_id + Cypress.env('getCurrentPrdPdf2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doGetUserReposList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUserReposList'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetPrdActivityLog = (auth_key,app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdActivityLog1')+app_id+Cypress.env('getPrdActivityLog2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetPrdAiUserType = (auth_key,app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdAiUserType1')+app_id+Cypress.env('getPrdAiUserType2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};