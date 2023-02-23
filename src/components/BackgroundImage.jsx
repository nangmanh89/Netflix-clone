import React from 'react';
import Background from '../assets/VN-en-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg';
import styled from 'styled-components';

export default function BackgroundImage() {
    return (
        <Container>
            <img src={Background} alt="background" />
        </Container>
    );
}
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    img {
        height: 100vh;
        width: 100vw;
    }
`;
