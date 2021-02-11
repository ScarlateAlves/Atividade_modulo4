//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res.meals);
    let id = res.meals[0].idMeal;
    let nome = res.meals[0].strMeal;
    let area = res.meals[0].strArea;
    let origem = res.meals[0].strCategory;
    let ingredientes = [
      res.meals[0].strIngredient1,
      res.meals[0].strIngredient2,
      res.meals[0].strIngredient3,
      res.meals[0].strIngredient4,
      res.meals[0].strIngredient5,
      res.meals[0].strIngredient6,
      res.meals[0].strIngredient7,
      res.meals[0].strIngredient8,
      res.meals[0].strIngredient9,
    ];
    let instrucao = res.meals[0].strInstructions;
    console.log(
      ` ID: ${id} \n NOME: ${nome} \n AREA: ${area} \n ORIGEM: ${origem} \n INGREDIENTES: ${ingredientes}  \n INSTRUÇÃO ${instrucao}`
    );
  });
