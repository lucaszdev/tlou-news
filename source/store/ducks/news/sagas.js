import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
    NewsFailure,
    NewsSuccess,
    NewsRefreshFailure,
    NewsRefreshSuccess
} from './actions';

export function* NewsLoad({ payload }) {
    const { page } = payload;

    try {
        const response = yield call(api.get, 'NewsSearchAPI', {
            params: {
                pageSize: 5,
                q: 'The Last Of Us',
                autoCorrect: true,
                pageNumber: page,
                toPublishedDate: null,
                fromPublishedDate: null,
                withThumbnails: true
            },
            headers: {
                'x-rapidapi-key': '',
                'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        });

        yield put(NewsSuccess(response.data));
    } catch (err) {
        yield put(NewsFailure());
    }
}
