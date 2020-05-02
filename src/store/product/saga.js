import { put, call } from "redux-saga/effects";
import * as Actions from "./actions";
import { get } from "../../services/requests";

export function* productsRequest({ payload: { categoryId } }) {
  try {
    const { data } = yield call(get, `categoria/${categoryId}/produto`);

    yield put(Actions.productsSuccess(data));
  } catch (e) {
    yield put(Actions.error());
  }
}
