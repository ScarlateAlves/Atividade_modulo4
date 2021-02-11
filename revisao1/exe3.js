//3. Faça fetch dos dados através da API
// (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood)
//e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    let a = res.meals;

    for (let i in res.meals) {
      if (i < 10) {
        console.log(res.meals[i].strMeal);
      }
    }
  });
