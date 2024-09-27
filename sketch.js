let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background(" white ");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(30);
  text(recomendacao, width  / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Moana-um mar de aventuras";
    } else {
      if (idade >= 10) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Meu Malvado Favorito";          
        } else{
         return "Madagascar";
        }
      } else {
        if (gostaDeAventura) {
          return "Turma da Mônica: Laços";
        } else {
          return "O Rei Leão";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Pinóquio";
    } else {
      return "Elementos";
    }
  }
}
