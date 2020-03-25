 var state=[true,true,true,true,true,true,true,true,true,true];
 
 $("#icon01-01").click(function(){
	if(state[0]){
		$("#small-01").css("visibility","visible");
		state[0] = false;
	}
	else{
		$("#small-01").css("visibility","hidden");
		state[0] = true;
	}
 });

 $("#icon02-01").click(function(){
	if(state[1]){
		$("#small-02").css("visibility","visible");
		state[1] = false;
	}
	else{
		$("#small-02").css("visibility","hidden");
		state[1] = true;
	}
 });
  

 $("#icon03-01").click(function(){
	if(state[2]){
		$("#small-03-up").css("visibility","visible");
		$("#small-03-down").css("visibility","visible");
		state[2] = false;
	}
	else{
		$("#small-03-up").css("visibility","hidden");
		$("#small-03-down").css("visibility","hidden");
		state[2] = true;
	}
 });
  
 $("#icon04-01").click(function(){
	if(state[3]){
		$("#small-04-up").css("visibility","visible");
		$("#small-04-down").css("visibility","visible");
		state[3] = false;
	}
	else{
		$("#small-04-up").css("visibility","hidden");
		$("#small-04-down").css("visibility","hidden");
		state[3] = true;
	}
 });
  
 $("#icon05-01").click(function(){
	if(state[4]){
		$("#small-05-up").css("visibility","visible");
		$("#small-05-down").css("visibility","visible");
		state[4] = false;
	}
	else{
		$("#small-05-up").css("visibility","hidden");
		$("#small-05-down").css("visibility","hidden");
		state[4] = true;
	}
 });
  

 $("#icon06-01").click(function(){
	if(state[5]){
		$("#small-06").css("visibility","visible");
		state[5] = false;
	}
	else{
		$("#small-06").css("visibility","hidden");
		state[5] = true;
	}
 });
 
  $("#icon07-01").click(function(){
	if(state[6]){
		$("#small-07").css("visibility","visible");
		state[6] = false;
	}
	else{
		$("#small-07").css("visibility","hidden");
		state[6] = true;
	}
 });
 
  $("#icon08-01").click(function(){
	if(state[7]){
		$("#small-08").css("visibility","visible");
		state[7] = false;
	}
	else{
		$("#small-08").css("visibility","hidden");
		state[7] = true;
	}
 });
 
  $("#icon09-01").click(function(){
	if(state[8]){
		$("#small-09").css("visibility","visible");
		state[8] = false;
	}
	else{
		$("#small-09").css("visibility","hidden");
		state[8] = true;
	}
 });
 
  $("#icon10-01").click(function(){
	if(state[9]){
		$("#small-10").css("visibility","visible");
		state[9] = false;
	}
	else{
		$("#small-10").css("visibility","hidden");
		state[9] = true;
	}
 });
 
window.onload=backgroundAnimate;
function backgroundAnimate(){
	$('#Blue-man-big-01').transition('flash');
	setTimeout(function(){$('#background-01-page4').transition('horizontal flip in');
	$('#floor-01-page4').transition('vertical flip in');
	$('.icons').transition('zoom in');},1000);
	
}



