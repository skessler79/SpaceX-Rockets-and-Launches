import styled from "styled-components";

export const Root = styled.main`
  color: #fff;
  height: 80vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Dashboard = styled.span`
  line-height: 1;
  margin-bottom: 170px;

  @media (min-width: 850px) {
    margin-bottom: 250px;
    margin-right: 450px;
  }
`;

export const MissionName = styled.div`
  font-family: "Exo 2", monospace;
  font-size: 4.5em;
  font-weight: 100;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  text-align: center;
  margin-top: 100px;
  margin-left: -80px;

  @media (min-width: 850px) {
    text-align: right;
    align-items: right;
    position: absolute;
    width: 50vw;
    margin-left: -235px;
  }
`;

export const NextMission = styled.span`
  font-size: 1.3em;
  font-family: "Exo 2", monospace;
  display: none;

  @media (min-width: 850px) {
    display: inline;
    postion: relative;
    margin-left: 325px;
  }
`;

export const NextName = styled.span`
  font-family: "Exo 2", monospace;
  font-size: 4.5em;
  font-weight: 100;
  display: inline;
  margin-top: -60px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  position: absolute;

  @media (min-width: 850px) {
    position: relative;
    left: 0;
    text-align: right;
    margin-left: 235px;
  }
`;

export const Countdown = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 4.3em;
  margin-left: 100px;
  margin-top: 20px;
  word-spacing: -20px;

  @media (max-width: 849px) {
    width: 100vw;
    margin-left: 0px;
    text-align: center;
    left: 0;
    justify-content: center;
  }

  @media (min-width: 850px) {
    margin-left: 110px;
  }
`;

export const TimePeriod = styled.span`
  font-family: "Exo 2";
  font-size: 0.9em;
  font-weight: 300;
  position: absolute;
  margin-bottom: 300px;

  @media (max-width: 849px) {
    width: 100vw;
    margin-left: -17px;
    text-align: center;
    left: 0;
    justify-content: center;
  }

  margin: @media (min-width: 850px) {

  }
`;

export const DayPeriod = styled.span`
  margin-left: 38px;
  @media (min-width: 850px) {
    margin-left: 128px;
  }
`;

export const HourPeriod = styled.span`
  margin-left: 55px;
`;

export const MinutePeriod = styled.span`
  margin-left: 43px;
`;

export const SecondPeriod = styled.span`
  margin-left: 37px;
`;

export const RocketInfo = styled.span`
  position: absolute;
  align-items: center;

  margin-top: 70px;

  @media (max-width: 849px) {
    width: 100vw;
    left: 0;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 850px) {
    margin-left: 480px;
    margin-top: -180px;
  }
`;

export const RocketName = styled.span`
  font-family: "Exo 2";
  font-size: 2.4em;
  vertical-align: top;
  text-align: center;
  margin-top: -165px;
  margin-left: 40px;

  @media (min-width: 850px) {
    margin-top: -200px;
  }
`;

export const RocketCategories = styled.span`
  font-family: "Exo 2", sans-serif;
  font-size: 1.1em;
  display: flex;
  text-align: left;
  position: absolute;
  margin-left: 85px;

  @media (min-width: 850px) {
    line-height: 1.2;
    margin-left: 70px;
    margin-top: -150px;
    width: 200px;
  }
`;

export const RocketSpecs = styled.span`
  text-align: right;
`;

export const RedditLink = styled.span`
  position: absolute;

  margin-top: 160px;
  margin-left: 20px;

  @media (min-width: 850px) {
    margin-left: -115px;
  }
`;

export const YoutubeLink = styled.span`
  position: absolute;
  margin-left: 150px;
  margin-top: 165px;

  @media (min-width: 850px) {
    margin-left: -50px;
  }
`;

export const RocketDescription = styled.div`
  line-height: 1.3;
  height: 200px;
  vertical-align: text-bottom;
  position: absolute;
  text-align: justify;
  max-width: 600px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 300px;
  font-family: "Exo 2", sans-serif;
  font-size: 1.4em;
  color: #ccc;

  @media (min-width: 850px) {
    margin-top: 80px;
    margin-left: 100px;
  }
`;
