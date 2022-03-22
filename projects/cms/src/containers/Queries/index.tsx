import { useQuery, gql } from "@apollo/client";

const ROCKETS_LIST = gql`
  {
    rockets {
      name
      country
      id
    }
  }
`;

const ROCKET_INFO = gql`
  query Rocket($id: ID!) {
    rocket(id: $id) {
      active
      cost_per_launch
      name
      success_rate_pct
      first_flight
      description
      stages
      height {
        meters
      }
      diameter {
        meters
      }
      boosters
      first_flight
      wikipedia
      engines {
        number
        type
        propellant_1
        propellant_2
        thrust_to_weight
        thrust_vacuum {
          kN
        }
      }
      mass {
        kg
      }
      payload_weights {
        kg
        name
      }
    }
  }
`;

const LAUNCHES_LIST = gql`
  query LaunchesPast($offset: Int) {
    launchesPast(limit: 10, sort: "launch_date_unix", offset: $offset) {
      mission_name
      rocket {
        rocket_name
      }
      links {
        mission_patch
      }
      id
      launch_success
    }
  }
`;

const LAUNCH_INFO = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      details
      mission_name
      rocket {
        rocket_name
      }
      launch_success
      launch_site {
        site_name
      }
      launch_date_utc
      links {
        video_link
        wikipedia
      }
    }
  }
`;

const LAUNCH_NEXT = gql`
  {
    launchNext {
      details
      mission_name
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_mass_kg
            orbit
          }
        }
        rocket_type
      }
      id
      links {
        video_link
        reddit_launch
      }
      launch_date_unix
      launch_site {
        site_id
      }
    }
  }
`;

const MISSION_BY_NAME = gql`
  query Launch($name: String) {
    launchesPast(find: { mission_name: $name }, sort: "launch_date_unix") {
      id
      mission_name
      launch_success
      links {
        mission_patch
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export const getRocketList = () => {
  return useQuery(ROCKETS_LIST);
};

export const getRocketInfo = (id: string) => {
  return useQuery(ROCKET_INFO, {
    variables: {
      id: id
    }
  });
};

export const getLaunchesList = (offset: number) => {
  return useQuery(LAUNCHES_LIST, {
    variables: {
      offset: offset
    }
  });
};

export const getLaunchInfo = (id: string) => {
  return useQuery(LAUNCH_INFO, {
    variables: {
      id: id
    }
  });
};

export const getNextLaunch = () => {
  return useQuery(LAUNCH_NEXT);
};

export const getMissionByName = (name: string) => {
  return useQuery(MISSION_BY_NAME, {
    variables: {
      name: name
    }
  });
};
