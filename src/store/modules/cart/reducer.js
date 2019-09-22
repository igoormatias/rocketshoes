export default function cart(state = [], action) {
  console.log('teste');
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return [];
  }
}
