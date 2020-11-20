import ThemeTypes from './types';

export function SwitchTheme(theme) {
    return {
        type: ThemeTypes.SWITCH_THEME,
        payload: theme
    }
}
