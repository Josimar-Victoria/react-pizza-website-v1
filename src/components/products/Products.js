import React from "react";
import { data } from "../products/data";
import {
  ProductButton,
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductTitle,
} from "./styles";

export default function Products({ data, heading }) {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductImg src={product.img} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsWrapper>
    </ProductsContainer>
  );
}
