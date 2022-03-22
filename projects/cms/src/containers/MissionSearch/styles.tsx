import styled from "styled-components";

import "antd/dist/antd.less";
import { Button, Input } from "antd";

export const SearchButton: typeof Button = styled(Button)`
  margin-top: 30px;
  margin-right: auto;
  background-color: #555555;
  border-color: #555555;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 1.235rem;
  height: 100%;
  width: 150px;

  &: hover {
    background-color: #444444;
    border-color: #444444;
  }

  &: focus {
    background-color: #555555;
    border-color: #555555;
    box-shadow: none;
  }
`;

export const SearchInput: React.FunctionComponent<Input> = styled(Input)`
  margin-top: 30px;
  margin-left: auto;
  width: 500px;
  background-color: #333333;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  color: #cccccc;
  box-shadow: 5px 10px 10px #111;
  font-size: 1.235rem;

  &: hover {
    background-color: #fffff;
  }

  &: focus {

  }
`;

export const SearchBar = styled.span`
  display: flex;
`;
