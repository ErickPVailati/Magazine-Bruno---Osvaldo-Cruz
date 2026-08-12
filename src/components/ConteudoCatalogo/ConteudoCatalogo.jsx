import style from './ConteudoCatalogo.module.css';
import Card from '../Card';
import { Link } from 'react-router-dom';
import { produtos } from '../../data/produtos';

function ConteudoCatalogo() {
    return (
        <div className={style.conteudoCatalogo}>
            <h2>Catálogo Completo</h2>
            <div className={style.containerCardsCatalogo}>
                {produtos.map((produto) => (
                    <div key={produto.id} className={style.cardWrapperCatalogo}>
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

export default ConteudoCatalogo;
