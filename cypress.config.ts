import {defineConfig} from "cypress";
// import {beforeRunHook, afterRunHook } from "cypress-mochawesome-reporter/lib"
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


export default defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'Testing Good',
        embeddedScreenshots: true,
        videoOnFailOnly:false,
        inlineAssets: false,
        saveAllAttempts: false,
    },
    // These settings apply everywhere unless overridden
    defaultCommandTimeout: 15000,
    viewportWidth: 1360,
    viewportHeight: 900,
    // Viewport settings overridden for component test
    e2e: {
        // defaultCommandTimeout: 10000,
        specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
        setupNodeEvents(on, config) {
            on('before:run', async (details) => {
                console.log('override before:run');
                await beforeRunHook(details);
            });

            on('after:run', async () => {
                console.log('override after:run');
                await afterRunHook();
            });
        },
    },
});
