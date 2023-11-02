let data;
let url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQjBadoSFxK0qXy5h1st2M7V10_TgjifQQvEV8duBlorfznqOCEugyZ0OZLvBhFRLgixsj3E9pNohy7/pub?gid=0&single=true&output=csv";
let img;

function preload() {
  data = loadTable(url, "csv", "header");
  img = loadImage("jelly.jpg");
}
function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(0);
  image(img, 0, 0, width, height);

  if (data) {
    let numRows = data.getRowCount();
    let carbs = data.getColumn("Carbs");
    let names = data.getColumn("Food");

    for (let i = 0; i < numRows; i++) {
      let x = 50;
      let y = 125 + i * 50;
      let w = carbs[i] * 5;
      let h = 27;

      fill(255);
      textSize(14);
      text(names[i], x, y - 5);
      rect(x, y, w, h);

      image(img, 50, 325, carbs[4] * 5, h);
      image(img, 50, 275, carbs[3] * 5, h);
      image(img, 50, 225, carbs[2] * 5, h);
      image(img, 50, 175, carbs[1] * 5, h);
      image(img, 50, 125, carbs[0] * 5, h);
    }
  }
}
