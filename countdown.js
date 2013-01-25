var now = new Date();
var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
alert(now_utc)
var departure = Date.UTC(2013,2,21,7,50,0);
var landing = Date.UTC(2013,3,21,23,25,00) ;
var back = Date.UTC(2013,4,12,12,45,0);
var time_to_departure = (departure - now_utc)/1000;

function countdown(){
	if (time_to_departure>0){	
		time_to_departure -= 1;
		days = Math.floor(time_to_departure/86400);
		hours = Math.floor((time_to_departure % 86400)/3600);
		minutes = Math.floor((time_to_departure % 3600)/60)
		seconds = Math.floor(time_to_departure % 60);
		document.getElementById("counter").innerHTML = days+" Days "+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds";
	}
}
