const getVars = () => ({
  PASSWORD: process.env.ACCOUNT_PASSWORD ? process.env.ACCOUNT_PASSWORD : "",
  USERNAME: process.env.ACCOUNT_USERNAME
    ? process.env.ACCOUNT_USERNAME
    : "5fa4ff71-8456-4ed2-8558-ebe865ce35a0",
  LOCATION: process.env.ACCOUNT_LOCATION
    ? process.env.ACCOUNT_LOCATION
    : "manchester",
});

module.exports = { getVars };
