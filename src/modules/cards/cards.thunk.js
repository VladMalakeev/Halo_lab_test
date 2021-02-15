import { changeCardsLoading, setCardsListAction } from "./cards.actions"
import { CardsApi } from "./cards.api"

export const fetchCardsList = () => {
    return (dispatch) => {
        dispatch(changeCardsLoading(true));

        CardsApi.fetchProductList()
            .then(response => {
                dispatch(setCardsListAction(response.data));
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                dispatch(changeCardsLoading(false));
            })
    }
}