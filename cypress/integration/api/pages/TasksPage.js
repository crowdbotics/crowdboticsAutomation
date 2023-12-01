/// <reference types = "cypress"/>


export const doAddMilestone = (auth_key, app_id,milestone_name) => {
    cy.readFile('cypress/fixtures/api_createMilestone.json').then((data) => {
        data.project = app_id;
        data.title=milestone_name;
        cy.writeFile('cypress/fixtures/api_createMilestone.json', JSON.stringify(data));
    });

    return cy.fixture('api_createMilestone.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addMileStone1') + app_id + Cypress.env('addMileStone2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetTaskSharableStatus = (auth_key) => {
  
      return  cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl') + Cypress.env('getTaskSharableStatus'),
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    };

    export const doGetMilestone = (auth_key,app_id,milestone_id) => {
  
        return  cy.request({
              method: 'GET',
              url: Cypress.env('baseUrl') + Cypress.env('getMilestone1')+ app_id +  Cypress.env('getMilestone2') + milestone_id + Cypress.env('getMilestone2'),
              headers: {
                  'Authorization': 'Token ' + auth_key
              }
          }).then((response) => {
              return response;
          })
      };

      export const doUpdateMilestone = (auth_key, app_id,milestone_id,milestone_name) => {
        cy.readFile('cypress/fixtures/api_updateMilestone.json').then((data) => {
            data.title=milestone_name;
            cy.writeFile('cypress/fixtures/api_updateMilestone.json', JSON.stringify(data));
        });
    
        return cy.fixture('api_updateMilestone.json').then((myFixture) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('baseUrl') + Cypress.env('updateMilestone1') + app_id + Cypress.env('updateMilestone2')+milestone_id+ Cypress.env('updateMilestone3'),
                body: myFixture,
                headers: {
                    'Authorization': 'Token ' + auth_key
                }
            }).then((response) => {
                return response;
            })
        })
    };
    export const doDeleteMilestone = (auth_key,app_id,milestone_id) => {
  
        return  cy.request({
              method: 'DELETE',
              url: Cypress.env('baseUrl') + Cypress.env('deleteMilestone1')+ app_id +  Cypress.env('deleteMilestone2') + milestone_id + Cypress.env('deleteMilestone3'),
              headers: {
                  'Authorization': 'Token ' + auth_key
              }
          }).then((response) => {
              return response;
          })
      };

      export const doCreateTask = (auth_key, app_id,task_name,task_hour,task_cost) => {
        cy.readFile('cypress/fixtures/aapi_createTask.json').then((data) => {
            data.app=app_id;
            data.summary=task_name;
            data.resource_cost_estimated=task_cost;
            data.hours_estimated=task_hour;
            cy.writeFile('cypress/fixtures/api_createTask.json', JSON.stringify(data));
        });
    
        return cy.fixture('api_createTask.json').then((myFixture) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('baseUrl') + Cypress.env('createTask'),
                body: myFixture,
                headers: {
                    'Authorization': 'Token ' + auth_key
                }
            }).then((response) => {
                return response;
            })
        })
    };

    export const doViewTask = (auth_key,app_id) => {
  
        return  cy.request({
              method: 'GET',
              url: Cypress.env('baseUrl') + Cypress.env('viewTask1')+ app_id +  Cypress.env('viewTask1'),
              headers: {
                  'Authorization': 'Token ' + auth_key
              }
          }).then((response) => {
              return response;
          })
      };

      export const doAddTaskIntoMilestone = (auth_key, app_id,milestone_id,task_id) => {
        cy.readFile('cypress/fixtures/api_add_task_into_milestone.json').then((data) => {
            data.task_ids=task_id;
            cy.writeFile('cypress/fixtures/api_add_task_into_milestone.json', JSON.stringify(data));
        });
    
        return cy.fixture('api_add_task_into_milestone.json').then((myFixture) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('baseUrl') + Cypress.env('addTaskIntoMilestone1') + app_id + Cypress.env('addTaskIntoMilestone2')+milestone_id+ Cypress.env('addTaskIntoMilestone3'),
                body: myFixture,
                headers: {
                    'Authorization': 'Token ' + auth_key
                }
            }).then((response) => {
                return response;
            })
        })
    };

    export const doPublicTask = (auth_key, app_id,task_id,updated_summary) => {
        cy.readFile('cypress/fixtures/api_public_task.json').then((data) => {
            data.app=app_id;
            data.summary=updated_summary;
            cy.writeFile('cypress/fixtures/api_public_task.json', JSON.stringify(data));
        });
    
        return cy.fixture('api_public_task.json').then((myFixture) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('baseUrl') + Cypress.env('publicTask1') + task_id + Cypress.env('publicTask2'),
                body: myFixture,
                headers: {
                    'Authorization': 'Token ' + auth_key
                }
            }).then((response) => {
                return response;
            })
        })
    };

    export const doSearchTask = (auth_key,app_id,task_id) => {
  
        return  cy.request({
              method: 'GET',
              url: Cypress.env('baseUrl') + Cypress.env('searchTask1')+ task_id +  Cypress.env('searchTask2')+ app_id,
              headers: {
                  'Authorization': 'Token ' + auth_key
              }
          }).then((response) => {
              return response;
          })
      };
      export const doGetAllMilestone = (auth_key,app_id) => {
  
        return  cy.request({
              method: 'GET',
              url: Cypress.env('baseUrl') + Cypress.env('getAllMilestone1')+ app_id +  Cypress.env('getAllMilestone2'),
              headers: {
                  'Authorization': 'Token ' + auth_key
              }
          }).then((response) => {
              return response;
          })
      };
