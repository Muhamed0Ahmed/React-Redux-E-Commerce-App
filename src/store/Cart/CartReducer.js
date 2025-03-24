import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  EMPTY_CART,
} from "./CartTypes";

const initalState = {
  items: {}, // Using an object for O(1) lookups
  itemsIds: [], // Array of item IDs for order preservation
  totalPrice: 0,
};
// Helper functon for price conversion
const dollersToCents = (dollars) => Math.round(dollars * 100);
const centsToDollars = (cents) => (cents / 100).toFixed(2);

const CartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id } = action.payload;
      //check if item already exists
      if (state.items[id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [id]: {
              ...state.items[id],
              quantity: state.items[id].quantity + 1,
            },
          },
          totalPrice: state.totalPrice + dollersToCents(action.payload.price),
        };
        // alert("this item is on cart");
      }
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...action.payload,
            quantity: 1,
          },
        },
        itemsIds: [...state.itemsIds, id],
        totalPrice: state.totalPrice + dollersToCents(action.payload.price),
      };
    }
    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      const itemToRemove = state.items[id];

      return {
        ...state,
        items: Object.fromEntries(
          Object.keys(state.items).filter(([key]) => key !== id)
        ),
        itemsIds: state.itemsIds.filter((key) => key !== id),
        totalPrice:
          state.totalPrice -
          dollersToCents(itemToRemove.price * itemToRemove.quantity),
      };
    }

    case ADD_QUANTITY: {
      const { id } = action.payload;
      const item = state.items[id];

      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...item,
            quantity: item.quantity + 1,
          },
        },
        totalPrice: state.totalPrice + dollersToCents(item.price),
      };
    }

    case SUB_QUANTITY: {
      const id = action.payload;
      const item = state.items[id];
      //Remove item if quantity raches 0
      if (item.quantity === 1) {
        Object.fromEntries(
          Object.entries(state.items).filter(
            (item) => item[0] !== id.toString()
          )
        );

        return {
          ...state,
          items: Object.fromEntries(
            Object.entries(state.items).filter(([key]) => key !== id.toString())
          ),
          itemsIds: state.itemsIds.filter((itemId) => itemId !== id),
          totalPrice: state.totalPrice - dollersToCents(item.price),
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...item,
            quantity: item.quantity - 1,
          },
        },
        totalPrice: state.totalPrice - dollersToCents(item.price),
      };
    }

    case EMPTY_CART:
      return initalState;

    default:
      return state;
  }
};

export default CartReducer;
