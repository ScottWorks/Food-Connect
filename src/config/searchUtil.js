function searchBaskets(baskets, keyword) {
  let idx = 0,
    matchedItems = [],
    sortedBaskets = [...baskets];

  if (keyword && baskets.items.length > 0) {
    matchedItems = baskets.map((basket) => {
      let flag = false,
        basketItems = basket.items;

      basketItems.forEach((basketItem) => {
        if (basketItem.item.toLowerCase() === keyword.toLowerCase()) {
          flag = true;
        }
        return flag;
      });

      if (flag) {
        // matchedItems.push(basket);
        // sortedBaskets.splice(idx, 1);
        // idx--;
        return basket;
      }
      // idx++;
    });
  }

  return matchedItems;
}

export { searchBaskets };
