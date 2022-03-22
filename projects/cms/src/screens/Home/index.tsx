import React from "react";

import GetCountdown from "components/CountdownDashboard";

import { BackImg, Countdown } from "./styles";

const HomeScreen: React.FunctionComponent = (props) => {
  return (
    <BackImg className="demo">
      <div id="large-header" className="large-header">
        <canvas id="demo-canvas"></canvas>
        <h1 className="main-title"></h1>
        <Countdown>
          <GetCountdown />
        </Countdown>
      </div>

      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
    </BackImg>
  );
};

export default HomeScreen;
