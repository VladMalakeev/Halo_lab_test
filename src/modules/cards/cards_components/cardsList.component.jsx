import React, { useEffect } from "react";
import { CardsContentWrap, CardsInterfaceWrap, CardsPageWrap, LoadingWrap } from "../../../components/content.styles";
import { CardSingleComponent } from "./cardSingle.component";
import { ButtonGreen } from "../../../components/buttons.styles";
import { CatdModalContainer } from "./cardModal/cardModal.container";

export const CardsListComponent = (props) => {
    
    
    useEffect(() => {
        props.fetchCards();
    }, []);
    
    const cardsList = props.cards.map(card => <CardSingleComponent action={props.selectCard} key={card.name} card={card}/>)


    return (
        <CardsPageWrap>

            {props.loading && 
                <LoadingWrap>
                    <h1>loading...</h1>
                </LoadingWrap>
            }

            {!props.loading &&
                <>
                    {props.cardModalIsOpen && <CatdModalContainer/>}
                    
                    <CardsContentWrap>
                        {cardsList}
                    </CardsContentWrap>

                    <CardsInterfaceWrap>
                        <ButtonGreen onClick={() => props.buyCheapest(props.cards)} size="medium">Buy cheapest</ButtonGreen>
                    </CardsInterfaceWrap>
                </>
            }
            
        </CardsPageWrap>
    )
}