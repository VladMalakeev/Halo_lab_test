import styled from "styled-components";

export const basicFontsStyle = `
    font-family: 'Roboto', sans-serif;
    font-style:normal;
    font-weight:normal;
    color:#000000;
`

const MainFont = styled.p`
    ${basicFontsStyle}
    font-size: 16px;
    margin:0;
    padding:0;
`;

export const CardCategory = styled(MainFont)`
    line-height: 24px;
    opacity: 0.5;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    @media(max-width:1600px){
        font-size: 14px;
    }
`;

export const CardName = styled(MainFont)`
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.02em;

    @media(max-width:1600px){
        font-size: 30px; 
    }
`;

export const CatdPrice = styled.span`
    ${basicFontsStyle}
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.02em;
    position:relative;
    padding:0 30px;

    ::before{
        content:'$';
        font-size:40px;
        position: absolute;
        left: 0;
        top: -2px;
    }

    @media(max-width:1600px){
        font-size: 40px;
        line-height: 52px;
        padding:0 20px;

        ::before{
            font-size:30px;
        }
    }


`;