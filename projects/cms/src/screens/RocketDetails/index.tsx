import React from "react";
import RocketDetails from "components/RocketDetails";

interface RocketDetailScreenProps {
  id: string;
}

const RocketScreen: React.FunctionComponent<RocketDetailScreenProps> = (
  props
) => {
  return <RocketDetails id={props.id} />;
};

export default RocketScreen;
