import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    NewsRequest
} from '../../store/ducks/news/actions';

import { ThemeProvider } from 'styled-components';
import {
    Container,
    ActivityIndicator,
    ScrollView,
    RefreshControl,
    CardContainer,
    CardPostTitle,
    CardPostDescription,
    CardPostInfoContainer,
    CardPostDate
} from './styles';
import { View } from 'react-native';

const Home = () => {
    const theme = useSelector(state => state.theme.theme);
    const news = useSelector(state => state.news.data);
    const newsLoading = useSelector(state => state.news.loading);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const LoadNews = () => {
        dispatch(NewsRequest(page));

        setPage(page + 1);
    }

    useEffect(() => {
        LoadNews();
    }, [])

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    {newsLoading ?
                        <ActivityIndicator size='large' color={theme.COLOR_LOADING_PAGES} />
                        : (
                            <ScrollView
                                refreshControl={
                                    <RefreshControl
                                        refreshing={newsLoading}
                                        onRefresh={LoadNews}
                                        colors={[theme.COLOR_REFRESH_ARROW]}
                                        progressBackgroundColor={theme.COLOR_REFRESH_BACKGROUND}
                                    />
                                }
                            >
                                {news.value.map(posts => (
                                    <CardContainer
                                        key={posts.id}
                                        style={{ elevation: 2 }}
                                        activeOpacity={.7}
                                    >
                                        <CardPostTitle>{posts.title}</CardPostTitle>

                                        <CardPostDescription>
                                            {(posts.description).substring(0, 75) + '...'}
                                        </CardPostDescription>

                                        <CardPostInfoContainer>
                                            <CardPostDate>10 hours ago</CardPostDate>
                                        </CardPostInfoContainer>
                                    </CardContainer>
                                ))}
                            </ScrollView>
                        )}
                </Container>
            </ThemeProvider>
        </>
    );
}

export default Home;