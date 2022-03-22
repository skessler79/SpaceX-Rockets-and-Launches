import Head from "next/head";
import { withTranslation } from "i18n";
import AboutScreen from "screens/About";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>SpaceX Rockets and Launches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutScreen {...props} />
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation(["common"])(Home);
