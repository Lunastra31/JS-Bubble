const counterDisplay = document.querySelector("h3");
const timeDisplay = document.querySelector("h4");
let counter = 0;
let time = 30;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble); //accolle bubble à body en tant qu'enfant

  //Formatage des bulles
  const size = Math.random() * 200 + 100 + "px"; //Math random permet de générer des chiffres aléatoirement
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000); // permet de supprimer la bulle dans 8s
};

const timer = () => {
  let interval = setInterval(() => {
    time--;
    console.log(time);
    timeDisplay.textContent = time;
    if (time < 15) {
      timeDisplay.style.color = "red";
    }
    if (time === 0) {
      clearInterval(interval); // permet d'arrêter le timer
      gameOver();
    }
  }, 1000);
  return (stop = 0);
};

const gameOver = () => {
  //Création du bouton
  var refreshButton = document.createElement("button");
  refreshButton.innerText = "Recommencer";

  refreshButton.addEventListener("click", () => {
    window.location.reload();
  });
  // Créer un élément de message
  var message = document.createElement("div");
  message.innerText = "Le jeu est terminé!";
  message.style.paddingRight = "10px";
  // Créer un élément de popup
  var popup = document.createElement("div");
  popup.classList.add("popup");
  popup.appendChild(message);
  popup.appendChild(refreshButton);
  popup.style.display = "flex";
  popup.style.justifyContent = "center";

  // Ajouter la popup à la page
  document.body.appendChild(popup);
};

timer(time);
setInterval(bubbleMaker, 700);

//le filtre hue rotate permet de faire changer la couleur en modifiant le degré
