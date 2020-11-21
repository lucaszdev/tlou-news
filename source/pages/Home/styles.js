import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.BACKGROUND_PAGES_COLOR};
`;

export const ActivityIndicator = styled.ActivityIndicator``;

export const ScrollView = styled.ScrollView``;

export const RefreshControl = styled.RefreshControl``;

export const CardContainer = styled.TouchableOpacity`
    flex: 1;
    background-color: ${props => props.theme.COLOR_POSTS_HOME};
    padding: 20px;
    margin: 15px;
    border-radius: 5px;
`;

export const CardPostTitle = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${props => props.theme.TEXT_PAGES};
`;

export const CardPostDescription = styled.Text`
    font-size: 14px;
    margin-top: 5px;
    color: ${props => props.theme.TEXT_PAGES};
`;

export const CardPostInfoContainer = styled.View`
    margin-top: 10px;
`;

export const CardPostDate = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.TEXT_PAGES};
`;

