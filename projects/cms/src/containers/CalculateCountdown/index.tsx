import React, { useEffect, useState } from "react";

import {
  Root,
  Dashboard,
  MissionName,
  NextMission,
  NextName,
  Countdown,
  TimePeriod,
  DayPeriod,
  HourPeriod,
  MinutePeriod,
  SecondPeriod,
  RocketInfo,
  RocketName,
  RocketCategories,
  RocketSpecs,
  RedditLink,
  YoutubeLink,
  RocketDescription
} from "./styles";

interface CalculateCountdownProps {
  launchNext: {
    details: string;
    mission_name: string;
    rocket: {
      rocket_name: string;
      second_stage: {
        payloads: {
          payload_mass_kg: number;
          orbit: string;
        };
      };
      rocket_type: string;
    };
    id: string;
    links: {
      video_link: string;
      reddit_launch: string;
    };
    launch_date_unix: number;
    launch_site: {
      site_id: string;
    };
  };
}

const calculateTimeLeft: React.FunctionComponent<CalculateCountdownProps> = (
  props
) => {
  let difference: number =
    props.launchNext.launch_date_unix * 1000 - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  return timeLeft;
};

const CalculateCountdown: React.FunctionComponent<CalculateCountdownProps> = (
  props
) => {
  const {
    details,
    mission_name,
    rocket,
    links,
    id,
    launch_site
  } = props.launchNext;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  let itr: number = 0;

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span key={itr++}>
        {timeLeft[interval] > 9 ? "" : "0"}
        {typeof timeLeft[interval] != "number" ? "00" : ""}
        {timeLeft[interval]}{" "}
      </span>
    );
  });

  return (
    <Root>
      <Dashboard>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500&family=Roboto+Mono:wght@100&display=swap"
          rel="stylesheet"
        />
        <NextMission>Next Mission</NextMission>

        <br />
        <NextName>{mission_name}</NextName>

        <Countdown>{timerComponents}</Countdown>
        <TimePeriod>
          <DayPeriod>DAYS</DayPeriod>
          <HourPeriod>HOURS</HourPeriod>
          <MinutePeriod>MINUTES</MinutePeriod>
          <SecondPeriod>SECONDS</SecondPeriod>
        </TimePeriod>
        <RocketInfo>
          <img
            src="/static/assets/rockets/falcon9_countdown.png"
            height="200"
          />
          <RocketName>{rocket.rocket_name}</RocketName>

          <RocketCategories>
            Flight Number
            <br />
            Site
            <br />
            Payload
            <br />
            Rocket Type
            <br />
            Destination
            <RocketSpecs>
              {id}
              <br />
              {launch_site.site_id}
              <br />
              {rocket.second_stage.payloads[0].payload_mass_kg}kg
              <br />
              {rocket.rocket_type}
              <br />
              {rocket.second_stage.payloads[0].orbit}
            </RocketSpecs>
          </RocketCategories>

          <RedditLink>
            <a href={links.reddit_launch} target="_blank">
              <img
                src="/static/assets/reddit-logo-small.png"
                alt="Reddit Logo"
              />
            </a>
          </RedditLink>
          <YoutubeLink>
            <a href={links.video_link} target="_blank">
              <img
                src="/static/assets/youtube-logo-small.png"
                alt="Reddit Logo"
              />
            </a>
          </YoutubeLink>
        </RocketInfo>
        <RocketDescription>{details}</RocketDescription>
      </Dashboard>
    </Root>
  );
};

export default CalculateCountdown;
