import * as Types from "./types";

export const addItem = (item) => ({
  type: Types.CART_ADD_ITEM,
  payload: { item },
});

export const removeItem = (id) => ({
  type: Types.CART_REMOVE_ITEM,
  payload: { id },
});

export const changeItemAmount = (item) => ({
  type: Types.CART_REMOVE_ITEM,
  payload: { item },
});

export const finnishShopping = () => ({
  type: Types.CART_FINNISH,
});
