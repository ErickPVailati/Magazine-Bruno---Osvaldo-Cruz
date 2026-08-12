import { useState } from 'react';
import { useParams } from "react-router-dom";
import { produtos } from "../../../data/produtos";
import { useCart } from '../../../context/CartContext';
import styles from './Produto.module.css';

function Produto() {
    const { id } = useParams();
    const produto = produtos.find((p) => p.id === Number(id));
    const { addToCart } = useCart();
    const [userRating, setUserRating] = useState(0);
    
    if (!produto) {
        return <div>Produto não encontrado</div>;
    }
    return (
    <section className={styles.container}>
        <img className={styles.img} src={produto.img} alt={produto.nome} />
        <div className={styles.details}>
            <h2 className={styles.title}>{produto.nome}</h2>
            <p className={styles.desc}>{produto.desc}</p>
            <p className={styles.price}>R$ {produto.preco.toFixed(2)}</p>

            <div className={styles.rating}>
                <div className={styles.stars} aria-label="Avaliação do produto">
                    {Array.from({ length: 5 }, (_, index) => {
                        const value = index + 1;

                        return (
                            <button
                                key={value}
                                type="button"
                                className={value <= userRating ? styles.starFilled : styles.starEmpty}
                                onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    setUserRating(value);
                                }}
                                aria-label={`Avaliar com ${value} estrela${value > 1 ? 's' : ''}`}
                            >
                                ★
                            </button>
                        );
                    })}
                </div>
                <span className={styles.reviews}>{userRating > 0 ? `${userRating.toFixed(1)} / 5` : 'Sem avaliação'}</span>
            </div>

            <div className={styles.controls}>
                {produto.em_estoque ? (
                    <>
                        <span className={styles.stock}>Em estoque</span>
                        <button className={styles.button} onClick={() => addToCart({ id: produto.id, title: produto.nome, price: produto.preco, img: produto.img })}>
                            Adicionar ao carrinho
                        </button>
                    </>
                ) : (
                    <>
                        <span className={styles.stock}>Fora de estoque</span>
                        <button className={styles.button} disabled>Indisponível</button>
                    </>
                )}
            </div>
        </div>
    </section>
    )
}

export default Produto;