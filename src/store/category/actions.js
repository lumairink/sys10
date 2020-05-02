import * as Types from "./types";

export const categoriesRequest = () => ({
  type: Types.CATEGORIES_REQUEST,
});

export const categoryRequest = (id) => ({
  type: Types.CATEGORY_REQUEST,
  payload: { id },
});

export const categorySuccess = (category) => ({
  type: Types.CATEGORY_SUCCESS,
  payload: { category },
});

export const categoriesSuccess = (categories) => ({
  type: Types.CATEGORIES_SUCCESS,
  payload: { categories },
});

export const error = () => ({ type: Types.ERROR });
