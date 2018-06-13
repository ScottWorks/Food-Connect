module.exports = {
  searchBaskets: function(baskets, keyword) {
    let idx = 0,
      matchedItems = [],
      sortedBaskets = [...baskets];

    if (keyword && baskets.length > 0) {
      matchedItems = baskets.filter((basket) => {
        let flag = false,
          basketItems = basket.items;

        basketItems.forEach((basketItem) => {
          if (basketItem.item.toLowerCase() === keyword.toLowerCase()) {
            flag = true;
          }
          return flag;
        });

        if (flag) {
          return true;
        }
      });
    }
    return matchedItems;
  }
};
