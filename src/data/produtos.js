const listaProdutos = [

        {id: 1, nome: "Camisa Branca", desc: "Camisa branca básica", preco: 49.90, em_estoque: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55-_37BFfvd_Ry2iBspzL4a7y5Jz2hEHmFQ&s"},
        {id: 2, nome: "Calça Jeans", desc: "Calça jeans confortável", preco: 89.90, em_estoque: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlChzngqJHavjfXpp3LwgshD1ovGRIZDJcOg&s"},
        {id: 3, nome: "Tênis Esportivo", desc: "Tênis para atividades físicas", preco: 199.90, em_estoque: false, img: "https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/28/00/2800271_tenis-ollie-originals-rocky-street-masculino-nobuck-preto-5195280_l1_638475586200671648.webp"},
        {id: 4, nome: "Relógio Digital", desc: "Relógio digital moderno", preco: 149.90, em_estoque: true, img: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/lojalaro/catalog/produtos/combos/sapatenis-street-em-couro-preto-gratis-relogio-digital-preto/relogio-smartband-foto1.jpg"},
        {id: 5, nome: "Mochila Casual", desc: "Mochila para uso diário", preco: 79.90, em_estoque: true, img: "https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_shock_matelasse_cinza_7011_1_2e01bb2707da32f4832791271694fa24.jpg"},
        {id: 6, nome: "Óculos de Sol", desc: "Óculos de sol estiloso", preco: 59.90, em_estoque: false, img: "https://images.tcdn.com.br/img/img_prod/754260/oculos_de_sol_masculino_mormaii_lagos_m0074a0203_polarizado_12951_1_0bba86f1ad77ac5f7c553412fd386eaf.jpg"},
        {id: 7, nome: "Jaqueta de Couro", desc: "Jaqueta de couro genuíno", preco: 299.90, em_estoque: true, img: "https://lojasampaio.com.br/cdn/shop/files/Sb6207ae9a7c74ed395a68bcb7adcbfe6d.webp?v=1698159256"},
        {id: 8, nome: "Cinto de Couro", desc: "Cinto de couro marrom", preco: 45.90, em_estoque: true, img: "https://images.tcdn.com.br/img/img_prod/1189966/cinto_tradicional_em_couro_preto_50173_1_e762af859e2814cd95e4f384891c2cc6.jpg"},
        {id: 9, nome: "Meias Esportivas", desc: "Kit com 3 pares de meias", preco: 29.90, em_estoque: true, img: "https://torp.ind.br/wp-content/uploads/2023/08/9027-11.png"},
        {id: 10, nome: "Chapéu de Aba", desc: "Chapéu de aba larga", preco: 55.90, em_estoque: false, img: "https://images.tcdn.com.br/img/img_prod/966605/chapeu_mundial_americano_la_marrom_401_aba_10_3809_1_5b024ec0f53e19e4f996ec63b65e060d.jpg"},
        {id: 11, nome: "Bolsa Tiracolo", desc: "Bolsa pequena tiracolo", preco: 89.90, em_estoque: true, img: "https://constance.vtexassets.com/arquivos/ids/2153601/Bolsa-Tiracolo-Couro-Preto_2.jpg?v=638830149552830000"},
        {id: 12, nome: "Luvas de Inverno", desc: "Luvas térmicas de lã", preco: 39.90, em_estoque: true, img: "https://marketplace.bancointer.com.br/ecommerce/images/platform/365c38ec83c9bc2da965150e52ca7015.png"},
        {id: 13, nome: "Cachecol Longo", desc: "Cachecol de lã fina", preco: 49.90, em_estoque: false, img: "https://cdn.awsli.com.br/600x700/768/768391/produto/22109219241df17329b.jpg"},
        {id: 14, nome: "Bermuda de Nylon", desc: "Bermuda esportiva de nylon", preco: 69.90, em_estoque: true, img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/fyxaqyib/bermuda-tupode-leisure-work-azul-2.jpg"},
        {id: 15, nome: "Camisa Polo", desc: "Camisa polo clássica", preco: 89.90, em_estoque: true, img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/fyxaqyib/bermuda-tupode-leisure-work-azul-2.jpg"},
        {id: 16, nome: "Suéter de Lã", desc: "Suéter de lã pura", preco: 129.90, em_estoque: true, img: "https://images.tcdn.com.br/img/img_prod/1248833/sueter_cloudy_em_la_de_6_a_9_meses_roxo_lavanda_1527_1_63f69ac5e310382c8e61f4584dfe5bb2.jpg"},
        {id: 17, nome: "Moletom", desc: "Moletom casual confortável", preco: 99.90, em_estoque: false, img: "https://images.tcdn.com.br/img/img_prod/1248833/sueter_cloudy_em_la_de_6_a_9_meses_roxo_lavanda_1527_1_63f69ac5e310382c8e61f4584dfe5bb2.jpg"},
        {id: 18, nome: "Shorts Jeans", desc: "Shorts jeans clássico", preco: 59.90, em_estoque: true, img: "https://cdn.vnda.com.br/bolovo/2023/12/18/10_30_54_367_10_12_6_688_9270001062020dads20shorts20born20to20travel20azul204.jpg?v=1702906269"},
        {id: 19, nome: "Calça de Linho", desc: "Calça leve de linho", preco: 119.90, em_estoque: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoTXUBb7sMwh53CG3bdhCG_7kGESiL9SZcA&s"},
        {id: 20, nome: "Camiseta Gráfica", desc: "Camiseta com estampa", preco: 49.90, em_estoque: true, img: "https://wbl.blob.core.windows.net/cdn/135/1-camiseta-basica-unissex-560x690mm-em-100-algodao-preta-4x0-estampa-dtf-tamanho-g-662804.png"},
        {id: 21, nome: "Jaqueta Impermeável", desc: "Jaqueta impermeável leve", preco: 199.90, em_estoque: false, img: "https://img.lojasrenner.com.br/item/616211471/original/12.jpg"},
        {id: 22, nome: "Sapato Social Preto", desc: "Sapato social para eventos", preco: 179.90, em_estoque: true, img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/jotape/media/uploads/produtos/foto/awkfbpzh/sapato-social-couro-preto-masculino-jota-pe-com-altura-air-vinitti-78205-1.jpg"},
        {id: 23, nome: "Sandália Confortável", desc: "Sandália com palmilha", preco: 79.90, em_estoque: true, img: "https://images.tcdn.com.br/img/img_prod/672462/sandalia_em_couro_colorida_573_2_ae6f5ebf73740bfe8dac6a7f94e01de2.jpg"},
        {id: 24, nome: "Chinelo Borracha", desc: "Chinelo casual de borracha", preco: 29.90, em_estoque: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLw4C-NuBqQPDcV4WrlWkq8_kcEMKhngBtFw&s"},
        {id: 25, nome: "Boné Ajustável", desc: "Boné com fecho ajustável", preco: 199.90, em_estoque: true, img: "https://images.tcdn.com.br/img/img_prod/1316035/bone_new_era_aba_curva_ajustavel_new_york_yankees_preto_2729_1_05da4b8ae96640f6240b0efdcad0378c.jpg"},
        
];

const produtosComAvaliacoes = listaProdutos.map((produto, index) => ({
    ...produto,
    avaliacao: Number((4 + (index % 3) * 0.5).toFixed(1)),
    qtd_avaliacoes: 120 + index * 12,
}));

export const produtos = produtosComAvaliacoes;