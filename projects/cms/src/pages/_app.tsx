import compose from "lodash/flowRight";
import App, { AppProps } from "next/app";
import { Modal } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { appWithTranslation } from "i18n";
import { withAuthSync, withApolloClient } from "@lavax-helper/next-js";
import { MyAppContext, MyPageContext } from "@types";
import apolloOptions from "config/apollo.config";
import authOptions from "config/auth.config";
import "styles/styles.less";
import Head from "next/head";
import Navbar from "components/Navbar";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #011b2d url(/static/assets/countdown_bg.jpg) repeat fixed 0 0/2560px
    200px;
    color: #dddddd;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { config, authUser } = pageProps;

  const onActionSignOut = () => {
    Modal.confirm({
      title: "Are you want to signout?",
      icon: <LogoutOutlined />,
      centered: true,
      okButtonProps: {
        type: "primary"
      },
      onOk() {
        if (pageProps.signOutAuthUser) {
          pageProps.signOutAuthUser();
        }
      }
    });
  };

  return (
    <div>
      <Head>
        <title>SpaceX Rockets and Launches</title>
      </Head>
      <GlobalStyle />
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
};

MyApp.getInitialProps = async (context: MyAppContext) => {
  const { Component, authUser } = context;
  if (Component.getInitialProps) {
    const pageContext: MyPageContext = { ...context.ctx, authUser };
    return {
      ...(await Component.getInitialProps(pageContext))
    };
  }
  return { ...(await App.getInitialProps(context)) };
};

export default compose(
  appWithTranslation,
  withApolloClient({ ssr: true, options: apolloOptions }),
  withAuthSync({ ssr: true, options: authOptions })
)(MyApp);
