import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navbar from './Navbar';
import { mediaQuery } from '../Helpers/mediaQuery';

const StyledHeader = styled.header`
    border-bottom: 1px solid #E0E0E0;
    height: 90px;
    width: 100%;
    @media ${mediaQuery.tablet} {
        height: 90px;
        text-align: center;
        margin-bottom: 3em;
    }
    @media ${mediaQuery.mobile} {
        border-bottom: none;
        height: auto;
        text-align: center;
        margin-bottom: 0;
    }
`;

const Header = () => {
    return (
    <StyledHeader>
        <Logo />
        <Navbar />
    </StyledHeader>
    )
}

export default Header;