import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as ThemeActions from '../../store/ducks/theme/actions';
import { lightTheme, darkTheme } from '../../../Theme';
import { StatusBar } from 'react-native';

import {
    Container,
    Title,
    FeedbackTouch,
    ContainerFeedbackTouch,
    ChildrenFeedbackTouch,
    IconSwitchTheme
} from './styles';

const Header = () => {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch()

    const toggleTheme = () => {
        switch (theme.mode) {
            case 'dark':
                return dispatch(ThemeActions.SwitchTheme(lightTheme));

            default:
                return dispatch(ThemeActions.SwitchTheme(darkTheme));
        }
    }

    return (
        <>
            <StatusBar
                barStyle={theme.STATUS_BAR_STYLE}
                backgroundColor={theme.STATUS_BAR_BACKGROUND_COLOR}
            />

            <Container isTheme={theme} style={{ elevation: 1 }}>
                <Title style={{ color: theme.HEADER_TITLE_COLOR }}>The Last Of Us News</Title>
                <ContainerFeedbackTouch>
                    <FeedbackTouch
                        background={FeedbackTouch.Ripple(theme.FEEDBACK_TOUCH_COLOR, true)}
                        onPress={() => toggleTheme()}
                    >
                        <ChildrenFeedbackTouch>
                            <IconSwitchTheme name='moon' size={26} color={theme.ICON_HEADER_COLOR} />
                        </ChildrenFeedbackTouch>
                    </FeedbackTouch>
                </ContainerFeedbackTouch>
            </Container>
        </>
    );
}

export default Header;