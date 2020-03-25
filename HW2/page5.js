 var state=[true,true,true,true,true,true,true,true,true,true];
 
 $("#icon-a-01").click(function(){
	if(state[0]){
		$("#small-a").css("visibility","visible");
		state[0] = false;
	}
	else{
		$("#small-a").css("visibility","hidden");
		state[0] = true;
	}
 });

 $("#icon-b-01").click(function(){
	if(state[1]){
		$("#small-b").css("visibility","visible");
		state[1] = false;
	}
	else{
		$("#small-b").css("visibility","hidden");
		state[1] = true;
	}
 }); 
 
 $("#icon-c-01").click(function(){
	if(state[2]){
		$("#small-c").css("visibility","visible");
		state[2] = false;
	}
	else{
		$("#small-c").css("visibility","hidden");
		state[2] = true;
	}
 });

 $("#icon-d-01").click(function(){
	if(state[3]){
		$("#small-d").css("visibility","visible");
		state[3] = false;
	}
	else{
		$("#small-d").css("visibility","hidden");
		state[3] = true;
	}
 });

 $("#icon-e-01").click(function(){
	if(state[4]){
		$("#small-e-up").css("visibility","visible");
		$("#small-e-down").css("visibility","visible");
		state[4] = false;
	}
	else{
		$("#small-e-down").css("visibility","hidden");
		$("#small-e-up").css("visibility","hidden");
		state[4] = true;
	}
 });

 $("#icon-f-01").click(function(){
	if(state[5]){
		$("#small-f").css("visibility","visible");
		state[5] = false;
	}
	else{
		$("#small-f").css("visibility","hidden");
		state[5] = true;
	}
 });

 $("#icon-g-01").click(function(){
	if(state[6]){
		$("#small-g").css("visibility","visible");
		state[6] = false;
	}
	else{
		$("#small-g").css("visibility","hidden");
		state[6] = true;
	}
 });

 $("#icon-h-01").click(function(){
	if(state[7]){
		$("#small-h").css("visibility","visible");
		state[7] = false;
	}
	else{
		$("#small-h").css("visibility","hidden");
		state[7] = true;
	}
 });
 
 $("#icon-i-01").click(function(){
	if(state[8]){
		$("#small-i-up").css("visibility","visible");
		$("#small-i-down").css("visibility","visible");
		state[8] = false;
	}
	else{
		$("#small-i-down").css("visibility","hidden");
		$("#small-i-up").css("visibility","hidden");
		state[8] = true;
	}
 });
 
 $("#icon-j-01").click(function(){
	if(state[9]){
		$("#small-j-up").css("visibility","visible");
		$("#small-j-down").css("visibility","visible");
		state[9] = false;
	}
	else{
		$("#small-j-down").css("visibility","hidden");
		$("#small-j-up").css("visibility","hidden");
		state[9] = true;
	}
 });
 
window.onload=backgroundAnimate;
function backgroundAnimate(){
	$('#Orange-girl-big-01').transition('flash');
	setTimeout(function(){$('#background-01').transition('horizontal flip in');
	$('#floor-01').transition('vertical flip in');
	$('.icons').transition('zoom in');},1000);
	
}
