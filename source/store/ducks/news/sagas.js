import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { NewsFailure, NewsSuccess } from './actions';

export function* NewsLoad() {
    try {
        const response = yield call(api.get, 'NewsSearchAPI', {
            params: {
                pageSize: 10,
                q: 'The Last Of Us',
                autoCorrect: true,
                pageNumber: 1,
                toPublishedDate: null,
                fromPublishedDate: null,
            },
            headers: {
                'x-rapidapi-key': '5352d076b9msh9e3246056cbdea5p1c8d58jsnc02a30343b97',
                'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        });

        yield put(NewsSuccess(response.data));
    } catch (err) {
        yield put(NewsFailure());
    }
}
