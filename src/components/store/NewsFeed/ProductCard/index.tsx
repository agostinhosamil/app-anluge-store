// import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus, FaEllipsisV, FaHeart } from "react-icons/fa";
import { StarRating } from "./StarRating";
import * as Styled from "./styles";

type ProductCardProps = {
  name: string;
  image: string;
  description: string;
};

export const ProductCard: React.FunctionComponent<ProductCardProps> = (
  props,
) => {
  return (
    <Styled.Container>
      <Link href={`/products/{id}`}>
        <Styled.Content>
          <Styled.ImageWrapper>
            <Image
              src={props.image}
              width={210}
              height={250}
              alt={props.name}
            />
          </Styled.ImageWrapper>
          <Styled.Name>{props.name}</Styled.Name>
          <Styled.Description>{props.description}</Styled.Description>
          <Styled.StatsData>
            <div>
              <StarRating value={3} />
            </div>
            <div>
              <span>+133 uniaddes vendidas</span>
            </div>
          </Styled.StatsData>
          <Styled.MetaData>
            <Styled.Price>
              <i>US$</i>
              <h3>1.234.223,00</h3>
            </Styled.Price>
            <span>Equipamentos informáticos - Computadores - Games</span>
          </Styled.MetaData>
        </Styled.Content>
      </Link>
      <Styled.AsideContainer>
        <Styled.AsideBody>
          <ul>
            <li>
              <button type="button" role="button" className="color-primary">
                <i>
                  <FaCartPlus />
                </i>
              </button>
            </li>
            <li>
              <button type="button" role="button">
                <i>
                  <FaHeart />
                </i>
              </button>
            </li>
            <li>
              <button type="button" role="button">
                <i>
                  <FaEllipsisV />
                </i>
              </button>
            </li>
          </ul>
        </Styled.AsideBody>
      </Styled.AsideContainer>
    </Styled.Container>
  );
};
