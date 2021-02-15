import { connect } from "react-redux"
import { changeNameField, changeNumberField, closeCardModal, resetModalForm, validateForm, validateNameField, validateNumberField } from "../../cards.actions"
import { CardModalComponent } from "./cardModal.component"

const MapStateToProps = (state) => {
    return {
        card: state.cardsModalReducer.currentCard,
        number:state.cardsModalReducer.formData.number.value,
        name:state.cardsModalReducer.formData.name.value,
        numberError:state.cardsModalReducer.formData.number.error,
        nameError:state.cardsModalReducer.formData.name.error,
        formValid:state.cardsModalReducer.formValid
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeCardModal()),
        onChangeName: (value) => dispatch(changeNameField(value)),
        onChangeNumber: (value) => dispatch(changeNumberField(value)),
        validateNumberField:() => dispatch(validateNumberField()),
        validateNameField:() => dispatch(validateNameField()),
        validateForm: () => dispatch(validateForm()),
        resetModalForm: () => dispatch(resetModalForm())
    }
}

export const CatdModalContainer = connect(MapStateToProps, MapDispatchToProps)(CardModalComponent);
