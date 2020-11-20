import ThemeTypes from './types';
import { lightTheme, darkTheme } from '../../../../Theme';

const INITIAL_STATE = {
    theme: lightTheme
}

export default function theme(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ThemeTypes.SWITCH_THEME:
            return { theme: action.theme };

        default:
            return state;
    }
}
