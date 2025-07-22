/// <reference types = "cypress"/>
import { 
    // Vector Store Endpoints
    getVectorStoreStatus, 
    getVectorStoreSchema, 
    getVectorStoreExport,
    getVectorStoreExportStream,
    // Agent Endpoints
    getAgentRecentQueries,
    // Prompts Endpoints
    getPromptsList,
    // Code Analysis Endpoints
    getCodeOverallAnalysis,
    // Discovery Endpoints
    getDiscoveryIdentifyCoreFeatures,
    getDiscoveryQuestions,
    // Graph Cache Endpoints
    getGraphCacheStats,
    getGraphCacheDump,
    // PRD Endpoints
    getPrdList,
    // Authentication Endpoints
    getAuthWhoami,
    getAuthWhoamiOptional,
    getAuthProfile,
    getAuthHeadersDebug,
    getAuthLogoutInfo,
    getAuthCheckGroupAdmin,
    // Accuracy Endpoints
    getAccuracyEvals,
    // Root and Health Endpoints
    getRoot,
    getHealth
} from '../pages/KenobiHealthCheckPage.js';

describe("Kenobi API Health Checks", () => {
    // Vector Store Tests
    it('should get vector store status', () => {
        getVectorStoreStatus().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Vector Store Status Response", response.body);
        });
    });

    it('should get vector store schema', () => {
        getVectorStoreSchema().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Vector Store Schema Response", response.body);
        });
    });

    it('should get vector store export', () => {
        getVectorStoreExport().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Vector Store Export Response", response.body);
        });
    });

    it('should get vector store export stream', () => {
        getVectorStoreExportStream().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Vector Store Export Stream Response", response.body);
        });
    });

    // Agent Tests
    it('should get agent recent queries', () => {
        getAgentRecentQueries().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Agent Recent Queries Response", response.body);
        });
    });

    // Prompts Tests
    it('should get prompts list', () => {
        getPromptsList().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Prompts List Response", response.body);
        });
    });

    // Code Analysis Tests
    it('should get code overall analysis', () => {
        getCodeOverallAnalysis().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Code Overall Analysis Response", response.body);
        });
    });

    // Discovery Tests
    it('should get discovery identify core features', () => {
        getDiscoveryIdentifyCoreFeatures().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Discovery Identify Core Features Response", response.body);
        });
    });

    it('should get discovery questions', () => {
        getDiscoveryQuestions().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Discovery Questions Response", response.body);
        });
    });

    // Graph Cache Tests
    it('should get graph cache stats', () => {
        getGraphCacheStats().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Graph Cache Stats Response", response.body);
        });
    });

    it('should get graph cache dump', () => {
        getGraphCacheDump().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Graph Cache Dump Response", response.body);
        });
    });

    // PRD Tests
    it('should get PRD list', () => {
        getPrdList().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("PRD List Response", response.body);
        });
    });

    // Authentication Tests
    it('should get auth whoami', () => {
        getAuthWhoami().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Auth Whoami Response", response.body);
        });
    });

    it('should get auth whoami optional', () => {
        getAuthWhoamiOptional().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Auth Whoami Optional Response", response.body);
        });
    });

    it('should get auth profile', () => {
        getAuthProfile().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Auth Profile Response", response.body);
        });
    });

    it('should get auth headers debug', () => {
        getAuthHeadersDebug().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Auth Headers Debug Response", response.body);
        });
    });

    it('should get auth logout info', () => {
        getAuthLogoutInfo().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Auth Logout Info Response", response.body);
        });
    });

    it('should get auth check group admin', () => {
        getAuthCheckGroupAdmin().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Auth Check Group Admin Response", response.body);
        });
    });

    // Accuracy Tests
    it('should get accuracy evals', () => {
        getAccuracyEvals().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Accuracy Evals Response", response.body);
        });
    });

    // Root and Health Tests
    it('should get root endpoint', () => {
        getRoot().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Root Response", response.body);
        });
    });

    it('should get health endpoint', () => {
        getHealth().then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Health Response", response.body);
        });
    });
}); 