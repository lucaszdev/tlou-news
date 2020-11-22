import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { lightTheme, darkTheme } from '../../../Theme';
import * as ThemeActions from '../../store/ducks/theme/actions';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import {
    Container,
    Title,
    FeedbackTouch,
    ContainerFeedbackTouch,
    ChildrenFeedbackTouch,
    IconSwitchTheme
} from './styles';

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('theme_initial_state');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(e);
    }
}

const Header = () => {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch()

    getData().then(theme => {
        try {
            switch (theme.mode) {
                case 'dark':
                    return dispatch(ThemeActions.SwitchTheme(darkTheme));

                default:
                    return dispatch(ThemeActions.SwitchTheme(lightTheme));
            }
        } catch (e) {
            return 0;
        }
    })

    const toggleTheme = () => {
        switch (theme.mode) {
            case 'dark':
                return dispatch(ThemeActions.SwitchTheme(lightTheme));

            default:
                return dispatch(ThemeActions.SwitchTheme(darkTheme));
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle={theme.STATUS_BAR_STYLE}
                backgroundColor={theme.STATUS_BAR_BACKGROUND_COLOR}
            />
            <Container style={{ elevation: 1 }}>
                <Title>The Last Of Us News</Title>
                <ContainerFeedbackTouch>
                    <FeedbackTouch
                        background={FeedbackTouch.Ripple(theme.FEEDBACK_TOUCH_COLOR, true)}
                        onPress={() => toggleTheme()}
                    >
                        <ChildrenFeedbackTouch>
                            <IconSwitchTheme color={theme.ICON_HEADER_COLOR} />
                        </ChildrenFeedbackTouch>
                    </FeedbackTouch>
                </ContainerFeedbackTouch>
            </Container>
        </ThemeProvider>
    );
}

export default Header;