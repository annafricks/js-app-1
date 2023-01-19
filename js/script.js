const pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
    {name: 'Squirtle', height: 0.5, type: ['Water']},
    {name: 'Charmander', height: 0.6, type: ['Fire']},
    {name: 'Vulpix', height: 0.6, type: ['Fire']},
    {name: 'Eevee', height: 0.3, type: ['Normal']},
    {name: 'Jolteon', height: 0.8, type: ['Electric']},
];

for (const i = 0; i < pokemonList.height; i++) {
    if ( pokemonList[i].height <=0.6 ) && ( pokemonList[i].height >=0.7 ) {
    document.write(height[i].pokemonList + " Is tall ")
} else if (pokemonList[i].height <=0.5 && pokemonList[i].height >0.1) {
    (document.write(height[i].pokemonList + " Is short " )
} else { pokemonList[i].height >=0.8
    document.write(height[i].pokemonList + " Wow, that's big! " ) }
}
