$(document).ready(function() {

    getCocktailDataByFirstLetter('a');
});

// Pull API Data

function getCocktailDataByFirstLetter(letter) {

    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {

            // Map the results to a js object
            const cocktails = data.drinks.map(cocktail => ({
                id: cocktail.idDrink,
                name: cocktail.strDrink,
                image: cocktail.strDrinkThumb
            }))

            console.log(cocktails);
            displayCocktails(cocktails);
        },
        error: function(error) {
            // Handle error
        }
    })
};

function displayCocktails(cocktails) {

    const cocktailsContainer = $('#cocktailsContainer');
    cocktailsContainer.empty();

    cocktails.forEach(cocktail => {

        const card = $(`   
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${cocktail.image}" class="card-img-top" alt="${cocktail.name}">
                <div class="card-body">
                    <h5 class="card-title">${cocktail.name}</h5>
                </div>
            </div>
        </div>
        `)

        card.click(function() {
            window.location.href = `cocktail.html?id=${cocktail.id}`;
        })

        cocktailsContainer.append(card);
        
    });

};

$("input[name='letterFilter']").click(function(){
    const selectedLetter = $(this).attr('value')

    getCocktailDataByFirstLetter(selectedLetter)
});

