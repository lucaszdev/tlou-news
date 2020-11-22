import styled from 'styled-components/native';

export const TotalNewsInPageContainer = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.BACKGROUND_PAGES_COLOR};
    padding: 10px;
`;

export const TotalNewsInPage = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: ${props => props.theme.TEXT_PAGES};
`;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${props => props.theme.BACKGROUND_PAGES_COLOR};
`;

export const ActivityIndicator = styled.ActivityIndicator``;

export const CardContainer = styled.TouchableOpacity`
    background-color: ${props => props.theme.COLOR_POSTS_HOME};
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    justify-content: space-between;
    flex-direction: row;
`;

export const ContentContainer = styled.View`
    width: 195px;
`;

export const CardPostTitle = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.TEXT_PAGES};
`;

export const CardPostDescription = styled.Text`
    font-size: 13px;
    margin-top: 5px;
    color: ${props => props.theme.TEXT_PAGES};
`;

export const CardPostInfoContainer = styled.View`
    margin-top: 10px;
`;

export const ImageContainer = styled.View``;

export const ImagePost = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;

export const NoImageContainer = styled.View`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: #FFF;
`;

export const CardPostDate = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.TEXT_PAGES};
`;
