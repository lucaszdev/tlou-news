import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useSelector, useDispatch } from 'react-redux';
import * as ThemeActions from '../../store/ducks/theme/actions';
import { lightTheme, darkTheme } from '../../../Theme';
import { StatusBar } from 'react-native';

import {
    Container,
    Title,
    FeedbackTouch,
    ContainerFeedbackTouch,
    ChildrenFeedbackTouch
} from './styles';

const Header = () => {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch()

    return (
        <>
            <StatusBar
                barStyle={theme.STATUS_BAR_STYLE}
                backgroundColor={theme.STATUS_BAR_BACKGROUND_COLOR}
            />

            <Container>
                <Title>The Last Of Us News</Title>
                <ContainerFeedbackTouch>
                    <FeedbackTouch
                        background={FeedbackTouch.Ripple('#9C27B0', true)}
                    // onPress={() => }
                    >
                        <ChildrenFeedbackTouch>
                            <Icon name='moon' size={26} color='#000' />
                        </ChildrenFeedbackTouch>
                    </FeedbackTouch>
                </ContainerFeedbackTouch>
            </Container>
        </>
    );
}

export default Header;