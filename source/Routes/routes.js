import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import About from '../pages/About';

const Tab = createBottomTabNavigator();

import {
    ContainerFeedbackTouch,
    FeedbackTouch
} from './styles.routes';

export default function App() {
    const theme = useSelector(state => state.theme.theme);

    const buttonNativeFeedback = ({ children, style, ...props }) => (
        <FeedbackTouch
            {...props}
            background={FeedbackTouch.Ripple(theme.FEEDBACK_TOUCH_COLOR, true)}
        >
            <ContainerFeedbackTouch style={style}>
                {children}
            </ContainerFeedbackTouch>
        </FeedbackTouch>
    );

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: '#9C27B0',
                    inactiveTintColor: '#777',
                    showLabel: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="align-center" color={color} size={26} />
                        ),
                        tabBarButton: buttonNativeFeedback,
                    }}
                />

                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="alert-circle" color={color} size={26} />
                        ),
                        tabBarButton: buttonNativeFeedback,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

