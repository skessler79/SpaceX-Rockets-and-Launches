import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  margin: 50px 2%;
  flex: 20 18%;
  border-radius: 10%;
  overflow: hidden;
  position: relative;
  boxshadow: 0 10px 20px 5px rgba(0, 0, 0, 2.3);
  transition: transform 0.25s ease-in-out, opacity 0.2s ease;
  cursor: pointer;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.4),
    rgba(10, 10, 10, 0)
  );

  &:hover {
    transform: scale(1.035);
    background: linear-gradient(
      to top,
      rgba(10, 10, 10, 0.85),
      rgba(10, 10, 10, 0.5)
    );
    opacity: 1;
  }

  & img {
    margin: 20px;
    margin-right: 35px;
    margin-bottom: 150px;
    height: 300px;
    width: 300px;
    z-index: 1;
  }
`;

export const MissionName = styled.div`
  border-radius: 10%;
  position: absolute;
  height: 100%;
  width: 100%;
  border: 1px solid #555;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    color: #ddd;
    margin-top: 335px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;
