import React from "react";
import Link from "next/link";

import "antd/dist/antd.less";
import { Button } from "antd";

import { getRocketInfo } from "containers/Queries";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalItem
} from "./styles";

import _ from "lodash";

interface RocketInfoProps {
  id: string;
  close(): any;
}

const RocketInfo: React.FunctionComponent<RocketInfoProps> = (props) => {
  const { loading, error, data } = getRocketInfo(props.id);
  if (loading) return <p></p>;
  if (error) return <p>Error : ${error}</p>;

  const {
    name,
    description,
    height,
    diameter,
    mass,
    boosters,
    stages,
    success_rate_pct,
    first_flight,
    cost_per_launch,
    engines,
    payload_weights,
    wikipedia
  } = data.rocket;

  return (
    <>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <h2>{name}</h2>
          </ModalHeader>
          <ModalBody>
            <p>{description}</p>
            <ModalItem>
              <h4>Specs</h4>
              <ul>
                <li>Height: {height.meters}m</li>
                <li>Diameter: {diameter.meters}m</li>
                <li>Mass: {mass.kg}kg</li>
                <li>Boosters: {boosters}</li>
                <li>Stages: {stages}</li>
                <li>Success Rate: {success_rate_pct}%</li>
                <li>First Flight: {first_flight}</li>
                <li>
                  Cost per Launch: $
                  {new Intl.NumberFormat().format(cost_per_launch)}
                </li>
              </ul>
            </ModalItem>
            <ModalItem>
              <h4>Engines</h4>
              <ul>
                <li>Type: {engines.type}</li>
                <li>Engines: {engines.number}</li>
                <li>Propellant 1: {engines.propellant_1}</li>
                <li>Propellant 2: {engines.propellant_2}</li>
                <li>Thrust to Weight: {engines.thrust_to_weight}</li>
                <li>Thrust in Vacuum: {engines.thrust_vacuum.kN}kN</li>
              </ul>
            </ModalItem>
            <ModalItem>
              <h4>Payload Weights</h4>
              {_.map(payload_weights, (weight) => (
                <ul key={"weight-" + weight.name}>
                  <li>Orbit: {weight.name}</li>
                  <li>Payload: {weight.kg}kg</li>
                </ul>
              ))}
            </ModalItem>
          </ModalBody>
          <ModalFooter>
            <Button type="primary" onClick={props.close}>
              CLOSE
            </Button>
            <Button type="link" style={{ color: "#ddd" }}>
              <a href={wikipedia} target="_blank" rel="noopener noreferrer">
                Read more about {name} on Wikipedia
              </a>
            </Button>
            <Link href="/rockets/[id]" as={`/rockets/${props.id}`}>
              <a>Test details page</a>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default RocketInfo;
