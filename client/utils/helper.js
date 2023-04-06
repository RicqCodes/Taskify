// Funtion to retreive env

export const getEnv = (envName, defaultValue = null) => {
  const { config } = require("./config");

  return config[envName] || defaultValue;
};
