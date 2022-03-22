import React, { useState } from "react";
import LaunchCard from "components/LaunchCard";
import LaunchInfo from "components/LaunchInfo";

import { Root, Card } from "./styles";

import { getMissionByName } from "containers/Queries";

import _ from "lodash";

const GetLaunches: React.FunctionComponent<{ name: string | string[] }> = (
  props
) => {
  const [state, setState] = useState("");

  const openModal = (id) => () => setState(id);
  const closeModal = () => setState("");

  const { loading, error, data } = getMissionByName(props.name);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : ${error}</p>;

  return (
    <div>
      <Root>
        <Card>
          {_.map(
            data.launchesPast,
            ({ mission_name, rocket, links, id, launch_success }) => (
              <LaunchCard
                name={mission_name}
                rocket={rocket}
                launch_success={launch_success}
                links={links}
                id={id}
                key={id}
                click={openModal(id)}
              />
            )
          )}
          {state ? <LaunchInfo id={state} close={closeModal} /> : null}
        </Card>
      </Root>
    </div>
  );
};

export default GetLaunches;
