/// <reference types = "cypress"/>

export const doCteareApp = (auth_key, app_name) => {
    // ******************* CREATE AN APP ******************** //
    cy.readFile('cypress/fixtures/api_createApp.json').then((data) => {
        data.custom_name = app_name
        cy.writeFile('cypress/fixtures/api_createApp.json', JSON.stringify(data))
    })
    return cy.fixture('api_createApp.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createApp'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const getNotification = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getNotification1') + app_id + Cypress.env('getNotification2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const searchApp = (auth_key, app_name) => {
    // ******************* SEARCH AN APP ******************** //
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('searchApp1') + app_name + Cypress.env('searchApp2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const appTypeList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('appTypeList'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetAppetizeBuilds = (auth_key,app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppetizeBuilds1')+app_id+Cypress.env('getAppetizeBuilds2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAppListById = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('appTypeList1')+ Cypress.env('appTypeList2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


export const doGetSkillsList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getSkills'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetBugTaskList = (auth_key,app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getBugTaskList1')+app_id+ Cypress.env('getBugTaskList2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doCreateBugTask = (auth_key,app_id) => {
   
    return cy.fixture('api_addBugtask.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createBugTask1')+app_id+Cypress.env('createBugTask2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}


export const doGetBugTaskById = (auth_key,app_id,bugTask_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getBugTaskById1')+app_id+ Cypress.env('getBugTaskById2')+bugTask_id+Cypress.env('getBugTaskById3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doUpdateWithPutBugTask = (auth_key,app_id,bugTask_id) => {
   
    return cy.fixture('api_updateWithPutBugtask.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putBugTaskById1')+app_id+Cypress.env('putBugTaskById2')+bugTask_id+Cypress.env('putBugTaskById3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doUpdateWithPatchBugTask = (auth_key,app_id,bugTask_id) => {
   
    return cy.fixture('api_updateWithPatchBugtask.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchBugTaskById1')+app_id+Cypress.env('patchBugTaskById2')+bugTask_id+Cypress.env('patchBugTaskById3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteBugTask = (auth_key,app_id,bugTask_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteBugTaskById1')+app_id+ Cypress.env('deleteBugTaskById2')+bugTask_id+Cypress.env('deleteBugTaskById3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export const doGetComponentList = (auth_key,app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getComponentList1')+app_id+ Cypress.env('getComponentList2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doCreateComponent = (auth_key,app_id) => {
   
    return cy.fixture('api_addComponent.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createComponent1')+app_id+Cypress.env('createComponent2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetComponentById = (auth_key,app_id,Component_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getComponentById1')+app_id+ Cypress.env('getComponentById2')+Component_id+Cypress.env('getComponentById3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doUpdateWithPutComponent = (auth_key,app_id,component_id) => {
   
    return cy.fixture('api_updateWithPutComponent.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putComponent1')+app_id+Cypress.env('putComponent2')+component_id+Cypress.env('putComponent3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doUpdateWithPatchComponent = (auth_key,app_id,component_id) => {
   
    return cy.fixture('api_updateWithPatchComponent.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchComponent1')+app_id+Cypress.env('patchComponent2')+component_id+Cypress.env('patchComponent3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteComponent = (auth_key,app_id,component_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteComponent1')+app_id+ Cypress.env('deleteComponent2')+component_id+Cypress.env('deleteComponent3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};



//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

export const getCertificateList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCertificateList'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAppSupportType = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppSupportType'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};



export const getAppInfo = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppInfo1') + app_id + Cypress.env('getAppInfo2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doCheckAppGeneration = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('checkAppGeneration1') + app_id + Cypress.env('checkAppGeneration2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
export const getInvoice = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getInvoice'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
export const searchInvoice = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('searchInvoice') + app_id,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAppLogs = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppLog1') + app_id + Cypress.env('getAppLog2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAppLogsUsingLogID = (auth_key, log_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppLogUsingAppId') + log_id,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })

    
};
export const getAddonsList = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAddonsList1') + app_id+Cypress.env('getAddonsList2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })  
};

export const doCreateAttributes = (auth_key, app_id) => {
    
    cy.readFile('cypress/fixtures/api_createAttributes.json').then((data) => {
        data.new_build_stage = app_id;
        cy.writeFile('cypress/fixtures/api_createAttributes.json', JSON.stringify(data))
    })
    return cy.fixture('api_createAttributes.json').then((myFixture) => {
        cy.request({
            method: 'POST',
           // url: Cypress.env('baseUrl') + Cypress.env('createAttributes1')+app_id+Cypress.env('createAttributes2'),
           url: Cypress.env('baseUrl') +'/api/v1/apps/'+app_id+'/attributes/',

           headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const getAttributes = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
       // url: Cypress.env('baseUrl') + Cypress.env('getAttributes1')+app_id+Cypress.env('getAttributes2'),  
       url: Cypress.env('baseUrl') +'/api/v1/apps/'+app_id+'/attributes/',
       headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getUserList = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUserList')+app_id,  
       headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
export const getComponent = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        //url: Cypress.env('baseUrl') + Cypress.env('getComponent1')+app_id+ Cypress.env('getComponent2'),
        url: Cypress.env('baseUrl')+'/api/v1/apps/'+app_id+'/components/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getEdges = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getEdges1')+app_id+ Cypress.env('getEdges2'),
      //  url: Cypress.env('baseUrl')+'/api/v1/apps/'+app_id+'/components/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
export const getFiles = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getFiles1')+app_id+ Cypress.env('getFiles1'),
      //  url: Cypress.env('baseUrl')+'/api/v1/apps/'+app_id+'/components/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
    export const getAuditLogList = (auth_key, app_id) => {
        return cy.request({
            method: 'GET',
            //url: Cypress.env('baseUrl') + Cypress.env('getAuditLogList1')+app_id+Cypress.env('getAuditLogList2'),  
            url: Cypress.env('baseUrl') +'/api/v1/apps/' +app_id+'/audit-logs/',  

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
        }).then((response) => {
            return response;
        })

    
};

