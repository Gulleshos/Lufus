import {
    ADD_TO_CART,
    UPDATE_COUNT_PRODUCT,
    REMOVE_FROM_CART,
    GET_CATALOG_DATA_BEGGIN,
    GET_CATALOG_DATA_SUCCESS,
    SORT_CATALOG,
    
    GET_CART_BEGGIN,
    GET_CART_SUCCESS,

    UPDATE_TOTAL,

    SHOW_CHECKOUT_ALERT,
    CLOSE_CHECKOUT_ALERT,

    CLEAN_CART,
    UPDATE_CART,
} from './actions';

const reducer = (state, action) => {

    if (action.type === UPDATE_CART) {
        return {
            ...state,
            cart: action.payload,
        }
    }

    if (action.type === ADD_TO_CART) {
        return {
            ...state,
            cart: [action.payload, ...state.cart],
        }
    }
    if (action.type === UPDATE_COUNT_PRODUCT) {
        return {
            ...state,
            cart: action.payload
        }
    }
    
    if (action.type === REMOVE_FROM_CART) {
        return {
            ...state,
            cart: action.payload
        }
    }

    if (action.type === GET_CATALOG_DATA_BEGGIN) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === UPDATE_TOTAL) {
        return {
            ...state,
            totalPrice: action.payload
        }
    }
    if (action.type === GET_CATALOG_DATA_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            products: action.payload.data,
            categoryTitle: action.payload.title
        }
    }

    if (action.type === SORT_CATALOG) {
        return {
            ...state,
            products: action.payload
        }
    }

    if (action.type === GET_CART_BEGGIN) {
        return {
            ...state,
            isLoading: true,
        }
    }
    if (action.type === GET_CART_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            cart: action.payload
        }
    }
    if (action.type === SHOW_CHECKOUT_ALERT) {
        return {
            ...state,
            showCheckoutAlert: true,
        }
    }
    if (action.type === CLOSE_CHECKOUT_ALERT) {
        return {
            ...state,
            showCheckoutAlert: false,
        }
    }
    if (action.type === CLEAN_CART) {
        return {
            ...state,
            cart: [],
        }
    }
    
    throw new Error(`no such action: ${action.type}`);
};

export default reducer;


