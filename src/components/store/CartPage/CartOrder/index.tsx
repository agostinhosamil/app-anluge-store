import Image from "next/image";
import { FaHeart, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { CategoryBreadCrumb } from "store@components/ProductPage/CategoryBreadCrumb";

import { useState } from "react";
import {
  AmountInputWrapper,
  BudgetData,
  Container,
  DataWrapper,
  HeadingWrapper,
  ImageWrapper,
  Price,
} from "./styles";

export const CartOrder = () => {
  const [amount, setAmount] = useState(1);

  const minusButtonClickHandler = () => {
    setAmount(amount - 1);
  };

  const plusButtonClickHandler = () => {
    setAmount(amount + 1);
  };

  return (
    <Container>
      <ImageWrapper>
        <i>
          <Image
            src="/assets/images/uploads/image001.jpg"
            alt="Product Name"
            width={100}
            height={120}
          />
        </i>
      </ImageWrapper>
      <DataWrapper>
        <HeadingWrapper>
          <h6>Product Name</h6>
          <ul>
            <li>
              <button>
                <i>
                  <FaHeart />
                </i>
              </button>
            </li>
            <li>
              <button>
                <i>
                  <FaTrash />
                </i>
              </button>
            </li>
          </ul>
        </HeadingWrapper>
        <CategoryBreadCrumb />
        <BudgetData>
          <Price>
            <strong>AKZ 123.092.398,00</strong>
          </Price>
          <AmountInputWrapper>
            <div>
              <i>
                <button type="button" onClick={minusButtonClickHandler}>
                  <FaMinus />
                </button>
              </i>
              <input
                type="text"
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                value={amount}
              />
              <i>
                <button type="button" onClick={plusButtonClickHandler}>
                  <FaPlus />
                </button>
              </i>
            </div>
          </AmountInputWrapper>
        </BudgetData>
      </DataWrapper>
    </Container>
  );
};
