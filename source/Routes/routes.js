import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import About from '../pages/About';

const Tab = createBottomTabNavigator();

import {
    ContainerFeedbackTouch,
    FeedbackTouch
} from './styles.routes';

const buttonNativeFeedback = ({ children, style, ...props }) => (
    <FeedbackTouch
        {...props}
        background={FeedbackTouch.Ripple('#9C27B0', true)}
    >
        <ContainerFeedbackTouch style={style}>
            {children}
        </ContainerFeedbackTouch>
    </FeedbackTouch>
);

export default function App() {
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

