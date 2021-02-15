import styled from "styled-components";
import { basicFontsStyle } from "./fonts.styles";

export const SimpleField = styled.input`
    ${basicFontsStyle}
    font-size: 16px;
    line-height: 24px;
    border: 1px solid;
    border-color:${props => props.error ? '#E43F3F' : 'rgba(0, 0, 0, 0.2)'};
    box-sizing: border-box;
    border-radius: 16px;
    outline:none;
    padding: 16px;
    font-size:20px;
    width:100%;
    transition:300ms;
    :focus{
        border: 1px solid #50DAA8;
        transition:300ms;
    }
`;

export const FieldError = styled.span`
    ${basicFontsStyle}
    color:red;
    position:absolute;
    bottom:10px;
    left:20px;
`;

export const FieldWrap = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    padding-bottom: 40px;
`;