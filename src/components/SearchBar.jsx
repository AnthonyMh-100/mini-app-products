import styled from "styled-components";
import { TEXT_PLACEHOLDER_PRODUCTS } from "../constants";

export const SearchBar = ({
  value,
  onChange,
  placeholder = TEXT_PLACEHOLDER_PRODUCTS,
}) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border);
  border-radius: 14px;
  font-size: 14px;
  padding: 12px 14px;
  width: min(560px, 100%);
  flex: 1 1 320px;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);
  transition: box-shadow 140ms ease, border-color 140ms ease,
    background-color 140ms ease;

  &::placeholder {
    color: rgba(100, 116, 139, 0.9);
  }

  &:focus {
    border-color: rgba(245, 158, 11, 0.55);
    outline: none;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.18),
      0 16px 40px rgba(15, 23, 42, 0.10);
  }
`;
