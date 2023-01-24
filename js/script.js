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
 
for (let i = 0; i < pokemonList.height; i++) {
    if (pokemonList[i].height >=0.6 && pokemonList[i].height < 1) {
    document.write(pokemonList[0].name + " (height: " + pokemonList[i].height + ")" + " Is tall ")
    } else if (pokemonList[i].height < 0.6) {
    (document.write(pokemonList[4].name + " (height: " + pokemonList[i].height + ")" + " Is short " )
    } else {
    document.write(pokemonList[5].name + " (height: " + pokemonList[i].height + ")" + " Wow, that's big! " )
    }
    }