export const initialState = {
    basket: [],
    user: null,
    trigger:false,
    items: []
};
export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price.promo + amount, 0);


export const getBasketDiscount = (basket) => 
    basket?.reduce((amount,item) => (item.price.main - item.price.promo) + amount, 0);
    
    
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket : [...state.basket,action.item],
            };
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket: [],
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0){
                newBasket.splice(index, 1);
            }else {
                console.warn('no item in basket');
            }
            return{
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TRIGGER':
            console.log(action.trigger + "reducer")
            return {
                ...state,
                    trigger: action.trigger
            }
        case 'SET_PRODUCTDATA':
            return{
                ...state,
                items:action.items
            }
        case 'REMOVE_PRODUCTDATA':
            let newITem = [...state.basket];
            newITem.splice(1, 1);
            return{
                ...state,
                items: newITem
            }
        default:
            return state;
    }
};

export default reducer;