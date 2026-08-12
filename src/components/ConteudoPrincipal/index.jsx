import './ConteudoPrincipal.css';
import { Link } from 'react-router-dom';
import Card from '../Card';
import {produtos} from '../../data/produtos';

function ConteudoPrincipal() {
    const listaprodutos = produtos;
    return <>
            <div className="conteudo-principal">
                {listaprodutos.map((produto) => (
                    <Link key={produto.id} to={`/produto/${produto.id}`}>
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
                ))}
            </div>
        </>
}

export default ConteudoPrincipal;


