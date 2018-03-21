(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.endframe = function() {
	this.initialize(img.endframe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.fog = function() {
	this.initialize(img.fog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,300);// helper functions:

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


(lib.text_power = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACoDUQgTgTgNgTQgXghgOgwIgbhhQgOgwgRglIhqFRIgogcQgbgTgIgPQgZgwgYhHIgkh9QgYhOgSgjQgNgYgPgRQgQgQgSgHICIAAQAJA2AhBjIBBDBQATg1AihrQAYhOALg5QAAgcgogXIB6AAQADAcAJAqQALAqAUA5IA7CvIBckjQABgSgWgMQgXgOgsgJIClAAIgBgBIEWAAIAABhQgQgSgXgKQgXgJgfAAIg/AAIAAB0QA4AEA9gEIAABbQgXgegTAAIhLAAIAACVQA+AJAjAAQAlABAVgJQARgGA0gjIglBvQAcgJARgRQAOgPABgLIAAldQAAgOgMgOQgMgOgWgOIDTAAQAvAAAmAhQAVARAJAUQAKAVAAAYQAAApgaAfQgaAeg2AVIBXBoQAdAiAgAcQAhAdAlAYIhkAAQgTAAgggbQgfgcgqg3QhChTgYgvQA7gKAegXQAegYAAgkQAAgjgbgSQgXgRgfAAQgWABgVAFIAAFYQAAAMAKANQALANAWAPIn0AAQAugcgBgbIAAlaQAAgLgKgOQgIgLgOgNIiVHdQgZgRgUgTgAqtCkQgmgkgTgqQgSgrAAgyQAAg1AUgtQAWgsApgjQBPg/BlAAQA1ABAtAQQAtAPAlAgQBPBDAABqQAAA1gUAsQgVAsgpAjQgnAhgsARQguAQg0AAQhsAAhMhEgAo5ivQgfAMgYAYQgXAYgLAgQgMAfAAAmQABBGAsA3QAYAfAgAQQAhAPAnABQBMgBAugxQAtgxAAhJQAAgkgKggQgLgfgVgcQgYgegggQQgggPgnAAQgoAAgeALgAxaDcQAXgNALgNQAMgOAAgOIAAlXQAAgMgLgOQgQgVgdgMIDfAAQA4ABArAkQAVATAMAXQAKAWAAAZQAABAg3AmQgYAPgaAHQgZAJgdAAQgTgBgwgQIAACWQgBAiAyAegAvZAEQA0gEAcgOQAjgSAMgdQAIgSgBgbQgCgigegSQgVgNgXgBIg6AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_power, new cjs.Rectangle(-142,-51.2,284.1,80), null);


(lib.text_play_free = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEFF").s().p("ALrCGQAagQAAgRIAAjIQAAgNgWgVICiAAIAAA5QgUgWgjABIgRAAQgLABgJgBIAABDQAhAEAjgEIAAA1QgMgRgMgBIgsAAIAABXQApAFAQABQAXgBALgFQALgCAdgWIgWBCgAIkCGQAbgQAAgRIAAjIQAAgNgXgVICgAAIAAA5QgSgWgjABIgRAAQgLABgJgBIAABDQAhAEAkgEIAAA1QgNgRgNgBIgrAAIAABXQApAFAQABQAXgBAKgFQAOgDAbgVIgWBCgAHqCGQgYgBgxg/QgngxgNgcQBFgJAAgsQAAgUgPgLQgNgKgUABQgMAAgLADIAADHQgBAOAYASIhsAAQAQgFALgLQAJgHAAgIIAAjKQAAgRgbgQIB7AAQAcAAAVATQAYATAAAeQAAAtg+AaIAyA7QAiApAqAbgAByCGQAagQABgRIAAjIQAAgNgYgVICkAAIAAA5QgTgWgmABIgRAAQgJABgJgBIAABDQAgAEAkgEIAAA0QgPgQgJgBIgsAAIAABiQAAAFAGAJQAGAKADAAIgBAHgAi3CGQAYgNADgTIACg9QABgRgDgFQgQgdgfgyQgphBgLABIAAgIIAsAAQASABA5BgIAJAPIAIgIQAvhCAAgNQAAgGgEgEQgDgEgOgLIBXAAIg1BLQgjAxgOAbQgEAHADAZIACAHIAAAQQgCALACAIQADAYAZARgAlhCGQAagNAAgHIgehNIhgAAIgbBLQgBAJAbANIhlAAQAMgJANgOQANgMACgJIAzh7QAfhJAAgGQAAgEgEgEIgSgMIBPAAQAJASAZA/IAiBRQASAwAPAUQAQAbAXAJgAm5AAIBFAAIgihVgAriCGQAbgQAAgRIAAjIQAAgOgZgTIBjAAQgaARAAAQIAADAQAuAJAMgCQAggDAqgbIgaBAgAuxCGQAbgQAAgRIAAjHQAAgIgHgHQgJgMgRgHICCAAQAhAAAYAWQAZAVAAAeQAAAmgfAVQgcASggAAQgNAAgagKIAABXQAAAWAcARgAtlAHQAbgDAVgLQAdgPAAgdQAAgtg2AAIgXAAg");
	this.shape.setTransform(95.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_play_free, new cjs.Rectangle(0,0,201.9,39), null);


(lib.text_missions_now = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(96,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_missions_now, new cjs.Rectangle(0,0,191.9,26), null);


(lib.text_ice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkhImQh0glhYhJQjBidAAkcQAAiGAshqQAthrBZhQQBXhOBtgmQBtgoCFAAQBbAADgArIAGDrQhlg+g+gVQhYgdhNAAQiyAAhsB1QhlBsAACoQAAC1BzCAQB3CJC6AAQBWAABggdQBfgcBog7QgSBXgiA7QgiA7gyAeQgkAXg6ALQg5ALhNAAQiQAAh2gjgAEPIvQBthGAAhAIAAtOQAAgdgaghQgYgigxgpIKlAAIAADsQgmgsg5gXQg4gWhKAAIiZAAIAAEYQCGANCXgNIAADiQg6hKgvAAIi0AAIAAFsQCXAWBTABQBZAAA1gUQArgQB+hWIhaERgAxcIsQBuhBAAhCIAAtOQAAhJh2g9IGuAAQhtBDAABBIAANSQAAAdAZAgQAbAhA0Ajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_ice, new cjs.Rectangle(-112.5,-58.5,225,117), null);


(lib.text_cold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("An6DhQgygugZg4QgYg5gBhCQABhGAbg6QAcg6A3guQBnhTCGAAQBFAAA7AVQA7AVAxAqQBnBZAACLQAABFgbA7QgbA6g1AuQgzAsg7AWQg8AVhEAAQiOAAhkhbgAlijcQgpAQgeAgQgfAggPAoQgPApAAAyQAABcA6BJQAhApAqAUQAqAVA1AAQBjAAA9hBQA7g/AAhiQAAgugOgqQgOgqgbgkQgggpgqgUQgqgVg1AAQgyAAgpAQgAuOEpQg+gUgwgnQhohVAAiZQAAhIAYg6QAYg6AwgrQAvgqA7gVQA7gVBIAAQAyAAB4AYIAEB+Qg2ghgjgLQgvgQgrAAQhfAAg6A/Qg3A6AABbQAABhA+BFQBBBLBjAAQAwAAAzgQQA0gPA4ggQgJAvgTAfQgSAggbAQQgUANgfAGQgfAGgqAAQhOAAhAgTgAITEuQAYgUAQgWQAOgUAAgLIAAnMQAAgQgPgRQgPgSgegSIEhAAQBDAAA4AVQA3AVAtAqQArAqAXA2QAWA1AABBQAAB9hdBZQguAsg2AXQg3AXg/AAgAK5jRIAAGvIA3AAQBsAABFg0QBMg6AAhrQAAhsg7g6QgegdgrgOQgrgOg6AAQghAAgqAJgABmEuQA7gmgBgjIAAnIQAAgeg2gqIDfAAQgeASgOASQgOASAAARIAAG3QBnAPAcgCQBLgHBcg+Ig7CTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_cold, new cjs.Rectangle(-112.5,-51.2,225,82.9), null);


(lib.suck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FFFFFF"],[0.263,0.412],0.1,0,0,0.1,0,1936.9).s().p("EjUIDUJUhX3hX4AAAh8RUAAAh8QBX3hX6UBX5hX1B8QAAAUB8RAAABX2BX1UBX4BX6AAAB8QUAAAB8RhX4BX4UhX2BX3h8RAAAUh8QAAAhX5hX3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.suck, new cjs.Rectangle(-1920,-1920,3840,3840.1), null);


(lib.png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fog
	this.instance = new lib.fog();
	this.instance.parent = this;
	this.instance.setTransform(-200,-300,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.png, new cjs.Rectangle(-201,-301,402,602), null);


(lib.FFFFFF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.FFFFFF, new cjs.Rectangle(0,0,300,600), null);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,300,1,2.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.endframe_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.endframe();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.endframe_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-300,-600,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_1, new cjs.Rectangle(-301,-601,602,1202), null);


(lib.glow_power = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.text_power();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow_power, new cjs.Rectangle(-129.5,-41.7,262,86), null);


(lib.glow_ice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.text_ice();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow_ice, new cjs.Rectangle(-129.5,-75.5,262,154), null);


(lib.glow_cold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.text_cold();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow_cold, new cjs.Rectangle(-129.5,-48.6,262,100), null);


(lib.fog_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// png
	this.instance = new lib.png();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fog_1, new cjs.Rectangle(-50,-175,400,600), null);


(lib.fade_power = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer 2
	this.instance = new lib.glow_power();
	this.instance.parent = this;
	this.instance.setTransform(143.8,50.9,1,1,0,0,0,145.3,51.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:-1.5,y:-0.7,alpha:0.004},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.201},0).wait(1).to({alpha:0.246},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.494},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.693},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:145.3,regY:51.6,x:143.8,y:50.9,alpha:1},0).wait(19).to({regX:0,regY:0,x:-1.5,y:-0.7,alpha:0.994},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.823},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.598},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.477},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.302},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.072},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.005},0).wait(1).to({regX:145.3,regY:51.6,x:143.8,y:50.9,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-42.4,263,87);


(lib.fade_ice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer 2
	this.instance = new lib.glow_ice();
	this.instance.parent = this;
	this.instance.setTransform(60.4,51.2,1,1,0,0,0,60.4,51.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.004},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.201},0).wait(1).to({alpha:0.246},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.494},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.693},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:60.4,regY:51.2,x:60.4,y:51.2,alpha:1},0).wait(19).to({regX:0,regY:0,x:0,y:0,alpha:0.994},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.823},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.598},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.477},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.302},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.072},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.005},0).wait(1).to({regX:60.4,regY:51.2,x:60.4,y:51.2,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-75.5,262,154);


(lib.fade_cold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer 2
	this.instance = new lib.glow_cold();
	this.instance.parent = this;
	this.instance.setTransform(113.4,51.2,1,1,0,0,0,113.4,51.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.004},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.201},0).wait(1).to({alpha:0.246},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.494},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.693},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:113.4,regY:51.2,x:113.4,y:51.2,alpha:1},0).wait(19).to({regX:0,regY:0,x:0,y:0,alpha:0.994},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.823},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.598},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.477},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.302},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.072},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.005},0).wait(1).to({regX:113.4,regY:51.2,x:113.4,y:51.2,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-48.6,262,100);


// stage content:
(lib.blizzard_hearthstone_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		stage.enableMouseOver();
		
		this.exit.addEventListener('mouseover', on_over.bind(this));
		this.exit.addEventListener('mouseout', on_out.bind(this));
		this.exit.addEventListener('click', on_click.bind(this));
		
		function on_over(){
			//
		}
		
		function on_out(){
			//
		}
		
		function on_click(){
		   //
		}
	}
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(355).call(this.frame_359).wait(1));

	// EXIT
	this.exit = new lib.exit();
	this.exit.parent = this;
	this.exit.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.exit, 0, 1, 2, false, new lib.exit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exit).wait(360));

	// suck
	this.instance = new lib.suck();
	this.instance.parent = this;
	this.instance.setTransform(150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.68,scaleY:0.68},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(1).to({scaleX:0.61,scaleY:0.61},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.54,scaleY:0.54},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.46,scaleY:0.46},0).wait(1).to({scaleX:0.43,scaleY:0.43},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.37,scaleY:0.37},0).wait(1).to({scaleX:0.34,scaleY:0.34},0).wait(1).to({scaleX:0.3,scaleY:0.3},0).wait(1).to({scaleX:0.26,scaleY:0.26},0).wait(1).to({scaleX:0.22,scaleY:0.22},0).wait(1).to({regX:0.3,scaleX:0.16,scaleY:0.16},0).to({_off:true},1).wait(99));

	// FFFFFF
	this.instance_1 = new lib.FFFFFF();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:300,y:300,alpha:0.896},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.876},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.699},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.599},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.093},0).wait(1).to({regY:125,y:125,alpha:0},0).to({_off:true},1).wait(234).to({_off:false},0).to({alpha:0.898},6,cjs.Ease.get(-1)).wait(1).to({regY:300,y:300},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.89},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.814},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.782},0).wait(1).to({alpha:0.764},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.653},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.302},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.037},0).wait(1).to({regY:125,y:125,alpha:0},0).to({_off:true},1).wait(60));

	// fog
	this.instance_2 = new lib.fog_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.8,300,1,1,0,180,0,149.8,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.41,scaleY:1.41,skewX:193.3,skewY:13.3,x:149.7,y:300.1},55).to({regY:124.9,scaleX:1.81,scaleY:1.81,skewX:206.6,skewY:26.6,x:149.4,alpha:0},55).to({_off:true},1).wait(69).to({_off:false,regX:149.7,regY:124.8,scaleX:3.27,scaleY:3.27,skewX:266.2,skewY:86.2,x:166.7,y:299.1},0).wait(1).to({regX:150,regY:125,scaleX:3.26,scaleY:3.26,skewX:265.8,skewY:85.8,x:167.4,y:300},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:265.4,skewY:85.4,x:167.5,alpha:0.002},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:265,skewY:85,alpha:0.004},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:264.6,skewY:84.6,alpha:0.006},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:264.2,skewY:84.2,alpha:0.01},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:263.8,skewY:83.8,alpha:0.014},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:263.5,skewY:83.5,alpha:0.018},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:263.1,skewY:83.1,alpha:0.023},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:262.7,skewY:82.7,x:167.6,alpha:0.029},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:262.3,skewY:82.3,alpha:0.035},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:261.9,skewY:81.9,alpha:0.041},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:261.5,skewY:81.5,alpha:0.048},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:261.1,skewY:81.1,alpha:0.056},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:260.7,skewY:80.7,alpha:0.063},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:260.3,skewY:80.3,x:167.7,alpha:0.072},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:259.9,skewY:79.9,y:299.9,alpha:0.08},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:259.5,skewY:79.5,alpha:0.089},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:259.1,skewY:79.1,y:300,alpha:0.098},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:258.8,skewY:78.8,x:167.8,y:299.9,alpha:0.107},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:258.4,skewY:78.4,y:300,alpha:0.117},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:258,skewY:78,y:299.9,alpha:0.127},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:257.6,skewY:77.6,alpha:0.138},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:257.2,skewY:77.2,alpha:0.148},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:256.8,skewY:76.8,x:167.9,alpha:0.159},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:256.4,skewY:76.4,alpha:0.17},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:256,skewY:76,alpha:0.182},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:255.6,skewY:75.6,alpha:0.193},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:255.2,skewY:75.2,alpha:0.205},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:254.8,skewY:74.8,x:168,y:299.8,alpha:0.217},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:254.5,skewY:74.5,x:167.9,alpha:0.229},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:254.1,skewY:74.1,x:168,y:299.9,alpha:0.242},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:253.7,skewY:73.7,alpha:0.254},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:253.3,skewY:73.3,y:299.8,alpha:0.267},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:252.9,skewY:72.9,x:168.1,alpha:0.28},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:252.5,skewY:72.5,x:168,y:299.9,alpha:0.293},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:252.1,skewY:72.1,x:168.1,y:299.8,alpha:0.306},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:251.7,skewY:71.7,x:168.2,alpha:0.32},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:251.3,skewY:71.3,x:168.1,alpha:0.334},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:250.9,skewY:70.9,x:168.2,alpha:0.347},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:250.5,skewY:70.5,alpha:0.361},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:250.1,skewY:70.1,x:168.3,alpha:0.376},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:249.8,skewY:69.8,alpha:0.39},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:249.4,skewY:69.4,alpha:0.404},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:249,skewY:69,x:168.4,alpha:0.419},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:248.6,skewY:68.6,alpha:0.433},0).wait(1).to({scaleX:3.19,scaleY:3.19,skewX:248.2,skewY:68.2,y:299.7,alpha:0.448},0).wait(1).to({scaleX:3.19,scaleY:3.19,skewX:247.8,skewY:67.8,alpha:0.463},0).wait(1).to({scaleX:3.19,scaleY:3.19,skewX:247.4,skewY:67.4,x:168.5,alpha:0.478},0).wait(1).to({scaleX:3.19,scaleY:3.19,skewX:247,skewY:67,alpha:0.493},0).wait(1).to({scaleX:3.18,scaleY:3.18,skewX:246.6,skewY:66.6,alpha:0.509},0).wait(1).to({scaleX:3.18,scaleY:3.18,skewX:246.2,skewY:66.2,x:168.6,alpha:0.524},0).wait(1).to({scaleX:3.18,scaleY:3.18,skewX:245.8,skewY:65.8,alpha:0.539},0).wait(1).to({scaleX:3.18,scaleY:3.18,skewX:245.5,skewY:65.5,alpha:0.555},0).wait(1).to({scaleX:3.17,scaleY:3.17,skewX:245.1,skewY:65.1,x:168.7,alpha:0.571},0).wait(1).to({scaleX:3.17,scaleY:3.17,skewX:244.7,skewY:64.7,alpha:0.586},0).wait(1).to({scaleX:3.17,scaleY:3.17,skewX:244.3,skewY:64.3,alpha:0.602},0).wait(1).to({scaleX:3.16,scaleY:3.16,skewX:243.9,skewY:63.9,x:168.8,y:299.6,alpha:0.618},0).wait(1).to({scaleX:3.16,scaleY:3.16,skewX:243.5,skewY:63.5,y:299.7,alpha:0.634},0).wait(1).to({scaleX:3.16,scaleY:3.16,skewX:243.1,skewY:63.1,x:168.9,alpha:0.65},0).wait(1).to({scaleX:3.15,scaleY:3.15,skewX:242.7,skewY:62.7,y:299.6,alpha:0.666},0).wait(1).to({scaleX:3.15,scaleY:3.15,skewX:242.3,skewY:62.3,x:169,alpha:0.683},0).wait(1).to({scaleX:3.14,scaleY:3.14,skewX:241.9,skewY:61.9,alpha:0.699},0).wait(1).to({scaleX:3.14,scaleY:3.14,skewX:241.5,skewY:61.5,x:169.1,alpha:0.715},0).wait(1).to({scaleX:3.13,scaleY:3.13,skewX:241.1,skewY:61.1,alpha:0.732},0).wait(1).to({scaleX:3.13,scaleY:3.13,skewX:240.8,skewY:60.8,alpha:0.748},0).wait(1).to({scaleX:3.12,scaleY:3.12,skewX:240.4,skewY:60.4,x:169.2,alpha:0.765},0).wait(1).to({scaleX:3.12,scaleY:3.12,skewX:240,skewY:60,x:169.3,alpha:0.782},0).wait(1).to({scaleX:3.11,scaleY:3.11,skewX:239.6,skewY:59.6,x:169.4,y:299.5,alpha:0.798},0).wait(1).to({scaleX:3.1,scaleY:3.1,skewX:239.2,skewY:59.2,y:299.6,alpha:0.815},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:238.8,skewY:58.8,x:169.5,alpha:0.832},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:238.4,skewY:58.4,alpha:0.849},0).wait(1).to({scaleX:3.08,scaleY:3.08,skewX:238,skewY:58,x:169.6,alpha:0.865},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:237.6,skewY:57.6,x:169.7,alpha:0.882},0).wait(1).to({scaleX:3.06,scaleY:3.06,skewX:237.2,skewY:57.2,alpha:0.899},0).wait(1).to({scaleX:3.04,scaleY:3.04,skewX:236.8,skewY:56.8,x:169.9,alpha:0.916},0).wait(1).to({scaleX:3.03,scaleY:3.03,skewX:236.5,skewY:56.5,alpha:0.933},0).wait(1).to({scaleX:3.01,scaleY:3.01,skewX:236.1,skewY:56.1,x:170,alpha:0.95},0).wait(1).to({scaleX:2.99,scaleY:2.99,skewX:235.7,skewY:55.7,x:170.2,alpha:0.966},0).wait(1).to({scaleX:2.97,scaleY:2.97,skewX:235.3,skewY:55.3,x:170.3,y:299.5,alpha:0.983},0).wait(1).to({regX:149.7,regY:124.8,scaleX:2.93,scaleY:2.93,skewX:234.9,skewY:54.9,x:169.5,y:299.2,alpha:1},0).to({scaleX:1.4,scaleY:1.4,skewX:201.1,skewY:21.1,x:154.7,y:300.1,alpha:0},86).to({_off:true},1).wait(13));

	// fade_ice
	this.instance_3 = new lib.fade_ice();
	this.instance_3.parent = this;
	this.instance_3.setTransform(248.8,345.8,0.85,0.85,0,0,0,116.2,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.33,scaleY:1.33,x:304.9,y:371.8},71).to({_off:true},1).wait(288));

	// fog
	this.instance_4 = new lib.fog_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(149.8,300,1,1,180,0,0,149.8,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:124.9,scaleX:1.41,scaleY:1.41,rotation:166.7,x:149.7,y:300.1},55).to({scaleX:1.81,scaleY:1.81,rotation:153.4,x:149.5,alpha:0},55).to({_off:true},1).wait(69).to({_off:false,regX:149.7,regY:124.8,scaleX:3.27,scaleY:3.27,rotation:0,skewX:-61.1,skewY:118.9,x:179.1,y:298.9},0).wait(1).to({regX:150,regY:125,scaleX:3.26,scaleY:3.26,skewX:-60.8,skewY:119.2,y:300.1},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:-60.5,skewY:119.5,alpha:0.002},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:-60.3,skewY:119.7,alpha:0.004},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:-60,skewY:120,x:179,y:300,alpha:0.006},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:-59.7,skewY:120.3,x:179.1,y:300.1,alpha:0.01},0).wait(1).to({scaleX:3.26,scaleY:3.26,skewX:-59.4,skewY:120.6,x:179,alpha:0.014},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:-59.1,skewY:120.9,alpha:0.018},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:-58.9,skewY:121.1,x:178.9,alpha:0.023},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:-58.6,skewY:121.4,alpha:0.029},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:-58.3,skewY:121.7,alpha:0.035},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:-58,skewY:122,alpha:0.041},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:-57.8,skewY:122.2,x:178.8,y:300,alpha:0.048},0).wait(1).to({scaleX:3.25,scaleY:3.25,skewX:-57.5,skewY:122.5,y:300.1,alpha:0.056},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:-57.2,skewY:122.8,alpha:0.063},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:-56.9,skewY:123.1,alpha:0.072},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:-56.6,skewY:123.4,alpha:0.08},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:-56.4,skewY:123.6,alpha:0.089},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:-56.1,skewY:123.9,x:178.7,alpha:0.098},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:-55.8,skewY:124.2,alpha:0.107},0).wait(1).to({scaleX:3.24,scaleY:3.24,skewX:-55.5,skewY:124.5,alpha:0.117},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:-55.3,skewY:124.7,alpha:0.127},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:-55,skewY:125,x:178.6,alpha:0.138},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:-54.7,skewY:125.3,alpha:0.148},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:-54.4,skewY:125.6,alpha:0.159},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:-54.1,skewY:125.9,x:178.5,alpha:0.17},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:-53.9,skewY:126.1,alpha:0.182},0).wait(1).to({scaleX:3.23,scaleY:3.23,skewX:-53.6,skewY:126.4,y:300,alpha:0.193},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:-53.3,skewY:126.7,x:178.4,alpha:0.205},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:-53,skewY:127,alpha:0.217},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:-52.8,skewY:127.2,alpha:0.229},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:-52.5,skewY:127.5,x:178.3,alpha:0.242},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:-52.2,skewY:127.8,y:300.1,alpha:0.254},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:-51.9,skewY:128.1,y:300,alpha:0.267},0).wait(1).to({scaleX:3.22,scaleY:3.22,skewX:-51.6,skewY:128.4,x:178.2,y:300.1,alpha:0.28},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:-51.4,skewY:128.6,alpha:0.293},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:-51.1,skewY:128.9,x:178.1,alpha:0.306},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:-50.8,skewY:129.2,y:300,alpha:0.32},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:-50.5,skewY:129.5,y:300.1,alpha:0.334},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:-50.3,skewY:129.7,x:178,alpha:0.347},0).wait(1).to({scaleX:3.21,scaleY:3.21,skewX:-50,skewY:130,alpha:0.361},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:-49.7,skewY:130.3,y:300,alpha:0.376},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:-49.4,skewY:130.6,x:177.9,alpha:0.39},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:-49.1,skewY:130.9,y:300.1,alpha:0.404},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:-48.9,skewY:131.1,x:177.8,y:300,alpha:0.419},0).wait(1).to({scaleX:3.2,scaleY:3.2,skewX:-48.6,skewY:131.4,alpha:0.433},0).wait(1).to({scaleX:3.19,scaleY:3.19,skewX:-48.3,skewY:131.7,x:177.7,y:300.1,alpha:0.448},0).wait(1).to({scaleX:3.19,scaleY:3.19,skewX:-48,skewY:132,alpha:0.463},0).wait(1).to({scaleX:3.19,scaleY:3.19,skewX:-47.7,skewY:132.3,x:177.6,y:300,alpha:0.478},0).wait(1).to({scaleX:3.19,scaleY:3.19,skewX:-47.5,skewY:132.5,alpha:0.493},0).wait(1).to({scaleX:3.18,scaleY:3.18,skewX:-47.2,skewY:132.8,alpha:0.509},0).wait(1).to({scaleX:3.18,scaleY:3.18,skewX:-46.9,skewY:133.1,x:177.5,y:300.1,alpha:0.524},0).wait(1).to({scaleX:3.18,scaleY:3.18,skewX:-46.6,skewY:133.4,x:177.4,y:300,alpha:0.539},0).wait(1).to({scaleX:3.18,scaleY:3.18,skewX:-46.4,skewY:133.6,x:177.3,alpha:0.555},0).wait(1).to({scaleX:3.17,scaleY:3.17,skewX:-46.1,skewY:133.9,y:300.1,alpha:0.571},0).wait(1).to({scaleX:3.17,scaleY:3.17,skewX:-45.8,skewY:134.2,x:177.2,y:300,alpha:0.586},0).wait(1).to({scaleX:3.17,scaleY:3.17,skewX:-45.5,skewY:134.5,y:300.1,alpha:0.602},0).wait(1).to({scaleX:3.16,scaleY:3.16,skewX:-45.2,skewY:134.8,x:177.1,y:300,alpha:0.618},0).wait(1).to({scaleX:3.16,scaleY:3.16,skewX:-45,skewY:135,x:177,alpha:0.634},0).wait(1).to({scaleX:3.15,scaleY:3.15,skewX:-44.7,skewY:135.3,y:300.1,alpha:0.65},0).wait(1).to({scaleX:3.15,scaleY:3.15,skewX:-44.4,skewY:135.6,x:176.9,alpha:0.666},0).wait(1).to({scaleX:3.15,scaleY:3.15,skewX:-44.1,skewY:135.9,x:176.8,y:300,alpha:0.683},0).wait(1).to({scaleX:3.14,scaleY:3.14,skewX:-43.9,skewY:136.1,alpha:0.699},0).wait(1).to({scaleX:3.14,scaleY:3.14,skewX:-43.6,skewY:136.4,x:176.7,alpha:0.715},0).wait(1).to({scaleX:3.13,scaleY:3.13,skewX:-43.3,skewY:136.7,x:176.6,alpha:0.732},0).wait(1).to({scaleX:3.13,scaleY:3.13,skewX:-43,skewY:137,x:176.5,alpha:0.748},0).wait(1).to({scaleX:3.12,scaleY:3.12,skewX:-42.7,skewY:137.3,x:176.4,alpha:0.765},0).wait(1).to({scaleX:3.12,scaleY:3.12,skewX:-42.5,skewY:137.5,alpha:0.782},0).wait(1).to({scaleX:3.11,scaleY:3.11,skewX:-42.2,skewY:137.8,x:176.3,alpha:0.798},0).wait(1).to({scaleX:3.1,scaleY:3.1,skewX:-41.9,skewY:138.1,x:176.2,alpha:0.815},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-41.6,skewY:138.4,x:176.1,alpha:0.832},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-41.4,skewY:138.6,x:175.9,alpha:0.849},0).wait(1).to({scaleX:3.08,scaleY:3.08,skewX:-41.1,skewY:138.9,x:175.8,alpha:0.865},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:-40.8,skewY:139.2,x:175.7,alpha:0.882},0).wait(1).to({scaleX:3.06,scaleY:3.06,skewX:-40.5,skewY:139.5,x:175.6,alpha:0.899},0).wait(1).to({scaleX:3.04,scaleY:3.04,skewX:-40.2,skewY:139.8,x:175.4,alpha:0.916},0).wait(1).to({scaleX:3.03,scaleY:3.03,skewX:-40,skewY:140,x:175.3,alpha:0.933},0).wait(1).to({scaleX:3.01,scaleY:3.01,skewX:-39.7,skewY:140.3,x:175.1,alpha:0.95},0).wait(1).to({scaleX:2.99,scaleY:2.99,skewX:-39.4,skewY:140.6,x:174.9,alpha:0.966},0).wait(1).to({scaleX:2.97,scaleY:2.97,skewX:-39.1,skewY:140.9,x:174.7,alpha:0.983},0).wait(1).to({regX:149.7,regY:124.8,scaleX:2.93,scaleY:2.93,skewX:-38.9,skewY:141.1,x:174.8,y:299,alpha:1},0).to({scaleX:1.4,scaleY:1.4,skewX:-15,skewY:165,x:157,y:299.7,alpha:0},86).to({_off:true},1).wait(13));

	// fade_cold
	this.instance_5 = new lib.fade_cold();
	this.instance_5.parent = this;
	this.instance_5.setTransform(248.8,345.8,0.85,0.85,0,0,0,116.2,53.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({scaleX:1.33,scaleY:1.33,x:304.9,y:371.8},71).to({_off:true},1).wait(217));

	// fade_power
	this.instance_6 = new lib.fade_power();
	this.instance_6.parent = this;
	this.instance_6.setTransform(273.6,344.2,0.85,0.85,0,0,0,143.9,51.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(142).to({_off:false},0).to({regX:143.8,regY:51.2,scaleX:1.33,scaleY:1.33,x:343.2,y:368.9},71).to({_off:true},1).wait(146));

	// play_free
	this.instance_7 = new lib.text_play_free();
	this.instance_7.parent = this;
	this.instance_7.setTransform(136.4,509.7,1,1,0,0,0,113.4,11.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(295).to({_off:false},0).to({y:519.7,alpha:1},20,cjs.Ease.get(1)).wait(45));

	// missions_now
	this.instance_8 = new lib.text_missions_now();
	this.instance_8.parent = this;
	this.instance_8.setTransform(136.4,569.7,1,1,0,0,0,113.4,11.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(295).to({_off:false},0).to({y:559.7,alpha:1},20,cjs.Ease.get(1)).wait(45));

	// add
	this.instance_9 = new lib.fog_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(149.8,300,1,1,0,0,180,149.8,125);
	this.instance_9.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.41,scaleY:1.41,skewX:-19.1,skewY:160.9,x:159.9},71).to({scaleX:1.81,scaleY:1.81,skewX:-38.4,skewY:141.6,x:169.9,y:299.8,alpha:0},71).to({_off:true},1).wait(47).to({_off:false,regX:149.6,regY:124.8,scaleX:3.1,scaleY:3.1,skewX:-25.3,skewY:154.7,x:189.8,y:299},0).wait(1).to({regX:150,regY:125,scaleX:3.1,scaleY:3.1,skewX:-24.9,skewY:155.1,x:188.9,y:300.1,alpha:0.001},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-24.6,skewY:155.4,alpha:0.002},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-24.2,skewY:155.8,alpha:0.005},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-23.8,skewY:156.2,x:188.8,y:300,alpha:0.008},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-23.4,skewY:156.6,alpha:0.012},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-23,skewY:157,alpha:0.017},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-22.6,skewY:157.4,alpha:0.023},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-22.2,skewY:157.8,x:188.7,alpha:0.03},0).wait(1).to({scaleX:3.09,scaleY:3.09,skewX:-21.8,skewY:158.2,alpha:0.037},0).wait(1).to({scaleX:3.08,scaleY:3.08,skewX:-21.4,skewY:158.6,alpha:0.044},0).wait(1).to({scaleX:3.08,scaleY:3.08,skewX:-21,skewY:159,y:300.1,alpha:0.052},0).wait(1).to({scaleX:3.08,scaleY:3.08,skewX:-20.6,skewY:159.4,y:300,alpha:0.061},0).wait(1).to({scaleX:3.08,scaleY:3.08,skewX:-20.2,skewY:159.8,x:188.6,alpha:0.07},0).wait(1).to({scaleX:3.08,scaleY:3.08,skewX:-19.9,skewY:160.1,alpha:0.08},0).wait(1).to({scaleX:3.08,scaleY:3.08,skewX:-19.5,skewY:160.5,alpha:0.09},0).wait(1).to({scaleX:3.08,scaleY:3.08,skewX:-19.1,skewY:160.9,x:188.5,alpha:0.101},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:-18.7,skewY:161.3,alpha:0.112},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:-18.3,skewY:161.7,alpha:0.123},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:-17.9,skewY:162.1,x:188.4,alpha:0.135},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:-17.5,skewY:162.5,alpha:0.147},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:-17.1,skewY:162.9,alpha:0.159},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:-16.7,skewY:163.3,x:188.3,alpha:0.172},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:-16.3,skewY:163.7,y:299.9,alpha:0.185},0).wait(1).to({scaleX:3.07,scaleY:3.07,skewX:-15.9,skewY:164.1,y:300,alpha:0.198},0).wait(1).to({scaleX:3.06,scaleY:3.06,skewX:-15.6,skewY:164.4,x:188.2,y:299.9,alpha:0.212},0).wait(1).to({scaleX:3.06,scaleY:3.06,skewX:-15.2,skewY:164.8,alpha:0.226},0).wait(1).to({scaleX:3.06,scaleY:3.06,skewX:-14.8,skewY:165.2,y:300,alpha:0.24},0).wait(1).to({scaleX:3.06,scaleY:3.06,skewX:-14.4,skewY:165.6,x:188.1,y:299.9,alpha:0.254},0).wait(1).to({scaleX:3.06,scaleY:3.06,skewX:-14,skewY:166,alpha:0.269},0).wait(1).to({scaleX:3.06,scaleY:3.06,skewX:-13.6,skewY:166.4,x:188,alpha:0.284},0).wait(1).to({scaleX:3.05,scaleY:3.05,skewX:-13.2,skewY:166.8,alpha:0.299},0).wait(1).to({scaleX:3.05,scaleY:3.05,skewX:-12.8,skewY:167.2,x:187.9,alpha:0.314},0).wait(1).to({scaleX:3.05,scaleY:3.05,skewX:-12.4,skewY:167.6,alpha:0.33},0).wait(1).to({scaleX:3.05,scaleY:3.05,skewX:-12,skewY:168,x:187.8,alpha:0.345},0).wait(1).to({scaleX:3.05,scaleY:3.05,skewX:-11.6,skewY:168.4,alpha:0.361},0).wait(1).to({scaleX:3.05,scaleY:3.05,skewX:-11.3,skewY:168.7,alpha:0.378},0).wait(1).to({scaleX:3.04,scaleY:3.04,skewX:-10.9,skewY:169.1,x:187.7,alpha:0.394},0).wait(1).to({scaleX:3.04,scaleY:3.04,skewX:-10.5,skewY:169.5,x:187.6,alpha:0.41},0).wait(1).to({scaleX:3.04,scaleY:3.04,skewX:-10.1,skewY:169.9,alpha:0.427},0).wait(1).to({scaleX:3.04,scaleY:3.04,skewX:-9.7,skewY:170.3,x:187.5,alpha:0.444},0).wait(1).to({scaleX:3.04,scaleY:3.04,skewX:-9.3,skewY:170.7,alpha:0.461},0).wait(1).to({scaleX:3.03,scaleY:3.03,skewX:-8.9,skewY:171.1,x:187.4,alpha:0.478},0).wait(1).to({scaleX:3.03,scaleY:3.03,skewX:-8.5,skewY:171.5,x:187.3,y:299.8,alpha:0.495},0).wait(1).to({scaleX:3.03,scaleY:3.03,skewX:-8.1,skewY:171.9,y:299.9,alpha:0.513},0).wait(1).to({scaleX:3.03,scaleY:3.03,skewX:-7.7,skewY:172.3,y:299.8,alpha:0.53},0).wait(1).to({scaleX:3.02,scaleY:3.02,skewX:-7.3,skewY:172.7,x:187.2,alpha:0.548},0).wait(1).to({scaleX:3.02,scaleY:3.02,skewX:-6.9,skewY:173.1,x:187.1,y:299.9,alpha:0.566},0).wait(1).to({scaleX:3.02,scaleY:3.02,skewX:-6.6,skewY:173.4,x:187,alpha:0.584},0).wait(1).to({scaleX:3.02,scaleY:3.02,skewX:-6.2,skewY:173.8,alpha:0.602},0).wait(1).to({scaleX:3.01,scaleY:3.01,skewX:-5.8,skewY:174.2,x:186.9,y:299.8,alpha:0.62},0).wait(1).to({scaleX:3.01,scaleY:3.01,skewX:-5.4,skewY:174.6,x:186.8,y:299.9,alpha:0.639},0).wait(1).to({scaleX:3.01,scaleY:3.01,skewX:-5,skewY:175,y:299.8,alpha:0.657},0).wait(1).to({scaleX:3,scaleY:3,skewX:-4.6,skewY:175.4,x:186.7,alpha:0.676},0).wait(1).to({scaleX:3,scaleY:3,skewX:-4.2,skewY:175.8,x:186.6,alpha:0.694},0).wait(1).to({scaleX:2.99,scaleY:2.99,skewX:-3.8,skewY:176.2,x:186.5,alpha:0.713},0).wait(1).to({scaleX:2.99,scaleY:2.99,skewX:-3.4,skewY:176.6,x:186.4,alpha:0.732},0).wait(1).to({scaleX:2.98,scaleY:2.98,skewX:-3,skewY:177,x:186.3,alpha:0.751},0).wait(1).to({scaleX:2.98,scaleY:2.98,skewX:-2.6,skewY:177.4,x:186.2,alpha:0.77},0).wait(1).to({scaleX:2.97,scaleY:2.97,skewX:-2.3,skewY:177.7,x:186.1,alpha:0.789},0).wait(1).to({scaleX:2.97,scaleY:2.97,skewX:-1.9,skewY:178.1,x:186,alpha:0.808},0).wait(1).to({scaleX:2.96,scaleY:2.96,skewX:-1.5,skewY:178.5,x:185.9,alpha:0.827},0).wait(1).to({scaleX:2.95,scaleY:2.95,skewX:-1.1,skewY:178.9,x:185.7,alpha:0.846},0).wait(1).to({scaleX:2.94,scaleY:2.94,skewX:-0.7,skewY:179.3,alpha:0.865},0).wait(1).to({scaleX:2.93,scaleY:2.93,skewX:-0.3,skewY:179.7,x:185.4,alpha:0.885},0).wait(1).to({scaleX:2.92,scaleY:2.92,skewX:0.1,skewY:180.1,x:185.3,alpha:0.904},0).wait(1).to({scaleX:2.91,scaleY:2.91,skewX:0.5,skewY:180.5,x:185.2,alpha:0.923},0).wait(1).to({scaleX:2.9,scaleY:2.9,skewX:0.9,skewY:180.9,x:185,alpha:0.942},0).wait(1).to({scaleX:2.88,scaleY:2.88,skewX:1.3,skewY:181.3,x:184.8,alpha:0.962},0).wait(1).to({scaleX:2.86,scaleY:2.86,skewX:1.7,skewY:181.7,x:184.5,alpha:0.981},0).wait(1).to({regX:149.6,regY:124.8,scaleX:2.83,scaleY:2.83,skewX:2,skewY:182,x:185.4,y:299.3,alpha:1},0).to({scaleX:1.63,scaleY:1.63,skewX:29.3,skewY:209.3,x:168.7,y:300,alpha:0},69).to({_off:true},1).wait(30));

	// endframe
	this.instance_10 = new lib.endframe_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,300,1.3,1.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(260).to({_off:false},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.007},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.016},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.028},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.043},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.06},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.08},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.103},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.129},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.157},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.188},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.221},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.256},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.294},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.333},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.374},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.416},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.458},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.501},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.544},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.586},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.627},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.667},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.705},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.741},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.776},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.808},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.837},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.864},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.889},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.911},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.93},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.947},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.962},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.974},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.983},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({alpha:1},0).wait(61));

	// background
	this.instance_11 = new lib.background_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,300,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:0.5,scaleY:0.5},254).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.697},0).wait(1).to({alpha:0.662},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.598},0).wait(1).to({alpha:0.569},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.487},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.437},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.346},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.284},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.246},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.193},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.116},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0},0).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,900,1800);
// library properties:
lib.properties = {
	id: 'E9F97ABC5B234823BFFE9BF2F3336D99',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/background.jpg?1521589600258", id:"background"},
		{src:"images/endframe.jpg?1521589600258", id:"endframe"},
		{src:"images/fog.png?1521589600258", id:"fog"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E9F97ABC5B234823BFFE9BF2F3336D99'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;