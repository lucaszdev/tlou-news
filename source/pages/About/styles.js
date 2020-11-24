import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${props => props.theme.BACKGROUND_PAGES_COLOR};
`;

export const ButtonAbout = styled.TouchableOpacity`
    border: 1px solid ${props => props.theme.BUTTON_ABOUT_BORDER_COLOR};
    padding: 15px;
    margin: 15px;
    border-radius: 10px;
`;

export const ContainerInsideButtonAbout = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const IconSocial = styled(Icon)``;

export const TitleSocial = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.TEXT_PAGES};
`;
