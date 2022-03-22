import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 50px;
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
  width: 80%;
  boxshadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 5.19);
  margin-bottom: 50px;
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

  flex-wrap: wrap;
  font-family: Arial;
  font-size: 1.225rem;
`;

export const ModalVideo = styled.div`
  background-color: #eee;
  display: flex;
  align-content: center;
  max-width: 50%;
`;

export const ModalItem = styled.div`
  margin: 10;
  flex: 1 25%;
`;

export const ModalButton = styled.div`
  margin-left: 1rem;
  display: flex;
  text-decoration-color: blue !important;

  a {
    color: white !important;
  }
`;
