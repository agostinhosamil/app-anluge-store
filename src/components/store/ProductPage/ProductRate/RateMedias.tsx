import { range } from "~/utils";
import { RateMediaImage, RateMediasContainer, RateMediasList } from "./styles";

type RateImageSize = "large" | "normal";

export const RateMedias = () => {
  const medias = range(3);

  const resolveMediaImageSize = (imageIndex: number): RateImageSize => {
    if (medias.length < 2) {
      return "large";
    }

    if (medias.length / 2 === parseInt(`${medias.length / 2}`)) {
      return "normal";
    }

    return medias.length - 1 === imageIndex ? "large" : "normal";
  };

  return (
    <RateMediasContainer>
      <RateMediasList>
        {medias.map((media, mediaIndex) => (
          <RateMediaImage
            key={mediaIndex}
            $src={`/assets/images/uploads/image003.jpg`}
            $size={resolveMediaImageSize(mediaIndex)}
          />
        ))}
      </RateMediasList>
    </RateMediasContainer>
  );
};
