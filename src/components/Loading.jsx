import React from "react";
import styled from "styled-components";

export const Loading = ({ text }) => {
  return <ContainerLoading>{text}</ContainerLoading>;
};

const ContainerLoading = styled.div`
  align-items: center;
  background: rgba(246, 247, 251, 0.75);
  backdrop-filter: blur(10px);
  color: var(--text);
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 16px;
  font-weight: 650;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 50;

  &::before {
    content: "";
    width: 42px;
    height: 42px;
    border-radius: 100%;
    border: 3px solid rgba(15, 23, 42, 0.1);
    border-top-color: rgba(245, 158, 11, 0.95);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.1);
    animation: spin 900ms linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default React.memo(Loading);
