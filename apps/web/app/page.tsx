import { commerce } from "../integration";
import styles from "./page.module.css";

export default async function Page(): Promise<JSX.Element> {
  const cart = await commerce.getCart("someUserId");

  return (
    <main className={styles.main}>
        <h1>Cart</h1>
        {cart.items.map(({ sku, quantity }) => (
          <p key={sku}>
            {sku}: {quantity}
          </p>
        ))}
    </main>
  );
}
