import React from "react";
import YouTube from "react-youtube";
import "antd/dist/antd.less";
import { Button } from "antd";

import { getLaunchInfo } from "containers/Queries";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalVideo,
  ModalItem,
  ModalButton
} from "./styles";

interface LaunchProps {
  id: string;
  close(): void;
}

const Launch: React.FunctionComponent<LaunchProps> = (props) => {
  let viewWidth = 640;
  let viewHeight = 390;

  if (window.innerWidth < 850) {
    viewWidth = window.innerWidth * 0.7;
    viewHeight = (viewWidth * 390) / 640;
  }
  let viewWidthStr = viewWidth.toString();
  let viewHeightStr = viewHeight.toString();
  console.log(viewWidthStr);
  const opts = {
    height: viewHeightStr,
    width: viewWidthStr,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const { loading, error, data } = getLaunchInfo(props.id);
  if (loading) return <p></p>;
  if (error) return <p>Error : ${error}</p>;
  const {
    mission_name,
    details,
    launch_success,
    launch_date_utc,
    launch_site,
    rocket,
    links
  } = data.launch;

  let video = "";

  if (links.video_link.includes("https://www.youtube.com/watch?v=")) {
    video = links.video_link.replace("https://www.youtube.com/watch?v=", "");
  } else {
    video = links.video_link.replace("https://youtu.be/", "");
  }

  return (
    <>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <h2>{mission_name}</h2>
          </ModalHeader>
          <ModalBody>
            <p>{details}</p>
            <ModalItem>
              <h4>Launch Info</h4>
              <ul>
                <li>Status: {launch_success ? "Success" : "Failed"}</li>
                <li>Launch Date (UTC): {launch_date_utc}</li>
                <li>Launch Site: {launch_site.site_name}</li>
                <li>Rocket: {rocket.rocket_name}</li>
              </ul>
            </ModalItem>
          </ModalBody>
          <ModalBody>
            <ModalVideo>
              <YouTube videoId={video} opts={opts} />
            </ModalVideo>
          </ModalBody>
          <ModalFooter>
            <ModalButton>
              <Button type="primary" onClick={props.close}>
                CLOSE
              </Button>

              <Button type="link">
                <a
                  href={links.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer">
                  Read more about {mission_name} on Wikipedia
                </a>
              </Button>
            </ModalButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Launch;
