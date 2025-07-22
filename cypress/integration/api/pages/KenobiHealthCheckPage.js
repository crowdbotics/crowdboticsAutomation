/// <reference types = "cypress"/>

// Vector Store Endpoints
export const getVectorStoreStatus = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/vector-store/status`
    });
};

export const getVectorStoreSchema = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/vector-store/schema`
    });
};

export const getVectorStoreExport = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/vector-store/export`
    });
};

export const getVectorStoreExportStream = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/vector-store/export/stream`
    });
};

// Agent Endpoints
export const getAgentRecentQueries = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/agent/recent_queries`
    });
};

// Prompts Endpoints
export const getPromptsList = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/prompts/list`
    });
};

// Code Analysis Endpoints
export const getCodeOverallAnalysis = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/code/overall-analysis`
    });
};

// Discovery Endpoints
export const getDiscoveryIdentifyCoreFeatures = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/discovery/identify-core-features`
    });
};

export const getDiscoveryQuestions = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/discovery/questions`
    });
};

// Graph Cache Endpoints
export const getGraphCacheStats = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/graph/cache/stats`
    });
};

export const getGraphCacheDump = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/graph/cache/dump`
    });
};

// PRD Endpoints
export const getPrdList = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/prd/list`
    });
};

// Authentication Endpoints
export const getAuthWhoami = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/auth/whoami`
    });
};

export const getAuthWhoamiOptional = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/auth/whoami-optional`
    });
};

export const getAuthProfile = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/auth/profile`
    });
};

export const getAuthHeadersDebug = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/auth/headers-debug`
    });
};

export const getAuthLogoutInfo = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/auth/logout-info`
    });
};

export const getAuthCheckGroupAdmin = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/auth/check-group/admin`
    });
};

// Accuracy Endpoints
export const getAccuracyEvals = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/api/accuracy/1/get-accuracy-evals/`
    });
};

// Root and Health Endpoints
export const getRoot = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/`
    });
};

export const getHealth = () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('centeneBaseUrl')}/health`
    });
}; 