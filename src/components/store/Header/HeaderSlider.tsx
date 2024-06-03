import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import { SliderImageWrapper } from "./styles";

export const HeaderSlider = () => {
  const sliderImages = ["/image001.png", "/image002.png", "/image003.png"];

  return (
    <div>
      <Carousel controls={false} fade indicators={false}>
        {sliderImages.map((image, index) => (
          <Carousel.Item key={index}>
            <SliderImageWrapper>
              <Image src={image} alt={image} width={600} height={340} />
            </SliderImageWrapper>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
