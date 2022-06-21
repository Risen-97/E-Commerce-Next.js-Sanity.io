export const initialState = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "INIT_STORED": {
      return action.payload;
    }
    case "TOGGLE": {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }

    case "CLOSE": {
      return {
        ...state,
        showCart: false,
      };
    }

    case "ADD_ITEM": {
      const findProduct = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (findProduct) {
        const updateCart = state.cartItems.filter(
          (item) => item._id !== findProduct._id
        );
        return {
          ...state,
          cartItems: [
            ...updateCart,
            { ...findProduct, qty: findProduct.qty + 1 },
          ],
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload }],
        totalQuantity: state.totalQuantity + action.payload.qty,
        totalPrice:
          state.totalPrice + action.payload.price * action.payload.qty,
      };
    }

    case "REMOVE_ITEM": {
      const updateCart = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      return {
        ...state,
        cartItems: updateCart,
        totalPrice:
          state.totalPrice - action.payload.qty * action.payload.price,
        totalQuantity: state.totalQuantity - action.payload.qty,
      };
    }
  }
};
