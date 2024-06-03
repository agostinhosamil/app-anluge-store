import * as Icons from "react-icons/fa6";

import { FontAwesome6IconName } from "Types/react-icons";

type IconProps = {
  name: FontAwesome6IconName;
};

type IconComponent = React.FunctionComponent<IconProps>;

export const Icon: IconComponent = (props) => {
  const IconElement = Icons[props.name];

  return <IconElement />;
};
