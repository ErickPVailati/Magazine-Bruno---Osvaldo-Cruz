import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { produtos } from "../../data/produtos";
import styles from "./Catalogo.module.css";

function CatalogoProdutos() {
    const [busca, setBusca] = useState("");

    const filtrados = produtos.filter((p) =>
        p.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <section className={styles.container}>
            <h2>Produtos</h2>
            <input
                className={styles.searchInput}
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquisar..."
            />

            <div className={styles.grid}>
                {filtrados.map((p) => (
                    <Link
                        key={p.id}
                        to={`/produto/${p.id}`}
                        className={styles.link}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <Card
                            title={p.nome}
                            desc={p.desc}
                            price={p.preco}
                            stock={p.em_estoque}
                            img={p.img}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}


export default CatalogoProdutos;