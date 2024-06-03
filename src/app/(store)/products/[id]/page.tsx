"use client";

import Image from "next/image";
import Column from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaCartPlus, FaEllipsisVertical, FaHeart } from "react-icons/fa6";

import Link from "next/link";
import { CategoryBreadCrumb } from "store@components/ProductPage/CategoryBreadCrumb";
import { ProductFAQs } from "store@components/ProductPage/ProductFAQs";
import { ProductImageGallery } from "store@components/ProductPage/ProductImageGallery";
import { ProductRates } from "store@components/ProductPage/ProductRates";
import {
  ActionButton,
  CategoryBreadCrumbWrapper,
  Container,
  OldPrice,
  Price,
  PriceList,
  PriceListWrapper,
  ProductActionsListWrapper,
  ProductDataWrapper,
  ProductImageGalleryWrapper,
  ProductTagListWrapper,
  ShareOptionsContainer,
  StarRatingElementContainer,
  StatsData,
} from "store@styles/product-page";
import { StarRating } from "~/components/store/NewsFeed/ProductCard/StarRating";

export default function ProductPage() {
  return (
    <Container>
      <Row>
        <Column md={5}>
          <ProductImageGalleryWrapper>
            <ProductImageGallery />
          </ProductImageGalleryWrapper>
        </Column>
        <Column md={7}>
          <ProductDataWrapper>
            <h1>Stavigille 100mg Libs 30 Tablets</h1>
            <StatsData>
              <StarRatingElementContainer>
                <StarRating value={4} />
              </StarRatingElementContainer>
              <span>+198 unidades vendidas</span>
            </StatsData>
            <PriceListWrapper>
              <PriceList>
                <OldPrice>
                  <i>AKZ</i>
                  <h5>12.982.344,98</h5>
                </OldPrice>
                <Price>
                  <i>AKZ</i>
                  <h5>9.345.353,09</h5>
                </Price>
              </PriceList>
            </PriceListWrapper>
            <CategoryBreadCrumbWrapper>
              <CategoryBreadCrumb />
            </CategoryBreadCrumbWrapper>
            <ProductActionsListWrapper>
              <ul>
                <li>
                  <ActionButton type="button" role="button" $color="primary">
                    <i>
                      <FaCartPlus />
                    </i>
                    <span>Adicionar ao carrinho</span>
                  </ActionButton>
                </li>
                <li>
                  <ActionButton type="button" role="button">
                    <i>
                      <FaHeart />
                    </i>
                  </ActionButton>
                </li>
                <li>
                  <ActionButton type="button" role="button">
                    <i>
                      <FaEllipsisVertical />
                    </i>
                  </ActionButton>
                </li>
              </ul>
            </ProductActionsListWrapper>
            <ProductTagListWrapper>
              <ul>
                <li>
                  <Link href="/">Tag 1</Link>
                </li>
                <li>
                  <Link href="/">Tag 1</Link>
                </li>
                <li>
                  <Link href="/">Tag 1</Link>
                </li>
                <li>
                  <Link href="/">Tag 1</Link>
                </li>
                <li>
                  <Link href="/">Tag 1</Link>
                </li>
                <li>
                  <Link href="/">Tag 1</Link>
                </li>
                <li>
                  <Link href="/">Tag 1</Link>
                </li>
              </ul>
            </ProductTagListWrapper>
            <ShareOptionsContainer>
              <strong>Partilhar este produto</strong>
              <ul>
                <li>
                  <a target="_blank" href="//www.facebook.com">
                    <Image
                      src="/assets/images/social-media-icon-facebook.png"
                      alt="Partilhar no Facebook"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="//www.instagram.com">
                    <Image
                      src="/assets/images/social-media-icon-instagram.png"
                      alt="Partilhar no Instagram"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="//www.whatsapp.com">
                    <Image
                      src="/assets/images/social-media-icon-whatsapp.png"
                      alt="Partilhar pelo Whatsapp"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="//www.twitter.com">
                    <Image
                      src="/assets/images/social-media-icon-twitter.png"
                      alt="Partilhar no Twitter"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
              </ul>
            </ShareOptionsContainer>
          </ProductDataWrapper>
        </Column>
      </Row>
      <Row>
        <Column md={8}></Column>
        <Column md={4}>
          <ProductRates />
          <ProductFAQs />
        </Column>
      </Row>
    </Container>
  );
}
