import Head from "next/head";
import { withTranslation } from "i18n";
import RocketScreen from "screens/Rockets";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>SpaceX Rockets and Launches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RocketScreen {...props} />
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation(["common"])(Home);
