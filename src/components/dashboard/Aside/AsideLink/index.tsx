import Link from "next/link";
import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import * as Icons from "react-icons/fa6";

import { FontAwesome6IconName } from "Types/react-icons";

import { Body, Container, IconWrapper, Label, List } from "./styles";

type AsideLinkProps = {
  icon?: FontAwesome6IconName;
  showSubList?: boolean;
  href?: string;
  label: string;
};

type AsideLinkComponent = FunctionComponent<PropsWithChildren & AsideLinkProps>;

export const AsideLink: AsideLinkComponent = (props) => {
  const [colapse, setColapse] = useState<boolean>(props.showSubList || true);
  const [icon, setIcon] = useState<FontAwesome6IconName>(
    props.icon || "FaAngleRight",
  );

  const Icon = Icons[icon] || React.Fragment;

  const LinkElement: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <Link href={props.href || "#"}>{children}</Link>
  );

  const ButtonElement: FunctionComponent<PropsWithChildren> = (props) => (
    <button type="button" role="button" onClick={buttonClickHandler}>
      {props.children}
    </button>
  );

  function buttonClickHandler() {
    setColapse(!colapse);

    if (!props.icon) {
      setIcon(icon === "FaAngleRight" ? "FaAngleDown" : "FaAngleRight");
    }
  }

  const LinkWrapper = Boolean(props.children) ? ButtonElement : LinkElement;

  return (
    <Container>
      <LinkWrapper>
        <IconWrapper>
          <div>
            <Icon />
          </div>
        </IconWrapper>
        <Body>
          <Label>{props.label}</Label>
        </Body>
      </LinkWrapper>
      {!colapse && <List>{props.children}</List>}
    </Container>
  );
};
