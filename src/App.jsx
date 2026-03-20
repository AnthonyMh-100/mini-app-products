import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BannerInformative,
  Loading,
  Pagination,
  ProductItem,
  SearchBar,
} from "./components";
import {
  DEBOUNCE_DELAY,
  DEFAULT_PAGE,
  LIMIT,
  MESSAGES,
  TEXT_LOADING,
} from "./constants";
import { useDebounce, useProducts } from "./hooks/";
import { useNavigate } from "react-router";

const { NO_PRODUCTS_FOUND } = MESSAGES;

function App() {
  const [searchProduct, setSearchProduct] = useState("");
  const [page, setPage] = useState(DEFAULT_PAGE);

  const navigate = useNavigate();

  const debouncedSearchProduct = useDebounce({
    delay: DEBOUNCE_DELAY,
    value: searchProduct,
  });

  const skip = (page - 1) * LIMIT;
  const path = `search?q=${debouncedSearchProduct}&limit=${LIMIT}&skip=${skip}`;

  const {
    productsFavorites,
    hanldeAddToFavorites,
    isLoading,
    products: { products: productsData, total: totalPages },
  } = useProducts({
    path,
    searchValue: debouncedSearchProduct,
  });

  useEffect(() => setPage(DEFAULT_PAGE), [debouncedSearchProduct]);

  if (isLoading) return <Loading text={TEXT_LOADING} />;

  return (
    <Container>
      <Title>Lista de Productos</Title>
      <ContainerBar>
        <SearchBar
          value={searchProduct}
          onChange={({ target: { value } }) => setSearchProduct(value)}
        />
        <Pagination
          hanldePrevPage={() => setPage((prev) => prev - 1)}
          handleNextPage={() => setPage((prev) => prev + 1)}
          page={page}
          totalPages={
            productsData?.length ? Math.ceil(totalPages / LIMIT) : DEFAULT_PAGE
          }
        />
        <ProductButton onClick={() => navigate("/favorites")}>
          Ir a favoritos
        </ProductButton>
      </ContainerBar>
      {!productsData?.length && (
        <BannerInformative>{NO_PRODUCTS_FOUND}</BannerInformative>
      )}
      <ProductContainer>
        {productsData?.map((product) => (
          <ProductItem
            key={product.id}
            productsFavorites={productsFavorites}
            product={product}
            hanldeAddToFavorites={() => hanldeAddToFavorites(product)}
          />
        ))}
      </ProductContainer>
    </Container>
  );
}

const ProductButton = styled.button`
  margin-left: auto;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  color: #111827;
  font-size: 14px;
  font-weight: 650;
  padding: 10px 14px;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: transform 140ms ease, box-shadow 140ms ease, filter 140ms ease;
  white-space: nowrap;

  &:hover {
    filter: brightness(1.02);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.14);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: var(--shadow-sm);
  }

  &:focus-visible {
    outline: 3px solid var(--ring);
    outline-offset: 2px;
  }

  @media (max-width: 860px) {
    margin-left: 0;
    width: 100%;
    justify-self: stretch;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 28px 18px 56px;
  width: 100%;
`;

const ContainerBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  width: 100%;
  margin-bottom: 20px;
  padding: 14px 14px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
  position: sticky;
  top: 10px;
  z-index: 10;

  @media (max-width: 860px) {
    flex-wrap: wrap;
    justify-content: stretch;
  }
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

export default App;
