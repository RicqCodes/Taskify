// Funtion to retreive env

export const getEnv = (envName, defaultValue = null) => {
  const { config } = require("./config");

  return config[envName] || defaultValue;
};

export const getAllCookies = (req) => {
  let cookieString = "";

  const cookiesArr = req.cookies.getAll();

  cookiesArr.forEach((cookie) => {
    cookieString += `${cookie.name}=${cookie.value};`;
  });
  return cookieString;
};

export const randomizeColors = () => {
  const colors = [
    { light: "#FFDFDF", dark: "#b39c9c" },
    { light: "#F2D6F9", dark: "#a996ae" },
    { light: "#D2D1E0", dark: "#93929d" },
    { light: "#FCE6BE", dark: "#b0a185" },
    { light: "#FCCFCF", dark: "#b09191" },
    { light: "#BFF1DF", dark: "#2EB67D" },
    { light: "#FFECD7", dark: "#FF9F38" },
    { light: "#F6F2FC", dark: "#A07DDA" },
    { light: "#F6F2FC", dark: "#A07DDA" },
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};
