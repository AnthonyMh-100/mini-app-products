import styled from "styled-components";
import { useParams, useNavigate } from "react-router";
import { useProducts } from "../hooks";
import { Loading } from "../components";
import { TEXT_LOADING } from "../constants";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, products } = useProducts({
    path: `${id}`,
    searchValue: id,
  });

  const { title, description, images = [], price, rating, stock } = products;

  if (isLoading) return <Loading text={TEXT_LOADING} />;

  return (
    <Container>
      <ContainerCard>
        <Image src={images[0]} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <InfoContainer>
          <InfoItem>
            <Label>Price</Label>
            <Value>S/.{price}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Rating</Label>
            <Value>{rating}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Stock</Label>
            <Value>{stock}</Value>
          </InfoItem>
        </InfoContainer>

        <ProductButton onClick={() => navigate("/")}>Volver</ProductButton>
      </ContainerCard>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background: transparent;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 28px 18px 56px;
  width: 100%;
`;

const ContainerCard = styled.div`
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: 0 18px 60px rgba(15, 23, 42, 0.12);
  margin: 0 auto;
  max-width: 480px;
  padding: 24px;
  text-align: center;
  width: 100%;
  backdrop-filter: blur(10px);
`;

const Description = styled.p`
  color: var(--muted);
  font-size: 14px;
  line-height: 1.45;
  margin-bottom: 16px;
`;

const Image = styled.img`
  border-radius: 16px;
  margin: 8px auto 18px;
  max-height: 320px;
  object-fit: contain;
  width: 100%;
  aspect-ratio: 4 / 3;
  padding: 10px;
  background: linear-gradient(
    180deg,
    rgba(241, 245, 249, 0.9),
    rgba(241, 245, 249, 0.55)
  );
  border: 1px solid rgba(15, 23, 42, 0.06);
`;

const ProductButton = styled.button`
  margin-top: auto;
  width: 100%;
  padding: 10px 12px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.82));
  color: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.10);
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.14);
  transition: transform 140ms ease, box-shadow 140ms ease, filter 140ms ease;
  &:hover {
    filter: brightness(1.02);
    box-shadow: 0 22px 50px rgba(15, 23, 42, 0.18);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0px);
    box-shadow: 0 16px 34px rgba(15, 23, 42, 0.14);
  }
  &:focus-visible {
    outline: 3px solid var(--ring);
    outline-offset: 2px;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px;
  margin: 14px 0 22px;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px 8px;
  border-radius: 14px;
  background: rgba(241, 245, 249, 0.55);
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);
`;

const Label = styled.span`
  display: block;
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 4px;
`;

const Title = styled.h2`
  color: var(--text);
  font-size: 22px;
  font-weight: 850;
  letter-spacing: -0.02em;
  margin: 0 0 10px;
`;

const Value = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: var(--text);
`;
