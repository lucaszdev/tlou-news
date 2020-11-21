import ThemeTypes from './types';
import { lightTheme, darkTheme } from '../../../../Theme';

import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (theme) => {
    try {
        await AsyncStorage.setItem('theme_initial_state', JSON.stringify(theme));
    } catch (e) {
        console.error(e);
    }
}

const INITIAL_STATE = {
    theme: lightTheme
}

export default function theme(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ThemeTypes.SWITCH_THEME:
            storeData(action.payload);
            return { theme: action.payload };

        default:
            return state;
    }
}
