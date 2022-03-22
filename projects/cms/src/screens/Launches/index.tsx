import React from "react";

import GetLaunches from "components/Launches";
import MissionSearch from "containers/MissionSearch";

const LaunchScreen: React.FunctionComponent = (props) => {
  return (
    <>
      <MissionSearch />
      <GetLaunches />
    </>
  );
};

export default LaunchScreen;
