import { createSelector } from 'reselect';

const selectProductsState = (state) => state.products || { items: [] };

export const selectToys = createSelector(
  [selectProductsState],
  (products) => {
    console.log('Selector called');  // Debug to see how often this runs
    return products.items;  // Return the array as-is without creating a new reference
  }
);
