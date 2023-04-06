import React, { useState, useEffect } from "react";

import { useGetUserQuery } from "@/redux/api/childApi/userApi";

const useAuthProtection = () => {
  //   const { data: user = null } = useGetUserQuery();
  const user = {};
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  console.log(user);
  console.log(isAuthenticated);

  useEffect(() => {
    if (user !== null || user !== undefined) setIsAuthenticated(true);
    else if (user === undefined) setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, user };
};

export default useAuthProtection;
