import Image from "next/image";

import { StarRating } from "store@components/NewsFeed/ProductCard/StarRating";
import { RateMedias } from "./RateMedias";
import { Body, Container, HeadWrapper } from "./styles";

export const ProductRate = () => {
  return (
    <Container>
      <HeadWrapper>
        <i>
          <Image
            src={`/assets/images/uploads/image001.jpg`}
            alt="Rate title"
            width={45}
            height={45}
          />
        </i>
        <data>
          <strong>User name here</strong>
          <div className="rate-stats-data">
            <div className="rate-star-rating-element-wrapper">
              <StarRating value={4} size="small" />
            </div>
            <span>Há dois meses</span>
          </div>
        </data>
      </HeadWrapper>
      <Body>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          sapiente eligendi neque cum incidunt harum consequatur alias debitis
          adipisci deleniti. Explicabo fugiat maxime blanditiis ipsum veritatis
          accusamus rerum minima architecto?
        </p>
        <RateMedias />
      </Body>
    </Container>
  );
};
