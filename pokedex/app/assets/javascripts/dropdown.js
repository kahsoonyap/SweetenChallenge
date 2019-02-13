document.addEventListener("DOMContentLoaded", function(event) {
  var pokemons = document.getElementsByClassName("pokemon");

  for (i = 0; i < pokemons.length; i++) {
    pokemons[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var information = this.nextElementSibling;

      if (information.style.display === "block") {
        information.style.display = "none";
      } else {
         information.style.display = "block";
       }
    });
  }
});
