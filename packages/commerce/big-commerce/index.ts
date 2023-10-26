import { Cart, CommerceAdapter, GetCart } from "@commerce/types";

const getCart: GetCart = (_userId: string) => {
  const exampleCart: Cart = {
    items: [
      {
        quantity: 1,
        sku: "BigCommerce",
      },
    ],
  };
  return Promise.resolve(exampleCart);
};

export const commerce = {
  getCart,
} satisfies CommerceAdapter;
