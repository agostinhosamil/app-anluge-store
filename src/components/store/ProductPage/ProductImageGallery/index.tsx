import Image from "next/image";

import {
  Container,
  Content,
  ImageWrapper,
  ThumbnailsListWrapper,
} from "./styles";

type ProductImageGalleryProps = {};

type ProductImageGalleryComponent =
  React.FunctionComponent<ProductImageGalleryProps>;

export const ProductImageGallery: ProductImageGalleryComponent = () => {
  return (
    <Container>
      <ThumbnailsListWrapper>
        <ul>
          <li>
            <div>
              <Image
                src="/image004.png"
                alt="Product name here"
                width={50}
                height={50}
              />
            </div>
          </li>
          <li>
            <div>
              <Image
                src="/image004.png"
                alt="Product name here"
                width={50}
                height={50}
              />
            </div>
          </li>
          <li>
            <div>
              <Image
                src="/image004.png"
                alt="Product name here"
                width={50}
                height={50}
              />
            </div>
          </li>
          <li>
            <div>
              <Image
                src="/image004.png"
                alt="Product name here"
                width={50}
                height={50}
              />
            </div>
          </li>
        </ul>
      </ThumbnailsListWrapper>
      <Content>
        <ImageWrapper>
          <Image
            src="/assets/images/uploads/product-image000.jpg"
            alt="Product name should be here"
            width={900}
            height={1200}
          />
        </ImageWrapper>
      </Content>
    </Container>
  );
};
