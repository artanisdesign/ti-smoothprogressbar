# TiSmoothProgressBar Module

## Description

Provides ProgressBar view for Titanium Android, which can be esaily customized.

## Accessing the TiSmoothProgressBar Module

To access this module from JavaScript, you would do the following:

	var TiSmoothProgressBar = require("com.artanisdesign.tismoothprogressbar");

The TiSmoothProgressBar variable is a reference to the Module object.	

### TiSmoothProgressBar.createSmoothProgressBar({..});

Creates a TiSmoothProgressBar view, what you need to add to the view hiearchy.

### Arguments

Arguments are optional. Take a look on the Usage part, you can set basic View properties too.

### Usage

	TiSmoothProgressBar.createSmoothProgressBar({
			height : Ti.UI.SIZE,
			top : 20,
			width : Ti.UI.FILL,
			color : "green", //color of the bar
			sectionsCount : 4, //default 
			separatorLength : 4, //default 8,
			strokeWidth : 12, //default 10
			speed : 1.0, //default 1.0
			reversed : true, //default false
			mirrorMode : false, //default false
			interpolator : TiSmoothProgressBar.ACCELERATE //default .LINEAR
		});


## Author

Artanis, Gergely Cziva, info@artanisdesign.eu

## License

Apache License, Version 2.0
