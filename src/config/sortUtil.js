function matchWishListItems(baskets, wishList) {
  let matchedItemsList = baskets.filter((basket) => {
    let flag,
      basketItems = basket.items;

    basketItems.forEach((basketItem) => {
      wishListItems.forEach((wishListItem) => {
        flag = false;

        if (basketItem === wishListItem.item) {
          flag = true;
        }
        return flag;
      });
    });

    if (flag) {
      return true;
    }
  });
}

export { matchWishListItems };
