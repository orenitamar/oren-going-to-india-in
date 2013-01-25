var now = new Date();
var departure = new Date("2013-03-21T07:50:00Z");
var time_to_departure = (departure - now)/1000 ;

function countdown(){
	if (time_to_departure>0){	
		time_to_departure -= 1;
		days = Math.floor(time_to_departure/86400);
		hours = Math.floor((time_to_departure % 86400)/3600);
		minutes = Math.floor((time_to_departure % 3600)/60)
		seconds = Math.floor(time_to_departure % 60);
		document.getElementById("counter").innerHTML = days+" Days "+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds";
	}else{
		document.getElementById("text").innerHTML = "Oren is already in India, probably eating chicken biryani...";
	}
}
