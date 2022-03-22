import React from "react";

import MissionSearch from "components/MissionSearch";
import SearchBar from "containers/MissionSearch";

interface RocketDetailScreenProps {
  name: string | string[];
}

const RocketScreen: React.FunctionComponent<RocketDetailScreenProps> = (
  props
) => {
  return (
    <>
      <SearchBar />
      <MissionSearch name={props.name} />
    </>
  );
};

export default RocketScreen;
