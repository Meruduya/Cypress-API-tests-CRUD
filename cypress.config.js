const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nzd6yw',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
