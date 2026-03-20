import styled from "styled-components";
import { MESSAGES } from "../constants";
import { ProductItem } from "./ProductItem";
import { BannerInformative } from "./BannerInformative";
import { useProducts } from "../hooks";

const { NO_FAVORITE_PRODUCTS } = MESSAGES;

export const FavoriteProducts = () => {
  const { productsFavorites, hanldeAddToFavorites } = useProducts({});
  return (
    <Container>
      <Title>Productos Favortios</Title>
      {!productsFavorites?.length && (
        <BannerInformative>{NO_FAVORITE_PRODUCTS}</BannerInformative>
      )}
      <ProductContainer>
        {productsFavorites?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            productsFavorites={productsFavorites}
            hanldeAddToFavorites={() => hanldeAddToFavorites(product)}
          />
        ))}
      </ProductContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 28px 18px 56px;
  width: 100%;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
  align-items: stretch;
`;

const Title = styled.h1`
  color: var(--text);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 6px 0 18px;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;
