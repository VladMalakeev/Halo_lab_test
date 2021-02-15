import { isCharacter, isNumber, isPhoneNumber } from "../../helpers/dataValidation";
import { 
    BUY_CHEAPEST,
    CHANGE_CARDS_LOADIND, 
    CLOSE_CARD_MODAL, 
    ON_CHANGE_NAME_FIELD, 
    ON_CHANGE_NUMBER_FIELD, 
    OPEN_CARD_MODAL, 
    RESET_MODAL_FORM, 
    SET_CARDS_LIST, 
    VALIDATE_FORM, 
    VALIDATE_NAME_FIELD,
    VALIDATE_NUMBER_FIELD
} from "./cards.actions";

const carsdState = {
   cards:[],
   loading:true
}

const cardsModalsState = {
    isOpen:false,
    currentCard:null,
    formData:{
        name:{
            value:'',
            error:null
        },
        number:{
            value:'',
            error:null
        }
    },
    formValid:false
}

export const cardsReducer = (state = carsdState, action) => {
    switch(action.type){
        case SET_CARDS_LIST:
            return {...state, cards:action.cards};
        case CHANGE_CARDS_LOADIND:
            return {...state, loading:action.state}    
        default: return state;
    }
}

export const cardsModalReducer = (state = cardsModalsState, action) => {


    const validateFormNumber = (number) => {
        if(!number.value) number.error = "This field in required!";
        else if(!isNumber(number.value)) number.error = "Only numbers allowed!";
        else if(!isPhoneNumber(number.value)) number.error = "Should contain 12 characters!";
        else number.error = null;
        
        return number;
    }

    const validateFormName = (name) => {
        if(!name.value) name.error = "This field in required!";
        else if(!isCharacter(name.value)) name.error = "Only letters allowed!";
        else name.error = null;

        return name;
    }

    const checkForm = (form) => {
        let valid = true;
        for(let field in form){
            if(form[field].error) valid = false;
        }

        return valid;
    }

    switch(action.type){
        case OPEN_CARD_MODAL:
            return {
                ...state,
                currentCard:action.cardData,
                isOpen:true
            };

        case CLOSE_CARD_MODAL:
            return {
                ...state, 
                currentCard:null,
                isOpen:false
            };  

        case BUY_CHEAPEST:
            let cheapestCard = action.cards.reduce((card, result) => {
              return card.price < result.price ? card : result
            }, action.cards[0]);
            return {...state, isOpen:true, currentCard:cheapestCard};

        case ON_CHANGE_NAME_FIELD:
            state.formData.name.value = action.value;
          
            return {...state};

        case ON_CHANGE_NUMBER_FIELD:
            state.formData.number.value = action.value;

            return {...state};
        case VALIDATE_NAME_FIELD:
            state.formData.name = validateFormName(state.formData.name);
            state.formValid = checkForm(state.formData);
            return {...state};
        case VALIDATE_NUMBER_FIELD:
            state.formData.number = validateFormNumber(state.formData.number);
            state.formValid = checkForm(state.formData);
            return {...state};
        case VALIDATE_FORM:
            state.formData.name = validateFormName(state.formData.name);
            state.formData.number = validateFormNumber(state.formData.number);
            state.formValid = checkForm(state.formData);
            return {...state};
        case RESET_MODAL_FORM:
            for(let field in state.formData){
                state.formData[field].value = '';
                state.formData[field].error = null;
            }
              return {...state};
        default: return state;
    }
}