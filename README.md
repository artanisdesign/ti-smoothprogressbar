# TiSmoothProgressBar Module

## Description

Provides ProgressBar view for Titanium Android, which can be esaily customized.

![Image](../master/app/smoothprogress.gif)

##Before you start
* This is an Android module designed to work with Titanium SDK 3.2.0 or greater.
* Before getting start please note you might need to compile this module yourself

##Building from source
If you are building from source you will need to do the following:

* Update your .classpath file fit your environment
* Update the build.properties and build.xml to have the correct paths for your environment (NDK needed)

##Or download from dist folder

* [Download from dist folder](../master/dist/)

##Setup
* Compile the module
* Install the com.artanisdesign.tismoothprogressbar module. If you need help here is a "How To" [guide](https://wiki.appcelerator.org/display/guides/Configuring+Apps+to+Use+Modules). 
* You can now use the module via the commonJS require method, example shown below.

## Accessing the TiSmoothProgressBar Module

To access this module from JavaScript, you would do the following:

	var TiSmoothProgressBar = require("com.artanisdesign.tismoothprogressbar");

The TiSmoothProgressBar variable is a reference to the Module object.	

### TiSmoothProgressBar.createSmoothProgressBar({..});

Creates a TiSmoothProgressBar view, what you need to add to the view hiearchy.

### Arguments

Arguments are optional. Take a look on the example/app.js and Usage part. You can set basic View properties too.

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

Artanis, Gergely Cziva, info@artanisdesign.eu, Twitter:  [@_ artanis _](https://twitter.com/_artanis_ "_artanis_")

## License

 The MIT License (MIT)

 Copyright (c) 2014 Gergely Cziva, Artanis

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
