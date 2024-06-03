import { FunctionComponent, PropsWithChildren } from "react";

import { Container, List, Title, TitleWrapper } from "./styles";

type AsideSectionProps = {
  title?: string;
};

type AsideSectionComponent = FunctionComponent<
  PropsWithChildren & AsideSectionProps
>;

export const AsideSection: AsideSectionComponent = ({ children, title }) => {
  const isTitled = Boolean(
    title && typeof title === "string" && /\S/.test(title),
  );

  return (
    <Container>
      {isTitled && (
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      )}
      <List>{children}</List>
    </Container>
  );
};
