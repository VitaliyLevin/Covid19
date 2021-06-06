import { AnyAction } from "redux";
import { call, takeEvery, put, CallEffect, PutEffect } from "redux-saga/effects";
import { fetchCountries } from "../../assets/apis/apis";
import { ICountry, ResponseData } from "../interfaces";
import { requestCountries, requestCountriesFailed, requestCountriesSuccessful } from "../reducer/country";


export function* requestCountriesSaga(): Generator<
  CallEffect<ResponseData> | PutEffect<AnyAction>, 
  void, 
  ICountry[]
  > {
  try {
    const countries = yield call(fetchCountries);
    yield put(requestCountriesSuccessful({ countries }));
  } catch (err) {
    yield put(requestCountriesFailed());
  }
};

export function* watchFetchCountris(): Generator {
  yield takeEvery(requestCountries, requestCountriesSaga);
};
