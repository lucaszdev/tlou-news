import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    NewsRequest
} from '../../store/ducks/news/actions';

import { ThemeProvider } from 'styled-components';
import {
    TotalNewsInPageContainer,
    TotalNewsInPage,
    Container,
    ActivityIndicator,
    CardContainer,
    ContentContainer,
    CardPostTitle,
    CardPostDescription,
    CardPostInfoContainer,
    ImageContainer,
    NoImageContainer,
    ImagePost,
    CardPostDate
} from './styles';

import { unlessFormattedDate } from '../../utils/functionsUtils';

import { FlatList, View, Linking } from 'react-native';

const Home = () => {
    const theme = useSelector(state => state.theme.theme);
    const news = useSelector(state => state.news.data);
    const newsLoading = useSelector(state => state.news.loading);
    const newsTotalCount = useSelector(state => state.news.totalCount);

    const [page, setPage] = useState(1);
    const [firsttime, setFirstTime] = useState(0);

    const dispatch = useDispatch();

    const LoadNews = () => {
        if (page <= newsTotalCount && !newsLoading || firsttime === 0) {
            setFirstTime(1);
            dispatch(NewsRequest(page));

            setPage(page + 1);
        }
    }

    useEffect(() => {
        LoadNews();
    }, [])

    const renderPosts = ({ item }) => (
        <CardContainer
            style={{ elevation: 2 }}
            activeOpacity={.7}
            onPress={() => Linking.openURL(item.url)}
        >
            <ContentContainer>
                <CardPostTitle>{item.title}</CardPostTitle>

                <CardPostDescription>
                    {(item.description).substring(0, 75) + '...'}
                </CardPostDescription>

                <CardPostInfoContainer>
                    <CardPostDate>{unlessFormattedDate(item.datePublished)}</CardPostDate>
                </CardPostInfoContainer>
            </ContentContainer>

            <ImageContainer>
                {item.image.url ? (
                    <ImagePost source={{ uri: item.image.url }} />

                ) : <NoImageContainer />}
            </ImageContainer>
        </CardContainer>
    )

    const RenderFooter = () => {
        if (newsLoading && news.length === 5 * page) return null;

        return (
            <View style={{ marginBottom: 10 }}>
                <ActivityIndicator size='large' color={theme.COLOR_LOADING_PAGES} />
            </View>
        );
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <TotalNewsInPageContainer>
                    <TotalNewsInPage>Loaded News: {news.length}</TotalNewsInPage>
                </TotalNewsInPageContainer>

                <Container>
                    {news.length === 0 && newsLoading ?
                        <ActivityIndicator size='large' color={theme.COLOR_LOADING_PAGES} />
                        : (
                            <FlatList
                                data={news}
                                keyExtractor={(post, index) => post.id + index.toString()}
                                renderItem={renderPosts}
                                onEndReached={LoadNews}
                                onEndReachedThreshold={.1}
                                ListFooterComponent={RenderFooter}
                            />
                        )}
                </Container>
            </ThemeProvider>
        </>
    );
}

export default Home;