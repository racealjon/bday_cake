const checkbox = document.getElementById("click");
//const button = document.querySelector("#button");
const canvas = document.querySelector("#confetti");

const jsConfetti = new JSConfetti();

checkbox.addEventListener("click", () => {
  jsConfetti
    .addConfetti({
      emojis: ["🎉", " 🎉", "🎉", "🎉", "🎉", "🎉"],
      confettiNumber: 70,
    })
    .then(() => jsConfetti.addConfetti())
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["🥳", "🥳 ", "🥳", "🥳", "🥳", "🥳"],
        confettiNumber: 70,
      })
    )
    .then(() => jsConfetti.addConfetti())
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["🎈", "🎈 ", "🎈", "🎈", "🎈", "🎈"],
        confettiNumber: 70,
      })
    )
    .then(() => jsConfetti.addConfetti())
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["💞", "💞", "💞", "💞", "💞", "💞"],
        confettiNumber: 70,
      })
    )
    .then(() => jsConfetti.addConfetti())
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["💙", "💙", "💙", "💙", "💙", "💙"],
        confettiNumber: 70,
      })
    )
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["🥰", "🥰", "🥰", "🥰", "🥰", "🥰"],
        confettiNumber: 70,
      })
    )
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["💛", "💛", "💛", "💛", "💛", "💛"],
        confettiNumber: 70,
      })
    )
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["💚", "💚", "💚", "💚", "💚", "💚"],
        confettiNumber: 70,
      })
    )
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["🧡", "🧡", "🧡", "🧡", "🧡", "🧡"],
        confettiNumber: 70,
      })
    )
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["💖", "💖", "💖", "💖", "💖", "💖"],
        confettiNumber: 70,
      })
    )
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["💞", "💞", "💞", "💞", "💞", "💞"],
        confettiNumber: 70,
      })
    )
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["💜", "💜", "💜", "💜", "💜", "💜"],
        confettiNumber: 70,
      })
    )
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["🥰", "🥰", "🥰", "🥰", "🥰", "🥰"],
        confettiNumber: 70,
      })
    )
    .then(() => jsConfetti.addConfetti())
    .then(() =>
      jsConfetti.addConfetti({
        emojis: ["💙", "💙", "💙", "💙", "💙", "💙"],
        confettiNumber: 70,
      })
    )
    .then(() =>
      jsConfetti.addConfetti({
        emojis: [
          "🥰",
          "💙",
          "💜",
          "💖",
          "💚",
          "🧡",
          "💞",
          "🥳",
          "🎈",
          "🎉",
          "💛",
        ],
        confettiNumber: 100,
      })
    );
});

function isChecked() {
  document.getElementById("playMo").play();
}

// function changeBackgroundImage() {
//   document.getElementById("click");
//   // document.body.style.backgroundImage = "url('../images/bg-image.jpg')";
// }

checkbox.addEventListener("click", isChecked);
// document.addEventListener("click", changeBackgroundImage);
