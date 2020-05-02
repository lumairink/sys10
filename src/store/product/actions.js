import * as Types from "./types";

export const productsRequest = (categoryId) => ({
  type: Types.PRODUCTS_REQUEST,
  payload: { categoryId },
});

export const productRequest = (id) => ({
  type: Types.PRODUCT_REQUEST,
  payload: { id },
});

export const productSuccess = (product) => ({
  type: Types.PRODUCT_SUCCESS,
  payload: { product },
});

export const productsSuccess = (products) => ({
  type: Types.PRODUCTS_SUCCESS,
  payload: { products },
});

export const error = () => ({ type: Types.ERROR });
