import styled from "styled-components";

export const ModalWindowWrap = styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    background: rgba(0, 0, 0, 0.8);
    z-index:1000;
    display:flex;
    justify-content:center;
    align-items:center;
    top:0;
    bottom:0;
    right:0;
    left:0;
`;

export const ModalWindowBlock = styled.div`
    background-color:#ffffff;
    border-radius:24px;
    padding: 25px;
    position:relative;
`;

export const ModalWindowCloseBtn = styled.span`
    background-color: #F2F2F2;
    border-radius:50%;
    width:40px;
    height:40px;
    position:absolute;
    right:-10px;
    top:-10px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:300ms;

    svg{
        transition:300ms;
        width:25px;
        height:25px;
    }

    :hover{
        cursor: pointer;
        transition:300ms;
        background:#F2F2F2;

        svg{
            transition:300ms;
            fill:red;
        }
    }
`;