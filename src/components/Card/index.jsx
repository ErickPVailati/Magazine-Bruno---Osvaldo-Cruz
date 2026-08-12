import { useState } from 'react';
import style from './Card.module.css';

// Props são propriedades que passamos para alimentar um componente
function Card({ title, desc, price, stock, img }) {
    const [userRating, setUserRating] = useState(0);

    return (
        <div className={style.card}>
            <img className={style.img} src={img} alt={title} />
            <h4 className={style.title}>{title}</h4>
            <p className={style.description}>{desc}</p>
            <p className={style.price}>{stock ? `R$ ${price.toFixed(2).replace('.', ',')}` : 'Indisponível'}</p>
            <div className={style.rating}>
                <div className={style.stars} aria-label="Avaliação do produto">
                    {Array.from({ length: 5 }, (_, index) => {
                        const value = index + 1;

                        return (
                            <button
                                key={value}
                                type="button"
                                className={value <= userRating ? style.starFilled : style.starEmpty}
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
                <span className={style.reviews}>{userRating > 0 ? `${userRating.toFixed(1)} / 5` : 'Sem avaliação'}</span>
            </div>
        </div>
    );
}

export default Card;

