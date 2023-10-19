$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);
    const cocktailId = urlParams.get('id');

    if (cocktailId) {
        getCocktailDetails(cocktailId);
    } else {
        // error message
    }
});

function getCocktailDetails(cocktailId) {

    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {

            const cocktail = data.drinks[0];

            console.log(data)



            $('#cocktailName').text(cocktail.strDrink);
            $('#cocktailCategory').text(cocktail.strCategory);
            $('#cocktailGlass').text(cocktail.strGlass);
            $('#cocktailInstructions').text(cocktail.strInstructions);
            $('#cocktailIngredient1').text(cocktail.strIngredient1);
            $('#cocktailIngredient2').text(cocktail.strIngredient2);
            $('#cocktailIngredient3').text(cocktail.strIngredient3);
            $('#cocktailIngredient4').text(cocktail.strIngredient4);
            $('#cocktailImage').attr('src', cocktail.strDrinkThumb);

        },
        error: function(error) {
            // Handle error
        }
    })
};
