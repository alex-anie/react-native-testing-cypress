import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081",
    setupNodeEvents(on, config) {
      // Dynamic imports for the code coverage modules
      
      // return import('@cypress/code-coverage/task.js').then(codeCoverageTask => {
      //   codeCoverageTask.default(on, config);
        
      //   return import('@cypress/code-coverage/use-babelrc.js').then(useBabelrc => {
      //     on('file:preprocessor', useBabelrc.default);
      //     return config;
      //   });
      // });
    },
  },
});


