import style from './ConteudoHome.module.css';
import { Link } from 'react-router-dom';
import Card from '../Card';
import { produtos } from '../../data/produtos';

function ConteudoHome() {
    const listaprodutos = produtos.slice(0, 6); 
    return (
        <div className={style.conteudoHome}>
            <h2>Destaques</h2>
            <div className={style.containerCards}>
                {listaprodutos.map((produto) => (
                    <div key={produto.id} className={style.cardWrapper}>
                        <Link to={`/produto/${produto.id}`}>
                            <Card
                                title={produto.nome}
                                desc={produto.desc}
                                price={produto.preco}
                                stock={produto.em_estoque}
                                img={produto.img}
                                rating={produto.avaliacao}
                                reviews={produto.qtd_avaliacoes}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ConteudoHome;
