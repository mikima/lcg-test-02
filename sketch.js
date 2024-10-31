let table;
let data;

let vizcolors = [
  "#995553",
  "#757575",
  "#d98b6c",
  "#865e84",
  "#dbbc65",
  "#6fae7b",
  "#9ab371",
  "#c77480",
  "#6395c2",
  "#74b4df",
  "#76afa4",
];

function preload() {
  // put preload code here
  // load dataset
  table = loadTable("/assets/betterlifeindex.csv", "header");
}

function setup() {
  data = table.getArray();
  createCanvas(100 * data.length, windowHeight);
  angleMode(DEGREES);
  // put setup code here
  console.log(data.length);

  for (let row = 0; row < data.length; row++) {
    drawFlower(50 + row * 100, height / 2, 50, 7, data[row]);
  }
}

function draw() {
  // put drawing code here
  //drawFlower(100, 100, "ciao");
}

function drawFlower(x, y, radius, thickness, data) {
  //draw green line
  stroke("#acc9b0");
  push();
  translate(x, y);
  line(0, 0, 0, height / 2);
  pop();

  for (let i = 1; i < 12; i++) {
    // get value
    let value = data[i];
    push();
    translate(x, y);
    rotate((360 / 11) * i);
    strokeWeight(0.5);
    stroke("#333");
    fill(vizcolors[i - 1]);
    drawPetal(0, 0, value * radius, value * thickness, 10);
    pop();
  }
  //draw name
  textAlign(RIGHT, CENTER);
  push();
  translate(x, y + radius);
  rotate(-90);
  text(data[0], 0, 0);
  pop();
}

function drawPetal(x, y, length, thickness) {
  let x2 = x + (length / 4) * 2;
  let x3 = x + (length / 4) * 3;
  let x4 = x + length;
  let y2 = y + thickness;
  let y3 = y + thickness;
  let y4 = y;

  beginShape();
  vertex(x, y);
  bezierVertex(x2, y2, x3, y3, x4, y4);
  bezierVertex(x3, y - thickness, x2, y - thickness, x, y);
  endShape();
}
