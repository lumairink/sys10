import { all, takeLatest, fork } from "redux-saga/effects";

import * as categoryTypes from "./category/types";
import * as categorySagas from "./category/saga";

import * as productTypes from "./product/types";
import * as productSagas from "./product/saga";

export default function* rootSaga() {
  yield all([
    takeLatest(
      categoryTypes.CATEGORIES_REQUEST,
      categorySagas.categoriesRequest
    ),
    takeLatest(productTypes.PRODUCTS_REQUEST, productSagas.productsRequest),
  ]);
}
