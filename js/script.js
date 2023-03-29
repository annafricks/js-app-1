let pokemonRepository = function () {
let pokemonList = [];
let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";


function printArrayDetails(list){
    for ( const i = 0; i < list.length; i++){
        document.write('<p>' + list[i].name + '</p>');
    }
}
//"list" in code above is to be filled- it acts as a placeholder

printArrayDetails(pokemonList); //executes the function using 'pokemonList' as its input

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

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
            //"detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon); 
    // listens for a button click and the logs to the console the details  
      button.addEventListener("click", function() {
        showDetails(pokemon); //basically saying when the button is clicked, show the details of the pokemon
      })
    }

    function loadList() {
     return fetch(apiUrl).then(function (response) {
      return response.json();
       }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
           add(pokemon);
           console.log(pokemon);
         });
       }).catch(function (e) {
        console.error(e);
      })
     }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

      function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function() {
          console.log(item);
        });
    }

    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        addListItem: addListItem
    };
}();

//
pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon) {
        //document.write(pokemon.name + pokemon.height);
            pokemonRepository.addListItem(pokemon);
    });
});

//how to add define showLoadingMessage and hideLoadingMessage functions?
//Inside the add function, how can I be sure the type of parameter is an object? In combination with a conditional, how can I make sure you can only add the passed argument of the function to pokemonList if it’s an object?