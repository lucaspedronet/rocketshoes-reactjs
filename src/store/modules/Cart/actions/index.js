export function addToCartResquest(id) {
  return {
    type: '@Cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@Cart/ADD_SUCCESS',
    product,
  };
}

export function removeToCart(id) {
  return {
    type: '@Cart/REMOVE_TO_ITEM',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@Cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
