export default {
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "src/cypress/e2e",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
};
