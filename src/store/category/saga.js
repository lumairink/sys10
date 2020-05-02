import { put, call } from "redux-saga/effects";
import * as Actions from "./actions";
import { get } from "../../services/requests";

export function* categoriesRequest() {
  try {
    const { data } = yield call(get, "categoria");

    yield put(Actions.categoriesSuccess(data));
  } catch (e) {
    yield put(Actions.error());
  }
}
