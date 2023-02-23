import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Container showPassword={showPassword}>
            <BackgroundImage />
            <div className="content">
                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Manh chanel, TV shows and more</h1>
                        <h4>Watch any where. Cancel anytime</h4>
                        <h6>Ready to watch? Enter your email to create or restart membership</h6>
                    </div>
                    <div className="form">
                        <input type="email" placeholder="Email Address" name="email" />
                        {showPassword && <input type="password" placeholder="Password" name="password" />}
                        {!showPassword && <button onClick={() => setShowPassword(true)}>Get Started</button>}
                    </div>
                    <button>Log In</button>
                </div>
            </div>
        </Container>
    );
}
export default Signup;

const Container = styled.div`
    position: relative;
    .content {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh 85vh;
        .body {
            gap: 1rem;
            .text {
                gap: 1rem;
                text-align: center;
                font-size: 2rem;
                h1 {
                    padding: 0 25rem;
                }
            }
            .form {
                display: grid;
                align-items: center;
                grid-template-columns: ${({ showPassword }) => (showPassword ? '1fr 1fr' : '2fr 1fr')};
                width: 60%;
                input {
                    color: black;
                    border: 1px solid black;
                    padding: 1.5rem;
                    font-size: 1.2rem;
                    &:focus {
                        outline: none;
                    }
                }
                button {
                    padding: 0.5rem 1rem;
                    background-color: #e50914;
                    border: none;
                    cursor: pointer;
                    color: white;
                    font-weight: bolder;
                    font-size: 1.05rem;
                    height: 100%;
                }
            }
            button {
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
                border-radius: 0.2rem;
                font-weight: bolder;
                font-size: 1.05rem;
            }
        }
    }
`;
