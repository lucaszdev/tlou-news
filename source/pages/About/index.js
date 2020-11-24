import React from 'react';
import {
    useSelector
} from 'react-redux';

import { Linking } from 'react-native';

import {
    Container,
    ButtonAbout,
    ContainerInsideButtonAbout,
    IconSocial,
    TitleSocial
} from './styles';

import { ThemeProvider } from 'styled-components';

const About = () => {
    const theme = useSelector(state => state.theme.theme)

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <ButtonAbout
                    activeOpacity={.6}
                    onPress={() => Linking.openURL('https://github.com/lucaszdev')}
                >
                    <ContainerInsideButtonAbout>
                        <IconSocial name='github' size={26} color={theme.ICON_PAGES} />
                        <TitleSocial>GitHub - Project Code</TitleSocial>
                    </ContainerInsideButtonAbout>
                </ButtonAbout>

                <ButtonAbout
                    activeOpacity={.6}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/lucas-lima-6969171ba/')}
                >
                    <ContainerInsideButtonAbout>
                        <IconSocial name='linkedin' size={26} color={theme.ICON_PAGES} />
                        <TitleSocial>Linkedin</TitleSocial>
                    </ContainerInsideButtonAbout>
                </ButtonAbout>

                <ButtonAbout
                    activeOpacity={.6}
                    onPress={() => Linking.openURL('https://www.instagram.com/lucasz.dev')}
                >
                    <ContainerInsideButtonAbout>
                        <IconSocial name='instagram' size={26} color={theme.ICON_PAGES} />
                        <TitleSocial>Instagram</TitleSocial>
                    </ContainerInsideButtonAbout>
                </ButtonAbout>

                <ButtonAbout
                    activeOpacity={.6}
                    onPress={() => Linking.openURL('https://twitter.com/lucasz_dev')}
                >
                    <ContainerInsideButtonAbout>
                        <IconSocial name='twitter' size={26} color={theme.ICON_PAGES} />
                        <TitleSocial>Twitter</TitleSocial>
                    </ContainerInsideButtonAbout>
                </ButtonAbout>

                <ButtonAbout
                    activeOpacity={.6}
                    onPress={() => Linking.openURL('mailto:lucas.101.106.99.lima@gmail.com')}
                >
                    <ContainerInsideButtonAbout>
                        <IconSocial name='mail' size={26} color={theme.ICON_PAGES} />
                        <TitleSocial>E-mail</TitleSocial>
                    </ContainerInsideButtonAbout>
                </ButtonAbout>
            </Container>
        </ThemeProvider>
    );
}

export default About;