import { Cart, CommerceAdapter, GetCart } from "@commerce/types";

// Class based example
export class BigCommerce implements CommerceAdapter  {

  getCart = (_userId: string) => {
    const exampleCart: Cart = {
      items: [
        {
          quantity: 1,
          sku: "BigCommerce",
        },
      ],
    };
    return Promise.resolve(exampleCart);
  }
}

// Singleton
export const commerce = new BigCommerce()