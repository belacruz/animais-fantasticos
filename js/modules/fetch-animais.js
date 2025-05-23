import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // cria a div com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }
  // fetch dos animais através de JSON
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
