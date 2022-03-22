import styled from "styled-components";

export const Root = styled.main`
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  background: #011b2d url(/static/assets/countdown_bg.jpg) repeat fixed 0 0/2560px
    200px;
  min-height: 95vh;
  overflow: hidden;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
