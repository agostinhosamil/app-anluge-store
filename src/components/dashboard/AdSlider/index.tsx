import { CSSProperties, useEffect, useState } from "react";

import { range } from "~/utils";
// import { prisma } from '@services/prisma';

import {
  Container,
  ImageElement,
  ImageWrapper,
  IndicatorContainer,
} from "./styles";

export const AdSlider = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);

  // const advertisingList = await prisma.advertising.findMany()
  const advertisingList = range(6).map((n, i) => ({
    id: i,
    banner: `uploaded-image-000${i}.jpg`,
  }));

  const resolveNextAdIndex = () => {
    if (advertisingList.length <= 1 + currentAdIndex) {
      return 0;
    }

    return 1 + currentAdIndex;
  };

  useEffect(() => {
    const SECONDS = 1000;

    setTimeout(() => {
      setCurrentAdIndex(resolveNextAdIndex());
    }, SECONDS * 10);
  });

  return (
    <Container>
      <ImageWrapper>
        {advertisingList.map((advertising, index) => {
          const imageElementStyles: CSSProperties = {
            backgroundImage: `url('/assets/images/uploads/${advertising.banner}')`,
            display: currentAdIndex === index ? "block" : "none",
          };

          return (
            <ImageElement key={advertising.id} style={imageElementStyles} />
          );
        })}
      </ImageWrapper>
      <IndicatorContainer>
        <ul>
          {advertisingList.map((advertising, index) => {
            return (
              <li key={advertising.id}>
                <i
                  className={
                    currentAdIndex === index
                      ? "filled-indicator"
                      : "default-indicator"
                  }
                />
              </li>
            );
          })}
        </ul>
      </IndicatorContainer>
    </Container>
  );
};
