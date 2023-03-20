import { IconContext } from "react-icons";
// import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components";
import NextNProgress from "nextjs-progressbar";

import ScrollToTop from "@/components/common/technical/ScrollToTop";
import { GlobalStyles } from "@/styles/global/global.styled";
import { theme } from "@/styles/global/theme.styled";
import { color } from "@/styles/utils.styled";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ScrollToTop />
      {/* <Provider store={store}> */}
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
      {/* </Provider> */}
    </>
  );
};

export default App;
