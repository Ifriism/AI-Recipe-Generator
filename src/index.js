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
      let context = "You're an expert in cooking and enjoys coming up with recipes. Please generate recipes that are easy to read. Please generate a headline with a name for the recipe and add a <br /> after the name. Please create separate sections for the amount of people the recipe serves, the cooking time, the ingredients, and the instructions and separate them with a <br /> so there is space between each section. The section titles should be in a <strong />. The instructions section should have each step listed in a numeral <li> format. The ingredients section should have each step listed in a <li> format. Please make sure to follow the user instructions";
      let prompt = `User instructions: Generate a recipe using ${instructionsInput.value}`;
      let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
     
let poemElement = document.querySelector("#recipe");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">Generating recipe with ${instructionsInput.value}</div>`;

      axios.get(apiUrl).then(generatePoem);

}

let formContainerElement = document.querySelector("#form-container");
formContainerElement.addEventListener("submit", recipeGenerator);