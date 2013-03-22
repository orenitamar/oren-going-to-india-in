function Insta(cfg) {
	var $el = $(cfg.elSelector),
		elSource = $(cfg.tmplSelector).html(),
		elTemplate = Handlebars.compile(elSource);

	loadTempItems();

	$.ajax({
		"url": cfg.url,
		"success": onDataSuccess	
	});

	moment.lang('en', {
	    relativeTime : {
	        future: "in %s",
	        past:   "%s ago",
	        s:  "s",
	        m:  "1min",
	        mm: "%dmin",
	        h:  "1h",
	        hh: "%dh",
	        d:  "1d",
	        dd: "%dd",
	        M:  "1m",
	        MM: "%dm",
	        y:  "1",
	        yy: "%dy"
	    }
	});

	function onDataSuccess(response) {
		if (!response || !response.data || !response.data.length) { return; }

		var html = elTemplate(response);
		$el.html(html);
	};

	function loadTempItems() {
		var data = [];
		for (var i=0; i<20; i++) {
			data.push({});
		}
		onDataSuccess({data:data});
	}
}

function Phrase(cfg) {
	var $el = $(cfg.elSelector);

	var idx = Math.floor(Math.random()*cfg.phrases.length),
		source = cfg.phrases[idx],
		template = Handlebars.compile(source);

	var html = template({
		"date": new Date("2013-03-21T07:50:00Z")/1000
	});

	$el.html(html);
}

Handlebars.registerHelper('time', function() {
	var time = moment.unix(this.date).fromNow(true);
	return time;
});

Handlebars.registerHelper('timeago', function() {
	var time = this.created_time? moment.unix(this.created_time).fromNow() : "";
	return time;
});
