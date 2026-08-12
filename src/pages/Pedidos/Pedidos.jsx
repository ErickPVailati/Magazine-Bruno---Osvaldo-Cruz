import { useCart } from "../../context/CartContext";
import styles from "./Pedidos.module.css";

export default function Pedidos() {
    const { pedidos } = useCart();

    if (pedidos.length === 0) return <p>Você não possui pedidos.</p>;

    return (
        <section>
            <h2>Meus pedidos</h2>

            {pedidos.map((pedido) => (
                <div key={pedido.id} className={styles.pedido}>
                    <div className={styles.cabecalho}>
                        <strong>Pedido de {pedido.date}</strong>
                        <span className={styles.total}>
                            Total: R$ {pedido.total.toFixed(2).replace('.', ',')}
                        </span>
                    </div>

                    <ul className={styles.lista}>
                        {pedido.items.map((item) => (
                            <li key={item.id}>
                                {item.title} - {item.quantity} x R${(item.price * item.quantity).toFixed(2).replace('.', ',')}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}