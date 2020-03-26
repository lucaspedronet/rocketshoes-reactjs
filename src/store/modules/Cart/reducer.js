import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@Cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        draft.push(action.product);
      });
    case '@Cart/REMOVE_TO_ITEM':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@Cart/ADD_PLUS_ONE_ITEM':
      return produce(state, (draft) => {
        const productExist = draft.findIndex((p) => p.id === action.id);

        if (productExist >= 0) {
          draft[productExist].amount += 1;
        }
      });
    case '@Cart/UPDATE_AMOUNT': {
      if (Number(action.amount) <= 0) {
        return state;
      }
      return produce(state, (draft) => {
        const productExist = draft.findIndex((p) => p.id === action.id);

        if (productExist >= 0) {
          draft[productExist].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
