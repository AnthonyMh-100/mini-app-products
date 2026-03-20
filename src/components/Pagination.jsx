import React from "react";
import styled from "styled-components";

export const Pagination = ({
  hanldePrevPage,
  handleNextPage,
  page,
  totalPages,
}) => {
  return (
    <PaginationContainer>
      <Button onClick={hanldePrevPage} disabled={page === 1}>
        Anterior
      </Button>

      <PageInfo>
        Página {page} de {totalPages}
      </PageInfo>

      <Button onClick={handleNextPage} disabled={page === totalPages}>
        Siguiente
      </Button>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  white-space: nowrap;
  justify-content: center;
  flex: 0 0 auto;
  @media (max-width: 860px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const PageInfo = styled.span`
  font-size: 13px;
  color: var(--muted);
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.6);
`;

const Button = styled.button`
  background: ${({ disabled }) =>
    disabled
      ? "rgba(148, 163, 184, 0.35)"
      : "linear-gradient(135deg, rgba(245, 158, 11, 0.20), rgba(249, 115, 22, 0.12))"};
  border: 1px solid
    ${({ disabled }) => (disabled ? "transparent" : "var(--border)")};
  border-radius: 999px;
  color: ${({ disabled }) =>
    disabled ? "rgba(100, 116, 139, 0.9)" : "var(--text)"};
  font-size: 14px;
  padding: 10px 14px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0 10px 22px rgba(15, 23, 42, 0.06)"};
  transition:
    transform 140ms ease,
    box-shadow 140ms ease,
    filter 140ms ease;

  &:hover {
    ${({ disabled }) =>
      disabled
        ? ""
        : "transform: translateY(-1px); box-shadow: 0 16px 34px rgba(15, 23, 42, 0.10); filter: brightness(1.02);"}
  }

  &:active {
    ${({ disabled }) => (disabled ? "" : "transform: translateY(0px);")}
  }

  &:focus-visible {
    outline: 3px solid var(--ring);
    outline-offset: 2px;
  }
`;
