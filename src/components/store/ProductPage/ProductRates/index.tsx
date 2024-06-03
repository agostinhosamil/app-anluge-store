import { ProductRate } from "store@components/ProductPage/ProductRate";
import { Title } from "store@styles/product-page";

import { range } from "~/utils";
import { Container, ViewListButtonWrapper } from "./styles";

export const ProductRates = () => {
  return (
    <Container>
      <Title $size={23}>O que as pessoas dizem sobre este produto</Title>
      {range(6).map((i) => (
        <ProductRate key={i} />
      ))}
      <ViewListButtonWrapper>
        <button type="button" role="button">
          Ver mais avaliações
        </button>
      </ViewListButtonWrapper>
    </Container>
  );
};
