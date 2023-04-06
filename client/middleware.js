import { getEnv } from "./utils/helper";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

export const middleware = async (req, res) => {
  const response = await fetch(`${getEnv("backendUrl")}/api/user`, {
    credentials: "include",
    headers: {
      ...defaultHeaders,
      Cookie: req.cookies,
      origin: getEnv("appOrigin"),
      //   "X-XSRF-TOKEN": decodeURI(...req.cookies.getAll()),
    },
  });
  const data = response.json();

  console.log(data);
};
