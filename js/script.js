let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
    {name: 'Squirtle', height: 0.5, type: ['Water']},
    {name: 'Charmander', height: 0.6, type: ['Fire']},
    {name: 'Vulpix', height: 0.6, type: ['Fire']},
    {name: 'Eevee', height: 0.3, type: ['Normal']},
    {name: 'Jolteon', height: 0.8, type: ['Electric']},
];

for (let i = 0; i < pokemonList.length; i++){
    if (height[i].height <0.9) && height[i].height >0.6)
    document.write(height[i].bulbasaur + " Is tall ")
}else if (height[i].height <0.6){
    document.write(height[i].bulbasaur + " Is short ")
}else {
    document.write(height[i].bulbasaur + " Wow, that's big! ")
}
//let has error- why?