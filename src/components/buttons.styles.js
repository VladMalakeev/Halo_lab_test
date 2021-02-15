import styled from "styled-components";

const buttonSize = (size) => {
    switch(size){
        case 'medium': return 48;
        case 'lage': return 103;
        default: return 16;
    }
}

const Button = styled.button`
    border-radius:16px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding-bottom:16px;
    padding-top:16px;
    padding-left: ${props => `${buttonSize(props.size)}px`};
    padding-right: ${props => `${buttonSize(props.size)}px`};
    transition:300ms;
    outline:none;

    :hover{
        cursor: pointer;
        transition:300ms;
    }

    @media(max-width:1600px){
        padding-bottom:10px;
        padding-top:10px;
    }
`;



export const ButtonGreen = styled(Button)`
    color:#50DAA8;
    background-color:#ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);

    :hover{
        color:#ffffff;
        background-color:#50DAA8;
    }
`;

export const ButtonGreenSubmit = styled(ButtonGreen)`
    display:flex;
    justify-content: center;
    align-items:center;

    svg{
        transition:300ms;
        width:30px;
        height:15px;
        fill:white;
    }

    :hover{

        svg{
            transition:300ms;
            margin-left:10px;
        }
        
    }
`;

export const ButtonGreenRounded = styled(ButtonGreen)`
    border-radius:50%;
    width:70px;
    height:70px;
    display:flex;
    justify-content:center;
    align-items:center;

    svg{
        transition:300ms;
        fill:#50DAA8;
        width:50px;
        height:50px;
    }

    :hover{
        svg{
            transition:300ms;
            fill:#ffffff;
        }
    }
`;
