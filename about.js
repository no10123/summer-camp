const canvas = document.getElementById("canvas");
canvas.width = width = window.innerWidth
canvas.height = height = window.innerHeight * 2
const ctx = canvas.getContext("2d");

ctx.lineWidth = 10;
ctx.strokeStyle = '#a6e3a1';
ctx.lineCap = 'round';

ctx.beginPath();

ctx.moveTo(-10, 420); 
ctx.bezierCurveTo(0, 390, width / 2, 520, width, 370); 

ctx.stroke();

ctx.strokeStyle = '#fab387';

ctx.beginPath();

ctx.moveTo(0, 580); 
ctx.bezierCurveTo(0, 580, width / 2, 610, width, 440); 

ctx.stroke();

ctx.strokeStyle = '#89b4fa';

ctx.beginPath();

ctx.moveTo(0, 810); 
ctx.bezierCurveTo(0, 820, width / 2, 710, width, 840); 

ctx.stroke();