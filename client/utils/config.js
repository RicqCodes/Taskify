export const config = {
  appEnv: process.env.NEXT_PUBLIC_APP_ENV || "local",
  appOrigin: process.env.NEXT_PUBLIC_APP_ORIGIN || "localhost",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000",
};
