import { commerce } from "@commerce/commercetools";

commerce.init({
  defaultQuantity: 2
})

export { commerce };

// OR

// export { commerce } from "@commerce/big-commerce"