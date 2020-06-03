import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Subtitle from './Subtitle';
import Circle from './Circle';
import { mediaQuery } from '../Helpers/mediaQuery';

const StyledDescription = styled.section`
    /* height: 320px; */
    text-align: center;
    width: 100%;

    @media ${mediaQuery.tabletBig} {
        /* height: 250px; */
    }
    @media ${mediaQuery.tablet} {
        /* height: 200px; */
        margin-bottom: 1em;
    }
    @media ${mediaQuery.mobile} {
        /* height: 130px; */
	    margin-top: 25px;
    }
    @media ${mediaQuery.mobileSmall} {
        /* height: 130px; */
	    margin-top: 20px;
    }
`;

const Description = () => {
    return(
        <StyledDescription>
            <Title color="desktop" weight="bolder">
                <span>Crie este site</span> responsivo <span>com</span> REACT <span>utilizando</span> styled-components
            </Title>
            <Subtitle> 
                A fonte utilizada é a Open Sans de 300 a 800. <br></br>
                exemplo: "Open Sans", Helvetica, sans-serif, arial; <br></br>
                Já as cores são: <br></br>
                <Circle color="green"/>#007f56, 
                <Circle color="gray"/>#868686, 
                <Circle color="lightred"/>#FE9481, 
                <Circle color="lightyellow"/>#FCDA92 e 
                <Circle color="lightpurple"/>#9C8CB9 
            </Subtitle>
        </StyledDescription>
    )
}

export default Description;