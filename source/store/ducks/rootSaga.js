import { all, takeLatest } from 'redux-saga/effects';

import NewsTypes from './news/types';
import { NewsLoad } from './news/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(NewsTypes.NEWS_REQUEST, NewsLoad)
    ]);
}
