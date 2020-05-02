import * as Types from "./types";
import INITIAL_STATE from "./store";

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case Types.CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
        isFetching: false,
      };
    case Types.CATEGORY_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case Types.CATEGORY_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
        isFetching: false,
      };
    case Types.ERROR:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}
