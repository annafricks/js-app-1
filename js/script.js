let pokemonRepository = function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  
  //adds pokemon to list
  function printArrayDetails(list) {
    for (const i = 0; i< list.length; i++) {
      document.write("<p>" + list[i].name + "</p>");  
    }
  }
//list in code above is to be filled- it acts as a placeholder

printArrayDetails(pokemonList); //executes the function using 'pokemonList as its input

    for ( const i = 0; i < list.length; i++) {
      document.write("<p>" + list[i].name + "</p>");
    }

  //retrieves list of pokemon
  function getAll() {
    return pokemonList;
  }

  //creates list items for each pokemon and turns them into buttons
function addPokemonItem(pokemon) {
  let pokemonListAdd = document.querySelector(".pokemon-list");
  let pokemonItem = document.createElement("li");
  pokemonItem.classList.add("list-group-item");

  let pokemonButton = document.createElement("button");
  pokemonButton.classList.add("btn");

  //add bootstrap btn class
  button.classList.add("btn");
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#modalContainer");

  //assigns the pokemons name to the button
  pokemonButton.innerText = pokemon.name;

  //appends the item and the pokemon list to the button
  pokemonItem.appendChild(pokemonButton);
  pokemonListAdd.appendChild(pokemonItem);

  //logs pokemon details when button is clicked
  pokemonButton.addEventListener("click", function () {
    showDetails(pokemon);
  });
}
//logs pokemon details in the modal
function showDetails(pokemon) {
  loadDetails(pokemon).then(function(){
    showModal(pokemon);
  });
  }

  //loads the list of pokemon and enables loading message
  function loadList() {
    let listLoader = document.getElementById("loading-message");
    listLoader.removeAttribute("hidden");

    return fetch(apiUrl)
    .then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        
        listLoader.setAttribute("hidden", " ");
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //uses fetch to provide the pokemon details
  function loadDetails(item){
    let url = item.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    }).then(function (details) {
      //adds pokemon details to the item
      item.id = details.id;
      item.imageIrul = details.sprites.other.dream_world.front_default; //customized
      item.height = details.height;
      item.types = details.types;
      item.abilities = details.abilities;
    }).catch(function (e) {
      console.error(e);
    });
  }

//displays the modal
function showModal(item){
  pokemonRepository.loadDetails(item.then(function (){

    //assigns pokemon details to their classes 
    let pokemonImage = document.querySelector(".pokemon-image");
    pokemonImage.src = item.imageUrl;

    let pokemonId = document.querySelector(".pokemon-id");
    pokemonId.innerText = "#" + item.id;

    let pokemonName = document.querySelector(".pokemon-name");
    pokemonName.innerText =  item.name;

    let pokemonHeight = document.querySelector(".pokemon-height");
    pokemonHeight.innerText = ">" + (item.height/10) + "m";

    let itemTypes = "";
    item.types.forEach(function(types) {
      itemTypes += ["<li>" + types.type.name + "</li>"];
      });

      let pokemonTypes = document.querySelector(".pokemon-types");
      pokemonTypes.innterHTML = itemTypes;

      //function to show next Pokemon
      function showNextPokemon() {
        let currentIndex =pokemonRepository.getAll().indexOf(item);
        if (currentIndex === pokemonRepository.getAll().length - 1) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
        item = pokemonRepository.getAll()[currentIndex];
        showModal(item);
      }

      //function to show previous Pokemon
      function showPreviousPokemon() {
        let currentIndex = pokemonRepository.getAll().indexOf(item);
        if (currentIndex === 0) {
          currentIndex = pokemonRepository.getAll().length - 1;
        } else {
          currentIndex--;
        }
        item = pokemonRepository.getAll()[currentIndex];
        showModal(item);
      }

    }));
  };
  //End of Modal

  //Matches search input to pokemon name and hides buttons not matching
  function searchPokemon() {
    let searchInput = document.getElementById("search-input");
    let searchText = searchInput.value.toLowerCase();
    let allPokemon = document.querySelectorAll(".list-group-item");

    allPokemon.forEach(function(pokemon) {
      let pokemonText = pokemon.querySelector(".pokemon-button").innerText.toLowerCase();
      let searchList = document.queerySelector(".pokemon-list");

      if (pokemonText.includes(searchText)) {
        searchList.classList.add("search-list");
        pokemon.style.display = "inline-block";
      } else {
        pokemon.style.display = "none";
      }

      if (!searchInput.value) {
        searchList.classList.remove("search-list");
      }
    });
  }

  //triggers search function when input is entered
  let searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", function () {
    searchPokemon();
  });

  //makes functions accessible outside of the IIFE
     return {
      add: addPokemonItem,
      getAll: getAll,
      loadList: loadList,
      addPokemonItem: addPokemonItem,
      loadDetails: loadDetails,
      loadList: loadList,
      showDetails: showDetails,
      showModal: showModal,
      printArrayDetails: printArrayDetails,
      };
  }; //IIFE ends here
  
  //Displays pokemon list by loading list, then calling getAll and forEach
  pokemonRepository.loadList().then(function() {
      // Now the data is loaded!
      pokemonRepository.getAll().forEach(function(pokemon) {
          //document.write(pokemon.name + pokemon.height);
              pokemonRepository.addPokemonItem(pokemon);
      });
  });
  
  //clicking buttons will not open modal
