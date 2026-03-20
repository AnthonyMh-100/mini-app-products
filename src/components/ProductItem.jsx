import React, { useMemo } from "react";
import styled from "styled-components";
import { truncateText } from "../utils/utils";
import { useNavigate } from "react-router";
import { MESSAGES } from "../constants";

const { ADD_FAVORITE, REMOVE_FAVORITE } = MESSAGES;

export const ProductItem = ({
  product,
  productsFavorites,
  hanldeAddToFavorites,
}) => {
  const navigate = useNavigate();

  const { description, id: productId, images, title } = product;

  const isFavorite = useMemo(
    () => productsFavorites?.some(({ id }) => id === productId),
    [productsFavorites]
  );

  return (
    <ProductCard key={productId}>
      <ImageContainer>
        <ProductImg src={images[0]} alt={title} />
      </ImageContainer>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>
        {truncateText({ maxLength: 60, text: description })}
      </ProductDescription>
      <ProductButton onClick={hanldeAddToFavorites} $isFavorite={isFavorite}>
        {isFavorite ? REMOVE_FAVORITE : ADD_FAVORITE}
      </ProductButton>
      <ProductButton onClick={() => navigate(`/product/${productId}`)}>
        Ver Producto
      </ProductButton>
    </ProductCard>
  );
};

export default React.memo(ProductItem);

const ProductButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px 12px;
  background: ${({ $isFavorite }) =>
    $isFavorite
      ? "linear-gradient(135deg, rgba(249, 115, 22, 0.95), rgba(245, 158, 11, 0.95))"
      : "rgba(241, 245, 249, 0.9)"};
  color: ${({ $isFavorite }) => ($isFavorite ? "#111827" : "var(--text)")};
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 14px;
  font-weight: 650;
  box-shadow: ${({ $isFavorite }) =>
    $isFavorite ? "0 14px 32px rgba(249, 115, 22, 0.18)" : "0 10px 22px rgba(15, 23, 42, 0.06)"};
  transition: transform 140ms ease, box-shadow 140ms ease, filter 140ms ease,
    background-color 140ms ease;

  & + & {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.82));
    color: #ffffff;
    border-color: rgba(15, 23, 42, 0.08);
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.18);
  }

  &:hover {
    filter: brightness(1.02);
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.12);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0px);
    box-shadow: ${({ $isFavorite }) =>
      $isFavorite ? "0 10px 22px rgba(249, 115, 22, 0.16)" : "0 10px 22px rgba(15, 23, 42, 0.08)"};
  }
  &:focus-visible {
    outline: 3px solid var(--ring);
    outline-offset: 2px;
  }
`;

const ProductCard = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
  color: var(--text);
  display: flex;
  flex-direction: column;
  min-height: 340px;
  width: 100%;
  padding: 14px 14px 16px;
  text-align: center;
  box-sizing: border-box;
  transition: transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 60px rgba(15, 23, 42, 0.12);
    background: rgba(255, 255, 255, 0.9);
  }

  ${ProductButton}:first-of-type {
    margin-top: auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 12px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(241, 245, 249, 0.9), rgba(241, 245, 249, 0.55));
  border: 1px solid rgba(15, 23, 42, 0.06);
`;

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 2px 0 8px;
  color: var(--text);
`;

const ProductDescription = styled.p`
  color: var(--muted);
  font-size: 13px;
  margin: 0;
  min-height: 42px;
  line-height: 1.35;
`;
