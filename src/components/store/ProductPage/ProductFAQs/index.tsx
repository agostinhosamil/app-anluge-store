import { Title } from "store@styles/product-page";

import { range } from "~/utils";
import { ProductFAQ } from "./ProductFAQ";
import { Container, List, ViewListButtonWrapper } from "./styles";

type ProductFAQsProps = {};

export const ProductFAQs: React.FunctionComponent<ProductFAQsProps> = () => {
  const questions = range(8);

  return (
    <Container>
      <Title>Perguntas frequentes</Title>
      <List>
        {questions.map((question, questionIndex) => (
          <ProductFAQ key={questionIndex} />
        ))}
      </List>
      <ViewListButtonWrapper>
        <li>
          <button>Fazer uma pergunta</button>
        </li>
        <li>
          <button>Ver mais perguntas</button>
        </li>
      </ViewListButtonWrapper>
    </Container>
  );
};
