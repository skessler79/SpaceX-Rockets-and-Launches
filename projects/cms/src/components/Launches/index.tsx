import React, { useState } from "react";
import LaunchCard from "components/LaunchCard";
import LaunchInfo from "components/LaunchInfo";
import { Root, Card, PageSelect } from "./styles";
import { getLaunchesList } from "containers/Queries";
import { get, map } from "lodash";

var maxId = null;

const GetLaunches: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const openModal = (id) => () => setState(id);
  const closeModal = () => setState("");

  const { loading, error, data, refetch } = getLaunchesList((page - 1) * 10);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  if (!maxId) {
    maxId = data.launchesPast[0].id;
  }

  const onChangePage = (page: number) => {
    refetch({ offset: (page - 1) * 10 });
  };

  return (
    <div>
      <Root>
        <Card>
          {map(
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
      <PageSelect
        defaultCurrent={1}
        total={maxId}
        onChange={onChangePage}
        showSizeChanger={false}
      />
    </div>
  );
};

export default GetLaunches;
