let data;
// let url =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vR8v8xYc3aEcRIwc6FPFIpcIV1cpWZbL3qwomiX3FOAoPGWXK8mC-WlN_fsLmk5-8Acl9PdIJTX-n7U/pub?gid=0&single=true&output=csv";
let url = "gamedata.csv";
let img;

function preload() {
  data = loadTable(url, "csv", "header");
  img = loadImage("ps5glx.gif");
  img0 = loadImage("Overwatch2_cover.jpg");
  img1 = loadImage("KingdomheartsHD.jpg");
  img2 = loadImage("BatmanAK.jpg");
  img3 = loadImage("CODmw2.jpg");
  img4 = loadImage("MarvelvsCapcom.jpg");
  img5 = loadImage("DevilMayCryHD.jpg");
  img6 = loadImage("THPS1+2.jpg");
}
function setup() {
  createCanvas(900, 700);
}

function draw() {
  background(0);
  image(img, 0, 0, width, height);

  if (data) {
    let numRows = data.getRowCount();
    let hours = data.getColumn("Hours played");
    let names = data.getColumn("Game");
    print(names[1])

    for (let i = 0; i < numRows; i++) {
      let x = 50;
      let y = 100 + i * 85;
      let w = hours[i] * 1.9;
      let h = 70;

      fill(255);
      textSize(14.5);
      rect(x, y, w, h);
      text(names[i], x + 600, y + 40);
      

      image(img6, 50, 610, hours[6] * 1.9, h);
      image(img5, 50, 525, hours[5] * 1.9, h);
      image(img4, 50, 440, hours[4] * 1.9, h);
      image(img3, 50, 355, hours[3] * 1.9, h);
      image(img2, 50, 270, hours[2] * 1.9, h);
      image(img1, 50, 185, hours[1] * 1.9, h);
      image(img0, 50, 100, hours[0] * 1.9, h);
    }
  }
}
