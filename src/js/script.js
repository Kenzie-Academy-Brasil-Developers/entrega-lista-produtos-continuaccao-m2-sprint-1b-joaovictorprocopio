const ul = document.getElementById("cards");

const ulCart = document.getElementById("cart")

const buttonShowAll = document.getElementById("mostrarTodos");

const buttonShowHortifruti = document.getElementById("filtrarHortifruti");

const buttonBuscaPorNome = document.getElementById("botaoBuscaPorNome");

const precoTotal = document.getElementById("precoTotal");

let somaPreco = 0;

buttonShowAll.addEventListener('click', event => {
    montarListaProdutos(produtos);
});

buttonShowHortifruti.addEventListener('click', event => {
    filtrarPorHortifruti();
});

buttonBuscaPorNome.addEventListener('click', event => {
    const campoBuscaPorNome = document.getElementById("campoBuscaPorNome");
    const name = campoBuscaPorNome.value;
    filtrarPorNome(name);
});

function montarListaProdutos(listaProdutos) {
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const button = document.createElement('button');
        const ol = document.createElement('ol');

        produto.componentes.forEach((componente) => {
            const liOl = document.createElement('li');
            liOl.innerText = componente
            ol.appendChild(liOl);
        })
        

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        button.innerText = "Adicionar ao Carrinho"

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol);
        li.appendChild(button);

        ul.appendChild(li);

        button.addEventListener('click', event => {
            montarCarrinho(produto);
        })
    });
    
}



function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);
}

function filtrarPorNome(name) {
    let str = name.toLowerCase();
    let array = str.split('');
    array[0] = array[0].toUpperCase();
    str = array.join('');
    const listaProduto = produtos.filter((produto) => {
        if(produto.nome === str){
            return produto.nome;
        }
        else if(produto.secao === str){
            return produto.secao;
        }
        else if(produto.categoria === str){
            return produto.categoria;
        }
    });

    montarListaProdutos(listaProduto);
}

function montarCarrinho(produto){
    const liCart = document.createElement('li');
            const imgCart = document.createElement('img');
            const h3Cart = document.createElement('h3');
            const pCart = document.createElement('p');
            const spanCart = document.createElement('span');

            imgCart.src = produto.img;
            imgCart.alt = produto.nome;
            h3Cart.innerText = produto.nome;
            pCart.innerText = produto.preco;
            spanCart.innerText = produto.secao;

            liCart.appendChild(imgCart);
            liCart.appendChild(h3Cart);
            liCart.appendChild(pCart);
            liCart.appendChild(spanCart);

            ulCart.appendChild(liCart);

            somaPreco += parseInt(produto.preco);
            precoTotal.innerHTML = somaPreco.toFixed(2);
}
