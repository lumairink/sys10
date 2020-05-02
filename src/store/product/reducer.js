import * as Types from "./types";
import INITIAL_STATE from "./store";

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case Types.PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.products,
        isFetching: false,
      };
    case Types.PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case Types.PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload.product,
        isFetching: false,
      };
    case Types.ERROR:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}
