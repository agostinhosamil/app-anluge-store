import * as Icons from "react-icons/fa6";

import { IconComponent } from "./types";

export const IconElement: IconComponent = ({ name, ...props }) => {
  const Icon = Icons[name];

  return (
    <button {...props} type="button" role="button">
      <i>
        <Icon />
      </i>
    </button>
  );
};
