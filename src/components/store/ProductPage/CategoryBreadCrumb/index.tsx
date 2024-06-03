import { Fragment } from "react";
import { FaAngleRight } from "react-icons/fa6";

import { Container } from "./styles";

export const CategoryBreadCrumb = () => {
  const categoryPath = [
    "Category",
    "Subcategory",
    "Subcategory",
    "Subcategory",
    "Subcategory",
    "Subcategory",
    "Subcategory",
  ];

  return (
    <Container>
      <span>
        {categoryPath.map((category, categoryIndex) => (
          <Fragment key={categoryIndex}>
            <i>
              <FaAngleRight />
            </i>
            {category}
          </Fragment>
        ))}
      </span>
    </Container>
  );
};
