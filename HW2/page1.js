var img=document.getElementById('Question-Mark-bar-01-01');
var down=false;
var relative;
var diff;
var init;
var centerDistance;
var token=true;
var first = true;
var bar;

window.onmousemove=function(e){
	if(down == true){
		if(token){
			init = e.clientX+"px";
			if(first){
				centerDistance=parseInt(init)-(parseInt(document.body.clientWidth))/2;
				first = false;
			}
			else{
				centerDistance=parseInt(init)-parseInt(img.style.left);
			}
			token = false;
		}
		img.style.left = e.clientX-centerDistance+"px";
		diff = parseInt(img.style.left) - (parseInt(document.body.clientWidth))/2;
		if(diff>=75 || diff <=-75){
			down=false;
			if(diff>=75){
				img.style.left=(parseInt(document.body.clientWidth))/2+75+"px";
				// document.getElementById('hiddenText').style.visibility="visible";
				$('#hiddenTextLeft').transition('slide up in');
				setInterval(function(){document.location.href="page4.html";}, 1000);
				

			}
			else
			{
				img.style.left=(parseInt(document.body.clientWidth))/2-75+"px";
				$('#hiddenTextRight').transition('slide up in');
				setInterval(function(){document.location.href="page5.html";}, 1000);
			}
		}
		else{
			move();
		}
	}
}

function move(){
	relative=document.getElementById('relativemove');
	relative.style.left =-diff*4+"px";
	bar = document.getElementById('below-bar-01');
	bar.style.left= -diff +"px";
	
}

