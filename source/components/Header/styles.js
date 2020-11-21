import styled from 'styled-components/native';
import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    background-color: ${props => props.theme.HEADER_BACKGROUND_COLOR};
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    height: 50px;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.HEADER_TITLE_COLOR};
    font-family: 'Tungsten-SemiBold';
`;

export const ContainerFeedbackTouch = styled.View``;

export const FeedbackTouch = styled(TouchableNativeFeedback)``;

export const ChildrenFeedbackTouch = styled.View``;

export const IconSwitchTheme = styled(Icon).attrs({
    name: 'moon',
    size: 26
})``;
