import NewsTypes from './types';

export function NewsRequest(page) {
    return {
        type: NewsTypes.NEWS_REQUEST,
        payload: { page }
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
