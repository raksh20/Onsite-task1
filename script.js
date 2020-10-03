var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var x=0;
var y=0;
var startBtn = document.getElementById("startBtn");

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	ctx.beginPath();
	
	ctx.arc(300, 250, 150, 0, Math.PI * 2, true);
	ctx.save();
	ctx.moveTo(360,190);
	ctx.arc(300, 190, 60, 0, Math.PI * 2, true);
	ctx.moveTo(302,250);
	ctx.arc(300, 250, 2, 0, Math.PI * 2, true);
	ctx.moveTo(302,190);
	ctx.arc(300, 190, 1, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.font = "18px Arial";
	ctx.fillText("60",290,124);
	ctx.fillText("15",420,257);
	ctx.fillText("30",292,389);
	ctx.fillText("45",163,258);
	ctx.font = "15px Arial";
	ctx.fillText("5",360,143);
	ctx.fillText("10",404,187);
	ctx.fillText("20",404,322);
	ctx.fillText("25",360,370);
	ctx.fillText("35",230,370);
	ctx.fillText("40",180,322);
	ctx.fillText("50",180,187);
	ctx.fillText("55",230,143);
	ctx.font = "40px Arial";
	ctx.fillText("STOPWATCH",170,50);
	ctx.font = "10px Arial";
	ctx.fillText("60",295,144);
	ctx.fillText("15",343,193);
	ctx.fillText("30",295,244);
	ctx.fillText("45",245,193);


	//seconds
	ctx.save();
  	for (i = 0; i < 60; i++) {
    
      ctx.beginPath();
      ctx.moveTo(300, 100);
      ctx.lineTo(300, 110);
      ctx.stroke();
	  ctx.translate(300, 250);
      ctx.rotate(6*Math.PI / 180);
	  ctx.translate(-300, -250);
    
 	 }
  	ctx.restore();

  	//minutes

  	ctx.save();
  	for (i = 0; i < 60; i++) {
    
	    ctx.beginPath();
	    ctx.moveTo(300, 130);
	    ctx.lineTo(300, 135);
	    ctx.stroke();
    	ctx.translate(300, 190);
		ctx.rotate(6*Math.PI / 180);
		ctx.translate(-300, -190);
    
  }
  ctx.restore();

  seconds();

  minutes();
 
}
var time;
function start(){
	draw();
	time=setInterval(draw, 1000);
	startBtn.disabled = true;

}

function stop() {
  clearInterval(time);
  x = 0;
  y = 0; 
  startBtn.disabled = false;
}



function seconds(){

	ctx.save();
 
	  ctx.beginPath();
	  ctx.lineWidth=3;
	  ctx.lineCap = "round";
	  ctx.moveTo(300,250);
	  ctx.translate(300, 250);
	  ctx.rotate(x*Math.PI / 180);
	  ctx.translate(-300, -250);
	  ctx.lineTo(300,120);
	  ctx.stroke();
	  x+=6;
	
  ctx.restore();
}

function minutes(){
	ctx.save();

  ctx.beginPath();
  ctx.lineWidth=2;
  ctx.lineCap = "round";
  ctx.moveTo(300,190);
  ctx.translate(300, 190);
  ctx.rotate(y*Math.PI / 180);
  ctx.translate(-300, -190);
  ctx.lineTo(300,140);
  ctx.stroke();
  y+=0.1;
  ctx.restore();

}


