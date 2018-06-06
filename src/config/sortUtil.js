function sortByWishList(baskets, wishList) {
  baskets = sortRecent(baskets);

  let idx = 0,
    matchedItems = [],
    sortedBaskets = [...baskets];

  if (wishList && wishList.items) {
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

  return mergeLists(matchedItems, sortedBaskets);
}

function sortRecent(baskets) {
  let sortedBaskets = [...baskets];

  for (let i = 0; i < sortedBaskets.length - 1; i++) {
    for (let j = 0; j < sortedBaskets.length - 1; j++) {
      if (sortedBaskets[j].pick_up_time < sortedBaskets[j + 1].pick_up_time) {
        let temp = sortedBaskets[j];
        sortedBaskets[j] = sortedBaskets[j + 1];
        sortedBaskets[j + 1] = temp;
      }
    }
  }
  return sortedBaskets;
}

function sortOldest(baskets) {
  let sortedBaskets = [...baskets];

  for (let i = 0; i < sortedBaskets.length - 1; i++) {
    for (let j = 0; j < sortedBaskets.length - 1; j++) {
      if (sortedBaskets[j].pick_up_time > sortedBaskets[j + 1].pick_up_time) {
        let temp = sortedBaskets[j];
        sortedBaskets[j] = sortedBaskets[j + 1];
        sortedBaskets[j + 1] = temp;
      }
    }
  }
  return sortedBaskets;
}

function mergeLists(matchedItems, sortedBaskets) {
  let mergedList = [...sortedBaskets];

  for (let i = matchedItems.length - 1; i >= 0; i--) {
    mergedList.unshift(matchedItems[i]);
  }

  return mergedList;
}

export { sortByWishList, sortRecent, sortOldest };
