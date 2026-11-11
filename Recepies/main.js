fetch("https://dummyjson.com/recipes").then((response)=>{
    // console.log(response);
    return response.json()
}).then((val)=>{
    console.log(val.recipes);
    let output = '';
    val.recipes.map((v)=>{
        console.log(v);
        output+=`
        <main>
            <img src="${v.image}"/>
            <h2>${v.name}</h2>
            <h3>Prep Time            : ${v.prepTimeMinutes} mins</h3>
            <h3>Cook Time            : ${v.cookTimeMinutes} mins</h3>
            <h3>Servings             : ${v.servings} </h3>
            <h3>Calories Per serving : ${v.caloriesPerServing}</h3>
            <button id="ingredients">Ingredients</button><button id="instructions">Instructions</button>
        </main>
        `
    })
    console.log(output);
    document.getElementById("root").innerHTML=output;
})