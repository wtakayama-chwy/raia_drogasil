import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { colors } from '../Helpers/colors';
import { mediaQuery } from '../Helpers/mediaQuery';

const StyledH1 = styled.h1`
    font-size: 10px;

    a {
        @media ${mediaQuery.tabletBig} {
            width: 37.5%; /* 360px Ã· 960px */
        }
        @media ${mediaQuery.tablet} {
            background-position: 57% 0;
			height: 126px;
			margin-bottom: 15px;
			width: 100%;
        }
        @media ${mediaQuery.mobile} {
            background-position: 50% 0;
            display: inherit;
            height: auto; /* Better layout */
            width: 100%;
        }
    }
    a:visited, a:link, a:hover { 
        color: ${colors.orange};
        font-weight: 400;
        text-decoration: none;
        @media ${mediaQuery.tablet} {
            color: ${colors.secondary}; 
        }        
    }
`

const StyledLogo = styled.img`
    float: left;    
    @media ${mediaQuery.tablet} {
        float: none;
    }
`
const Logo = () => {
    return (
        <StyledH1>
            <a href="/#">
                <StyledLogo src={logo} alt="raia drogasil"/>
            </a>
        </StyledH1>
    )
}

export default Logo;