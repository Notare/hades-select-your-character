const characterSelection = document.querySelector(".character-selection");
const characterImage = document.querySelector("img");
const characterName = document.querySelector("h1");
let currentAudio = null;

document.addEventListener("click", chooseCharacter);

function chooseCharacter(e) {
  if (e.target.classList.contains("character")) {
    const characters = characterSelection.getElementsByClassName("character");
    Array.from(characters).forEach((character) => {
      character.classList.remove("selected");
    });
    e.target.classList.add("selected");

    const selectedCharacter = e.target.dataset.character;

    characterImage.src = `./img/big/${selectedCharacter}.png`;
    characterName.textContent = selectedCharacter;

    if (currentAudio) {
      currentAudio.pause();
    }

    const audio = document.querySelector(
      `audio[data-character="${selectedCharacter}"]`
    );
    if (audio) {
      audio.play();
      audio.currentTime = 0;
      currentAudio = audio;
    }
  }
}
