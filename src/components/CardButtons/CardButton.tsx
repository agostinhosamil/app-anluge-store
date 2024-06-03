import Link from "next/link";
import { ButtonElement, ButtonWrapper } from "./styles";

type CardButtonProps = {
  href?: string;
};

type CardButtonComponent = React.FunctionComponent<
  React.PropsWithChildren &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    CardButtonProps
>;

type AnchorElementComponent = React.FunctionComponent<React.PropsWithChildren>;

export const CardButton: CardButtonComponent = ({ href = null, ...props }) => {
  const validHref = Boolean(typeof href === "string" && /\S/.test(href));

  const AnchorElement: AnchorElementComponent = ({ children }) => {
    return <Link href={href || "#"}>{children}</Link>;
  };

  const Button = validHref ? AnchorElement : ButtonElement;

  return (
    <ButtonWrapper>
      <Button {...props} type="submit" role="button">
        {props.children}
      </Button>
    </ButtonWrapper>
  );
};
