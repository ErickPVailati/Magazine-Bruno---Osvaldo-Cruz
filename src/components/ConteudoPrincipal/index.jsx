import './ConteudoPrincipal.css';
import Card from '../Card';

const listaprodutos = [
    {
        id: 1,
        nome: 'Camiseta Básica',
        desc: 'Camiseta confortável em algodão, ideal para uso diário.',
        preco: 59.90,
        img: 'https://31270.cdn.simplo7.net/static/31270/sku/SGRD_299_001_camisasublimaAAobrancap01.jpg',
    },
    {
        id: 2,
        nome: 'Tênis Esportivo',
        desc: 'Tênis leve e resistente para corrida e academia.',
        preco: 249.90,
        img: 'https://m.media-amazon.com/images/I/41reQlJYZKL._AC_SY900_.jpg',
    },
    {
        id: 3,
        nome: 'Relógio Digital',
        desc: 'Relógio com display iluminado e múltiplas funções.',
        preco: 199.90,
        img: 'https://img.irroba.com.br/fit-in/800x800/filters:fill(fff):quality(80)/lojalaro/catalog/produtos/combos/sapatenis-street-em-couro-preto-gratis-relogio-digital-preto/relogio-smartband-foto1.jpg',
    },
    {
        id: 4,
        nome: 'Mochila Casual',
        desc: 'Mochila espaçosa com vários compartimentos.',
        preco: 129.90,
        img: 'https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_shock_matelasse_cinza_7011_1_2e01bb2707da32f4832791271694fa24.jpg',
    },
];

function ConteudoPrincipal() {
    return (
            <>
            <div className="container">
            
                {listaprodutos.map((produto) => (
                    <Card
                        key={produto.id}
                        title={produto.nome}
                        desc={produto.desc}
                        price={produto.preco}
                        img={produto.img}
                    />
                ))}
            </div>
        </>
    );
}

export default ConteudoPrincipal;
