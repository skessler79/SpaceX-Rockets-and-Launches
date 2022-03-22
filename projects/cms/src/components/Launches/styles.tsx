import styled from "styled-components";

import "antd/dist/antd.less";
import { Pagination } from "antd";

export const Root = styled.main`
  margin: 0px auto;
  display: flex;
  flexwrap: wrap;
  min-height: 90vh;
  min-width: 90vw;
  overflow: hidden;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PageSelect: typeof Pagination = styled(Pagination)`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  color: #333333;

  &: hover {
    background-color: #fffff;
  }
`;
