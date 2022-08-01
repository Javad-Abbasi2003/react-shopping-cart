const shorten = (title) => {
  const splited = title.split(" ");
  const shorted = `${splited[0]} ${splited[1]} ${splited[2]}`;
  return shorted;
};

const isInCart = (state, id) => {
  return !!state.selectedProducts.find(item => item.id === id);
}

const quantityCount = (state, id) => {
  const index = state.selectedProducts.findIndex(item => item.id === id);

  if (index === -1) {
    return false;
  } else {
    return state.selectedProducts[index].quantity
  }
}

export { shorten, isInCart, quantityCount };
