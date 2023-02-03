let pokemonRepository = function () {
const pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
    {name: 'Squirtle', height: 0.5, type: ['Water']},
    {name: 'Charmander', height: 0.6, type: ['Fire']},
    {name: 'Vulpix', height: 0.6, type: ['Fire']},
    {name: 'Eevee', height: 0.3, type: ['Normal']},
    {name: 'Jolteon', height: 0.8, type: ['Electric']},
];

const pokemonList2 = [
    //different set of Pokemon objects
];

function printArrayDetails(list){
    for ( const i = 0; i < list.length; i++){
        document.write("<p> + list[i].name + "</p>);
        //printing list[i]'s other details
        //...
    }
}
//"list" in code above is to be filled- it acts as a placeholder

printArrayDetails(pokemonList); //executes the function using 'pokemonList' as its input
printArrayDetails(pokemonList2); //executes the function using 'pokemonList2' as its input

function divide(dividend, divisor){
    if(divisor === 0){
        return "You're trying to divide by zero."
    }else{
        let result = dividend / divisor;
        return result;
    }
}
 console.log(divide(4, 2));
 console.log(divide(7, 0));
 console.log(divide(1, 4));
 console.log(divide(12, -3));
 
 /*before changing to forEach
for (let i = 0; i < pokemonList.height; i++) {
    if (pokemonList[i].height >=0.6 && pokemonList[i].height < 1) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + " Is tall ")
    } else if (pokemonList[i].height < 0.6) {
    (document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + " Is short " )
    } else {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + " Wow, that's big! " )
    }
    }
    */

    //replacing for loop with forEach loop
    pokemonList.List.forEach(function(pokemon) {
        if (pokemon.height >=0.6 && pokemon.height < 1) {
            document.write(pokemon.name + " (height: " + pokemon.height + "m) - Is tall" + "<br>")
        } else if (pokemon.height < 0.6) {
            document.write(pokemon.name + "(height: " + pokemon.height + "m) - Is short" + "<br>")
        } else {
            document.write(pokemon.name + " (height: " + pokemon.height + "m) - Is really big" + "<br>")
        }
    });

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();


    pokemonRepository.getAll().forEach(function(pokemon) {
        document.write(pokemon.name + pokemon.height);
    });
