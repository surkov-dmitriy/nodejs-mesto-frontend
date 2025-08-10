require("dotenv").config({ path: ".env.deploy" });

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_REPO, DEPLOY_REF, DEPLOY_PATH } = process.env;

module.exports = {
  apps: [
    {
      name: "mesto-frontend",
      script: "npm run build",
      // autorestart: false,
      // watch: false,
    },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      repo: DEPLOY_REPO,
      ref: DEPLOY_REF,
      path: DEPLOY_PATH,
      "pre-deploy-local": `scp -r .env .env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/current`,
    },
  },
};
