function sortByWishList(baskets, wishList) {
  let idx = 0,
    matchedItems = [],
    sortedBaskets = [...baskets];

  if (wishList.items) {
    baskets.forEach((basket) => {
      let flag = false,
        basketItems = basket.items;

      basketItems.forEach((basketItem) => {
        let wishListItems = wishList.items;

        wishListItems.forEach((wishListItem) => {
          if (basketItem.item === wishListItem.item) {
            flag = true;
          }
          return flag;
        });
      });

      if (flag) {
        matchedItems.push(basket);
        sortedBaskets.splice(idx, 1);
        idx--;
      }
      idx++;
    });
  }

  let sortedList = mergeLists(matchedItems, sortedBaskets);
  console.log(sortedList);
  return sortedList;
}

function mergeLists(matchedItems, sortedBaskets) {
  let mergedList = [...sortedBaskets];

  for (let i = matchedItems.length - 1; i >= 0; i--) {
    mergedList.unshift(matchedItems[i]);
  }

  return mergedList;
}

export { sortByWishList, mergeLists };
