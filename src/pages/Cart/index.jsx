import { useState } from "react";
import styles from "./Cart.module.css"
import { useCart } from '../../context/CartContext';

function Cart() {
    const { itens, pedidos, adicionaraoCarrinho, removerdoCarrinho, LimparCarrinho, ItensTotais, precototal, finalizarPedido } = useCart();
    const totalPrice = precototal();
    const [feedback, setFeedback] = useState(null);

    const handleFinalizar = () => {
        if (itens.length === 0) {
            setFeedback({ type: 'error', message: 'Seu carrinho está vazio.' });
            return;
        }

        const order = finalizarPedido();
        if (order) {
            setFeedback({
                type: 'success',
                message: `Compra realizada em ${order.date}. Pedido #${order.id}. Total: R$ ${order.total.toFixed(2).replace('.', ',')}`
            });
        }
    };

    const handleLimparCarrinho = () => {
        LimparCarrinho();
        setFeedback({ type: 'info', message: 'Carrinho limpo.' });
    };

    return (
        <section className={styles.cart}>
            <h2>Meu Carrinho</h2>
            {itens.length === 0 ? (
                <>
                    <p>Seu carrinho está vazio.</p>
                    {feedback && (
                        <div className={`${styles.feedback} ${styles[feedback.type]}`}>
                            {feedback.message}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <ul>
                        {itens.map((item) => (
                            <li key={item.id} style={{marginBottom:12, display:'flex', alignItems:'center', gap:12}}>
                                {item.img && <img src={item.img} alt={item.title} style={{width:60, height:60, objectFit:'cover'}} />}
                                <div style={{flex:1}}>
                                    <strong>{item.title}</strong>
                                    <div>R$ {Number(item.price).toFixed(2).replace('.', ',')}</div>
                                </div>
                                <div style={{display:'flex', alignItems:'center', gap:8}}>
                                    <button onClick={() => removerdoCarrinho(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => adicionaraoCarrinho(item)}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div style={{marginTop:12}}>
                        <strong>Total itens: {ItensTotais()}</strong>
                    </div>
                    <div>
                        <strong>Total: R$ {totalPrice.toFixed(2).replace('.', ',')}</strong>
                    </div>
                    <div style={{marginTop: 12}}>
                        <button onClick={handleLimparCarrinho}>Limpar carrinho</button>
                        <button onClick={handleFinalizar} style={{marginLeft:8}}>Finalizar pedido</button>
                    </div>

                    {feedback && (
                        <div className={`${styles.feedback} ${styles[feedback.type]}`}>
                            {feedback.message}
                        </div>
                    )}

                    {pedidos.length > 0 && (
                        <div style={{marginTop: 24}}>
                            <h3>Compras realizadas</h3>
                            <ul>
                                {pedidos.map((pedido) => (
                                    <li key={pedido.id} style={{marginBottom: 10}}>
                                        <strong>Compra realizada {pedido.date}</strong>
                                        <div>Pedido #{pedido.id}</div>
                                        <div>Total: R$ {pedido.total.toFixed(2).replace('.', ',')}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </section>
    )
}

export default Cart