// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

/*
// open a single window
var win = Ti.UI.createWindow({
	backgroundColor : 'black'
});

win.open();


var TiSmoothProgressBar = require('com.artanisdesign.tismoothprogressbar');
Ti.API.info("module is => " + TiSmoothProgressBar);

var p1, p2, p3, p4, p5;

if (Ti.Platform.name == "android") {
	p1 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		color : "red"
		//backgroundColor : "red"
	});

	win.add(p1);

	p2 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		color : "green",
		sectionsCount : 6,
		separatorLength : 4,
		speed : 0.5,
		reversed : true,
		interpolator : TiSmoothProgressBar.ACCELERATE
	});

	win.add(p2);

	p3 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		color : "yellow",
		sectionsCount : 10,
		separatorLength : 12,
		mirrorMode : true,
		interpolator : TiSmoothProgressBar.ACCELERATE_DECELERATE
	});

	win.add(p3);

	p4 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		color : "magenta",
		sectionsCount : 16,
		strokeWidth : 1
	});

	win.add(p4);

	p5 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		separatorLength : 20,
		speed : 2.0,
		strokeWidth : 16,
		interpolator : TiSmoothProgressBar.DECELERATE
	});

	win.add(p5);
}
*/
$.index.open();

var TiSmoothProgressBar = require('com.artanisdesign.tismoothprogressbar');
Ti.API.info("module is => " + TiSmoothProgressBar);

var p1, p2, p3, p4, p5;
function init() {

	p1 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		color : "red"
		//backgroundColor : "red"
	});

	$.index.add(p1);

	p2 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		color : "green",
		sectionsCount : 6,
		separatorLength : 4,
		speed : 0.5,
		reversed : true,
		interpolator : TiSmoothProgressBar.ACCELERATE
	});

	$.index.add(p2);

	p3 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		color : "yellow",
		sectionsCount : 10,
		separatorLength : 12,
		mirrorMode : true,
		interpolator : TiSmoothProgressBar.ACCELERATE_DECELERATE
	});

	$.index.add(p3);

	p4 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		color : "magenta",
		sectionsCount : 16,
		strokeWidth : 1
	});

	$.index.add(p4);

	p5 = TiSmoothProgressBar.createSmoothProgressBar({
		height : Ti.UI.SIZE,
		top : 20,
		width : Ti.UI.FILL,
		separatorLength : 20,
		speed : 2.0,
		strokeWidth : 16,
		interpolator : TiSmoothProgressBar.DECELERATE
	});

	$.index.add(p5);

}
