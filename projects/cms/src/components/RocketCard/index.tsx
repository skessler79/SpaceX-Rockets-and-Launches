import React from "react";
import { Card, Details, Grid, RocketName, Country } from "./styles";

interface RocketCardProps {
  id: string;
  name: string;
  country: string;
  click(): any;
}

const RocketCard: React.FunctionComponent<RocketCardProps> = (props) => {
  return (
    <Card onClick={props.click}>
      <img src={`/static/assets/rockets/${props.id}.jpg`} />
      <Details>
        <Grid></Grid>
        <RocketName>
          <span className="">{props.name}</span>
        </RocketName>
        <Country>
          <span className="">
            <p>{props.country}</p>
          </span>
        </Country>
      </Details>
    </Card>
  );
};

export default RocketCard;
