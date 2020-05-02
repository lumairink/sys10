import * as Types from "./types";
import INITIAL_STATE from "./store";

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.CART_ADD_ITEM:
      return {
        ...state,
        items: [...addItem(state.items, payload.item)],
      };
    case Types.CART_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== payload.id),
      };
    case Types.CART_FINNISH:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

const addItem = (items, newItem) => {
  var index = items.findIndex((item) => item.product.id === newItem.product.id);
  if (index >= 0)
    items[index] = {
      product: items[index].product,
      amount: items[index].amount + newItem.amount,
    };
  else items = [...items, newItem];

  return items;
};
