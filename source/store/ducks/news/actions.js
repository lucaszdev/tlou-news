import NewsTypes from './types';

export function NewsRequest() {
    return {
        type: NewsTypes.NEWS_REQUEST
    };
}

export function NewsSuccess(data) {
    return {
        type: NewsTypes.NEWS_SUCCESS,
        payload: { data }
    };
}

export function NewsFailure() {
    return {
        type: NewsTypes.NEWS_FAILURE
    };
}

