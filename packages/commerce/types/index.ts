// Trivial example
export interface Cart {
  items: {
    sku: string;
    quantity: number;
  }[];
}

export interface GetCart {
  (userId: string): Promise<Cart>;
}

export interface CommerceAdapter extends Record<string, unknown> {
  getCart: GetCart;
}
