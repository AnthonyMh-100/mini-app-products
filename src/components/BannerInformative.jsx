import styled from "styled-components";

export const BannerInformative = ({ children }) => {
  return <ContainerBanner>{children}</ContainerBanner>;
};

const ContainerBanner = styled.div`
  width: 100%;
  padding: 18px 16px;
  margin: 14px 0 18px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--border);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
  color: var(--muted);
  font-size: 14px;
  font-weight: 650;
  text-align: center;
`;
