import React from 'react';
import {
    useSelector
} from 'react-redux';

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
                <ButtonAbout>
                    <ContainerInsideButtonAbout>
                        <IconSocial name='github' size={26} color={theme.ICON_PAGES} />
                        <TitleSocial>GitHub - Project Code</TitleSocial>
                    </ContainerInsideButtonAbout>
                </ButtonAbout>

                <ButtonAbout>
                    <ContainerInsideButtonAbout>
                        <IconSocial name='linkedin' size={26} color={theme.ICON_PAGES} />
                        <TitleSocial>Linkedin</TitleSocial>
                    </ContainerInsideButtonAbout>
                </ButtonAbout>

                <ButtonAbout>
                    <ContainerInsideButtonAbout>
                        <IconSocial name='instagram' size={26} color={theme.ICON_PAGES} />
                        <TitleSocial>Instagram</TitleSocial>
                    </ContainerInsideButtonAbout>
                </ButtonAbout>

                <ButtonAbout>
                    <ContainerInsideButtonAbout>
                        <IconSocial name='twitter' size={26} color={theme.ICON_PAGES} />
                        <TitleSocial>Twitter</TitleSocial>
                    </ContainerInsideButtonAbout>
                </ButtonAbout>

                <ButtonAbout>
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