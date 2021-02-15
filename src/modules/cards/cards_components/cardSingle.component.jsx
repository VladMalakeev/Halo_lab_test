import React from "react";
import { CardElementPriceWrap, CardElementWrap } from "../../../components/content.styles";
import { CardCategory, CardName, CatdPrice } from "../../../components/fonts.styles";
import { ButtonGreenRounded } from "../../../components/buttons.styles";
import bag from "../../../assets/svg/bag";
import { FirstCharacterToUpperCase } from "../../../helpers/functions";

export const CardSingleComponent = ({card, action}) => {
    return(
        <CardElementWrap onClick={() => action(card)}>
            <CardCategory>{card.category}</CardCategory>
            <CardName>{FirstCharacterToUpperCase(card.name)}</CardName>
            <CardElementPriceWrap>
                    <CatdPrice>{card.price}</CatdPrice>
                    <ButtonGreenRounded>{bag}</ButtonGreenRounded>
            </CardElementPriceWrap>
        </CardElementWrap>
    );
}