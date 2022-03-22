import React, { useState } from "react";
import RocketCard from "components/RocketCard";
import RocketInfo from "components/RocketInfo";

import { Root, Card } from "./styles";

import _ from "lodash";

import { getRocketList } from "containers/Queries";

const GetRockets: React.FunctionComponent = () => {
  const [state, setState] = useState("");

  const openModal = (id) => () => setState(id);
  const closeModal = () => setState("");

  const { loading, error, data } = getRocketList();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : ${error}</p>;

  return (
    <div>
      <Root>
        <Card>
          {_.map(data.rockets, ({ name, country, id }) => (
            <RocketCard
              name={name}
              country={country}
              id={id}
              key={id}
              click={openModal(id)}
            />
          ))}
          {state ? <RocketInfo id={state} close={closeModal} /> : null}
        </Card>
      </Root>
    </div>
  );
};

export default GetRockets;
