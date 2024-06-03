import { useState } from "react";

import { Container } from "./styles";

type ProductFAQProps = {};

export const ProductFAQ: React.FunctionComponent<ProductFAQProps> = () => {
  const [showContent, setShowContent] = useState<boolean>(false);

  const clickHandler = () => {
    setShowContent(!showContent);
  };

  return (
    <Container>
      <strong onClick={clickHandler}>
        Lorem Ipsum is not simply random text?
      </strong>
      {showContent && (
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard Clock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          unstoppable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of de Fini borrow et Maro (The Extremes of Good and Evil) by
          Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem
          Ipsum, Lorem ipsum dolor sit ame.., comes from a line in section
          1.10.32.
        </p>
      )}
    </Container>
  );
};
