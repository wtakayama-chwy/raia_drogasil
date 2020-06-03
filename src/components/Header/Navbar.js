import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../Helpers/colors';
import { mediaQuery } from '../Helpers/mediaQuery';

const StyledNavbar = styled.nav`
    float: right;
    text-align: right;
    width: 41.6666666666667% ;
    @media ${mediaQuery.tabletBig} {
        width: 62.5%; /* 600px Ã· 960px */
    }
    @media ${mediaQuery.tablet} {
        float: none;
        text-align: center;
        width: 100%;
    }
    @media ${mediaQuery.mobile} {
        clear: both;
    }

    ul {
        list-style-type: none;

        @media ${mediaQuery.mobile} {
            margin: 0;
            padding: 0;
        }
        li {
            display: inline;
            @media ${mediaQuery.mobile} {
                background-color: ${colors.tertiary};
		        display: block;
            }
            @media ${mediaQuery.mobileSmall} {
                background-color: ${colors.lightBlue};
            }
            a {
                font-size: 1.2222222222em;
                display: inline-block;
                line-height: 1.18181818182em;
                letter-spacing: -0.0909090909em;
                color: ${colors.green};
                text-decoration: none;
                margin-right: 2.5%;
                @media ${mediaQuery.mobile} {
                    height: 40px;
                    margin: 0 auto;
                    padding-top: 3px;
                    text-align: center;
                    text-shadow: none;
                    width: 100%;
                    color: ${colors.white};
			        font-size: 1.3888888889em; /*25px Ã· 18px*/
                }
            }
            a:hover {
                color: ${colors.orange};
                text-decoration: underline;
                @media ${mediaQuery.tablet} {
                    color: ${colors.linkColor}
                }
                @media ${mediaQuery.mobile} {
                    background-color: ${colors.darkPurple}; 
                    color: ${colors.white};
                    text-decoration: none;
                }
                @media ${mediaQuery.mobileSmall} {
                    background-color: ${colors.lightBlue2};
                    color: ${colors.white};
                }
            }            
        }
    }
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <ul>
                <li>
                    <Link to="/#html">HTML5</Link>
                </li>
                <li>
                    <Link to="/#css">CSS3</Link>
                </li>
                <li>
                    <Link to="/#js">JAVASCRIPT</Link>
                </li>
                <li>
                    <Link to="/#react">REACT</Link>
                </li>
                <li>
                    <Link to="/#redux">REDUX</Link>
                </li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar;