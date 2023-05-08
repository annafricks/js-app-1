let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function printArrayDetails(list) {
    for (const i = 0; i < list.length; i++) {
      document.write("<p>" + list[i].name + "</p>");
    }
  }
  //"list" in code above is to be filled- it acts as a placeholder

  printArrayDetails(pokemonList); //executes the function using 'pokemonList' as its input

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
    listpokemon.classList.add("group-list-item");

    let button = document.createElement("button");
    button.classList.add("btn");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#modal-container");

    button.innerText = pokemon.name;
    button.classList.add("button-class", "show-modal", "btn");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    // listens for a button click and the logs to the console the details
    button.addEventListener("click", function () {
      showDetails(pokemon); //basically saying when the button is clicked, show the details of the pokemon
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            height: item.height,
            types: item.types,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.sprite = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  function showModal(pokemon) {
    $(".modal-title").html(pokemon.name);
    $(".modal-text").html("<p>" + " " + "</p>");
    let type1, type2;
    if (pokemon.types[1]) {
      type1 = pokemon.types[0].type["name"];
      type2 = pokemon.types[1].type["name"];
      $(".modal-body").html(
        "<p>" +
          pokemon.height / 10 +
          "m" +
          "</p>" +
          "<p>" +
          type1 +
          ", " +
          type2 +
          "</p>" +
          "<img src=" +
          "'" +
          pokemon.sprite +
          "'" +
          "/>"
      );
    } else {
      type1 = pokemon.types[0].type["name"];
      $(".modal-body").html(
        "<p>" +
          pokemon.height / 10 +
          "m" +
          "</p>" +
          "<p>" +
          type1 +
          "</p>" +
          "<img src=" +
          "'" +
          pokemon.sprite +
          "'" +
          "/>"
      );
    }
  }

  function closeModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("modal-is-visible");
    modalContainer.classList.add("modal");
    modalCloseButton.innerHTML = "";
  }

  //search bar
  function searchPokemon() {
    let searchInput = document.getElementById("search-bar");
    let searchText = searchInput.value.toLowerCase();
    let allPokemon = document.querySelectorAll(".group-list-item");

    allPokemon.forEach(function (pokemon) {
      let pokemonText = pokemon.querySelector(".btn").innerText.toLowerCase();
      let searchList = document.querySelector(".pokemon-list");

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

  let searchInput = document.getElementById("search-bar");
  searchInput.addEventListener("input", function () {
    searchPokemon();
  });

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    addListItem: addListItem,
    showModal: showModal,
    searchPokemon: searchPokemon,
  };
})();

//
pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    //document.write(pokemon.name + pokemon.height);
    pokemonRepository.addListItem(pokemon);
  });
});

// search bar not working, disrupting all loaded list when added
