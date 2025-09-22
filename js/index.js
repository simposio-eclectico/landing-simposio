const canvas = document.getElementById("logo");
const ctxLogo = canvas.getContext("2d");
const text = "SIMPOSIO ECLECTICO · ";

// const noisedGrowth = (from = 0, to = 255) => {
//   const rnd = Math.random();
//   const t = 1 - rnd + n * rnd;
//   return t * t * (3 - 2 * t);
// };

function animate() {
  const diameter = 250;
  const font = `7pt 'Fira Code', monospace`;
  const textMeasure = ctxLogo.measureText(text);
  const textHeight =
    textMeasure.actualBoundingBoxAscent + textMeasure.actualBoundingBoxDescent;
  const circumference = Math.PI * diameter;
  const howMany = Math.round(circumference / textMeasure.width / 2);
  let actualText = (() => {
    let r = "";
    for (let i = 0; i < howMany; i++) r += text;
    return r;
  })();
  const kerning = howMany * 2;
  function update(t) {
    ctxLogo.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctxLogo.fillStyle = "black";
    ctxLogo.font = font;

    ctxLogo.translate(canvas.width / 2, canvas.height / 2);
    ctxLogo.textBaseline = "middle";
    ctxLogo.textAlign = "center";
    ctxLogo.rotate((t * 0.01 * Math.PI) / 180);

    for (let j = 0; j < actualText.length; j++) {
      const actualChar = actualText[j];
      const charWid = ctxLogo.measureText(actualChar).width; // half letter
      ctxLogo.rotate(charWid / 2 / (diameter / 2 - textHeight));
      ctxLogo.fillText(actualChar, 0, 1 * (0 - diameter / 2 + textHeight / 2));
      ctxLogo.rotate((charWid / 2 + kerning) / (diameter / 2 - textHeight)); // rotate half letter
    }

    requestAnimationFrame(update);
  }
  update();
}

animate();
