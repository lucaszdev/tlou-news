import styled from 'styled-components/native';
import { TouchableNativeFeedback } from 'react-native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    height: 50px;
    elevation: 1;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #000;
    font-family: 'Tungsten-SemiBold'
`;

export const ContainerFeedbackTouch = styled.View``;

export const FeedbackTouch = styled(TouchableNativeFeedback)``;

export const ChildrenFeedbackTouch = styled.View``;
