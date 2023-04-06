import { IconContext } from "react-icons";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";

import ScrollToTop from "@/components/common/technical/ScrollToTop";
import { GlobalStyles } from "@/styles/global/global.styled";
import { theme } from "@/styles/global/theme.styled";
import { color } from "@/styles/utils.styled";
import { wrapper } from "@/redux/store";
import { useGetXsrfTokenQuery } from "@/redux/api/childApi/securedApi";
import { useEffect } from "react";
import useAuthProtection from "@/utils/hooks/useAuthProtection";
import { useRouter } from "next/router";
import { getUser } from "@/redux/api/childApi/userApi";
import { taskifyApi } from "@/redux/api/taskifyApi";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <ChildApp Component={Component} pageProps={pageProps} />
    </Provider>
  );
};

const ChildApp = ({ Component, pageProps }) => {
  const {} = useGetXsrfTokenQuery();

  const router = useRouter();

  return (
    <>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NextNProgress color={color("tertiary", "main")} />
        <IconContext.Provider value={{ size: "22px" }}>
          {Component.getLayout ? (
            Component.getLayout(<Component {...pageProps} />)
          ) : (
            <Component {...pageProps} />
          )}
        </IconContext.Provider>
      </ThemeProvider>
      <Toaster />
    </>
  );
};

App.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ pathname, req, res }) => {
      store.dispatch(getUser.initiate());

      const response = await Promise.all(
        store.dispatch(taskifyApi.util.getRunningQueriesThunk())
      );
    }
);

export default App;
