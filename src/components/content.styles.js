import styled from "styled-components";

const PageWrap = styled.div`
    background-color:#F2F2F2;
    padding:100px 200px;
    position:relative;

    @media(max-width:1600px){
        padding:100px 150px;
    }

    @media(max-width:1224px){
        padding:100px 90px;
    }

    @media(max-width:778px){
        padding:30px 30px;
    }

    @media(max-width:610px){
        padding:50px 70px;
    }

    @media(max-width:456px){
        padding:30px 30px;
    }
`;

export const CardsPageWrap = styled(PageWrap)`
    height:100%;
    min-height: 100vh;
    box-sizing: border-box;
`;

export const CardsInterfaceWrap = styled.div`
    height:150px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:sticky;
    bottom:0;
    background-color:#F2F2F2;
`;

export const CardsContentWrap = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:50px;

    @media(max-width:1224px){
        grid-template-columns: 1fr 1fr;
        grid-gap:40px;
    }

    @media(max-width:778px){
        grid-gap:20px;
    }

    @media(max-width:610px){
        grid-template-columns: 1fr;
        grid-gap:40px;
    }
`;

export const CardElementWrap = styled.div`
    background-color:#ffffff;
    box-shadow: ${props => props.active ? '24px 24px 40px rgba(75, 207, 160, 0.08)': 'none'};
    border-radius: 24px;
    padding:35px;
    transition:300ms;

    :hover{
        transition:300ms;
        cursor:pointer;
        box-shadow: 24px 24px 40px rgba(75, 207, 160, 0.08);
    }

    @media(max-width:778px){
        padding:25px;
    }

    @media(max-width:456px){
        padding:20px;
    }
`;

export const  CardElementPriceWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:50px;

    @media(max-width:1600px){
        margin-top:30px;
    }
`;


export const LoadingWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;


export const CardFormWrap = styled.div`
    display:flex;
    flex-direction:column;
`;

export const CardModalInfoWrap = styled.div`
    text-align:center;
    margin: 25px 15px;
`;