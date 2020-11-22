import NewsTypes from './types';

const INITIAL_STATE = {
    data: [],
    totalCount: 0,
    error: false,
    loading: true
}

export default function news(state = INITIAL_STATE, action) {
    switch (action.type) {
        case NewsTypes.NEWS_REQUEST:
            return { ...state, loading: true }

        case NewsTypes.NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: [...state.data, ...action.payload.data.value],
                totalCount: action.payload.data.totalCount
            }

        case NewsTypes.NEWS_FAILURE:
            return { ...state, loading: false, error: true, data: [] }

        default:
            return state;
    }
}
