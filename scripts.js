const list = document.querySelector("ul");
const btnShowAll = document.querySelector(".show-all");
const btnMapAll = document.querySelector(".map-all");
const btnSumAll = document.querySelector(".sum-all");
const btnFilterAll = document.querySelector(".filter-all");

function formatCurrency(value) { //Funcao para converter para real, inserir como parametro o valor para conversao
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });


  return newValue;
}

function showAll(productsArray) {
  let myLi = "";
  productsArray.forEach((product) => {
    myLi += `<li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p> 
        </li>`;
  });

  list.innerHTML = myLi;
}

//Fazer a funcao de mapear
function mapAll() {
  const newPrices = menuOptions.map((product) => ({
    ...product, //Spread Operator, adiciona todos os campos do MenuOptions, e depois lê as alterações abaixo.
    price: product.price * 0.9, //aplica 10% de desconto
    //Nesse caso estamos alterando o campo do price
  }));
  //Spread Operator
  showAll(newPrices);
  console.log(newPrices);
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
        <li>
            <p>O valor total dos itens é ${formatCurrency(totalValue)}</p>
        </li>`;

  console.log(totalValue);
}

function filterAllItems() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan); //Como o valor e booleano nao precisa colocar === true

  showAll(filterJustVegan);
}

btnShowAll.addEventListener("click", () => showAll(menuOptions)); //CRIAR FUNCAO ANONIMA, USADO CASO QUEIRA INCLUIR UM PARAMETRO DENTRO
btnMapAll.addEventListener("click", mapAll);
btnSumAll.addEventListener("click", sumAllItems);
btnFilterAll.addEventListener("click", filterAllItems);
