import { ButtonHTMLAttributes } from "react";
import * as Icons from "react-icons/fa6";

import { FontAwesome6IconName } from "Types/react-icons";

import {
  ActionButtonContainer,
  ActionButtonElement,
  IconWrapper,
  LabelWrapper,
} from "./styles";

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: FontAwesome6IconName;
  label?: string;
};

type ActionButtonComponent = React.FunctionComponent<ActionButtonProps>;

export const ActionButton: ActionButtonComponent = ({
  icon,
  label,
  ...props
}) => {
  const Icon = Icons[icon || "Fa0"];

  return (
    <ActionButtonContainer>
      <ActionButtonElement {...props}>
        {icon && (
          <IconWrapper>
            <Icon />
          </IconWrapper>
        )}
        {label && (
          <LabelWrapper>
            <span>{label}</span>
          </LabelWrapper>
        )}
      </ActionButtonElement>
    </ActionButtonContainer>
  );
};
