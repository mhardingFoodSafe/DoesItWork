(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._29_audio_symbol_volume = function() {
	this.initialize(img._29_audio_symbol_volume);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,46);


(lib.DMH_120a00_525_5a_Employee_cutting_lettuce_bread_2 = function() {
	this.initialize(img.DMH_120a00_525_5a_Employee_cutting_lettuce_bread_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,1257);


(lib.DMH_120a00_525_5b_Employee_washing_cutting_board_sink = function() {
	this.initialize(img.DMH_120a00_525_5b_Employee_washing_cutting_board_sink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,1100);


(lib.NextButton = function() {
	this.initialize(img.NextButton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,174);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WhiteBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgruAwzMAAAhhlMBXdAAAMAAABhlg");
	this.shape.setTransform(279.9,304.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteBg, new cjs.Rectangle(0,-8.1,559.8,624.6), null);


(lib.Washing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_120a00_525_5b_Employee_washing_cutting_board_sink();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.531,0.531);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Washing, new cjs.Rectangle(0,0,743.9,584.5), null);


(lib.Try3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.btn_incorrect.mouseEnabled = false;
		exportRoot.btn_correct.mouseEnabled = false;
		playSound("_120a00_en_5254");
	}
	this.frame_94 = function() {
		exportRoot.btn_incorrect.mouseEnabled = true;
		exportRoot.btn_correct.mouseEnabled = true;
		
		exportRoot.hint.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(93).call(this.frame_94).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Try2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.btn_incorrect.mouseEnabled = false;
		exportRoot.btn_correct.mouseEnabled = false;
		playSound("_120a00_en_5253");
	}
	this.frame_74 = function() {
		exportRoot.btn_incorrect.mouseEnabled = true;
		exportRoot.btn_correct.mouseEnabled = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(73).call(this.frame_74).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Try1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.btn_incorrect.mouseEnabled = false;
		exportRoot.btn_correct.mouseEnabled = false;
		playSound("_120a00_en_5252");
	}
	this.frame_58 = function() {
		exportRoot.btn_incorrect.mouseEnabled = true;
		exportRoot.btn_correct.mouseEnabled = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(57).call(this.frame_58).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.SoundButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AkwExIAAphIJhAAIAAJhg");
	this.shape.setTransform(30.5,30.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// Layer 1
	this.instance = new lib._29_audio_symbol_volume();
	this.instance.parent = this;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkwExIAAphIJhAAIAAJhg");
	this.shape_1.setTransform(30.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,46);


(lib.PressNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.NextButton();
	this.instance.parent = this;
	this.instance.setTransform(-135,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwA4QgUgUgBgiQAAgNAFgOQAEgOAJgLQAJgLAOgIQAOgGASAAQAYAAAOALQAPAKAGARQAHAQAAATIgBAKIgBAHIhdAAQABAJAFAHQAGAFAJAEQAIADALAAQAMgBAKgBIATgFIAGAgQgMAEgNACQgOADgPAAQgkgBgUgUgAAbgQQAAgFgCgHQgCgHgFgFQgGgEgKgBQgJAAgGAFQgGAEgDAIIgEAMIA1AAIAAAAg");
	this.shape.setTransform(227.8,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBFQgMgHgGgOQgHgOAAgXIAAhVIAuAAIAABOQAAAQAFAJQAGAJAMAAQAIAAAGgFQAFgFADgGIABgEIAAgGIAAhWIAuAAIAABjIAAAaIABAVIgoAAIgCgVIAAAAQgDAFgGAFQgGAGgJAEQgIAEgNAAQgPAAgMgGg");
	this.shape_1.setTransform(211.1,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAZBLIAAhQQAAgPgGgIQgFgJgMAAQgJABgGAFQgFAEgDAHIgBAGIAAAFIAABUIguAAIAAhjIAAgZIgBgVIAnAAIACAUIABAAQADgFAGgFQAGgGAKgEQAIgDAMgBQAPAAAMAHQALAHAHANQAHAOAAAWIAABWg");
	this.shape_2.setTransform(193.4,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBpIAAiRIAtAAIAACRgAgRhBQgGgHAAgJQAAgKAGgHQAHgGAKAAQALAAAGAGQAHAHAAAKQAAAJgHAHQgGAGgLAAQgKAAgHgGg");
	this.shape_3.setTransform(180.6,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBBcQgJgDgGgGQgFgGgDgLQgEgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QAAANAEAGQADAGALAAIAHAAIAGgBIAAAjQgEACgHABIgSABQgMAAgHgEg");
	this.shape_4.setTransform(170.9,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZBLIAAhQQAAgPgGgIQgFgJgMAAQgJABgGAFQgFAEgDAHIgBAGIAAAFIAABUIguAAIAAhjIAAgZIgBgVIAnAAIACAUIABAAQADgFAGgFQAGgGAKgEQAIgDAMgBQAPAAAMAHQALAHAHANQAHAOAAAWIAABWg");
	this.shape_5.setTransform(156.6,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnBEQgQgJgLgRQgJgRgBgYQAAgWAKgSQAKgSARgIQASgKAXAAQAWAAARAKQARAIAJASQAJAQAAAWQABAbgLARQgLARgSAJQgRAHgUABQgVgBgSgIgAgQglQgGAHgDAKQgDAKgBAKQAAANAEAKQAEAJAGAGQAHAGAJAAQANAAAHgMQAJgMgBgUQAAgKgCgKQgEgKgGgHQgGgGgKAAQgKAAgHAGg");
	this.shape_6.setTransform(139.3,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWBDQgRgJgKgQQgJgRAAgYQAAgUAJgSQAKgRATgKQASgLAbAAIASABQAJABAHADIgHAiIgKgDIgPgBQgSAAgKALQgLAMAAARQABANAFAKQAFAIAIAFQAJAFAMAAIAOgBIAMgEIAFAiQgGADgLABQgKADgOAAQgXAAgRgKg");
	this.shape_7.setTransform(124,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnBEQgQgJgLgRQgJgRgBgYQAAgWAKgSQAKgSARgIQASgKAXAAQAWAAARAKQARAIAJASQAJAQAAAWQABAbgLARQgLARgSAJQgRAHgUABQgVgBgSgIgAgQglQgGAHgDAKQgDAKgBAKQAAANAEAKQAEAJAGAGQAHAGAJAAQANAAAHgMQAJgMgBgUQAAgKgCgKQgEgKgGgHQgGgGgKAAQgKAAgHAGg");
	this.shape_8.setTransform(102.4,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgGgGgEgLQgDgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QAAANADAGQAEAGALAAIAHAAIAGgBIAAAjQgEACgHABIgSABQgMAAgHgEg");
	this.shape_9.setTransform(88.1,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAZBLIAAhQQAAgPgGgIQgFgJgMAAQgJABgGAFQgFAEgDAHIgBAGIAAAFIAABUIguAAIAAhjIAAgZIgBgVIAnAAIACAUIABAAQADgFAGgFQAGgGAKgEQAIgDAMgBQAPAAAMAHQALAHAHANQAHAOAAAWIAABWg");
	this.shape_10.setTransform(67.8,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnBEQgQgJgLgRQgKgRABgYQAAgWAJgSQAKgSARgIQASgKAXAAQAWAAARAKQARAIAJASQAKAQgBAWQABAbgLARQgMARgRAJQgSAHgTABQgWgBgRgIgAgQglQgGAHgDAKQgEAKAAAKQABANADAKQADAJAHAGQAHAGAJAAQANAAAIgMQAHgMABgUQAAgKgEgKQgDgKgGgHQgGgGgKAAQgKAAgHAGg");
	this.shape_11.setTransform(50.4,3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgCgLQgEgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAhAAIAAAiIghAAIAAA0QgBANAFAGQADAGALAAIAHAAIAHgBIAAAjQgFACgHABIgSABQgLAAgIgEg");
	this.shape_12.setTransform(36.1,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgCgLQgEgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAhAAIAAAiIghAAIAAA0QgBANAFAGQADAGALAAIAHAAIAHgBIAAAjQgFACgIABIgRABQgMAAgHgEg");
	this.shape_13.setTransform(25.1,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsBFQgMgHgGgOQgHgOAAgXIAAhVIAuAAIAABOQAAAQAFAJQAGAJAMAAQAIAAAGgFQAFgFADgGIABgEIAAgGIAAhWIAuAAIAABjIAAAaIABAVIgoAAIgCgVIAAAAQgDAFgGAFQgGAGgJAEQgIAEgNAAQgPAAgMgGg");
	this.shape_14.setTransform(11,3.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOBnQgMgGgIgNIgBAAIgBAVIgnAAIABgUIAAgYIAAioIAuAAIAABUIAAAAQAHgKALgFQAKgGAQAAQARAAAOAJQAOAJAHARQAIAPAAAXQAAAagKASQgJARgQAJQgPAJgRAAIgCAAQgLAAgKgFgAgSgDQgHAGgDAJIAAAFIAAAEIAAAVIAAAIQADAKAHAGQAHAGAKAAQAOAAAIgLQAJgKAAgUQAAgMgEgJQgDgJgHgFQgHgFgKAAQgJAAgIAGg");
	this.shape_15.setTransform(-6.4,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPApIgGhRIAoAAIgHBRgAgpApIgHhRIApAAIgIBRg");
	this.shape_16.setTransform(-27.7,-5.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBBcQgJgDgGgGQgFgGgEgLQgDgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QAAANADAGQAEAGALAAIAHAAIAGgBIAAAjQgEACgHABIgSABQgMAAgHgEg");
	this.shape_17.setTransform(-39.3,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAZBJIgPgaIgFgLIgFgLIgBAAIgFALIgGALIgOAaIgyAAIAyhJIgxhIIAzAAIAPAYIAGALIAFALIAAAAIAGgMIAGgLIANgXIAxAAIgwBFIAxBMg");
	this.shape_18.setTransform(-52.4,3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgwA4QgUgUgBgiQAAgNAFgOQAEgOAJgLQAJgLAOgIQAOgGASAAQAYAAAOALQAPAKAGARQAHAQAAATIgBAKIgBAHIhdAAQABAJAFAHQAGAFAJAEQAIADALAAQAMgBAKgBIATgFIAGAgQgMAEgNACQgOADgPAAQgkgBgUgUgAAbgQQAAgFgCgHQgCgHgFgFQgGgEgKgBQgJAAgGAFQgGAEgDAIIgEAMIA1AAIAAAAg");
	this.shape_19.setTransform(-68,3.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAjBlIgqhOIgSgiIgRglIgBABIACAqIAAAtIAAA9IgpAAIAAjJIA1AAIAoBKIASAhQAJASAGARIABAAIgCgoIgBgrIAAg7IApAAIAADJg");
	this.shape_20.setTransform(-86.3,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAQApIgHhRIAoAAIgGBRgAgpApIgHhRIAoAAIgHBRg");
	this.shape_21.setTransform(-102.6,-5.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgwA4QgUgUgBgiQAAgNAFgOQAEgOAJgLQAJgLAOgIQAOgGASAAQAYAAAOALQAPAKAGARQAHAQAAATIgBAKIgBAHIhdAAQABAJAFAHQAGAFAJAEQAIADALAAQAMgBAKgBIATgFIAGAgQgMAEgNACQgOADgPAAQgkgBgUgUgAAbgQQAAgFgCgHQgCgHgFgFQgGgEgKgBQgJAAgGAFQgGAEgDAIIgEAMIA1AAIAAAAg");
	this.shape_22.setTransform(-122.5,3.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYBqIAAhQQAAgPgGgIQgFgJgNABQgIAAgFAEQgGAEgCAHIgCAEIAAAGIAABWIgtAAIAAjTIAtAAIAABTIABAAQADgEAFgEIAKgHQAEgDAGgBIAMgBQAPAAALAGQAMAIAGAOQAIAOgBAVIAABVg");
	this.shape_23.setTransform(-139.2,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgCgLQgEgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QAAANAEAGQADAGALAAIAHAAIAGgBIAAAjQgEACgHABIgSABQgLAAgIgEg");
	this.shape_24.setTransform(-153.7,1.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBJQgMgCgJgFIAIggIALAEQAHAEAIABIAOABQAJAAAEgCQAFgEABgFQAAgGgFgDQgFgFgMgDQgWgIgJgKQgLgMABgOQAAgNAHgLQAIgLANgGQAOgGAQAAQANAAAMACQAKADAHADIgIAfQgFgDgJgCQgIgCgKgBQgIAAgEAEQgEADAAAFQgBAFAGADQAEAFANAEQAVAHAJAKQAKALABAQQAAAOgIAKQgHALgOAHQgOAFgUABQgOAAgNgEg");
	this.shape_25.setTransform(-171.5,3.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBJQgMgCgIgFIAIggIALAEQAGAEAHABIAPABQAJAAAFgCQAEgEAAgFQABgGgFgDQgFgFgLgDQgXgIgKgKQgKgMABgOQAAgNAHgLQAIgLANgGQANgGASAAQANAAAKACQALADAHADIgIAfQgFgDgJgCQgJgCgJgBQgIAAgDAEQgFADAAAFQAAAFAFADQAEAFAOAEQAUAHAJAKQAKALAAAQQAAAOgHAKQgHALgOAHQgPAFgTABQgPAAgMgEg");
	this.shape_26.setTransform(-184.5,3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgwA4QgUgUgBgiQAAgNAFgOQAEgOAJgLQAJgLAOgIQAOgGASAAQAYAAAOALQAPAKAGARQAHAQAAATIgBAKIgBAHIhdAAQABAJAFAHQAGAFAJAEQAIADALAAQAMgBAKgBIATgFIAGAgQgMAEgNACQgOADgPAAQgkgBgUgUgAAbgQQAAgFgCgHQgCgHgFgFQgGgEgKgBQgJAAgGAFQgGAEgDAIIgEAMIA1AAIAAAAg");
	this.shape_27.setTransform(-198.9,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgrBLIAAhhIgBgcIgBgUIAoAAIABAbIABAAQADgLAHgHQAGgGAIgEQAIgDAHAAIAFAAIAFAAIAAArIgGAAIgHAAQgNAAgIAGQgIAGgCAKIgBAFIAAAFIAABKg");
	this.shape_28.setTransform(-212,3.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhHBmIAAjHQAKgCAPgBIAkgBQAUAAAQAEQAPAEAKAIQAKAIAFAMQAHAMAAAPQAAAPgGAMQgEALgJAJQgMALgQAFQgSAFgTAAIgIAAIgHAAIAABIgAgThCIgHABIAAA8IAGABIAJAAQARAAALgIQAKgJAAgQQAAgOgJgHQgJgIgQAAIgMAAg");
	this.shape_29.setTransform(-226.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PressNext, new cjs.Rectangle(-237.7,-20.5,475.6,244.6), null);


(lib.OptionC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAEAGABAHQgBAIgEAGQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(-76.6,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(-88.3,41.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_2.setTransform(-104.1,41.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_3.setTransform(-120.5,44.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_4.setTransform(-132.5,41.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_5.setTransform(-145.7,41.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMBqIAAjUIAZAAIAADUg");
	this.shape_6.setTransform(-156.8,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBqIAAjUIAZAAIAADUg");
	this.shape_7.setTransform(-163.9,38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_8.setTransform(-175,41.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_9.setTransform(208.4,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQABgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQAMAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_10.setTransform(196,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBMAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_11.setTransform(181.6,3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_12.setTransform(165.8,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgsiQIAbAAIAUBJIAFAYIAGAWIABAAIAGgWIAGgYIAYhJIAVAAIAXBIIAHAZIAFAWIABAAIAFgWIAHgZIAUhIIAbAAIgvCQg");
	this.shape_13.setTransform(146.4,3.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgFgSQAJgGAMgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_14.setTransform(121.4,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(100.7,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNBIIg3iQIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CQg");
	this.shape_16.setTransform(85.9,3.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgCgIQgBgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_17.setTransform(71.1,3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_18.setTransform(55.9,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_19.setTransform(36.1,1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_20.setTransform(23,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_21.setTransform(5.8,6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_22.setTransform(-5.6,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_23.setTransform(-21.6,3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgIgDg");
	this.shape_24.setTransform(-45.6,1.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_25.setTransform(-53.9,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_26.setTransform(-67.8,3.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_27.setTransform(-81,3.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABPBKIAAhRQAAgVgJgMQgHgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgQgBQgIABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEALAAQAQAAAKAIQAKAIAEANIABAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQAKAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_28.setTransform(-101.1,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_29.setTransform(-121.8,3.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgIgDg");
	this.shape_30.setTransform(-135.1,1.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_31.setTransform(-146,3.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_32.setTransform(-160.2,3.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_33.setTransform(-175,3.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_34.setTransform(174.5,-34.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_35.setTransform(158.6,-38.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_36.setTransform(145.2,-36.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_37.setTransform(125.6,-34.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_38.setTransform(113.3,-34.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_39.setTransform(100,-34.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAjBIIgXhFIgHgWIgFgZIAAAAIgGAZIgIAXIgXBEIgYAAIgsiQIAcAAIASBJIAHAXIAEAYIABAAIAGgYIAHgWIAYhKIAVAAIAWBIIAIAYIAGAYIAAAAIAFgYIAGgYIAWhIIAZAAIgvCQg");
	this.shape_40.setTransform(82.1,-34.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_41.setTransform(59.6,-36.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_42.setTransform(46.4,-34.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXBmQgMgHgJgOIAAAAIgBAYIgXAAIAAgSIABgUIAAiuIAaAAIAABbIAAAAQAIgMAMgHQANgHAQgBQASABAOAJQANAJAJARQAHAPAAAWQAAAagJASQgKARgOAIQgPAJgRAAIgCAAQgNAAgMgGgAgYgNQgLAIgFAPIgBAFIAAAGIAAAaIAAAEIABAFQAEAOAKAIQAMAJAOAAQAUAAALgPQAMgPAAgaQAAgOgFgNQgFgLgJgHQgKgIgOAAQgNAAgLAJg");
	this.shape_43.setTransform(30.1,-38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQAPIAGgYIAFgYIAdgEQgEANgFAOIgKAaIgJATIgTADIAHgXg");
	this.shape_44.setTransform(11.4,-27.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_45.setTransform(1.1,-34.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_46.setTransform(-13.1,-34.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_47.setTransform(-28.2,-34.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_48.setTransform(-41.6,-36.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_49.setTransform(-51.5,-36.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_50.setTransform(-63.9,-34.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_51.setTransform(-75,-38.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_52.setTransform(-92.4,-34.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_53.setTransform(-108.2,-38.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_54.setTransform(-121.7,-36.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_55.setTransform(-140.4,-34.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_56.setTransform(-153.9,-34.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgBBmQgVABgQgJQgQgJgKgTQgKgTAAgfIAAh2IAbAAIAAB3QAAAWAGAPQAGAOALAHQAKAGAOAAQAWAAANgPQANgQAAghIAAh3IAbAAIAAB1QAAAfgKATQgLAUgQAJQgRAJgVAAIgBgBg");
	this.shape_57.setTransform(-169.5,-37.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgdB6QAQgWALgeQAKgeAAgoQAAgngKgeQgLgegQgWIAVAAQAIAMAJARQAJASAGAXQAFAXABAcQgBAdgFAXQgGAXgJARQgJASgIAMg");
	this.shape_58.setTransform(-190.5,-36.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_59.setTransform(-202.7,-37.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAKB6QgKgMgIgRQgJgRgGgXQgFgXgBgdQAAgdAHgXQAFgXAJgRQAIgSAKgMIAUAAQgRAWgKAeQgJAeAAAoQAAAnAKAeQAKAeAQAWg");
	this.shape_60.setTransform(-215.1,-36.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#808080").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAEAGABAHQgBAIgEAGQgFAFgIAAQgHAAgFgFg");
	this.shape_61.setTransform(-76.6,47);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_62.setTransform(-88.3,41.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_63.setTransform(-104.1,41.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#808080").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_64.setTransform(-120.5,44.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_65.setTransform(-132.5,41.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_66.setTransform(-145.7,41.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#808080").s().p("AgMBqIAAjUIAZAAIAADUg");
	this.shape_67.setTransform(-156.8,38);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#808080").s().p("AgMBqIAAjUIAZAAIAADUg");
	this.shape_68.setTransform(-163.9,38);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_69.setTransform(-175,41.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#808080").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_70.setTransform(208.4,1.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQABgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQAMAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_71.setTransform(196,3.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBMAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_72.setTransform(181.6,3.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_73.setTransform(165.8,-0.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#808080").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgsiQIAbAAIAUBJIAFAYIAGAWIABAAIAGgWIAGgYIAYhJIAVAAIAXBIIAHAZIAFAWIABAAIAFgWIAHgZIAUhIIAbAAIgvCQg");
	this.shape_74.setTransform(146.4,3.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgFgSQAJgGAMgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_75.setTransform(121.4,3.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_76.setTransform(100.7,3.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#808080").s().p("AgNBIIg3iQIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CQg");
	this.shape_77.setTransform(85.9,3.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgCgIQgBgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_78.setTransform(71.1,3.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_79.setTransform(55.9,-0.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#808080").s().p("AACBcQgGgDgGgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_80.setTransform(36.1,1.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_81.setTransform(23,-0.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#808080").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_82.setTransform(5.8,6.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#808080").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_83.setTransform(-5.6,0.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#808080").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_84.setTransform(-21.6,3.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgIgDg");
	this.shape_85.setTransform(-45.6,1.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#808080").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_86.setTransform(-53.9,0.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_87.setTransform(-67.8,3.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_88.setTransform(-81,3.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#808080").s().p("ABPBKIAAhRQAAgVgJgMQgHgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgQgBQgIABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEALAAQAQAAAKAIQAKAIAEANIABAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQAKAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_89.setTransform(-101.1,3.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_90.setTransform(-121.8,3.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgIgDg");
	this.shape_91.setTransform(-135.1,1.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_92.setTransform(-146,3.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_93.setTransform(-160.2,3.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#808080").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_94.setTransform(-175,3.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_95.setTransform(174.5,-34.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_96.setTransform(158.6,-38.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_97.setTransform(145.2,-36.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_98.setTransform(125.6,-34.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_99.setTransform(113.3,-34.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_100.setTransform(100,-34.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#808080").s().p("AAjBIIgXhFIgHgWIgFgZIAAAAIgGAZIgIAXIgXBEIgYAAIgsiQIAcAAIASBJIAHAXIAEAYIABAAIAGgYIAHgWIAYhKIAVAAIAWBIIAIAYIAGAYIAAAAIAFgYIAGgYIAWhIIAZAAIgvCQg");
	this.shape_101.setTransform(82.1,-34.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_102.setTransform(59.6,-36.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_103.setTransform(46.4,-34.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#808080").s().p("AgXBmQgMgHgJgOIAAAAIgBAYIgXAAIAAgSIABgUIAAiuIAaAAIAABbIAAAAQAIgMAMgHQANgHAQgBQASABAOAJQANAJAJARQAHAPAAAWQAAAagJASQgKARgOAIQgPAJgRAAIgCAAQgNAAgMgGgAgYgNQgLAIgFAPIgBAFIAAAGIAAAaIAAAEIABAFQAEAOAKAIQAMAJAOAAQAUAAALgPQAMgPAAgaQAAgOgFgNQgFgLgJgHQgKgIgOAAQgNAAgLAJg");
	this.shape_104.setTransform(30.1,-38);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#808080").s().p("AgQAPIAGgYIAFgYIAdgEQgEANgFAOIgKAaIgJATIgTADIAHgXg");
	this.shape_105.setTransform(11.4,-27.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_106.setTransform(1.1,-34.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#808080").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_107.setTransform(-13.1,-34.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_108.setTransform(-28.2,-34.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_109.setTransform(-41.6,-36.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#808080").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_110.setTransform(-51.5,-36.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_111.setTransform(-63.9,-34.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_112.setTransform(-75,-38.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_113.setTransform(-92.4,-34.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_114.setTransform(-108.2,-38.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_115.setTransform(-121.7,-36.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_116.setTransform(-140.4,-34.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_117.setTransform(-153.9,-34.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#808080").s().p("AgBBmQgVABgQgJQgQgJgKgTQgKgTAAgfIAAh2IAbAAIAAB3QAAAWAGAPQAGAOALAHQAKAGAOAAQAWAAANgPQANgQAAghIAAh3IAbAAIAAB1QAAAfgKATQgLAUgQAJQgRAJgVAAIgBgBg");
	this.shape_118.setTransform(-169.5,-37.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#808080").s().p("AgdB6QAQgWALgeQAKgeAAgoQAAgngKgeQgLgegQgWIAVAAQAIAMAJARQAJASAGAXQAFAXABAcQgBAdgFAXQgGAXgJARQgJASgIAMg");
	this.shape_119.setTransform(-190.5,-36.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#808080").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_120.setTransform(-202.7,-37.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#808080").s().p("AAKB6QgKgMgIgRQgJgRgGgXQgFgXgBgdQAAgdAHgXQAFgXAJgRQAIgSAKgMIAUAAQgRAWgKAeQgJAeAAAoQAAAnAKAeQAKAeAQAWg");
	this.shape_121.setTransform(-215.1,-36.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("EgjrAKOIAA0bMBHXAAAIAAUbg");
	this.shape_122.setTransform(6.4,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_122}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222,-58,444.1,116.2);


(lib.OptionB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(202.3,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAIALAAIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_1.setTransform(193.9,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_2.setTransform(185.5,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_3.setTransform(168.2,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_4.setTransform(154.6,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_5.setTransform(140.4,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_6.setTransform(117.6,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_7.setTransform(104.3,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_8.setTransform(85.6,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(69.7,22.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_10.setTransform(53.1,22.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_11.setTransform(41.3,19.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_12.setTransform(32.7,20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_13.setTransform(19.5,22.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_14.setTransform(3,22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgRAAgXQAAgVAJgSQAKgQARgLQASgKAXABQALAAAKABQAKADAFADIgGAUQgEgCgIgDQgIgCgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHALALAHQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_15.setTransform(-11.8,22.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAPgJASgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABAUIABARIgYAAIgCgZIAAAAQgHAMgMAIQgMAIgRAAQgSAAgPgJgAgVgPQgJAIgGAMQgFAMAAARQAAAOAFANQAFALAJAIQAKAHANAAQAOAAAKgIQAKgJAFgPIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgJgQABQgMAAgKAGg");
	this.shape_16.setTransform(-33.9,19.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_17.setTransform(-50.3,22.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgBgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_18.setTransform(-66.2,22.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_19.setTransform(-87.7,22.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_20.setTransform(-103.5,22.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_21.setTransform(-119.9,25.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_22.setTransform(-131.9,22.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_23.setTransform(-145.1,22.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_24.setTransform(-156.2,18.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_25.setTransform(-163.3,18.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_26.setTransform(-174.4,22.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATIgTAGQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_27.setTransform(205.4,-15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAjBrIAAhUQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABYIgbAAIAAjUIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGAMQAFAKAAATIAABXg");
	this.shape_28.setTransform(189.6,-19.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBAMAEAIQAFAHALAAIAJAAIAHgBIABATIgKADIgOABQgJAAgIgDg");
	this.shape_29.setTransform(176.1,-17.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATIgUAGQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_30.setTransform(157.4,-15.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgNBJIg3iRIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CRg");
	this.shape_31.setTransform(142.7,-15.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_32.setTransform(127.2,-15.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgPgBQgJABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEANAAQAPAAAKAIQAKAIAEANIABAAQADgGAFgFIAJgIQAGgFAIgDQAHgCALAAQAJAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_33.setTransform(106.5,-15.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_34.setTransform(86.5,-15.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_35.setTransform(74.9,-15.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_36.setTransform(54.6,-15.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAAMAFAIQAEAHALAAIAJAAIAGgBIABATIgJADIgOABQgJAAgIgDg");
	this.shape_37.setTransform(41.3,-17.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_38.setTransform(22.6,-15.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgWBCQgQgJgJgRQgJgRAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgCgKgBQgRAAgLAIQgLAHgGAMQgGANAAAPQAAAQAHANQAHAMALAGQAKAHAPAAQALAAAIgDIANgEIAFATQgGADgKADQgLADgPAAQgVAAgQgKg");
	this.shape_39.setTransform(8.4,-15.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_40.setTransform(-6.7,-15.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBAMAEAIQAFAHALAAIAJAAIAHgBIABATIgKADIgOABQgJAAgIgDg");
	this.shape_41.setTransform(-20.1,-17.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AACBcQgHgDgFgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAAMAFAIQAEAHALAAIAJAAIAGgBIABATIgJADIgOABQgJAAgHgDg");
	this.shape_42.setTransform(-30,-17.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATIgUAGQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_43.setTransform(-42.4,-15.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMBrIAAjUIAZAAIAADUg");
	this.shape_44.setTransform(-53.5,-19.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATIgTAGQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_45.setTransform(-70.9,-15.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAjBrIAAhUQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABYIgbAAIAAjUIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGAMQAFAKAAATIAABXg");
	this.shape_46.setTransform(-86.7,-19.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBAMAEAIQAFAHALAAIAJAAIAHgBIABATIgKADIgOABQgJAAgIgDg");
	this.shape_47.setTransform(-100.2,-17.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAjBrIAAhUQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABYIgbAAIAAjUIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGAMQAFAKAAATIAABXg");
	this.shape_48.setTransform(-119.7,-19.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_49.setTransform(-134,-15.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_50.setTransform(-147.5,-15.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAmBlIgZhpIgHgjIgGgeIAAAAIgGAeIgJAjIgdBpIgbAAIg0jJIAcAAIAYBlIAJAlIAGAhIABAAIAGghIAKglIAbhlIAbAAIAYBlIAIAkQAEARACARIABAAIAHgiIAJgkIAbhlIAbAAIg6DJg");
	this.shape_51.setTransform(-167,-18.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgdB6QAQgWALgeQAKgeAAgoQAAgngKgeQgLgegQgWIAVAAQAIAMAJARQAJASAGAXQAFAXABAcQgBAdgFAXQgGAXgJARQgJASgIAMg");
	this.shape_52.setTransform(-191,-17.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AguBmIgRgCIAAjGQAJgCAMgBIAbgBQASAAAOAEQANADAJAIQAIAGAFAJQAEAJAAAMQAAAOgJAMQgJAMgQAGIAAAAQAKADAJAFQAKAGAGALQAGAKABAPQgBANgEAKQgFAKgHAIQgLAJgRAFQgSAFgXAAIgYgBgAglBRIAKABIAMAAQAOAAAKgEQAMgDAIgJQAHgJAAgOQAAgOgHgJQgHgIgMgEQgLgEgOAAIgWAAgAgchRIgJABIAABBIAYAAQAUAAALgKQAMgJAAgPQgBgRgMgIQgMgIgTAAIgOABg");
	this.shape_53.setTransform(-202.2,-18.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAJB6QgJgMgIgRQgJgRgGgXQgFgXgBgdQAAgdAHgXQAFgXAJgRQAIgSAJgMIAVAAQgQAWgLAeQgKAeAAAoQAAAnALAeQAKAeAQAWg");
	this.shape_54.setTransform(-214.5,-17.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#808080").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_55.setTransform(202.3,28);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#808080").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAIALAAIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_56.setTransform(193.9,20.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#808080").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_57.setTransform(185.5,19.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_58.setTransform(168.2,22.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_59.setTransform(154.6,22.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_60.setTransform(140.4,22.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_61.setTransform(117.6,22.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#808080").s().p("AACBcQgHgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_62.setTransform(104.3,20.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_63.setTransform(85.6,22.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_64.setTransform(69.7,22.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_65.setTransform(53.1,22.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#808080").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_66.setTransform(41.3,19.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_67.setTransform(32.7,20.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_68.setTransform(19.5,22.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_69.setTransform(3,22.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#808080").s().p("AgWBCQgQgJgJgQQgJgRAAgXQAAgVAJgSQAKgQARgLQASgKAXABQALAAAKABQAKADAFADIgGAUQgEgCgIgDQgIgCgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHALALAHQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_70.setTransform(-11.8,22.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#808080").s().p("AgmBjQgNgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAPgJASgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABAUIABARIgYAAIgCgZIAAAAQgHAMgMAIQgMAIgRAAQgSAAgPgJgAgVgPQgJAIgGAMQgFAMAAARQAAAOAFANQAFALAJAIQAKAHANAAQAOAAAKgIQAKgJAFgPIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgJgQABQgMAAgKAGg");
	this.shape_71.setTransform(-33.9,19.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_72.setTransform(-50.3,22.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgBgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_73.setTransform(-66.2,22.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_74.setTransform(-87.7,22.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_75.setTransform(-103.5,22.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#808080").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_76.setTransform(-119.9,25.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_77.setTransform(-131.9,22.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_78.setTransform(-145.1,22.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_79.setTransform(-156.2,18.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_80.setTransform(-163.3,18.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_81.setTransform(-174.4,22.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATIgTAGQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_82.setTransform(205.4,-15.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#808080").s().p("AAjBrIAAhUQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABYIgbAAIAAjUIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGAMQAFAKAAATIAABXg");
	this.shape_83.setTransform(189.6,-19.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBAMAEAIQAFAHALAAIAJAAIAHgBIABATIgKADIgOABQgJAAgIgDg");
	this.shape_84.setTransform(176.1,-17.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATIgUAGQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_85.setTransform(157.4,-15.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#808080").s().p("AgNBJIg3iRIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CRg");
	this.shape_86.setTransform(142.7,-15.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_87.setTransform(127.2,-15.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#808080").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgPgBQgJABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEANAAQAPAAAKAIQAKAIAEANIABAAQADgGAFgFIAJgIQAGgFAIgDQAHgCALAAQAJAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_88.setTransform(106.5,-15.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_89.setTransform(86.5,-15.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_90.setTransform(74.9,-15.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_91.setTransform(54.6,-15.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAAMAFAIQAEAHALAAIAJAAIAGgBIABATIgJADIgOABQgJAAgIgDg");
	this.shape_92.setTransform(41.3,-17.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_93.setTransform(22.6,-15.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#808080").s().p("AgWBCQgQgJgJgRQgJgRAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgCgKgBQgRAAgLAIQgLAHgGAMQgGANAAAPQAAAQAHANQAHAMALAGQAKAHAPAAQALAAAIgDIANgEIAFATQgGADgKADQgLADgPAAQgVAAgQgKg");
	this.shape_94.setTransform(8.4,-15.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_95.setTransform(-6.7,-15.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBAMAEAIQAFAHALAAIAJAAIAHgBIABATIgKADIgOABQgJAAgIgDg");
	this.shape_96.setTransform(-20.1,-17.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#808080").s().p("AACBcQgHgDgFgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAAMAFAIQAEAHALAAIAJAAIAGgBIABATIgJADIgOABQgJAAgHgDg");
	this.shape_97.setTransform(-30,-17.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATIgUAGQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_98.setTransform(-42.4,-15.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#808080").s().p("AgMBrIAAjUIAZAAIAADUg");
	this.shape_99.setTransform(-53.5,-19.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATIgTAGQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_100.setTransform(-70.9,-15.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#808080").s().p("AAjBrIAAhUQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABYIgbAAIAAjUIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGAMQAFAKAAATIAABXg");
	this.shape_101.setTransform(-86.7,-19.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBAMAEAIQAFAHALAAIAJAAIAHgBIABATIgKADIgOABQgJAAgIgDg");
	this.shape_102.setTransform(-100.2,-17.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#808080").s().p("AAjBrIAAhUQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABYIgbAAIAAjUIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGAMQAFAKAAATIAABXg");
	this.shape_103.setTransform(-119.7,-19.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_104.setTransform(-134,-15.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_105.setTransform(-147.5,-15.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#808080").s().p("AAmBlIgZhpIgHgjIgGgeIAAAAIgGAeIgJAjIgdBpIgbAAIg0jJIAcAAIAYBlIAJAlIAGAhIABAAIAGghIAKglIAbhlIAbAAIAYBlIAIAkQAEARACARIABAAIAHgiIAJgkIAbhlIAbAAIg6DJg");
	this.shape_106.setTransform(-167,-18.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#808080").s().p("AgdB6QAQgWALgeQAKgeAAgoQAAgngKgeQgLgegQgWIAVAAQAIAMAJARQAJASAGAXQAFAXABAcQgBAdgFAXQgGAXgJARQgJASgIAMg");
	this.shape_107.setTransform(-191,-17.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#808080").s().p("AguBmIgRgCIAAjGQAJgCAMgBIAbgBQASAAAOAEQANADAJAIQAIAGAFAJQAEAJAAAMQAAAOgJAMQgJAMgQAGIAAAAQAKADAJAFQAKAGAGALQAGAKABAPQgBANgEAKQgFAKgHAIQgLAJgRAFQgSAFgXAAIgYgBgAglBRIAKABIAMAAQAOAAAKgEQAMgDAIgJQAHgJAAgOQAAgOgHgJQgHgIgMgEQgLgEgOAAIgWAAgAgchRIgJABIAABBIAYAAQAUAAALgKQAMgJAAgPQgBgRgMgIQgMgIgTAAIgOABg");
	this.shape_108.setTransform(-202.2,-18.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#808080").s().p("AAJB6QgJgMgIgRQgJgRgGgXQgFgXgBgdQAAgdAHgXQAFgXAJgRQAIgSAJgMIAVAAQgQAWgLAeQgKAeAAAoQAAAnALAeQAKAeAQAWg");
	this.shape_109.setTransform(-214.5,-17.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("EgilAGHIAAsNMBFLAAAIAAMNg");

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("EgjRAHmIAAvLMBGjAAAIAAPLg");
	this.shape_111.setTransform(4.4,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_111}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.4,-39,442.9,78.1);


(lib.Optiona = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAGQgFAFgIAAQgIAAgEgFg");
	this.shape.setTransform(112.1,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgRAAgVQgBgZAKgQQAIgSAPgJQAPgJARgBQAQABALAHQALAGAGAIIAAAAIAAhWIAaAAIAACuIABAVIABARIgYAAIgCgZIAAAAQgHAMgMAIQgMAIgRAAQgSAAgPgJgAgVgPQgJAIgGALQgFANAAARQAAAOAFANQAFALAJAIQAKAHANAAQANAAALgIQAKgJAFgPIABgFIAAgGIAAgZIAAgGIgBgFQgDgMgLgJQgJgJgPAAQgNABgKAGg");
	this.shape_1.setTransform(99.8,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(87.8,41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQgBgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_3.setTransform(74.5,41.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_4.setTransform(59.4,41.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXBmQgMgHgJgOIgBAAIgBAYIgWAAIABgSIAAgUIAAiuIAaAAIAABbIABAAQAHgMAMgHQAMgHARgBQASABAOAJQAOAJAHARQAIAPAAAWQAAAagKASQgJARgPAIQgOAJgRAAIgCAAQgNAAgMgGgAgYgNQgLAIgEAPIgBAFIgBAGIAAAaIABAEIAAAFQAFAOAJAIQAMAJAOAAQATAAAMgPQAMgPAAgaQAAgOgFgNQgFgLgJgHQgKgIgOAAQgNAAgLAJg");
	this.shape_5.setTransform(43.1,38.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_6.setTransform(18.9,44.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_7.setTransform(2.7,41.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_8.setTransform(-9.1,38.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgJQgCgKgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABNQgBAOAEAHQAFAIALgBIAJAAIAHgCIABAUIgKADIgOABQgJAAgIgDg");
	this.shape_9.setTransform(-17.7,39.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgJQgDgKAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAAOAFAHQAEAIALgBIAJAAIAGgCIABAUIgJADIgOABQgJAAgHgDg");
	this.shape_10.setTransform(-27.7,39.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_11.setTransform(-40.8,41.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWBCQgQgJgJgRQgJgQAAgXQAAgVAJgRQAKgSARgJQASgKAXAAQALAAAKACQAKACAFADIgGAUQgEgDgIgCQgIgBgKAAQgRAAgLAHQgLAHgGANQgGAMAAAOQAAARAHAMQAHAMALAHQAKAGAPAAQALAAAIgCIANgFIAFAUQgGADgKACQgLADgPAAQgVAAgQgJg");
	this.shape_12.setTransform(-55.7,41.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgRAAgVQABgZAIgQQAJgSAPgJQAOgJATgBQAPABALAHQALAGAGAIIAAAAIAAhWIAaAAIAACuIABAVIABARIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgPQgKAIgFALQgFANAAARQAAAOAFANQAFALAJAIQAKAHANAAQAOAAAKgIQAKgJAEgPIACgFIAAgGIAAgZIAAgGIgCgFQgCgMgLgJQgKgJgPAAQgMABgKAGg");
	this.shape_13.setTransform(-77.8,38.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_14.setTransform(-93.3,41.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag6BIIAAgPIBBhUIAJgLIAKgMIAAgBIhOAAIAAgUIBtAAIAAAQIhABTIgJAMIgJALIAAABIBUAAIAAAUg");
	this.shape_15.setTransform(-107.2,41.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_16.setTransform(-117.2,38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgJQgDgKAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAAOAFAHQAEAIALgBIAJAAIAGgCIABAUIgJADIgOABQgJAAgHgDg");
	this.shape_17.setTransform(-125.8,39.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_18.setTransform(-134.1,38.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_19.setTransform(-146,41.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_20.setTransform(-161.9,41.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_21.setTransform(-174.7,41.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgRAAgVQAAgZAJgQQAJgSAPgJQAOgJASgBQAQABALAGQAMAGAEAKIABAAIAAhXIAaAAIAACvIAAAUIABARIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgPQgKAIgEAMQgGAMAAARQAAAOAFANQAEALAKAIQAJAHAOAAQANAAALgIQALgJADgPIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgJgOABQgNAAgKAGg");
	this.shape_22.setTransform(170.8,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_23.setTransform(154.4,3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_24.setTransform(138.5,3.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgRAAgVQABgZAIgQQAJgSAPgJQAOgJASgBQAQABALAGQAMAGAEAKIABAAIAAhXIAaAAIAACvIAAAUIABARIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgOgJgAgVgPQgKAIgEAMQgGAMAAARQAAAOAFANQAFALAJAIQAJAHAOAAQANAAALgIQALgJADgPIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgJgPABQgMAAgKAGg");
	this.shape_25.setTransform(116.4,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_26.setTransform(100.9,3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_27.setTransform(85,3.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_28.setTransform(69.1,3.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_29.setTransform(54.8,3.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_30.setTransform(43.6,-0.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_31.setTransform(33.5,3.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_32.setTransform(12.7,3.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_33.setTransform(-8.8,-0.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_34.setTransform(-22.2,1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_35.setTransform(-30.6,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAiBIIgVhFIgIgWIgFgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAYIAFAWIABAAIAHgWIAGgYIAYhJIAVAAIAWBIIAIAZIAGAWIABAAIAEgWIAHgZIAUhIIAaAAIguCQg");
	this.shape_36.setTransform(-45.1,3.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_37.setTransform(-66.6,3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_38.setTransform(-79.8,3.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_39.setTransform(-99.8,3.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_40.setTransform(-120.6,3.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_41.setTransform(-133.9,1.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_42.setTransform(-144.7,3.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_43.setTransform(-158.9,3.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_44.setTransform(-173.8,3.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_45.setTransform(212,-34.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_46.setTransform(201.7,-37.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_47.setTransform(189.3,-31.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_48.setTransform(177.4,-34.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_49.setTransform(164.2,-34.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_50.setTransform(153,-38.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_51.setTransform(145.9,-38.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_52.setTransform(134.8,-34.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBMAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_53.setTransform(114.1,-34.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_54.setTransform(98.3,-38.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_55.setTransform(84.8,-36.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_56.setTransform(69.6,-34.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_57.setTransform(55.6,-34.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_58.setTransform(43.8,-38.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_59.setTransform(28.7,-38.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_60.setTransform(17.6,-34.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_61.setTransform(3.3,-34.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_62.setTransform(-16.8,-34.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_63.setTransform(-43.1,-34.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_64.setTransform(-59,-38.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_65.setTransform(-72.4,-36.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_66.setTransform(-91.1,-34.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_67.setTransform(-104.5,-38.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_68.setTransform(-120.3,-34.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgLABgJAHQgIAGgEAKIgBAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgPgBQgJABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEANAAQAPAAAKAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAJAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_69.setTransform(-139.7,-34.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_70.setTransform(-159.7,-34.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAnBmQgDgFgDgMIgIggQgEgUgJgJQgKgJgQgBIgZAAIAABYIgaAAIAAjHIAXgDIAbgBQAUAAAOAEQAOAEAKAJQAHAGAEAKQAEAKAAAMQAAANgFALQgFAKgIAHQgJAGgLAEIAAABQAMAEAHAKQAIAKADAQIAJAkQAEAOADAGgAgdhQIgKACIAABJIAbAAQAUAAAMgKQAMgKAAgSQAAgTgMgKQgNgJgUAAIgQABg");
	this.shape_71.setTransform(-174.5,-37.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgdB6QAQgWALgeQAKgeAAgoQAAgngKgeQgLgegQgWIAVAAQAIAMAJARQAJASAGAXQAFAXABAcQgBAdgFAXQgGAXgJARQgJASgIAMg");
	this.shape_72.setTransform(-194.6,-36.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AA5BlIgWg/IhHAAIgUA/IgbAAIBEjJIAfAAIBEDJgAAdARIgTg5IgGgTIgEgSIAAAAIgFASIgFASIgUA6IA7AAg");
	this.shape_73.setTransform(-207.4,-37.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAKB6QgKgMgIgRQgJgRgGgXQgGgXAAgdQABgdAFgXQAGgXAJgRQAIgSAKgMIAUAAQgRAWgKAeQgKAeAAAoQAAAnAKAeQALAeAQAWg");
	this.shape_74.setTransform(-220.2,-36.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#808080").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAGQgFAFgIAAQgIAAgEgFg");
	this.shape_75.setTransform(112.1,47);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#808080").s().p("AgmBjQgNgJgIgRQgIgRAAgVQgBgZAKgQQAIgSAPgJQAPgJARgBQAQABALAHQALAGAGAIIAAAAIAAhWIAaAAIAACuIABAVIABARIgYAAIgCgZIAAAAQgHAMgMAIQgMAIgRAAQgSAAgPgJgAgVgPQgJAIgGALQgFANAAARQAAAOAFANQAFALAJAIQAKAHANAAQANAAALgIQAKgJAFgPIABgFIAAgGIAAgZIAAgGIgBgFQgDgMgLgJQgJgJgPAAQgNABgKAGg");
	this.shape_76.setTransform(99.8,38.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_77.setTransform(87.8,41.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQgBgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_78.setTransform(74.5,41.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_79.setTransform(59.4,41.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#808080").s().p("AgXBmQgMgHgJgOIgBAAIgBAYIgWAAIABgSIAAgUIAAiuIAaAAIAABbIABAAQAHgMAMgHQAMgHARgBQASABAOAJQAOAJAHARQAIAPAAAWQAAAagKASQgJARgPAIQgOAJgRAAIgCAAQgNAAgMgGgAgYgNQgLAIgEAPIgBAFIgBAGIAAAaIABAEIAAAFQAFAOAJAIQAMAJAOAAQATAAAMgPQAMgPAAgaQAAgOgFgNQgFgLgJgHQgKgIgOAAQgNAAgLAJg");
	this.shape_80.setTransform(43.1,38.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#808080").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_81.setTransform(18.9,44.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_82.setTransform(2.7,41.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#808080").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_83.setTransform(-9.1,38.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgJQgCgKgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABNQgBAOAEAHQAFAIALgBIAJAAIAHgCIABAUIgKADIgOABQgJAAgIgDg");
	this.shape_84.setTransform(-17.7,39.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#808080").s().p("AACBcQgHgDgEgFQgGgGgCgJQgDgKAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAAOAFAHQAEAIALgBIAJAAIAGgCIABAUIgJADIgOABQgJAAgHgDg");
	this.shape_85.setTransform(-27.7,39.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_86.setTransform(-40.8,41.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#808080").s().p("AgWBCQgQgJgJgRQgJgQAAgXQAAgVAJgRQAKgSARgJQASgKAXAAQALAAAKACQAKACAFADIgGAUQgEgDgIgCQgIgBgKAAQgRAAgLAHQgLAHgGANQgGAMAAAOQAAARAHAMQAHAMALAHQAKAGAPAAQALAAAIgCIANgFIAFAUQgGADgKACQgLADgPAAQgVAAgQgJg");
	this.shape_87.setTransform(-55.7,41.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#808080").s().p("AglBjQgOgJgIgRQgJgRAAgVQABgZAIgQQAJgSAPgJQAOgJATgBQAPABALAHQALAGAGAIIAAAAIAAhWIAaAAIAACuIABAVIABARIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgPQgKAIgFALQgFANAAARQAAAOAFANQAFALAJAIQAKAHANAAQAOAAAKgIQAKgJAEgPIACgFIAAgGIAAgZIAAgGIgCgFQgCgMgLgJQgKgJgPAAQgMABgKAGg");
	this.shape_88.setTransform(-77.8,38.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_89.setTransform(-93.3,41.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#808080").s().p("Ag6BIIAAgPIBBhUIAJgLIAKgMIAAgBIhOAAIAAgUIBtAAIAAAQIhABTIgJAMIgJALIAAABIBUAAIAAAUg");
	this.shape_90.setTransform(-107.2,41.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#808080").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_91.setTransform(-117.2,38.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#808080").s().p("AACBcQgHgDgEgFQgGgGgCgJQgDgKAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAAOAFAHQAEAIALgBIAJAAIAGgCIABAUIgJADIgOABQgJAAgHgDg");
	this.shape_92.setTransform(-125.8,39.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#808080").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_93.setTransform(-134.1,38.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_94.setTransform(-146,41.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_95.setTransform(-161.9,41.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_96.setTransform(-174.7,41.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#808080").s().p("AgmBjQgNgJgIgRQgJgRAAgVQAAgZAJgQQAJgSAPgJQAOgJASgBQAQABALAGQAMAGAEAKIABAAIAAhXIAaAAIAACvIAAAUIABARIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgPQgKAIgEAMQgGAMAAARQAAAOAFANQAEALAKAIQAJAHAOAAQANAAALgIQALgJADgPIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgJgOABQgNAAgKAGg");
	this.shape_97.setTransform(170.8,0.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_98.setTransform(154.4,3.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_99.setTransform(138.5,3.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#808080").s().p("AglBjQgOgJgIgRQgJgRAAgVQABgZAIgQQAJgSAPgJQAOgJASgBQAQABALAGQAMAGAEAKIABAAIAAhXIAaAAIAACvIAAAUIABARIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgOgJgAgVgPQgKAIgEAMQgGAMAAARQAAAOAFANQAFALAJAIQAJAHAOAAQANAAALgIQALgJADgPIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgJgPABQgMAAgKAGg");
	this.shape_100.setTransform(116.4,0.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_101.setTransform(100.9,3.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_102.setTransform(85,3.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_103.setTransform(69.1,3.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_104.setTransform(54.8,3.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_105.setTransform(43.6,-0.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#808080").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_106.setTransform(33.5,3.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_107.setTransform(12.7,3.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_108.setTransform(-8.8,-0.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_109.setTransform(-22.2,1.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#808080").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_110.setTransform(-30.6,0.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#808080").s().p("AAiBIIgVhFIgIgWIgFgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAYIAFAWIABAAIAHgWIAGgYIAYhJIAVAAIAWBIIAIAZIAGAWIABAAIAEgWIAHgZIAUhIIAaAAIguCQg");
	this.shape_111.setTransform(-45.1,3.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_112.setTransform(-66.6,3.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_113.setTransform(-79.8,3.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#808080").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_114.setTransform(-99.8,3.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_115.setTransform(-120.6,3.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#808080").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_116.setTransform(-133.9,1.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_117.setTransform(-144.7,3.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_118.setTransform(-158.9,3.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#808080").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_119.setTransform(-173.8,3.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#808080").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_120.setTransform(212,-34.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#808080").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_121.setTransform(201.7,-37.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#808080").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_122.setTransform(189.3,-31.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_123.setTransform(177.4,-34.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_124.setTransform(164.2,-34.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_125.setTransform(153,-38.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_126.setTransform(145.9,-38.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_127.setTransform(134.8,-34.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBMAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_128.setTransform(114.1,-34.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_129.setTransform(98.3,-38.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#808080").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_130.setTransform(84.8,-36.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_131.setTransform(69.6,-34.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_132.setTransform(55.6,-34.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#808080").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_133.setTransform(43.8,-38.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_134.setTransform(28.7,-38.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_135.setTransform(17.6,-34.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_136.setTransform(3.3,-34.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#808080").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_137.setTransform(-16.8,-34.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_138.setTransform(-43.1,-34.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_139.setTransform(-59,-38.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#808080").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_140.setTransform(-72.4,-36.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_141.setTransform(-91.1,-34.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#808080").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_142.setTransform(-104.5,-38.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_143.setTransform(-120.3,-34.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#808080").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgLABgJAHQgIAGgEAKIgBAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgPgBQgJABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEANAAQAPAAAKAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAJAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_144.setTransform(-139.7,-34.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_145.setTransform(-159.7,-34.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#808080").s().p("AAnBmQgDgFgDgMIgIggQgEgUgJgJQgKgJgQgBIgZAAIAABYIgaAAIAAjHIAXgDIAbgBQAUAAAOAEQAOAEAKAJQAHAGAEAKQAEAKAAAMQAAANgFALQgFAKgIAHQgJAGgLAEIAAABQAMAEAHAKQAIAKADAQIAJAkQAEAOADAGgAgdhQIgKACIAABJIAbAAQAUAAAMgKQAMgKAAgSQAAgTgMgKQgNgJgUAAIgQABg");
	this.shape_146.setTransform(-174.5,-37.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#808080").s().p("AgdB6QAQgWALgeQAKgeAAgoQAAgngKgeQgLgegQgWIAVAAQAIAMAJARQAJASAGAXQAFAXABAcQgBAdgFAXQgGAXgJARQgJASgIAMg");
	this.shape_147.setTransform(-194.6,-36.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#808080").s().p("AA5BlIgWg/IhHAAIgUA/IgbAAIBEjJIAfAAIBEDJgAAdARIgTg5IgGgTIgEgSIAAAAIgFASIgFASIgUA6IA7AAg");
	this.shape_148.setTransform(-207.4,-37.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#808080").s().p("AAKB6QgKgMgIgRQgJgRgGgXQgGgXAAgdQABgdAFgXQAGgXAJgRQAIgSAKgMIAUAAQgRAWgKAeQgKAeAAAoQAAAnAKAeQALAeAQAWg");
	this.shape_149.setTransform(-220.2,-36.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("EgjeAJFIAAyJMBG9AAAIAASJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_150}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.1,-58,454.3,116.2);


(lib.Interactivebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_120a00_525_5a_Employee_cutting_lettuce_bread_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.451,0.451);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Interactivebg, new cjs.Rectangle(0,0,631.5,567), null);


(lib.HintCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BA1E1E").ss(7,1,1).p("ANVAAQAAFij6D5Qj5D6liAAQlgAAj7j6Qj5j5AAliQAAlgD5j7QD7j5FgAAQFiAAD5D5QD6D7AAFgg");
	this.shape.setTransform(85.3,85.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HintCircle, new cjs.Rectangle(-3.5,-3.5,177.6,177.6), null);


(lib.Directions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgRABgVQAAgZAJgQQAIgSAPgJQAPgJASgBQAPABALAGQALAGAGAKIAAAAIAAhXIAaAAIAACvIABAUIABARIgYAAIgCgZIAAAAQgHAMgMAIQgMAIgRAAQgSAAgOgJgAgVgPQgJAIgGAMQgFAMAAARQAAAOAFANQAFALAJAIQAKAHANAAQAOAAAKgIQAKgJAFgPIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgJgQABQgMAAgKAGg");
	this.shape.setTransform(315.7,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_1.setTransform(300.2,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_2.setTransform(284.3,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_3.setTransform(268.5,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhDBoIAAidIAAgZIgBgWIAXAAIACAZIABAAQAIgNAMgHQANgIARAAQARAAAPAKQANAIAIARQAIARAAAWQAAAagKAQQgIASgQAIQgPAJgQAAQgOgBgMgFQgLgGgHgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAGIAAAZIABAFIAAAFQAEANALAIQAKAJAPAAQANAAAJgHQAKgHAGgNQAFgLAAgRQAAgPgFgMQgFgMgKgHQgKgIgNAAQgNAAgLAJg");
	this.shape_4.setTransform(252.9,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhDBoIAAidIgBgZIAAgWIAYAAIAAAZIABAAQAJgNAMgHQANgIARAAQASAAANAKQAOAIAIARQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgSAAQgNgBgMgFQgLgGgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAGIAAAZIAAAFIABAFQAEANAKAIQALAJAPAAQANAAAKgHQAJgHAFgNQAGgLAAgRQAAgPgFgMQgFgMgKgHQgKgIgNAAQgNAAgLAJg");
	this.shape_5.setTransform(235.9,6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_6.setTransform(219.3,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_7.setTransform(204.1,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_8.setTransform(183.4,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(169.9,3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_10.setTransform(154.8,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAGgCIACAVIgKACIgOABQgJAAgIgDg");
	this.shape_11.setTransform(135,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_12.setTransform(123.5,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_13.setTransform(109.1,3.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgHgDg");
	this.shape_14.setTransform(97.1,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_15.setTransform(83.9,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_16.setTransform(67.4,3.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_17.setTransform(52.6,3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_18.setTransform(41.1,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_19.setTransform(30.5,3.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_20.setTransform(18.6,3.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_21.setTransform(4.5,3.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_22.setTransform(-7.8,3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_23.setTransform(-20.1,3.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_24.setTransform(-40.8,3.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_25.setTransform(-52.4,3.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_26.setTransform(-65.6,3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_27.setTransform(-81.4,-0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAiBIIgVhFIgIgWIgFgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAGAYIAEAWIABAAIAHgWIAGgYIAYhJIAVAAIAWBIIAIAZIAGAWIABAAIAEgWIAGgZIAVhIIAaAAIgvCQg");
	this.shape_28.setTransform(-100.8,3.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_29.setTransform(-125.8,3.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_30.setTransform(-140.2,3.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_31.setTransform(-151.8,3.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_32.setTransform(-165.1,3.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_33.setTransform(-185.8,3.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_34.setTransform(-201.6,-0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_35.setTransform(-215.1,1.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_36.setTransform(-234.6,3.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_37.setTransform(-251.2,3.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_38.setTransform(-271.5,-0.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_39.setTransform(-286.4,3.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_40.setTransform(-296.7,0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_41.setTransform(-303.8,-0.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_42.setTransform(-316,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Directions, new cjs.Rectangle(-326.7,-20,653.6,40.1), null);


(lib.Correctclick = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.btn_incorrect.visible = false;
		exportRoot.btn_correct.visible = false;
		
		exportRoot.hint.gotoAndPlay(1);
		playSound("_120a00_en_5256");
	}
	this.frame_399 = function() {
		exportRoot.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(398).call(this.frame_399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cDisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAEAGABAHQgBAIgEAGQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(-76.6,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(-88.3,41.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_2.setTransform(-104.1,41.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_3.setTransform(-120.5,44.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_4.setTransform(-132.5,41.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_5.setTransform(-145.7,41.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#808080").s().p("AgMBqIAAjUIAZAAIAADUg");
	this.shape_6.setTransform(-156.8,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#808080").s().p("AgMBqIAAjUIAZAAIAADUg");
	this.shape_7.setTransform(-163.9,38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_8.setTransform(-175,41.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#808080").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_9.setTransform(208.4,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQABgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQAMAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_10.setTransform(196,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBMAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_11.setTransform(181.6,3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_12.setTransform(165.8,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#808080").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgsiQIAbAAIAUBJIAFAYIAGAWIABAAIAGgWIAGgYIAYhJIAVAAIAXBIIAHAZIAFAWIABAAIAFgWIAHgZIAUhIIAbAAIgvCQg");
	this.shape_13.setTransform(146.4,3.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgFgSQAJgGAMgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_14.setTransform(121.4,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(100.7,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#808080").s().p("AgNBIIg3iQIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CQg");
	this.shape_16.setTransform(85.9,3.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgCgIQgBgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_17.setTransform(71.1,3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_18.setTransform(55.9,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#808080").s().p("AACBcQgGgDgGgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_19.setTransform(36.1,1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgGAFgEQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_20.setTransform(23,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#808080").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_21.setTransform(5.8,6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#808080").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_22.setTransform(-5.6,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#808080").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_23.setTransform(-21.6,3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgIgDg");
	this.shape_24.setTransform(-45.6,1.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#808080").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_25.setTransform(-53.9,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_26.setTransform(-67.8,3.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_27.setTransform(-81,3.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#808080").s().p("ABPBKIAAhRQAAgVgJgMQgHgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgQgBQgIABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEALAAQAQAAAKAIQAKAIAEANIABAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQAKAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_28.setTransform(-101.1,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_29.setTransform(-121.8,3.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgIgDg");
	this.shape_30.setTransform(-135.1,1.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_31.setTransform(-146,3.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_32.setTransform(-160.2,3.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#808080").s().p("AgWBCQgQgJgJgQQgJgSAAgWQAAgVAJgRQAKgRARgKQASgLAXABQALAAAKABQAKADAFADIgGAUQgEgDgIgCQgIgCgKAAQgRABgLAHQgLAHgGAMQgGANAAAOQAAARAHAMQAHANALAGQAKAGAPAAQALABAIgDIANgFIAFAUQgGADgKACQgLADgPABQgVAAgQgKg");
	this.shape_33.setTransform(-175,3.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_34.setTransform(174.5,-34.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_35.setTransform(158.6,-38.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_36.setTransform(145.2,-36.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_37.setTransform(125.6,-34.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_38.setTransform(113.3,-34.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_39.setTransform(100,-34.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#808080").s().p("AAjBIIgXhFIgHgWIgFgZIAAAAIgGAZIgIAXIgXBEIgYAAIgsiQIAcAAIASBJIAHAXIAEAYIABAAIAGgYIAHgWIAYhKIAVAAIAWBIIAIAYIAGAYIAAAAIAFgYIAGgYIAWhIIAZAAIgvCQg");
	this.shape_40.setTransform(82.1,-34.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_41.setTransform(59.6,-36.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_42.setTransform(46.4,-34.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#808080").s().p("AgXBmQgMgHgJgOIAAAAIgBAYIgXAAIAAgSIABgUIAAiuIAaAAIAABbIAAAAQAIgMAMgHQANgHAQgBQASABAOAJQANAJAJARQAHAPAAAWQAAAagJASQgKARgOAIQgPAJgRAAIgCAAQgNAAgMgGgAgYgNQgLAIgFAPIgBAFIAAAGIAAAaIAAAEIABAFQAEAOAKAIQAMAJAOAAQAUAAALgPQAMgPAAgaQAAgOgFgNQgFgLgJgHQgKgIgOAAQgNAAgLAJg");
	this.shape_43.setTransform(30.1,-38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#808080").s().p("AgQAPIAGgYIAFgYIAdgEQgEANgFAOIgKAaIgJATIgTADIAHgXg");
	this.shape_44.setTransform(11.4,-27.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_45.setTransform(1.1,-34.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#808080").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_46.setTransform(-13.1,-34.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_47.setTransform(-28.2,-34.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_48.setTransform(-41.6,-36.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#808080").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_49.setTransform(-51.5,-36.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_50.setTransform(-63.9,-34.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_51.setTransform(-75,-38.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_52.setTransform(-92.4,-34.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#808080").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_53.setTransform(-108.2,-38.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_54.setTransform(-121.7,-36.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_55.setTransform(-140.4,-34.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_56.setTransform(-153.9,-34.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#808080").s().p("AgBBmQgVABgQgJQgQgJgKgTQgKgTAAgfIAAh2IAbAAIAAB3QAAAWAGAPQAGAOALAHQAKAGAOAAQAWAAANgPQANgQAAghIAAh3IAbAAIAAB1QAAAfgKATQgLAUgQAJQgRAJgVAAIgBgBg");
	this.shape_57.setTransform(-169.5,-37.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#808080").s().p("AgdB6QAQgWALgeQAKgeAAgoQAAgngKgeQgLgegQgWIAVAAQAIAMAJARQAJASAGAXQAFAXABAcQgBAdgFAXQgGAXgJARQgJASgIAMg");
	this.shape_58.setTransform(-190.5,-36.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#808080").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_59.setTransform(-202.7,-37.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#808080").s().p("AAKB6QgKgMgIgRQgJgRgGgXQgFgXgBgdQAAgdAHgXQAFgXAJgRQAIgSAKgMIAUAAQgRAWgKAeQgJAeAAAoQAAAnAKAeQAKAeAQAWg");
	this.shape_60.setTransform(-215.1,-36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cDisabled, new cjs.Rectangle(-222,-58,444.1,116.2), null);


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525252").s().p("EgvlAupMAAAhdRMBfLAAAMAAABdRg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BigWhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheCAw2MAAAhhrMC8FAAAMAAABhrg");
	this.shape.setTransform(601.9,312.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BigWhite, new cjs.Rectangle(0,0,1203.8,625.3), null);


(lib.bdisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(202.3,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAIALAAIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_1.setTransform(193.9,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_2.setTransform(185.5,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_3.setTransform(168.2,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_4.setTransform(154.6,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_5.setTransform(140.4,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_6.setTransform(117.6,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#808080").s().p("AACBcQgHgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_7.setTransform(104.3,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_8.setTransform(85.6,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(69.7,22.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_10.setTransform(53.1,22.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#808080").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_11.setTransform(41.3,19.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_12.setTransform(32.7,20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_13.setTransform(19.5,22.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_14.setTransform(3,22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808080").s().p("AgWBCQgQgJgJgQQgJgRAAgXQAAgVAJgSQAKgQARgLQASgKAXABQALAAAKABQAKADAFADIgGAUQgEgCgIgDQgIgCgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHALALAHQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_15.setTransform(-11.8,22.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#808080").s().p("AgmBjQgNgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAPgJASgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABAUIABARIgYAAIgCgZIAAAAQgHAMgMAIQgMAIgRAAQgSAAgPgJgAgVgPQgJAIgGAMQgFAMAAARQAAAOAFANQAFALAJAIQAKAHANAAQAOAAAKgIQAKgJAFgPIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgJgQABQgMAAgKAGg");
	this.shape_16.setTransform(-33.9,19.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_17.setTransform(-50.3,22.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgBgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_18.setTransform(-66.2,22.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#808080").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_19.setTransform(-87.7,22.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_20.setTransform(-103.5,22.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#808080").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_21.setTransform(-119.9,25.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_22.setTransform(-131.9,22.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_23.setTransform(-145.1,22.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_24.setTransform(-156.2,18.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#808080").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_25.setTransform(-163.3,18.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_26.setTransform(-174.4,22.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATIgTAGQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_27.setTransform(205.4,-15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#808080").s().p("AAjBrIAAhUQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABYIgbAAIAAjUIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGAMQAFAKAAATIAABXg");
	this.shape_28.setTransform(189.6,-19.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBAMAEAIQAFAHALAAIAJAAIAHgBIABATIgKADIgOABQgJAAgIgDg");
	this.shape_29.setTransform(176.1,-17.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATIgUAGQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_30.setTransform(157.4,-15.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#808080").s().p("AgNBJIg3iRIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CRg");
	this.shape_31.setTransform(142.7,-15.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_32.setTransform(127.2,-15.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#808080").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgPgBQgJABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEANAAQAPAAAKAIQAKAIAEANIABAAQADgGAFgFIAJgIQAGgFAIgDQAHgCALAAQAJAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_33.setTransform(106.5,-15.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_34.setTransform(86.5,-15.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#808080").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_35.setTransform(74.9,-15.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#808080").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_36.setTransform(54.6,-15.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#808080").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAAMAFAIQAEAHALAAIAJAAIAGgBIABATIgJADIgOABQgJAAgIgDg");
	this.shape_37.setTransform(41.3,-17.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_38.setTransform(22.6,-15.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#808080").s().p("AgWBCQgQgJgJgRQgJgRAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgCgKgBQgRAAgLAIQgLAHgGAMQgGANAAAPQAAAQAHANQAHAMALAGQAKAHAPAAQALAAAIgDIANgEIAFATQgGADgKADQgLADgPAAQgVAAgQgKg");
	this.shape_39.setTransform(8.4,-15.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#808080").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_40.setTransform(-6.7,-15.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBAMAEAIQAFAHALAAIAJAAIAHgBIABATIgKADIgOABQgJAAgIgDg");
	this.shape_41.setTransform(-20.1,-17.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#808080").s().p("AACBcQgHgDgFgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAAMAFAIQAEAHALAAIAJAAIAGgBIABATIgJADIgOABQgJAAgHgDg");
	this.shape_42.setTransform(-30,-17.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#808080").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATIgUAGQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_43.setTransform(-42.4,-15.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#808080").s().p("AgMBrIAAjUIAZAAIAADUg");
	this.shape_44.setTransform(-53.5,-19.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#808080").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATIgTAGQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_45.setTransform(-70.9,-15.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#808080").s().p("AAjBrIAAhUQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABYIgbAAIAAjUIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGAMQAFAKAAATIAABXg");
	this.shape_46.setTransform(-86.7,-19.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#808080").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBAMAEAIQAFAHALAAIAJAAIAHgBIABATIgKADIgOABQgJAAgIgDg");
	this.shape_47.setTransform(-100.2,-17.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#808080").s().p("AAjBrIAAhUQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABYIgbAAIAAjUIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGAMQAFAKAAATIAABXg");
	this.shape_48.setTransform(-119.7,-19.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#808080").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_49.setTransform(-134,-15.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#808080").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_50.setTransform(-147.5,-15.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#808080").s().p("AAmBlIgZhpIgHgjIgGgeIAAAAIgGAeIgJAjIgdBpIgbAAIg0jJIAcAAIAYBlIAJAlIAGAhIABAAIAGghIAKglIAbhlIAbAAIAYBlIAIAkQAEARACARIABAAIAHgiIAJgkIAbhlIAbAAIg6DJg");
	this.shape_51.setTransform(-167,-18.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#808080").s().p("AgdB6QAQgWALgeQAKgeAAgoQAAgngKgeQgLgegQgWIAVAAQAIAMAJARQAJASAGAXQAFAXABAcQgBAdgFAXQgGAXgJARQgJASgIAMg");
	this.shape_52.setTransform(-191,-17.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#808080").s().p("AguBmIgRgCIAAjGQAJgCAMgBIAbgBQASAAAOAEQANADAJAIQAIAGAFAJQAEAJAAAMQAAAOgJAMQgJAMgQAGIAAAAQAKADAJAFQAKAGAGALQAGAKABAPQgBANgEAKQgFAKgHAIQgLAJgRAFQgSAFgXAAIgYgBgAglBRIAKABIAMAAQAOAAAKgEQAMgDAIgJQAHgJAAgOQAAgOgHgJQgHgIgMgEQgLgEgOAAIgWAAgAgchRIgJABIAABBIAYAAQAUAAALgKQAMgJAAgPQgBgRgMgIQgMgIgTAAIgOABg");
	this.shape_53.setTransform(-202.2,-18.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#808080").s().p("AAJB6QgJgMgIgRQgJgRgGgXQgFgXgBgdQAAgdAHgXQAFgXAJgRQAIgSAJgMIAVAAQgQAWgLAeQgKAeAAAoQAAAnALAeQAKAeAQAWg");
	this.shape_54.setTransform(-214.5,-17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bdisabled, new cjs.Rectangle(-221.4,-39,442.9,78.1), null);


(lib.Audioc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.a_Sound.mouseEnabled = false;
		exportRoot.b_Sound.mouseEnabled = false;
		exportRoot.c_Sound.mouseEnabled = false;
		playSound("_120a00_en_52511");
	}
	this.frame_119 = function() {
		this.stop();
		
		exportRoot.a_Sound.mouseEnabled = true;
		exportRoot.b_Sound.mouseEnabled = true;
		exportRoot.c_Sound.mouseEnabled = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(118).call(this.frame_119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Audiob = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.a_Sound.mouseEnabled = false;
		exportRoot.b_Sound.mouseEnabled = false;
		exportRoot.c_Sound.mouseEnabled = false;
		playSound("_120a00_en_5259");
	}
	this.frame_109 = function() {
		this.stop();
		
		exportRoot.a_Sound.mouseEnabled = true;
		exportRoot.b_Sound.mouseEnabled = true;
		exportRoot.c_Sound.mouseEnabled = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(108).call(this.frame_109).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Audioa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.a_Sound.mouseEnabled = false;
		exportRoot.b_Sound.mouseEnabled = false;
		exportRoot.c_Sound.mouseEnabled = false;
		playSound("_120a00_en_5257");
	}
	this.frame_149 = function() {
		this.stop();
		
		exportRoot.a_Sound.mouseEnabled = true;
		exportRoot.b_Sound.mouseEnabled = true;
		exportRoot.c_Sound.mouseEnabled = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(148).call(this.frame_149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Wrong2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		//replace wash button with disabled wash text
		//exportRoot.c_disabled.visible = true;
		//exportRoot.btn_Warn.visible = false;
		playSound("_120a00_en_52512");
	}
	this.frame_229 = function() {
		//enable visible buttons
		  if(exportRoot.btn_Remake.visible == true)
		    exportRoot.btn_Remake.mouseEnabled = true;
		  if(exportRoot.btn_Wash.visible == true)
		    exportRoot.btn_Wash.mouseEnabled = true;
		  
		  exportRoot.c_sound.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(228).call(this.frame_229).wait(1));

	// Background
	this.instance = new lib.WhiteBg();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,0,0,0,608.6,312.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:279.9,regY:304.2,x:-328.6,y:-8.1,alpha:0.036},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.464},0).wait(1).to({alpha:0.5},0).wait(201).to({alpha:0.467},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-608.5,-320.4,559.8,624.6);


(lib.Wrong1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		//replace wash button with disabled wash text
		//exportRoot.b_disabled.visible = true;
		//exportRoot.btn_Wash.visible = false;
		playSound("_120a00_en_52510");
	}
	this.frame_229 = function() {
		//enable visible buttons
		  if(exportRoot.btn_Remake.visible == true)
		    exportRoot.btn_Remake.mouseEnabled = true;
		  if(exportRoot.btn_Warn.visible == true)
		    exportRoot.btn_Warn.mouseEnabled = true;
		  
		exportRoot.b_sound.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(228).call(this.frame_229).wait(1));

	// Background
	this.instance = new lib.WhiteBg();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,0,0,0,608.6,312.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:279.9,regY:304.2,x:-328.6,y:-8.1,alpha:0.036},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.464},0).wait(1).to({alpha:0.5},0).wait(201).to({alpha:0.467},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-608.5,-320.4,559.8,624.6);


(lib.OptionAFeedback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("_120a00_en_5258");
	}
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(298).call(this.frame_299).wait(1));

	// New Image
	this.instance = new lib.Washing();
	this.instance.parent = this;
	this.instance.setTransform(55.1,20.2,1,1,0,0,0,372.1,292.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:371.9,x:54.9},0).wait(24).to({alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(220).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(25));

	// Click Next to Continue
	this.instance_1 = new lib.PressNext();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.7,-0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(284).to({_off:false},0).wait(1).to({regX:0.5,regY:106.9,x:31.2,y:106.8,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1));

	// White Bg
	this.instance_2 = new lib.BigWhite();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32,15,1,1,0,0,0,601.9,312.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(286));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.9,-297.6,1203.8,625.3);


(lib.HINTFORYOU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.HintCircle();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1.2,0.375,0.375,0,0,0,83.5,83.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:85.3,regY:85.3,scaleX:0.54,scaleY:0.54,x:-0.1,y:-0.3,alpha:0.056},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:0.1,y:-0.1,alpha:0.111},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:0.4,y:0.2,alpha:0.167},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:0.6,y:0.4,alpha:0.222},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:0.7,y:0.5,alpha:0.278},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:0.8,y:0.6,alpha:0.333},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:0.9,y:0.7,alpha:0.389},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.444},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:1.1,y:0.9,alpha:0.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:1,y:0.8,alpha:0.556},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.611},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.667},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:0.9,y:0.7,alpha:0.722},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.778},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0.8,y:0.6,alpha:0.833},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.889},0).wait(1).to({scaleX:1,scaleY:1,x:0.7,y:0.5,alpha:0.944},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib._120a00_525i_01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
		
		var wrong = 0;
		
		exportRoot.btn_correct.addEventListener("click", btn_correct_clickHandler.bind(this));
		function btn_correct_clickHandler(){
		  // play right movieclip, which will play root when done
		  exportRoot.breadcrumbs.gotoAndPlay(1);
		}
		
		exportRoot.btn_incorrect.addEventListener("click", btn_incorrect_clickHandler.bind(this));
		function btn_incorrect_clickHandler(){
		  // play wrong sound corresponding with the wrong count
		  if(wrong == 0){
		    exportRoot.wrong_one.gotoAndPlay(1);
		    wrong = 1;
		    console.log("wrong == 1")
		  }
		  else if(wrong == 1){
		    exportRoot.wrong_two.gotoAndPlay(1);
		    wrong = 2;
		    console.log("wrong == 2")
		  }
		  else if(wrong == 2){
		    exportRoot.wrong_three.gotoAndPlay(1);
		    wrong = 0;
		    console.log("wrong == 0")
		  }
		}
	}
	this.frame_30 = function() {
		this.stop();
		exportRoot.b_disabled.visible = false;
		exportRoot.c_disabled.visible = false;
		
		//Audio things
		exportRoot.a_Sound.addEventListener("click", a_Sound_clickHandler.bind(this));
		function a_Sound_clickHandler(){
		  exportRoot.a_audio.gotoAndPlay(1);
		}
		
		exportRoot.b_Sound.addEventListener("click", b_Sound_clickHandler.bind(this));
		function b_Sound_clickHandler(){
		  exportRoot.b_audio.gotoAndPlay(1);
		}
		
		exportRoot.c_Sound.addEventListener("click", c_Sound_clickHandler.bind(this));
		function c_Sound_clickHandler(){
		  exportRoot.c_audio.gotoAndPlay(1);
		}
		
		//Actual BUttons
		exportRoot.btn_Remake.addEventListener("click", btn_Remake_clickHandler.bind(this));
		function btn_Remake_clickHandler(){
		  cjs.Sound.stop();
		
		  if(exportRoot.btn_Remake.visible == true)
		    exportRoot.btn_Remake.mouseEnabled = false;
		  if(exportRoot.btn_Wash.visible == true)
		    exportRoot.btn_Wash.mouseEnabled = false;
		  if(exportRoot.btn_Warn.visible == true)
		    exportRoot.btn_Warn.mouseEnabled = false;
		
		  exportRoot.remake.gotoAndPlay(1);
		}
		
		exportRoot.btn_Wash.addEventListener("click", btn_Wash_clickHandler.bind(this));
		function btn_Wash_clickHandler(){
		  cjs.Sound.stop();
		
		  if(exportRoot.btn_Remake.visible == true)
		    exportRoot.btn_Remake.mouseEnabled = false;
		  if(exportRoot.btn_Wash.visible == true)
		    exportRoot.btn_Wash.mouseEnabled = false;
		  if(exportRoot.btn_Warn.visible == true)
		    exportRoot.btn_Warn.mouseEnabled = false;
		
		  exportRoot.b_disabled.visible = true;
		  exportRoot.btn_Wash.visible = false;
		
		  exportRoot.feedback_wash.gotoAndPlay(1);
		}
		
		exportRoot.btn_Warn.addEventListener("click", btn_Warn_clickHandler.bind(this));
		function btn_Warn_clickHandler(){
		  cjs.Sound.stop();
		
		  if(exportRoot.btn_Remake.visible == true)
		    exportRoot.btn_Remake.mouseEnabled = false;
		  if(exportRoot.btn_Wash.visible == true)
		    exportRoot.btn_Wash.mouseEnabled = false;
		  if(exportRoot.btn_Warn.visible == true)
		    exportRoot.btn_Warn.mouseEnabled = false;
		
		  exportRoot.c_disabled.visible = true;
		  exportRoot.btn_Warn.visible = false;
		
		  exportRoot.feedback_warn.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(16).call(this.frame_30).wait(1));

	// Borders
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("EBjSA4QIAAgBMjGiAAAIAAABIguAAIAAgBIgBAAIAAguIABAAMAAAhvwIAuAAMAAABvwMDGiAAAMAAAhoqIAuAAMAAABpZg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

	// Title
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525252").s().p("AgrBIQgRgJgEgVIAXgFQADANALAGQAKAGASAAQAUAAAKgHQAJgFAAgNQAAgJgHgGQgGgGgOgEIgSgEQgXgHgKgEQgJgGgGgIQgFgIAAgLQAAgXAPgLQAQgLAcAAQAbAAAPAJQAQAJAEAVIgYADQgCgLgKgFQgJgGgRAAQgQAAgJAGQgIAFAAALQAAAGADAFQAEAFAGADQAHADAVAFQAVAFAKAFQAJADAFAGQAGAFACAHQADAHAAAJQAAAWgQANQgRAMgfAAQgcAAgQgKg");
	this.shape_1.setTransform(799.2,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_2.setTransform(783.4,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525252").s().p("AgMBtIAAieIAZAAIAACegAgMhSIAAgaIAZAAIAAAag");
	this.shape_3.setTransform(771.8,26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525252").s().p("AgjBRIAAh5IgCglIAZAAIABAhIABAAQAGgVAHgHQAJgIAPAAIALACIAAAYQgGgCgJAAQgQAAgIAPQgIAOgBAaIAABSg");
	this.shape_4.setTransform(764.2,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525252").s().p("AhABGQgMgNAAgWQAAgZAQgMQAQgNAkgBIAjAAIAAgJQAAgTgIgJQgIgIgRAAQgSAAgIAGQgIAGgBANIgcgCQAHgrA5AAQAcAAAQAOQAPANAAAaIAABDQAAAMADAGQADAGAIAAIAJgBIAAAQQgKADgKAAQgPAAgHgIQgGgIgBgQIgBAAQgKASgNAIQgNAHgTAAQgYAAgMgMgAgBACQgSAAgKADQgKAEgFAHQgFAIAAALQAAANAHAHQAHAHANAAQAOAAALgGQALgHAHgLQAGgMAAgMIAAgNg");
	this.shape_5.setTransform(750.7,29.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525252").s().p("AAlBRIAAhkQAAgPgDgJQgDgJgHgEQgHgDgNAAQgSAAgLANQgLANAAAXIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIABAIIAAAPIABAAQAJgQAMgHQAMgHAQAAQAaAAANANQAMANAAAeIAABpg");
	this.shape_6.setTransform(733.4,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525252").s().p("AgzA9QgSgVgBgoQABgnASgVQASgVAhAAQBHAAgBBTIAAAEIhvAAQAAAbALAPQALAOAUAAQASAAAKgGQAKgHAEgLIAYAHQgPAlgzAAQgiAAgSgVgAgdgxQgLANgBAWIBUAAQgCgZgKgLQgLgMgUAAQgSAAgLANg");
	this.shape_7.setTransform(716.7,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525252").s().p("AguA9QgSgVAAgoQAAgnASgVQASgVAfAAQAZAAAQAMQAQANAEAWIgbACQgCgNgJgIQgIgIgPAAQgUAAgKAOQgJAOAAAhQAAAfAKAPQAKAPATAAQAOAAAKgHQAJgIACgQIAbACQgDAXgRAOQgQANgZAAQggAAgSgVg");
	this.shape_8.setTransform(701.1,29.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#525252").s().p("AhVA2IAbgGQAFATAPAJQAPAIAZAAQAbAAAPgJQAPgJAAgSQgBgKgEgHQgFgGgIgEQgIgEgMgDIgYgGQgZgFgMgFQgNgFgIgHQgHgHgEgIQgEgJABgMQgBgbAVgOQAUgOAkAAQAkAAASALQATAKAHAaIgbAFQgFgQgNgIQgMgHgXAAQgXAAgOAIQgNAIABARQAAAJAEAGQAGAHAJAEQAKAEAbAGIATAFIASAFQAJADAHAEQAIAEAGAGQAFAGAEAJQADAIAAALQAAAdgXAQQgXAPgoAAQhLAAgLg0g");
	this.shape_9.setTransform(683.4,27.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525252").s().p("AgTA+IAAhpIgSAAIAAgTIATAAIAIgjIAQAAIAAAjIAeAAIAAATIgeAAIAABjQAAAMAEAFQAEAEAJAAIAPgCIAAAUQgNADgNAAQgfAAAAgkg");
	this.shape_10.setTransform(660.9,28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#525252").s().p("AguA9QgSgVAAgoQAAgnASgVQASgVAfAAQAZAAAQAMQAQANAEAWIgbACQgCgNgJgIQgIgIgPAAQgUAAgKAOQgJAOAAAhQAAAfAKAPQAKAPATAAQAOAAAKgHQAJgIACgQIAbACQgDAXgRAOQgQANgZAAQggAAgSgVg");
	this.shape_11.setTransform(649.4,29.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#525252").s().p("AhABGQgMgNAAgWQAAgZAQgMQAQgNAkgBIAjAAIAAgJQAAgTgIgJQgIgIgRAAQgSAAgIAGQgIAGgBANIgcgCQAHgrA5AAQAcAAAQAOQAPANAAAaIAABDQAAAMADAGQADAGAIAAIAJgBIAAAQQgKADgKAAQgPAAgHgIQgGgIgBgQIgBAAQgKASgNAIQgNAHgTAAQgYAAgMgMgAgBACQgSAAgKADQgKAEgFAHQgFAIAAALQAAANAHAHQAHAHANAAQAOAAALgGQALgHAHgLQAGgMAAgMIAAgNg");
	this.shape_12.setTransform(633.9,29.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525252").s().p("AgTA+IAAhpIgSAAIAAgTIATAAIAIgjIAQAAIAAAjIAeAAIAAATIgeAAIAABjQAAAMAEAFQAEAEAJAAIAPgCIAAAUQgNADgNAAQgfAAAAgkg");
	this.shape_13.setTransform(620.9,28);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#525252").s().p("AAlBRIAAhkQAAgPgDgJQgDgJgHgEQgHgDgNAAQgSAAgLANQgLANAAAXIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIABAIIAAAPIABAAQAJgQAMgHQAMgHAQAAQAaAAANANQAMANAAAeIAABpg");
	this.shape_14.setTransform(608.3,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_15.setTransform(591.5,29.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#525252").s().p("AgvBdQgXgNgMgYQgMgYAAggQAAgxAbgcQAagcAvAAQAhAAAWANQAWANALAZIgbAJQgHgSgQgKQgQgJgWAAQgiAAgSAWQgUAWABAmQgBAlAUAXQAUAXAhAAQAsAAAVgrIAXAMQgNAagWAOQgXAOgfAAQgeAAgXgNg");
	this.shape_16.setTransform(572.6,27.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525252").s().p("AgkAMIAAgXIBIAAIAAAXg");
	this.shape_17.setTransform(556.6,29.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525252").s().p("AgrBIQgRgJgEgVIAXgFQADANALAGQAKAGASAAQAUAAAKgHQAJgFAAgNQAAgJgHgGQgGgGgOgEIgSgEQgXgHgKgEQgJgGgGgIQgFgIAAgLQAAgXAPgLQAQgLAcAAQAbAAAPAJQAQAJAEAVIgYADQgCgLgKgFQgJgGgRAAQgQAAgJAGQgIAFAAALQAAAGADAFQAEAFAGADQAHADAVAFQAVAFAKAFQAJADAFAGQAGAFACAHQADAHAAAJQAAAWgQANQgRAMgfAAQgcAAgQgKg");
	this.shape_18.setTransform(543.9,29.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525252").s().p("AgrBIQgRgJgEgVIAXgFQADANALAGQAKAGASAAQAUAAAKgHQAJgFAAgNQAAgJgHgGQgGgGgOgEIgSgEQgXgHgKgEQgJgGgGgIQgFgIAAgLQAAgXAPgLQAQgLAcAAQAbAAAPAJQAQAJAEAVIgYADQgCgLgKgFQgJgGgRAAQgQAAgJAGQgIAFAAALQAAAGADAFQAEAFAGADQAHADAVAFQAVAFAKAFQAJADAFAGQAGAFACAHQADAHAAAJQAAAWgQANQgRAMgfAAQgcAAgQgKg");
	this.shape_19.setTransform(528.9,29.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_20.setTransform(513.2,29.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#525252").s().p("AgjBRIAAh5IgBglIAYAAIABAhIABAAQAGgVAHgHQAJgIAPAAIALACIAAAYQgGgCgJAAQgQAAgHAPQgJAOAAAaIAABSg");
	this.shape_21.setTransform(500.6,29.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525252").s().p("AgvBdQgXgNgMgYQgMgYAAggQAAgxAbgcQAbgcAtAAQAiAAAWANQAWANALAZIgbAJQgHgSgQgKQgQgJgWAAQghAAgUAWQgSAWgBAmQABAlATAXQAUAXAhAAQArAAAXgrIAWAMQgMAagYAOQgXAOgeAAQgfAAgWgNg");
	this.shape_22.setTransform(484.2,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(31));

	// Border
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F5F5F5").s().p("Ehj/AD6IAAnzMDH/AAAIAAHzg");
	this.shape_23.setTransform(640,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(31));

	// Feedback A
	this.remake = new lib.OptionAFeedback();
	this.remake.parent = this;
	this.remake.setTransform(610,359);
	this.remake._off = true;

	this.timeline.addTween(cjs.Tween.get(this.remake).wait(30).to({_off:false},0).wait(1));

	// Feedback B
	this.feedback_wash = new lib.Wrong1();
	this.feedback_wash.parent = this;
	this.feedback_wash.setTransform(643.3,382.3);
	this.feedback_wash._off = true;

	this.timeline.addTween(cjs.Tween.get(this.feedback_wash).wait(30).to({_off:false},0).wait(1));

	// Feedback C
	this.feedback_warn = new lib.Wrong2();
	this.feedback_warn.parent = this;
	this.feedback_warn.setTransform(643.3,382.3);
	this.feedback_warn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.feedback_warn).wait(30).to({_off:false},0).wait(1));

	// Button 1
	this.b_Sound = new lib.SoundButton();
	this.b_Sound.parent = this;
	this.b_Sound.setTransform(44.5,339.2);
	this.b_Sound.alpha = 0;
	this.b_Sound._off = true;
	new cjs.ButtonHelper(this.b_Sound, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.b_Sound).wait(15).to({_off:false},0).wait(1).to({regX:30.5,regY:30.5,x:75,y:369.7,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1));

	// Button 2
	this.a_Sound = new lib.SoundButton();
	this.a_Sound.parent = this;
	this.a_Sound.setTransform(44.5,163.7);
	this.a_Sound.alpha = 0;
	this.a_Sound._off = true;
	new cjs.ButtonHelper(this.a_Sound, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.a_Sound).wait(15).to({_off:false},0).wait(1).to({regX:30.5,regY:30.5,x:75,y:194.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1));

	// Button 3
	this.c_Sound = new lib.SoundButton();
	this.c_Sound.parent = this;
	this.c_Sound.setTransform(44.5,521.4);
	this.c_Sound.alpha = 0;
	this.c_Sound._off = true;
	new cjs.ButtonHelper(this.c_Sound, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.c_Sound).wait(15).to({_off:false},0).wait(1).to({regX:30.5,regY:30.5,x:75,y:551.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1));

	// a audio
	this.a_audio = new lib.Audioa();
	this.a_audio.parent = this;
	this.a_audio.setTransform(640,209.7);
	this.a_audio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.a_audio).wait(30).to({_off:false},0).wait(1));

	// b audio
	this.b_audio = new lib.Audiob();
	this.b_audio.parent = this;
	this.b_audio.setTransform(640,385.2);
	this.b_audio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b_audio).wait(30).to({_off:false},0).wait(1));

	// c audio
	this.c_audio = new lib.Audioc();
	this.c_audio.parent = this;
	this.c_audio.setTransform(640,574.2);
	this.c_audio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c_audio).wait(30).to({_off:false},0).wait(1));

	// A) remake
	this.btn_Remake = new lib.Optiona();
	this.btn_Remake.parent = this;
	this.btn_Remake.setTransform(357.9,183.1);
	this.btn_Remake.alpha = 0;
	this.btn_Remake._off = true;
	new cjs.ButtonHelper(this.btn_Remake, 0, 1, 2, false, new lib.Optiona(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Remake).wait(15).to({_off:false},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1));

	// B) Wash
	this.btn_Wash = new lib.OptionB();
	this.btn_Wash.parent = this;
	this.btn_Wash.setTransform(352.2,356.5);
	this.btn_Wash.alpha = 0;
	this.btn_Wash._off = true;
	new cjs.ButtonHelper(this.btn_Wash, 0, 1, 2, false, new lib.OptionB(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Wash).wait(15).to({_off:false},0).wait(1).to({regX:4.4,regY:9.5,x:356.6,y:366,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1));

	// C) Warn
	this.btn_Warn = new lib.OptionC();
	this.btn_Warn.parent = this;
	this.btn_Warn.setTransform(352.8,539.2);
	this.btn_Warn.alpha = 0;
	this.btn_Warn._off = true;
	new cjs.ButtonHelper(this.btn_Warn, 0, 1, 2, false, new lib.OptionC(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Warn).wait(15).to({_off:false},0).wait(1).to({regX:6.4,regY:7.3,x:359.2,y:546.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1));

	// Disabled B
	this.b_disabled = new lib.bdisabled();
	this.b_disabled.parent = this;
	this.b_disabled.setTransform(352,356.5);
	this.b_disabled._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b_disabled).wait(30).to({_off:false},0).wait(1));

	// Disabled C
	this.c_disabled = new lib.cDisabled();
	this.c_disabled.parent = this;
	this.c_disabled.setTransform(352.8,539.2);
	this.c_disabled._off = true;

	this.timeline.addTween(cjs.Tween.get(this.c_disabled).wait(30).to({_off:false},0).wait(1));

	// Correct mc
	this.breadcrumbs = new lib.Correctclick();
	this.breadcrumbs.parent = this;
	this.breadcrumbs.setTransform(596,101);
	this.breadcrumbs._off = true;

	this.timeline.addTween(cjs.Tween.get(this.breadcrumbs).wait(14).to({_off:false},0).wait(17));

	// Attempt 3
	this.wrong_three = new lib.Try3();
	this.wrong_three.parent = this;
	this.wrong_three.setTransform(1253.2,269);
	this.wrong_three._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wrong_three).wait(14).to({_off:false},0).to({_off:true},1).wait(16));

	// Attempt 2
	this.wrong_two = new lib.Try2();
	this.wrong_two.parent = this;
	this.wrong_two.setTransform(1253.2,185.1);
	this.wrong_two._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wrong_two).wait(14).to({_off:false},0).to({_off:true},1).wait(16));

	// Attempt 1
	this.wrong_one = new lib.Try1();
	this.wrong_one.parent = this;
	this.wrong_one.setTransform(1253.2,102.4);
	this.wrong_one._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wrong_one).wait(14).to({_off:false},0).to({_off:true},1).wait(16));

	// Hint Circle
	this.hint = new lib.HINTFORYOU();
	this.hint.parent = this;
	this.hint.setTransform(921,565);
	this.hint._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hint).wait(14).to({_off:false},0).wait(17));

	// Correct
	this.btn_correct = new lib.Button();
	this.btn_correct.parent = this;
	this.btn_correct.setTransform(921,565,0.256,0.156);
	this.btn_correct._off = true;
	new cjs.ButtonHelper(this.btn_correct, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_correct).wait(14).to({_off:false},0).to({_off:true},1).wait(16));

	// Wrong
	this.btn_incorrect = new lib.Button();
	this.btn_incorrect.parent = this;
	this.btn_incorrect.setTransform(913.3,358);
	this.btn_incorrect._off = true;
	new cjs.ButtonHelper(this.btn_incorrect, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_incorrect).wait(14).to({_off:false},0).to({_off:true},1).wait(16));

	// Instructions
	this.instance = new lib.Directions();
	this.instance.parent = this;
	this.instance.setTransform(913.5,681.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.5,regY:2.9,x:913,y:684.2,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Bread on Lettuce
	this.instance_1 = new lib.Interactivebg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(911.8,371,1,1,0,0,0,315.8,283.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:315.7,x:911.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_29_audio_symbol_volume.jpg", id:"_29_audio_symbol_volume"},
		{src:"images/DMH_120a00_525_5a_Employee_cutting_lettuce_bread_2.jpg", id:"DMH_120a00_525_5a_Employee_cutting_lettuce_bread_2"},
		{src:"images/DMH_120a00_525_5b_Employee_washing_cutting_board_sink.jpg", id:"DMH_120a00_525_5b_Employee_washing_cutting_board_sink"},
		{src:"images/NextButton.png", id:"NextButton"},
		{src:"sounds/_120a00_en_52510.mp3", id:"_120a00_en_52510"},
		{src:"sounds/_120a00_en_52511.mp3", id:"_120a00_en_52511"},
		{src:"sounds/_120a00_en_52512.mp3", id:"_120a00_en_52512"},
		{src:"sounds/_120a00_en_5252.mp3", id:"_120a00_en_5252"},
		{src:"sounds/_120a00_en_5253.mp3", id:"_120a00_en_5253"},
		{src:"sounds/_120a00_en_5254.mp3", id:"_120a00_en_5254"},
		{src:"sounds/_120a00_en_5256.mp3", id:"_120a00_en_5256"},
		{src:"sounds/_120a00_en_5257.mp3", id:"_120a00_en_5257"},
		{src:"sounds/_120a00_en_5258.mp3", id:"_120a00_en_5258"},
		{src:"sounds/_120a00_en_5259.mp3", id:"_120a00_en_5259"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;