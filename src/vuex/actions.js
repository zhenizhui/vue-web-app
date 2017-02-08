export const setCurrentSeller = ({ dispatch }, seller) => {
  dispatch('SET_CURRENT_SELLER', seller);
};

export const getCurrentSeller = ({ dispatch }) => {
  dispatch('GET_CURRENT_SELLER');
};



