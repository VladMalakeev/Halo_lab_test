import { FieldError, FieldWrap, SimpleField } from "../../../../components/fields.styles";
import { CardCategory, CardName, CatdPrice } from "../../../../components/fonts.styles"
import { ModalWindowComponent } from "../../../../components/modals/modals.component"
import { ButtonGreenSubmit } from "../../../../components/buttons.styles";
import { CardFormWrap, CardModalInfoWrap } from "../../../../components/content.styles";
import { useEffect } from "react";
import arrow from "../../../../assets/svg/arrow";
import { FirstCharacterToUpperCase } from "../../../../helpers/functions";

export const CardModalComponent = (props) => {

    useEffect(() => {
        return () => props.resetModalForm();
    }, []);

    const formSubmit = (e) => {
        e.preventDefault();

        if(!props.formValid) props.validateForm();
        else console.log({name:props.name, number:props.number});
    };

    const changeName = (e) => props.onChangeName(e.target.value);
    const changeNumber = (e) => props.onChangeNumber(e.target.value);


    return (
        <ModalWindowComponent closeAction={props.closeModal}>
            <form onSubmit={formSubmit}>
                <CardModalInfoWrap>
                    <CardCategory>{props.card?.category}</CardCategory>
                    <CardName>{FirstCharacterToUpperCase(props.card?.name)}</CardName>
                    <CatdPrice>{props.card?.price}</CatdPrice>
                </CardModalInfoWrap>

                <CardFormWrap>
                    <FieldWrap>
                        <SimpleField 
                            error={props.nameError}
                            name="name"
                            placeholder="Name"
                            type="text" 
                            onBlur={props.validateNameField}
                            onChange={changeName}
                        />
                        {props.nameError && <FieldError>{props.nameError}</FieldError>}
                    </FieldWrap>

                    <FieldWrap>
                        <SimpleField 
                            error={props.numberError}
                            name="number" 
                            placeholder="Number" 
                            type="text" 
                            onBlur={props.validateNumberField}
                            onChange={changeNumber} 
                        />

                        {props.numberError && <FieldError>{props.numberError}</FieldError>}
                    </FieldWrap>


                    <ButtonGreenSubmit type="submit">ORDER {arrow}</ButtonGreenSubmit>
                </CardFormWrap>
            </form>
        </ModalWindowComponent>
        
    )
}



