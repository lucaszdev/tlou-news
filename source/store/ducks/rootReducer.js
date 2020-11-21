import { combineReducers } from 'redux';

import theme from './theme';
import news from './news';

export default combineReducers({
    theme,
    news
});
