import { cardapio } from "./cardapio.js";

class CaixaDaLanchonete {
    cardapio;

    constructor() {
        this.cardapio = cardapio;
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0;
        if (itens.length === 0) return 'Não há itens no carrinho de compra!';

        for(const item of itens) {
            const [codigo, quantidade] = item.split(',');
            if (quantidade === '0') return 'Quantidade inválida!';
            const produtoInCarpadio = cardapio.find(produto => produto.codigo === codigo);
            if (!produtoInCarpadio) return 'Item inválido!';

            if (codigo === 'chantily') {
                const itemPrincipal = itens.some(item => item.includes('cafe'));
                if(!itemPrincipal) return 'Item extra não pode ser pedido sem o principal';
            }
 
            if (codigo === 'queijo') {
                const itemPrincipal = itens.some(item => item.includes('sanduiche'));
                if(!itemPrincipal) return 'Item extra não pode ser pedido sem o principal';
            }

            total += produtoInCarpadio.valor * Number(quantidade);
        }

        switch (metodoDePagamento){
            case 'dinheiro':
                total -= total * (5 / 100);
                break;
            case 'credito':
                total += total * (3 / 100);
                break;
            case 'debito':
                total;
                break;
            default:
                return 'Forma de pagamento inválida!';
        };  

        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };
