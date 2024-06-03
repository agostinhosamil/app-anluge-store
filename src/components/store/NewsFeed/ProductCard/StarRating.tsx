import { FaStar } from "react-icons/fa";
import { StarRatingElementContainer, StarWrapper } from "./styles";

type StarRatingComponent = React.FunctionComponent<{
  value?: number;
  size?: "default" | "small" | "large" | "x-large";
}>;

export const StarRating: StarRatingComponent = ({
  value = 0,
  size = "default",
}) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <StarRatingElementContainer>
      {stars.map((starIndex) => (
        <StarWrapper
          key={starIndex}
          $starRatingAverage={value}
          $starIndex={starIndex}
          $size={size}
        >
          <FaStar />
        </StarWrapper>
      ))}
    </StarRatingElementContainer>
  );
};
