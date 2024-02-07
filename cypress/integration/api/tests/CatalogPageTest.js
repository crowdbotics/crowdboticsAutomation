/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';
import {doGetSettingsFElist, doAddCatalogFeature, doGetCatologFeature, doAddCatalogCategory, doGetCatologCategory, doAddCatalogModule, doGetCatologModule, doImportFeature, doImportModule, doGetArchetype, doAsset, doCatalogCodeModule, doGetEmbeddingSearch } from '../pages/CatalogPage.js';

let authKey;
let app_id;
let app_name;
let feature_title;
let feature_slug;
let feature_description;
let feature_id;
let category_title;
let category_id;
let module_title;
let module_slug;
let module_description;
let module_id;
let group_id;
let archetype_id;
let slug;
describe("Catalog Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Add Catalog Feature Flow', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                feature_title = "TestTitle" + app_id;
                feature_slug = "TestSlug" + app_id;
                feature_description = "TestDescription" + app_id;
                localStorage.setItem('app_id', response.body.id);
                doAddCatalogFeature(authKey, feature_title, feature_slug, feature_description).then((response) => {
                    feature_id = response.body.id;
                    expect(response.status).to.eq(201)
                    cy.log("Add Catalog Feature response", response.body)
                })
            })
        })
    })
    it('Get Catolog Feature Flow', () => {
        doGetCatologFeature(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Feature response", response.body)
        })
    })

    it('Add Catalog Category Flow', () => {
        category_title = "TestTitle" + app_id;
        doAddCatalogCategory(authKey, category_title).then((response) => {
            category_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add Catalog Category response", response.body)
        })
    })

    it('Get Catolog Category Flow', () => {
        doGetCatologCategory(authKey, category_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Category response", response.body)
        })
    })

    // it('Add Catalog Module', () => {
    //     module_title="TestModuleTitle"+app_id;
    //     module_slug="TestModuleSlug"+app_id;
    //     module_description="TestModuleDesription"+app_id;
    //     doAddCatalogModule(authKey, module_title,module_slug,feature_id,module_description).then((response) => {
    //         module_id=response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("create userroles response", response.body)
    //     })
    // })

    // it('Get Catolog Module', () => {
    //     doGetCatologModule(authKey, module_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("create userroles response", response.body)
    //     })
    // })

    it('Import Feature Flow', () => {
        doImportFeature(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Import Feature response", response.body)
        })
    })

    // it('Import Module', () => {
    //     group_id="PRD Group Test"+app_id;
    //     doImportModule(authKey, app_id,group_id).then((response) => {
    //         expect(response.status).to.eq(201)
    //         cy.log("create userroles response", response.body)
    //     })
    // })

    it('Get Archetype Flow', () => {
        archetype_id = 19;
        doGetArchetype(authKey, archetype_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Archetype response", response.body)
        })
    })

    it('Asset Flow', () => {
        doAsset(authKey).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Asset response", response.body)
        })
    })

    it('Catalog Code Module Flow', () => {
        slug = "TestSlug" + app_id;
        doCatalogCodeModule(authKey, slug).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Catalog Code Module response", response.body)
        })
    })

    it('Get Embedding Search Flow', () => {
        doGetEmbeddingSearch(authKey).then((response) => {
            // expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Settings FE List', () => {
        doGetSettingsFElist(authKey).then((response) => {
             expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

})
