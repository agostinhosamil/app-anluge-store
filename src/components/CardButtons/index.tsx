import { useEffect, useRef, useState } from "react";

import { Body, Container } from "./styles";

type CardButtonsProps = {};

type CardButtonsComponent = React.FunctionComponent<
  React.PropsWithChildren & CardButtonsProps
>;

type ButtonsHeight = "auto" | number;

export { CardButton } from "./CardButton";

export const CardButtons: CardButtonsComponent = (props) => {
  const [buttonsHeight, setButtonsHeight] = useState<ButtonsHeight>("auto");

  const bodyElementRef = useRef<HTMLDivElement>(null);

  const children =
    props.children instanceof Array ? props.children : props.children;

  useEffect(() => {
    if (!bodyElementRef.current) {
      return;
    }

    const bodyElement = bodyElementRef.current;
    const bodyElementChildren = Array.from(bodyElement.children).filter(
      (child) => child.nodeType === 1,
    );

    if (bodyElementChildren.length >= 1) {
      const bodyElementChildrenLengthIsOdd = Boolean(
        bodyElementChildren.length / 2 !==
          parseInt(`${bodyElementChildren.length / 2}`),
      );

      if (bodyElementChildrenLengthIsOdd) {
        const bodyElementLastChild = bodyElementChildren[
          -1 + bodyElementChildren.length
        ] as HTMLElement;
        bodyElementLastChild.style.cssText = "width: 100%; height: auto;";
      }

      let bodyElementChildrenGreaterHeight = 0;

      bodyElementChildren.forEach((bodyElementChild) => {
        if (
          bodyElementChild instanceof HTMLElement &&
          bodyElementChild.offsetHeight > bodyElementChildrenGreaterHeight
        ) {
          bodyElementChildrenGreaterHeight = bodyElementChild.offsetHeight;
        }
      });

      setButtonsHeight(bodyElementChildrenGreaterHeight);
    }
  }, []);

  return (
    <Container>
      <Body $buttonsHeight={buttonsHeight} ref={bodyElementRef}>
        {children}
      </Body>
    </Container>
  );
};
