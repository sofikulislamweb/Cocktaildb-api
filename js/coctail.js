const searchItem = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';
    if (inputText === '') {
        console.log('This is error');

    }
    else {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`)
            .then(res => res.json())
            .then(data => showOutput(data));

    }

}
const showOutput = cocks => {
    const mycocks = cocks.drinks;
    const prDiv = document.getElementById('main-div');
    prDiv.innerHTML = ''
    mycocks.forEach(cock => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="col card">
                <img src="${cock.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cock.strDrink}</h5>
                    <p class="card-text">${cock.strInstructions.slice(0, 100)}</p>
                    <button class="btn btn-success" onclick="singleDetails('${cock.idDrink}')">Details</button>
                </div>
            </div>
        
        `
        prDiv.appendChild(newDiv);
    })
}
const singleDetails = details => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${details}`
    fetch(url)
        .then(res => res.json())
        .then(data => dynamicUrl(data.drinks[0]))


}
const dynamicUrl = dynamic => {
    const singlediv = document.getElementById('single-item');
    singlediv.textContent = '';
    const newdiv = document.createElement('div')
    newdiv.innerHTML = `
      <img class="card-img-top" src="${dynamic.strDrinkThumb}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${dynamic.strDrink}</h5>
            <p class="card-text">${dynamic.strInstructions.slice(0, 100)}</p>
        </div>
    `
    singlediv.appendChild(newdiv);
}