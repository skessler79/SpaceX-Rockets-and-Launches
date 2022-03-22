import React from "react";

import { Card, MissionName } from "./styles";

interface LaunchCardProps {
  id?: string;
  name?: number;
  launch_success?: boolean;
  rocket: {
    rocket_name: string;
  };
  click(): any;
  links: {
    mission_patch: string;
  };
}

const LaunchCard: React.FunctionComponent<LaunchCardProps> = (props) => {
  return (
    <div>
      <Card onClick={props.click}>
        <MissionName>
          <h1>{props.name}</h1>
          <p>{props.launch_success ? "Success" : "Failed"}</p>
        </MissionName>
        <img src={props.links.mission_patch} />
      </Card>
    </div>
  );
};

export default LaunchCard;
