
var d1_current = -1;
var d2_current = -1;
var h1_current = -1;
var h2_current = -1;
var m1_current = -1;
var m2_current = -1;
var s1_current = -1;
var s2_current= -1;

function update() {
	retroClock(calculate());
}

function flip (upperId, lowerId, changeNumber, pathUpper, pathLower){
	var upperBackId = upperId+"Back";
	$(upperId).src = $(upperBackId).src;
	$(upperId).setStyle("height", "64px");
	$(upperId).setStyle("visibility", "visible");
	$(upperBackId).src = pathUpper+parseInt(changeNumber)+".png";
	
	$(lowerId).src = pathLower+parseInt(changeNumber)+".png";
	$(lowerId).setStyle("height", "0px");
	$(lowerId).setStyle("visibility", "visible");
	
	var flipUpper = new Fx.Tween(upperId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
	flipUpper.addEvents({
		'complete': function(){
			var flipLower = new Fx.Tween(lowerId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
				flipLower.addEvents({
					'complete': function(){	
						lowerBackId = lowerId+"Back";
						$(lowerBackId).src = $(lowerId).src;
						$(lowerId).setStyle("visibility", "hidden");
						$(upperId).setStyle("visibility", "hidden");
					}				});					
				flipLower.start('height', 64);
				
		}
						});
	flipUpper.start('height', 0);
	
	
}//flip
			

function retroClock(data){
	
	// get new time
	 
	 d1 = data.d / 10;
	 d2 = data.d % 10;
	 h1 = data.h / 10;
	 h2 = data.h % 10;
	 m1 = data.m / 10;
	 m2 = data.m % 10;
	 s1 = data.s / 10;
	 s2 = data.s % 10;	 

	if( d2 != d2_current){
		flip('daysUpRight', 'daysDownRight', d2, 'Double/Up/Right/', 'Double/Down/Right/');
		d2_current = d2;
		
		flip('daysUpLeft', 'daysDownLeft', d1, 'Double/Up/Left/', 'Double/Down/Left/');
		d1_current = d1;
	} 	
	
	if( h2 != h2_current){
		flip('hoursUpRight', 'hoursDownRight', h2, 'Double/Up/Right/', 'Double/Down/Right/');
		h2_current = h2;
		
		flip('hoursUpLeft', 'hoursDownLeft', h1, 'Double/Up/Left/', 'Double/Down/Left/');
		h1_current = h1;
	} 
	
	if( m2 != m2_current){
		flip('minutesUpRight', 'minutesDownRight', m2, 'Double/Up/Right/', 'Double/Down/Right/');
		m2_current = m2;
		
		flip('minutesUpLeft', 'minutesDownLeft', m1, 'Double/Up/Left/', 'Double/Down/Left/');
		m1_current = m1;
	} 	
	
	 if (s2 != s2_current){
		flip('secondsUpRight', 'secondsDownRight', s2, 'Double/Up/Right/', 'Double/Down/Right/');
		s2_current = s2;
		
		flip('secondsUpLeft', 'secondsDownLeft', s1, 'Double/Up/Left/', 'Double/Down/Left/');
		s1_current = s1;
	}
}
		
