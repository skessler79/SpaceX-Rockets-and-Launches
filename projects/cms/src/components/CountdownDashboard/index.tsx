import React from "react";
import CalculateCountdown from "containers/CalculateCountdown";
import { getNextLaunch } from "containers/Queries";

const GetCountdown: React.FunctionComponent = () => {
  const { loading, error, data } = getNextLaunch();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : ${error}</p>;

  return <CalculateCountdown {...data} />;
};

export default GetCountdown;
