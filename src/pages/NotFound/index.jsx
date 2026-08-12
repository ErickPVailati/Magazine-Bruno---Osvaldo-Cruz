import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1>404</h1>
      <p>Desculpe, a página que você procura não foi encontrada.</p>
    </main>
  );
}
