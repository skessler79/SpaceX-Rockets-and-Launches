import styled from "styled-components";

export const Root = styled.main``;

export const AboutImg = styled.div`
  background: #011b2d url(/static/assets/hero-about.jpg) fixed -70px -350px;
  height: 350px;

  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`;

export const Tint = styled.div`
  height: 100%;
  opacity: 0.6;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-family: "Montserrat", monospace;
    font-size: 75px;
    color: #ffffff;
    opacity: 1;
  }
`;

export const AboutInfo = styled.div`
  justify-content: center;
  align-items: flex-start;
  margin-top: 70px;
  display: inline;

  @media (min-width: 850px) {
    display: flex;
    margin-left: 0px;
  }
`;

export const LeftInfo = styled.span`
  width: 820px;
  margin-bottom: 80px;

  & h2 {
    font-family: "Montserrat", monospace;
    color: rgb(205, 205, 205);
    font-size: 32px;
    padding-left: 20px;
    padding-right: 20px;
  }

  & p {
    font-family: "Noto Sans KR", sans-serif;
    color: rgb(228, 228, 228);
    font-size: 1.18em;
    padding-left: 20px;
    padding-right: 20px;
  }

  & a {
    color: rgb(255, 255, 255);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const RightInfo = styled.span`
  margin-left: 80px;

  & h2 {
    font-family: "Montserrat", monospace;
    color: rgb(205, 205, 205);
    font-size: 32px;
    padding-left: 20px;
    padding-right: 20px;
  }

  & p {
    font-family: "Noto Sans KR", sans-serif;
    color: rgb(228, 228, 228);
    font-size: 1.1em;
  }

  & a {
    color: rgb(255, 255, 255);
    text-decoration: underline;
    padding-left: 20px;
    padding-right: 20px;

    &:hover {
      text-decoration: none;
    }
  }

  & img {
    transition: transform 0.25s ease-in-out;
    margin-top: 20px;
    margin-bottom: 5px;

    &:hover {
      transform: translate(20px);
    }
  }

  @media (min-width: 850px) {
    width: 410px;
  }
`;

export const Disclaimer = styled.div`
  background: #101025;
  margin-top: 50px;
  margin: 20px;

  & p {
    padding: 15px;
    padding-top: 10px;
    font-family: "Noto Sans KR", sans-serif;
    color: rgb(228, 228, 228);
    font-size: 1.1em;
  }

  & a {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
