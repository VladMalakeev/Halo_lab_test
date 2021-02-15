export const SET_CARDS_LIST = "CARDS_REDUCER/SET_CARDS_LIST";
export const CHANGE_CARDS_LOADIND = "CARDS_REDUCER/CHANGE_CARDS_LOADIND";

export const OPEN_CARD_MODAL = "CARD_MODAL_REDUCER/OPEN_CARD_MODAL";
export const CLOSE_CARD_MODAL = "CARD_MODAL_REDUCER/CLOSE_CARD_MODAL";
export const BUY_CHEAPEST = "CARD_MODAL_REDUCER/BUY_CHEAPEST";
export const ON_CHANGE_NAME_FIELD = "CARD_MODAL_REDUCER/ON_CHANGE_NAME_FIELD";
export const ON_CHANGE_NUMBER_FIELD = "CARD_MODAL_REDUCER/ON_CHANGE_NUMBER_FIELD";
export const VALIDATE_NAME_FIELD = "CARD_MODAL_REDUCER/VALIDATE_NAME";
export const VALIDATE_NUMBER_FIELD = "CARD_MODAL_REDUCER/VALIDATE_NUMBER_FIELD";
export const VALIDATE_FORM = "CARD_MODAL_REDUCER/VALIDATE_FORM";
export const RESET_MODAL_FORM = "CARD_MODAL_REDUCER/RESET_MODAL_FORM";

export const setCardsListAction = (cards) => {
    return {
        type:SET_CARDS_LIST,
        cards
    }
}

export const changeCardsLoading = (state) => {
    return {
        type:CHANGE_CARDS_LOADIND,
        state
    }
}

export const openCardModal = (cardData) => {
    return {
        type:OPEN_CARD_MODAL,
        cardData
    }
}

export const closeCardModal = () => {
    return {
        type:CLOSE_CARD_MODAL
    }
}

export const buyCheapest = (cards) => {
    return {
        type:BUY_CHEAPEST,
        cards
    }
}

export const changeNameField = (value) => {
    return {
        type:ON_CHANGE_NAME_FIELD,
        value
    }
}

export const changeNumberField = (value) => {
    return {
        type:ON_CHANGE_NUMBER_FIELD,
        value
    }
}

export const validateNumberField = () => {
    return {
        type:VALIDATE_NUMBER_FIELD
    }
}

export const validateNameField = () => {
    return {
        type:VALIDATE_NAME_FIELD
    }
}

export const validateForm = () => {
    return {
        type:VALIDATE_FORM
    }
}

export const resetModalForm = () => {
    return {
        type: RESET_MODAL_FORM
    }
}