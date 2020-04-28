const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/* //fillRect()
ctx.fillStyle = 'brown';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = 'yellow';
ctx.fillRect(200, 20, 150, 100);
ctx.fillStyle = 'black';
ctx.fillRect(380, 20, 150, 100);

//strokeRect()

ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.strokeRect(100, 150, 150, 100);
ctx.strokeRect(300, 150, 150, 100);

//clearRect()

ctx.clearRect(25, 25, 140, 90);
ctx.clearRect(385, 25, 140, 90);
//this two lines are affecting line 6 & 10 with the filling

//fillText
ctx.font = '25px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('Hello World', 390, 50);

//strokeText()

ctx.lineWidth = '1';
ctx.strokeStyle = 'blue';
ctx.strokeText('Hola Mundo', 210, 50); */

//Paths
//Triangle
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.lineTo(50, 50);
// or we can use the code  "ctx.closePath();"
//ctx.stroke(); or we could use the following to fill it
ctx.fillStyle = 'orange';
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.closePath();
ctx.stroke(); 

//Rectangle
ctx.beginPath();
ctx.rect(300, 50, 150, 100);
ctx.fillStyle = 'teal';
ctx.fill();