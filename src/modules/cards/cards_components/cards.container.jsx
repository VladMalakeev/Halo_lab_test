import { connect } from "react-redux";
import { buyCheapest, openCardModal } from "../cards.actions";
import { fetchCardsList } from "../cards.thunk";
import { CardsListComponent } from "./cardsList.component";

const MapStateToProps = (state) => {
    return {
        cards:state.cardsReducer.cards,
        loading:state.cardsReducer.loading,
        cardModalIsOpen:state.cardsModalReducer.isOpen
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        fetchCards:() => dispatch(fetchCardsList()),
        selectCard:(cardData) => dispatch(openCardModal(cardData)),
        buyCheapest: (cards) => dispatch(buyCheapest(cards))
    }
}

export const CardsContainer = connect(MapStateToProps, MapDispatchToProps)(CardsListComponent);