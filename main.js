document
  .querySelector(".character-selection")
  .addEventListener("click", chooseCharacter);

let currentAudio = null;

function chooseCharacter(e) {
  const characterSelection = document.querySelector(".character-selection");
  const characterImage = document.querySelector("img");
  const characterName = document.querySelector("h1");

  if (e.target.classList.contains("character")) {
    const characters = characterSelection.getElementsByClassName("character");
    const selectedCharacter = e.target.dataset.character;
    const audio = document.querySelector(
      `audio[data-character="${selectedCharacter}"]`
    );

    Array.from(characters).forEach((character) => {
      character.classList.remove("selected");
    });
    e.target.classList.add("selected");

    characterImage.src = `./img/big/${selectedCharacter}.png`;
    characterName.textContent = selectedCharacter;

    if (currentAudio) {
      currentAudio.pause();
    }

    if (audio) {
      audio.play();
      audio.currentTime = 0;
      currentAudio = audio;
    }
  }
}
