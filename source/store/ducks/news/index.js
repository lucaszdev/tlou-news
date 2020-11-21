import NewsTypes from './types';

const INITIAL_STATE = {
    data: [],
    error: false,
    loading: true
}

export default function news(state = INITIAL_STATE, action) {
    switch (action.type) {
        case NewsTypes.NEWS_REQUEST:
            return { ...state, loading: true }

        case NewsTypes.NEWS_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }

        case NewsTypes.NEWS_FAILURE:
            return { ...state, loading: false, error: true, data: [] }

        default:
            return state;
    }
}
