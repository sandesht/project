/*this script display greeting to the user based upon the current time.
	It is an example from javascript and jquery book.*/

var today=new Date() //create a new Date object
var hourNow= today.getHours(); //find current hour
var greeting;

//Display the appropriate greeting based on the current time.
if(hourNow > 18){
	greeting='Good evening!';
}else if(hourNow > 12){
	greeting='Good afternoon';
}else if(hourNow>10){
	greeting='Good Morning';
}else{
	greeting='Welcome!';
}
document.write('<h3>'+greeting+'</h3>');