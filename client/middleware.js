import { getCookie, getCookies } from "cookies-next";

import { getEnv } from "./utils/helper";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

export const middleware = async (req, res) => {
  const cookie = getCookie("RequestCookies", { req, res });
  console.log(req.cookies);
  const resResponse = await fetch(`${getEnv("backendUrl")}/api/getUser`, {
    credentials: "include",
    headers: {
      ...defaultHeaders,
      Cookie: req.cookies,
      origin: getEnv("appOrigin"),
      "XSRF-TOKEN": "",
    },
  });

  //   const data = await res.json();

  //   console.log(res);
};
