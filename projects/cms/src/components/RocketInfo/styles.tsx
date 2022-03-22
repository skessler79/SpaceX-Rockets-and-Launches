import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  color: black;

  & h4 {
    font-size: 1.625rem;
    font-weight: Bolder;
    font-family: Arial;
  }

  & a {
    float: center;
    text-decoration: none;
  }
`;

export const ModalContent = styled.div`
  position: relative;

  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 70%;
  boxshadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 5.19);
`;

export const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #252525;

  & h2 {
    color: white;
    padding: 5px 0;
  }
`;

export const ModalFooter = styled.div`
  padding: 50px 15px;
  background-color: #252525;
  color: white;
`;

export const ModalBody = styled.div`
  background-color: #eee;
  padding: 2px 16px;
  display: flex;
  flex-wrap: wrap;
  font-family: Arial;
  font-size: 1.225rem;
  color: black;
`;

export const ModalItem = styled.div`
  margin: 10;
  flex: 1 25%;
  color: black;
`;
