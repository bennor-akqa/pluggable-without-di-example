import { Cart, CommerceAdapter, GetCart } from "@commerce/types";

interface CommercetoolsConfig {
  defaultQuantity: number;
}

let config: CommercetoolsConfig | undefined

const getCart: GetCart = (_userId: string) => {
  const exampleCart: Cart = {
    items: [
      {
        quantity: config?.defaultQuantity ?? 1,
        sku: "commercetools",
      },
    ],
  };
  return Promise.resolve(exampleCart);
};

export const commerce = {
  getCart,
  init(newConfig: CommercetoolsConfig) {
    config = newConfig
  }
} satisfies CommerceAdapter;
