/// <reference types = "cypress"/>

export const doCreateKenobiC2SUsingPrivateRepo = (auth_key) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }
    return cy.fixture('api_Create_Kenobi_C2S_Private_Repo.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S'),
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

export const doGetKenobiC2SUsingPrivateRepoById = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doPutKenobiC2SUsingPrivateRepo = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.fixture('api_Put_Kenobi_C2S_Private_Repo.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
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

export const doPatchKenobiC2SUsingPrivateRepo = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.fixture('api_Patch_Kenobi_C2S_Private_Repo.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
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

export const doDeleteKenobiC2SUsingPrivateRepoById = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doCreateKenobiC2SUsingPublicRepo = (auth_key) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }
    return cy.fixture('api_Create_Kenobi_C2S_Public_Repo.json')
        .then((myFixture) => {
            let createKenobiWithPublicRepo = JSON.stringify(myFixture);
            const publicRepoUrl = Cypress.env('publicRepoLink');
            createKenobiWithPublicRepo = createKenobiWithPublicRepo.replace('<<REPO_URL>>', publicRepoUrl);
            const finalPayload = JSON.parse(createKenobiWithPublicRepo);
            cy.request({
                method: 'POST',
                url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S'),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Token ' + auth_key,
                },
                body: finalPayload
            }).then((response) => {
                return response;
            })
        })
};

export const doGetKenobiC2SUsingPublicRepoById = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doPutKenobiC2SUsingPublicRepo = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.fixture('api_Put_Kenobi_C2S_Public_Repo.json').then((myFixture) => {
        let putKenobiWithPublicRepo = JSON.stringify(myFixture);
        const publicRepoUrl = Cypress.env('publicRepoLink');
        putKenobiWithPublicRepo = putKenobiWithPublicRepo.replace('<<REPO_URL>>', publicRepoUrl);
        const finalPayload = JSON.parse(putKenobiWithPublicRepo);
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
            body: finalPayload
        }).then((response) => {
            return response;
        })
    })
};

export const doPatchKenobiC2SUsingPublicRepo = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.fixture('api_Patch_Kenobi_C2S_Public_Repo.json').then((myFixture) => {
        let patchKenobiWithPublicRepo = JSON.stringify(myFixture);
        const publicRepoUrl = Cypress.env('publicRepoLink');
        patchKenobiWithPublicRepo = patchKenobiWithPublicRepo.replace('<<REPO_URL>>', publicRepoUrl);
        const finalPayload = JSON.parse(patchKenobiWithPublicRepo);
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
            body: finalPayload
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteKenobiC2SUsingPublicRepoById = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doCreateKenobiC2SUsingZipFile = (auth_key) => {
     if (!auth_key) {
        throw new Error("auth_key is required");
    }
  return cy.fixture('TestingRepo-main.zip', 'base64').then((zipBase64) => {
    return cy.fixture('api_Create_Kenobi_C2S_Zip.json').then((myFixture) => {
      myFixture.file = zipBase64;
      return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S'),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token ' + auth_key,
        },
        body: myFixture,
      }).then((response) => {
        return response;
      });

    });

  });
};

export const doGetKenobiC2SUsingZipFileById = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doPutKenobiC2SUsingZipFile = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
  return cy.fixture('knobitestpublic-main.zip', 'base64').then((zipBase64) => {
    return cy.fixture('api_Put_Kenobi_C2S_Zip_File.json').then((myFixture) => {
      myFixture.file = zipBase64;
      return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token ' + auth_key,
        },
        body: myFixture,
      }).then((response) => {
        return response;
      });

    });

  });
};
export const doPatchKenobiC2SUsingZipFile = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
  return cy.fixture('TestingRepo-main.zip', 'base64').then((zipBase64) => {
    return cy.fixture('api_Patch_Kenobi_C2S_Zip_File.json').then((myFixture) => {
      myFixture.file = zipBase64;
      return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token ' + auth_key,
        },
        body: myFixture,
      }).then((response) => {
        return response;
      });

    });

  });
};

export const doDeleteKenobiC2SUsingZipFileById = (auth_key, kenobi_id) => {
    if (!auth_key) {
        throw new Error("auth_key is required");
    }

    if (!kenobi_id) {
        throw new Error("kenobi_id is required");
    }
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};


















