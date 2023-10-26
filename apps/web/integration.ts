import { commerce } from "@commerce/commercetools";

// This initialisation is a dummy example to show how configuration of 
// vendor specific settings could work. However, it could also likely be managed
// with environment variables directly in the commercetools adapter code, and that
// would be preferable.
//
// This example also indicates how we could add support for features only supported by one vendor
// (though that should be a rare exception).
commerce.init({
  defaultQuantity: 2
})

export { commerce };

// OR

// export { commerce } from "@commerce/big-commerce"