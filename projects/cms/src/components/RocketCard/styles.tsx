import styled, { keyframes } from "styled-components";

const gridMove = keyframes`
  from {
    transform: translate(0px, 0px);
  }

  to {
    transform: translate(50px, 50px);
  }
`;

export const Card = styled.div`
  display: flex;
  margin: 50px 2%;
  flex: 20 78%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  boxshadow: 0 10px 20px 5px rgba(0, 0, 0, 2.3);
  transition: transform 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.035);
  }

  & img {
    width: 100%;
    height: 700px;
  }

  @media screen and (min-width: 800px) {
    flex: 20 38%;

    @media screen and (min-width: 1200px) {
      flex: 20 18%;
    }
  }
`;

export const Details = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.1s ease;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.85),
    rgba(10, 10, 10, 0.5)
  );

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 800px) {
    opacity: 1;
    background: rgba(0, 0, 0, 0);
    text-shadow: 0px 0px 10px #000;
  }
`;

export const Grid = styled.div`
  background: url(/static/assets/gridme.png) repeat;
  animation: ${gridMove} 4s linear infinite;
  opacity: 0.13;
  position: absolute;
  height: 200%;
  width: 200%;
  margin-top: -100px;
  margin-left: -100px;
`;

export const RocketName = styled.div`
  font-size: 2.1rem;
  padding: 10px;
  margin-top: 200px;
  text-align: center;
`;

export const Country = styled.div`
  font-size: 1.5rem;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
`;
