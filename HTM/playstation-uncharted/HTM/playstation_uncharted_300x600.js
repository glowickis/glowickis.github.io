(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.character_left = function() {
	this.initialize(img.character_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,561);


(lib.character_right = function() {
	this.initialize(img.character_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,524);


(lib.foreground = function() {
	this.initialize(img.foreground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,60);


(lib.masked_left = function() {
	this.initialize(img.masked_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,115);


(lib.masked_right = function() {
	this.initialize(img.masked_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,160);


(lib.playstation_blue = function() {
	this.initialize(img.playstation_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.uncharted = function() {
	this.initialize(img.uncharted);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,40);// helper functions:

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


(lib.uncharted_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.uncharted();
	this.instance.parent = this;
	this.instance.setTransform(-111,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.uncharted_1, new cjs.Rectangle(-111,-20,222,40), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ6DbQgkgGgegMIAOg7QAdAMAgAHQAcAGAbAAQASAAAQgFQAPgEALgGQAMgIAGgMQAGgMgBgPQABgOgGgLQgGgLgMgKQgogYgfgMQgdgMgUgLQgVgNgPgPQgPgQgHgSQgJgTAAgXQAAgeAOgZQALgWAYgPQATgPAcgHQAagGAbAAQAfAAAbADQAdAFAYAJIgPA5QgWgJgZgDQgYgFgWAAQgoADgPAKQgLAGgIALQgGALAAAPQgBAOAHAJQADALALAIQAjAXAgAMQAgANATAMQAYAMAPAOQAQAQAIAVQAJATAAAaQAAAhgNAXQgMAYgWAQQgWAPgbAHQgcAIgeAAQggAAghgGgAmiDdQgWgFgWgIQgTgHgSgMQgQgNgQgOQgPgOgKgTQgMgSgJgUQgHgUgDgXQgFgYAAgXQAAgXAFgYQADgWAHgWQAJgTAKgTQAMgSAPgPQAOgQASgKQASgNAVgIQAXgHAXgGQAagDAaAAQAhAAAgAGQAfAHAaAMIgUA7QgVgNgZgGQgcgIgbAAQgvAFgUAIQgcAMgWAWQgUAXgLAfQgMAfABAlQgBAiAMAdQAJAeAUAXQAVAXAdANIAeAJIAjAEIAjgEQARgDANgGIAAh7IhSAAIAAg5ICaAAIAADbQgiARgmAHQggAIgmAAQgZAAgXgEgATHDZIgrh3Ii0AAIgrB3IhMAAICgmyIBiAAIChGygASJAoIhGjKIhJDKICPAAgAEADZIAAmyID7AAIAAA5IizAAIAAB9IClAAIAAA7IilAAIAACHIC4AAIAAA6gAB0DZIgfh3IgMghQgGgNgJgHQgKgGgQgEQgNgEgXAAIg4AAIAAC6IhIAAIAAmyICgAAQAdAAAZAFQAbAHATAPQAUANAKAXQAMAXAAAfQAAASgFARQgFAQgKANQgKAMgPAKQgOALgTADIAAACQAYAGAMARQANAQAKAnIArCJgAg8gaIBGAAQAVAAAQgDQAPgFANgHQAMgIAFgNQAHgNAAgSQAAgTgIgPQgHgNgLgGQgNgHgQgDIgfgEIhJAAgAuODZIAAmyID7AAIAAA5Ii0AAIAAB9ICoAAIAAA7IioAAIAACHIC6AAIAAA6gAwYDZIghh3IgMghQgFgNgJgHQgKgGgPgEQgPgEgZAAIg4AAIAAC6IhHAAIAAmyIChAAQAeAAAYAFQAbAHATAPQAVANAJAXQANAXAAAfQAAASgGARQgGAQgHANQgLAMgPAKQgOALgTADIAAACQAWAGANARQANAQALAnIApCJgAzMgaIBIAAQAVAAAPgDQARgFAMgHQAMgIAGgNQAGgNABgSQAAgTgJgPQgGgNgMgGQgMgHgRgDIgfgEIhLAAg");
	this.shape.setTransform(0,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzC9IglgyQgPADgOAAQgSAAgPgDQgQgEgNgGQgNgFgMgKQgMgHgJgMQgJgJgHgOQgIgNgEgPQgGgQgCgQIgDgiIADgjQACgQAGgPQAEgPAIgNQAGgNAKgLQAIgLANgJQALgJAOgHQANgFAPgDQAQgEASABQARgBAQAEQAQADANAFQANAHALAJQAMAJAKALQAIALAIANQAHANAFAPQAFAPADAQIABAjQAAAYgEAVQgEAXgJASQgJATgNANQgNAPgRALIA1BDgAg5iGQgQAIgMASQgMAPgGAYQgGAVAAAaQAAAZAGAVQAGAXAMARQAMARAQAJQATAJAXAAQAXAAASgJQARgJAMgRQALgRAHgXQAEgVAAgZQAAgagGgVQgFgYgLgPQgMgSgRgIQgSgLgXAAQgXAAgTALgALiCLQgQgEgPgFQgPgHgMgIQgNgIgJgLQgLgKgHgNQgJgNgFgQQgFgPgEgRQgCgQAAgRQAAgSACgRIAIggIANgcQAJgNALgLQAIgLANgJQAMgJAQgHQAOgFASgDQARgEATABQAUgBAUAEQATAEAPAGIgMAqQgMgGgQgDQgPgEgQAAQgOAAgMADQgMACgKAGQgVAIgOASQgOARgIAWQgGAWAAAbQAAAXAHAVQAHAWAOASQAOAQAVAKQAKAEAMACQAMADANAAQASAAARgDQAOgEAPgGIALAoQgQAIgWAEQgUAEgWAAQgRAAgRgDgAEDCHQgWgGgQgPQgQgNgJgRQgJgTAAgXIAAjgIA0AAIAADaQABAQAEAMQAEAMAJAIQAKAHANAEQANAEARAAQAPAAAOgEQAMgFAJgHQAKgJAEgLQAFgMABgPIAAjaIA1AAIAADgQgBAXgIATQgKARgQANQgQAPgXAGQgWAHgbAAQgbAAgYgHgATcCJIghhYIiDAAIggBYIg4AAIB3k/IBHAAIB2E/gASuAGIgziTIg2CTIBpAAgAOGCJIAAk/IA1AAIAAE/gAH1CJIAAk/IA1AAIAAE/gAktCJIh3kMIgBAAIAAEMIgyAAIAAk/IBQAAIB1EKIABAAIAAkKIAyAAIAAE/gAo1CJIgghYIiEAAIggBYIg3AAIB3k/IBGAAIB3E/gApjAGIg0iTIg0CTIBoAAgAtzCJIgWhZIgJgXQgFgKgGgEQgHgGgMgCQgKgDgTAAIgoAAIAACJIg1AAIAAk/IB2AAQAWAAASAFQATAEAOAKQAQALAHAQQAJASAAAWQAAAOgEAMQgFALgGAKQgHAJgMAIQgKAHgOADIAAACQARAEAJAMQAKALAIAeIAfBkgAv1gpIA0AAQAPAAAMgCQAMgEAJgFQAJgHADgIQAFgLAAgNQAAgNgFgLQgFgJgIgGQgKgFgMgCIgWgDIg3AAgA0TCJIAAk/IC0AAIAAAqIh/AAIAABcIB2AAIAAArIh2AAIAACOg");
	this.shape_1.setTransform(0,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AThCPIgdhOIh2AAIgcBOIgzAAIBqkdIBAAAIBrEdgAS4AaIguiFIgwCFIBeAAgAMACPIAAkdIBaAAQARAAAPACQAPACAOAEQANAGALAHQALAIAKAIQAIAKAIALQAGALAGANIAGAcQADAPAAARQAAAQgDAOQgDAQgDANQgGAOgGALQgIALgIAJQgKAJgLAIQgLAHgNAFQgOAFgQACQgOADgRAAgAMvBpIAjAAQASAAAcgHQATgHANgOQANgOAHgUQAGgTAAgYQAAgYgGgTQgHgTgNgOQgNgOgTgHQgcgIgSAAIgjAAgAKrCPIgdhOIh2AAIgdBOIgyAAIBrkdIA/AAIBqEdgAKCAaIguiFIgxCFIBfAAgAF4CPIAAkdIAwAAIAAEdgAEJCPIAAj4IgBAAIhKD4Ig7AAIhIj4IgBAAIAAD4IgsAAIAAkdIBQAAIBDDxIAAAAIBFjxIBQAAIAAEdgAjNCPIAAkdIClAAIAAAlIh2AAIAABTIBtAAIAAAmIhtAAIAABZIB5AAIAAAmgAkpCPIgWhOIgIgWQgCgJgHgEQgGgEgLgDQgIgCgRAAIglAAIAAB6IgvAAIAAkdIBrAAQATAAAQADQASAFAMAJQAOAJAGAPQAIAPAAAUQAAANgDAKQgEALgFAJQgHAIgLAHQgJAGgMACIAAABQAPAEAIAMQAJAKAHAaIAbBagAmfgRIAvAAQAOAAAKgCQALgCAIgFQAIgGAEgIQAEgJAAgLQAAgNgFgKQgEgIgJgFQgHgEgLgDIgUgCIgyAAgArHCPIAAkdIBlAAQAVAAASADQASAFANAJQAOALAIAPQAIAaAAAPIgBAYIgHASQgIAQgOALQgNAKgSAFQgRAFgVAAIg2AAIAABwgAqXgHIAxAAQAMAAALgCQAJgDAJgFQAHgGAEgKQAFgJAAgOQAAgOgFgKQgDgJgJgGQgHgFgMgDQgKgCgNAAIgvAAgAuDCPIgehOIh2AAIgcBOIgzAAIBqkdIBAAAIBrEdgAusAaIgviFIgwCFIBfAAgA0TCPIAAkdIAvAAIAAD3IB5AAIAAAmg");
	this.shape_2.setTransform(0,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-150,-300,300,600), null);


(lib.tagline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tagline, new cjs.Rectangle(-150,-150,300,300), null);


(lib.playstation_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhzE3IAAqeQBTAQB7AqQBfAhAlAwQAmAxAABdQAABXgxAiQgvAhhHgjIAAjgQAAgXgGgNQgHgRgQgEQgOgEgIAKQgJALAAAVIAAIygAF7FcQgKgKAAgPQAAgPAKgKQALgLAOAAQAOAAALALQAKALAAAOQAAAPgKAKQgKAKgPAAQgOAAgLgKgAGAEuQgJAIAAANQAAANAJAIQAIAJAMAAQAMAAAJgJQAIgIAAgNQAAgNgIgIQgJgJgMAAQgMAAgIAJgAA/EGIDxhXQAUgIADgJQACgJgQgGQgRgFgaABQgbACgUAHIigA5IAAhbIAogMQAogLAogEQAygGA3AHQA5AGAuASQAyAQAOAXQAMAVgPATQgLAOgbAOQgNAIgLADIlHB3gAGeFWIAAgBIAAgBIgBgJQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgEgBIgLAAIAAAQIgHAAIAAgoIASAAIAIABQAGADAAAHQAAAFgCACIgDACQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABQACACAAACIAAAJIABABIABABIAAACgAGMFAIALAAIAFgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAgDgDgBIgEgBIgLAAgAmFD9Qg0gQgOgbQgMgaAagUQATgOAigOIAegNIDWhNIAABYIiaA5QgVAHgCAJQgDAJAQAFQARAHAagCQAbgBAUgIIBKgbIAABOIgPAEQgnAGgnAAQhMAAhMgZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.playstation_logo, new cjs.Rectangle(-46,-36,92,72), null);


(lib.playstation_blue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.playstation_blue();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.playstation_blue_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.foreground_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foreground();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foreground_1, new cjs.Rectangle(0,0,300,60), null);


(lib.EXIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.date, new cjs.Rectangle(-150,-150,300,300), null);


(lib.character_right_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.masked_right();
	this.instance.parent = this;
	this.instance.setTransform(60,-524);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAAZAmeQgciTiPk0QhKifhci1QhrEogQAyQguCahdEnIsqAAIAAh4QAAgKAdl3IAGhJIAKiFIAKiwQALiAAeiCQAQhDApiLIAmiHQAFgdAIhEQAIg3AKgKIATAsIAHgsIgHgZQgIgcAAgQQAAgZAFgPQAGgOAAgWQAAgKgIhBQAAgzAggvQAhgzAFhGQAEg0AHgfQAIgoAVgoQAIgQAJgMQAFgHAAgFQAAmBh3jyQgKgVgWhRQgThEgchGIgshrQgvhzAAhxQAAiTBAhzQA4hoBMgbQA0gTBqgOIB/gPQBHgKBKgqQBFgnAGgbQAEgVAPjxQAAgMgdggQgdggAAgxQAAgeANgbQAOggAbgQIIxl8QBNC0AYA9QARAqAAAJQAABUgYCEQgXCFgaA6Qg3B/goA0IggArQgLAQAAAPQAAAaAhAmQAiAnA8AtQADACArAQIAyASQAcANA+AXQAnAQBVAeQBHAeAkAuQA1BEAeBkQAYBSAABEQAAAigVBPQgcBqgEAVQgSBdAAC2QAAGtAXBxQAgBWASChQAQCOAjBXQAmBhBNBKQALALAuAXQBRAqAeAQIAUhjQAUAEAFAZQAIAmAHALQANAUAcANQAUAJAHAAQAbAAAJgcQAIgdAbAAQAGAAAgAeIAhAfQAZAIAGAGQAMAOgEAmQgFAtALApQAJAmAyCJICRGJIAAAeIjFBEQgNghgZhJQgSg3gfhFQgWgwgdgDQgiAFgTAAQgiAAgTgXQgRgVgNgzQgFgVgXgjQgdgugcgDIgSgGQAMAOAQAQQALANAAAPIgHAMQgHAOgBANIABAIIACALQAAAagFALQgHAOgUAAQgnAAgVgeQgcAngcAVQgXAQgOAAQgPAAgJgKQgKgLgLgfIgFgSQgLAcAAAKQAAAPAYBcQAjCIAZB0QAGAaASBlQAWB7AHAzIAUCKIAaCvgAOzWrQAFAMAKANQATAXAVAAQAYAAANgTQAJgOAAgNIgShBQgLAhgJALQgOATgrgCQAAABgGABg");
	mask.setTransform(138.5,-246.2);

	// JPG
	this.instance_1 = new lib.character_right();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-524);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.character_right_1, new cjs.Rectangle(0,-524,277,524), null);


(lib.character_left_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.masked_left();
	this.instance.parent = this;
	this.instance.setTransform(-145,-505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAJdArwQgNhQABhTQgFhAg0hVQgiAngbBmQgaB5gOAyIuhAAQgKgcAAgMQAAg7AzjJQAliWAzisQAchdABgpQAAgagGhAIBGjcQAJggAQhMIAVheIAPg3QAGgiAAg4QAAgzAeg7QAPgfAdg1QAEgJAEg4QAEg6AAg0IAAhGQgvACgngxQgeglAAgPIAFgQIAHgWIhvA5QABgOAJhOQAAgbgSgYIgyg5Igvg1QgVgcgFgYQgZhpgWkCIAGhAQAFg9gEgVIBHgMIhlhQIhGBKQgggoghgwQgXgbgfAAQgZAAhZATQhYATgMAAQhBAAgxhlQgYg0gNg4QgiiagGhbQgEg3gEh6QgDglgDh4QgChJgNhEQgLg1gXg8QgUgvABgZQAAgFAFgXQAGgYAAgFIgdhRIgPgiQgRgigVgGQgUgFgLgBQgCgBgJgjQAKgFAGgGQAJgIAWgbQAkgqAFgpQADgYAugUQA4gXBRgvQA4ggAVAAQAFAAATAGQATAGAEAAQAHAAABgCIACgGIhPi0Ig5gFQALgNAIgQQAJgRAAgLQAAgOgJgUQgJgUAAgCIALgLQALgLAAgSQgBgQgQgXQgRgXgBgNQABgLAHgeIABgsQABgPAfgXIA4AsIALgLIkYo7QASgPAWgPQAWgPAFAAQARAAAsBZIBFCVQBCCQA1CVQAcBSAOAAQAJAAAhgOIBAgdQAAAugQATQgQASAAAZQgBAiDIGmQENI3B4EZQCChQCShyQBJg4BFgPIASgGQgMgEgHAAIgcAEIgcAEQgpAAgTgJQgYgKgUgiQgWgkhkkKQgIgUAAgpIgChEQAAgFgUhDQgSg/AAgrQgBjRC3hsQCEhNCVAAQFUAAAAIrQAAAUgLAYIgYAsQgiBDAABOQAAAkAMA0QANA6AYA3QAJAWASAPQAZAVAjgDQBQgFBNAhQBYAlAuBJQAmAzAQAcQAaAuASBRQAFAcAJAOQAJALADAHQALAYAAB/QAAAigJBlIgKBqQgBAcgDAWQgDAqgLAgQgPArgBAJQAAAQAJBHQAJBFAAAiQAAHOgCBNQgCArgEAOIgKAYQgTA6gkArQgdAkAAAIQAAA4A3CBIBACMQBNC1AIArQADAUgBAeQgDAzAAAXQAAAVAMCAIALCBQAPDSgBBPQgBBcAGAjQAHAlAAAaQAAALgHATQgJASAAANQABANAGAUQAIAZADAXQALBMAVDTIAAA8IhuAMIAAAmgAsfpvQAlBpATAbQALAQAOgLIA0gmQAcgVAJgLQAGgJAAgMQAAgngcgbQgXgUgMAAQgEAAhtAogAtp3JQAVAVABAfQgBARgIASQgOAagDAKQgGAPgeAyQgYAlAAApQABALAHAVQAIAUgBAJQgCAWAaDlQA1gXCehOQgDgVAGhPQAAgogTgyQgHgShIimQghhLgUgRIgNgIQgGgEgFgHg");
	mask.setTransform(-132.5,-280);

	// JPG
	this.instance_1 = new lib.character_left();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-265,-561);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.character_left_1, new cjs.Rectangle(-265,-560,265,560.1), null);


(lib.button_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_label, new cjs.Rectangle(-72,-20,144,40), null);


(lib.button_hitbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F26522").s().rr(-72,-20,144,40,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_hitbox, new cjs.Rectangle(-72,-20,144,40), null);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArFjHIWLAAQAEAAADADQADADAAAEIAAF7QAAAEgDADQgDADgEAAI2LAAQgJgBgBgJIAAl7QAAgEADgDQADgDAEAAg");

	// label
	this.instance = new lib.button_label();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-39.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-38.1},0).wait(1).to({y:-34.4},0).wait(1).to({y:-29},0).wait(1).to({y:-22.6},0).wait(1).to({y:-15.9},0).wait(1).to({y:-9.6},0).wait(1).to({y:-4.3},0).wait(1).to({y:-0.8},0).wait(1).to({y:0.5},0).wait(1));

	// label
	this.instance_1 = new lib.button_label();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1.9},0).wait(1).to({y:5.6},0).wait(1).to({y:11},0).wait(1).to({y:17.4},0).wait(1).to({y:24.1},0).wait(1).to({y:30.4},0).wait(1).to({y:35.7},0).wait(1).to({y:39.2},0).wait(1).to({y:40.5},0).wait(1));

	// hitbox
	this.instance_2 = new lib.button_hitbox();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-20,144,40);


// stage content:
(lib.playstation_uncharted_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		stage.enableMouseOver();
		
		this.EXIT.addEventListener('mouseover', on_over.bind(this));
		this.EXIT.addEventListener('mouseout', on_out.bind(this));
		this.EXIT.addEventListener('click', on_click.bind(this));
		
		function on_over(){
			if(this.CTA){
				this.CTA.play();
			}
		}
		
		function on_out(){
			if(this.CTA){
				// DO NOTHING
			}
		}
		
		function on_click(){
			try{
				//EB.clickthrough();
			}catch(e){
				console.log(e);
			}
		}
	}
	this.frame_164 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(160).call(this.frame_164).wait(1));

	// EXIT
	this.EXIT = new lib.EXIT();
	this.EXIT.parent = this;
	this.EXIT.setTransform(150,300);
	new cjs.ButtonHelper(this.EXIT, 0, 1, 2, false, new lib.EXIT(), 3);

	this.timeline.addTween(cjs.Tween.get(this.EXIT).wait(165));

	// playstation_logo
	this.instance = new lib.playstation_logo();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({scaleX:0.9,scaleY:0.9,alpha:0},12).to({_off:true},1).wait(136));

	// playstation_blue
	this.instance_1 = new lib.playstation_blue_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({alpha:0},12).to({_off:true},1).wait(133));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.parent = this;
	this.CTA.setTransform(150,570,1.5,1.5);
	this.CTA.alpha = 0;
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(140).to({_off:false},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0.012},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.048},0).wait(1).to({scaleX:1.44,scaleY:1.44,alpha:0.111},0).wait(1).to({scaleX:1.4,scaleY:1.4,alpha:0.202},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.316},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.447},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.582},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.708},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.816},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.899},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.957},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.99},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(12));

	// tagline
	this.instance_2 = new lib.tagline();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,430,1.25,1.25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128).to({_off:false},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(25));

	// date
	this.instance_3 = new lib.date();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,374,1.5,1.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116).to({_off:false},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0.014},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.057},0).wait(1).to({scaleX:1.43,scaleY:1.43,alpha:0.131},0).wait(1).to({scaleX:1.38,scaleY:1.38,alpha:0.237},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.369},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.515},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.657},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.782},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.881},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.949},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(37));

	// uncharted
	this.instance_4 = new lib.uncharted_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.2,313.2,1.5,1.5,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:1.5,scaleY:1.5,x:150,y:313,alpha:0.01},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.041},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.095},0).wait(1).to({scaleX:1.41,scaleY:1.41,alpha:0.173},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.273},0).wait(1).to({scaleX:1.31,scaleY:1.31,alpha:0.39},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:149.9,alpha:0.515},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.638},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.749},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.842},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.914},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.963},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,x:150,alpha:1},0).wait(42));

	// text
	this.instance_5 = new lib.text();
	this.instance_5.parent = this;
	this.instance_5.setTransform(151.1,300.9,1.5,1.5,0,0,0,0.7,0.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:1.49,scaleY:1.49,x:150,y:300,alpha:0.012},0).wait(1).to({scaleX:1.46,scaleY:1.46,alpha:0.051},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:149.9,alpha:0.116},0).wait(1).to({scaleX:1.35,scaleY:1.35,y:299.9,alpha:0.207},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:149.8,alpha:0.321},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:299.8,alpha:0.452},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:149.7,alpha:0.591},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:149.6,y:299.7,alpha:0.724},0).wait(1).to({scaleX:0.87,scaleY:0.87,alpha:0.839},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:149.5,y:299.6,alpha:0.927},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.982},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:150,y:300,alpha:1},0).wait(54).to({scaleY:0.77,alpha:0.959},0).wait(1).to({scaleY:0.84,alpha:0.827},0).wait(1).to({scaleY:0.95,alpha:0.61},0).wait(1).to({scaleY:1.07,alpha:0.362},0).wait(1).to({scaleY:1.17,alpha:0.158},0).wait(1).to({scaleY:1.23,alpha:0.037},0).wait(1).to({scaleY:1.25,alpha:0},0).to({_off:true},1).wait(48));

	// character_right
	this.character = new lib.character_right_1();
	this.character.parent = this;
	this.character.setTransform(250,1128,2,2);
	this.character._off = true;

	this.timeline.addTween(cjs.Tween.get(this.character).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,x:90,y:600},35,cjs.Ease.get(1)).wait(106));

	// character_left
	this.character_1 = new lib.character_left_1();
	this.character_1.parent = this;
	this.character_1.setTransform(-70,1128,2,2);
	this.character_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.character_1).wait(32).to({_off:false},0).to({scaleX:1,scaleY:1,x:192,y:600},35,cjs.Ease.get(1)).wait(98));

	// foreground
	this.instance_6 = new lib.foreground_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80.5,-32,1,1,0,0,0,80.5,28);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).wait(1).to({regX:150,regY:30,x:150,y:-21.5},0).wait(1).to({y:-13.8},0).wait(1).to({y:-6.8},0).wait(1).to({y:-0.3},0).wait(1).to({y:5.6},0).wait(1).to({y:10.9},0).wait(1).to({y:15.7},0).wait(1).to({y:19.8},0).wait(1).to({y:23.3},0).wait(1).to({y:26.2},0).wait(1).to({y:28.3},0).wait(1).to({y:29.6},0).wait(1).to({regX:80.5,regY:28,x:80.5,y:28},0).wait(124));

	// background
	this.instance_7 = new lib.background_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,300);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,y:450},90,cjs.Ease.get(1)).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '6885013CB79A49979DCAACCBC7CE3403',
	width: 300,
	height: 600,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/background.jpg?1521598858234", id:"background"},
		{src:"images/character_left.jpg?1521598858234", id:"character_left"},
		{src:"images/character_right.jpg?1521598858234", id:"character_right"},
		{src:"images/foreground.png?1521598858234", id:"foreground"},
		{src:"images/masked_left.png?1521598858234", id:"masked_left"},
		{src:"images/masked_right.png?1521598858234", id:"masked_right"},
		{src:"images/playstation_blue.jpg?1521598858234", id:"playstation_blue"},
		{src:"images/uncharted.png?1521598858234", id:"uncharted"}
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
an.compositions['6885013CB79A49979DCAACCBC7CE3403'] = {
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