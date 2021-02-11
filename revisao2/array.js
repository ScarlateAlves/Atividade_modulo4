//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
  const [clientX, clientY] = event;
  console.log(clientX, clientY);
}

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: "Jane", last: "Doe" };
const { first } = obj;
console.log(first);

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
company = {
  name: "ACME Corp",
  address: "Nowhere st",
  products: {
    shirts: {
      colors: ["red", "green", "blue"],
    },
    socks: {
      colors: ["cyan", "magenta", "yellow"],
    },
  },
};

const {
  name,
  products: {
    shirts: { colors },
  },
} = company;

console.log(name, colors);

//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothe = {
  pants: { colors: ["black", "blue"] },
  shirts: { colors: ["white", "red"] },
  socks: { colors: ["beige", "gray"] },
};

//Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },

  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

let cacho = data.filter((a) => {
  return a.type == "dog";
});

console.log(cacho);
//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

let somaIdadeCachorro = cacho
  .map((cachorro) => {
    return cachorro.age;
  })
  .reduce((aux, cachorro) => {
    return aux + cachorro;
  });
console.log(somaIdadeCachorro);

//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var gettShirtsColorsAmount = (company) => {
  const {
    products: {
      shirts: { colors },
    },
  } = company;
  return colors;
};
console.log(gettShirtsColorsAmount(company));
//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
  pants: { colors: ["black", "blue"] },
  shirts: { colors: ["white", "red"] },
  socks: { colors: ["beige", "gray"] },
};

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

let nomeCompleto = (persons) => {
  const [a] = persons;
  return a;
};

console.log(nomeCompleto(persons));
