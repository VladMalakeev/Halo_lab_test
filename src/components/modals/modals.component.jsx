import { ModalWindowBlock, ModalWindowWrap, ModalWindowCloseBtn } from "./modals.styles"
import closeIcon from "../../assets/svg/close";

export const ModalWindowComponent = (props) => {

    const close = () => props.closeAction();
    
    return (
        <ModalWindowWrap onClick={(e) => e.target === e.currentTarget && close()}>
            <ModalWindowBlock>
                <ModalWindowCloseBtn onClick={close}>
                    {closeIcon}
                </ModalWindowCloseBtn>
                {props.children}
            </ModalWindowBlock>
        </ModalWindowWrap>
    )
}