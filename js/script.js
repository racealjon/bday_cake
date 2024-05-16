const flame = document.getElementById("flame");
const partyPoppers = document.getElementById("party-poppers");
const balloonContainer = document.getElementById("balloon-container");

navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);

    microphone.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function detectBlow() {
      analyser.getByteFrequencyData(dataArray);
      const average =
        dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;

      // Adjust this threshold according to your environment
      const threshold = 50;

      if (average > threshold) {
        // Hide the flame
        flame.style.opacity = 0;
        document.getElementById("blow-sound").play();
        createBalloons(30);

        document.body.style.backgroundColor = "violet";
        showButton();
      }

      //else {
      // Show the flame
      //  flame.style.opacity = 1;
      //}

      requestAnimationFrame(detectBlow);
    }

    detectBlow();
  })
  .catch((error) => {
    console.error("Error accessing microphone:", error);
  });

//  For ballons
function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},1);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 20},${g - 20},${b - 20},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (let i = num; i > 0; i--) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

// Function button to show
function showButton() {
  let button = document.getElementById("myButton");
  button.removeAttribute("hidden");
}

// function removeBalloons() {
//   balloonContainer.style.opacity = 0;
//   setTimeout(() => {
//     balloonContainer.remove();
//   }, 500);
// }

// window.addEventListener("load", () => {
//   createBalloons(30);
// });

// window.addEventListener("click", () => {
//   removeBalloons();
// });
