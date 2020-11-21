import React from 'react';
import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Home = () => {
    const theme = useSelector(state => state.theme.theme);

    return (
        <View style={{ flex: 1, backgroundColor: theme.BACKGROUND_PAGES_COLOR, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: theme.TEXT_PAGES }}>Home PAGE</Text>
        </View>
    );
}

export default Home;