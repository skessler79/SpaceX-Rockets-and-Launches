import React from "react";

import { getRocketInfo } from "containers/Queries";
import _ from "lodash";

interface RocketInfoProps {
  id: string;
}

const RocketInfo: React.FunctionComponent<RocketInfoProps> = (props) => {
  const { loading, error, data } = getRocketInfo(props.id);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : ${error}</p>;

  return (
    <>
      <p>Test Details Page</p>
      <p>{data.rocket.name}</p>
      <p>{data.rocket.description}</p>
    </>
  );
};
export default RocketInfo;
