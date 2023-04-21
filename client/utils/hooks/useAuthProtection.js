import React, { useState, useEffect } from "react";

import { useGetUserQuery } from "@/redux/api/childApi/userApi";

const useAuthProtection = () => {
  const { data: user = null, error } = useGetUserQuery();

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // console.log(error);
  // console.log(isAuthenticated);

  useEffect(() => {
    if (!error) {
      if (user !== null || user !== undefined) setIsAuthenticated(true);
      else if (user === undefined) setIsAuthenticated(false);
    } else setIsAuthenticated(false);
  }, [user]);

  return { isAuthenticated, user };
};

export default useAuthProtection;
