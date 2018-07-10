let firstNameJoke = document.getElementById("firstNameJoke");
let lastNameJoke = document.getElementById("lastNameJoke");
let customSubmit = document.getElementById("customSubmit");
let customHeader = document.getElementById("custom1")
customSubmit.addEventListener('click', function(event) {
  event.preventDefault();
  if ((firstNameJoke.value === "") || (lastNameJoke.value === "")) {
    alert("Dummy, I gave you one job!");
  }
  if ((firstNameJoke.value != "") && (lastNameJoke.value != "")) {
    fetch(`http://api.icndb.com/jokes/random?firstName=${firstNameJoke.value}&amp;lastName=${lastNameJoke.value}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      customHeader.innerText = myJson.value.joke;
    });
    document.getElementById("custom").reset();
  }
});
