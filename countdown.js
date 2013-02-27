var now = new Date(),
	departure = new Date("2013-03-21T07:50:00Z"),
	time_to_departure = (departure - now)/1000;

function normalize(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}

function update(){
	display(calculate());
}

function calculate() {
	time_to_departure--;
	return {
		'd': Math.floor(time_to_departure/86400),
		'h': Math.floor((time_to_departure % 86400)/3600),
		'm': Math.floor((time_to_departure % 3600)/60),
		's': Math.floor(time_to_departure % 60)
	}
}

function display(data) {
	var stillTime = data.d+data.h+data.m+data.s > 0;

	if (stillTime) {
		document.getElementById("daysNumber").innerHTML = normalize(data.d);
		document.getElementById("hoursNumber").innerHTML = normalize(data.h);
		document.getElementById("minutesNumber").innerHTML = normalize(data.m);
		document.getElementById("secondsNumber").innerHTML = normalize(data.s);	
	} else {
		document.getElementById("text").innerHTML = "Oren is already in India, probably eating chicken biryani...";
	}
	
}
