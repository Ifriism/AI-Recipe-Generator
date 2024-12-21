function generatePoem(response) {
    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function recipeGenerator(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
      let apiKey = "fea6579f5ctf53bb7491ae80ac32o60f";
      let context = "You're an expert in cooking and enjoys coming up with recipes. Please generate recipes that are easy to read, separated into appropriate sections i.e. cooking time, ingredients, instructions and separating these sections with a <br />. Please make sure to follow the user instructions";
      let prompt = `User instructions: Generate a recipe using ${instructionsInput.value}`;
      let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
     
let poemElement = document.querySelector("#recipe");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">Generating recipe ${instructionsInput.value}</div>`;

      axios.get(apiUrl).then(generatePoem);

}

let formContainerElement = document.querySelector("#form-container");
formContainerElement.addEventListener("submit", recipeGenerator);