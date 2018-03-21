(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.character = function() {
	this.initialize(img.character);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,446,250);


(lib.endframe = function() {
	this.initialize(img.endframe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,379,250);


(lib.ESRB = function() {
	this.initialize(img.ESRB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,70);


(lib.lines = function() {
	this.initialize(img.lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,90);


(lib.radial = function() {
	this.initialize(img.radial);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);// helper functions:

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


(lib.weekend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E474C").s().p("ANZGvIDetdIDJAAQBSgBAfAlQAfAkgVBSIiYJGQgPA+grAfQgqAghFAAgAPnFGIBWAAQAYAAAOgKQANgLAEgRICPonQAIgfgIgQQgJgPgZAAIhRAAgAKnGvIAsisIgWmIIiRI0Ih0AAIDetdIB0AAIAQGgIBrmgIBzAAIjeNdgACIGvIDetdID+AAIgYBgIiLAAIhNEmICLAAIgYBfIiLAAIhJEYICLAAIgYBggAAGGvIgfmkIhsGkIhzAAIDetdIByAAIhvGyIDrmyIBpAAIjrGuIAoGvgAopGvIDetdID/AAIgYBgIiLAAIhNEmICLAAIgYBfIiLAAIhJEYICKAAIgYBggAtZGvIDetdID+AAIgYBgIiLAAIhNEmICLAAIgYBfIiLAAIhJEYICLAAIgYBggAx6GvIA5nyIjFHyIh9AAIBetdIBzAAIhTKbID2qbIBaAAIhTKbID2qbIByAAIldNdg");
	this.shape.setTransform(141.2,43.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.weekend, new cjs.Rectangle(0,0,282.3,86.2), null);


(lib.text_legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#777777").s().p("Ax4BEIgJgBIgGgFQgCgCgBgDQgBgDABgFIABgBIAJAAIgBACQgBAFACADQACACAGAAIAPAAQAFAAADgCQADgDABgEIAEgVIgIAEQgGADgFABIgIAAIgIgCIgFgDQgCgDgBgEIABgIIAGgeIADgIQABgDADgCIAGgDIAHgBIALAAQAFAAAFADIAHAFIACgIIAIAAIgRBQQgBAEgCAEIgEAEIgGAEIgHABgAxwgTQgDADgBAEIgGAfQgBAFACADQACADAFAAIAIAAQAEAAAEgDIALgGIAIghIgIgHQgDgCgFAAIgJAAQgFAAgDACgAMFAzIBGh1IAKAAIhGB1gAJfAzIBGh1IAKAAIhGB1gAq0AzIBGh1IAKAAIhGB1gAtqAzIBGh1IAKAAIhGB1gAUXApQgFAAgEgBQgEgCgDgDIgDgGQAAgFABgEIABgGIAJAAIgBAIQgBAFACADQADACAGABIARAAQAFgBADgCQAEgCABgGIAFgZIgcAAIgJAAQgEgCgCgDQgCgCgBgEIABgKIADgPQABgEACgDIAEgGQADgCADgCIAJgBIASAAQAGABAEABQAEACACACIADAHQABAFgCAGIgMA4IgDAIQgBADgDACIgHAEIgIABgAUfguQgEADgBAFIgDAQQgBAGACADQACACAGAAIAdAAIAFgZQACgGgDgDQgCgDgGAAIgSAAQgFAAgDACgATVApQgFAAgEgBIgGgFQgDgCAAgEQgBgEABgFIABgGIAKAAIgCAIQgBAGACACQADADAGAAIASAAQAFAAADgDQADgDABgEIAFgUQABgEgDgDQgCgDgGgBIgkAAIAKgwIA2AAIgBAIIgtAAIgHAgIAZAAQAGAAAEACQAEABACADQADADAAAEIAAAIIgEASQgBAFgCADIgEAFIgHAEIgIABgAPZApQgEAAgEgBQgDgBgCgDQgCgCgBgEIABgIIAHgjQABgEACgDIAEgFIAGgDIAHgBIALAAQAFAAAFADIAHAFIACgIIAIAAIgPBGIgIAAIABgIIgJAFQgGADgFAAgAPegTQgDACgBAFIgHAjQgBAEACADQACADAFAAIAIAAQAEAAAEgCIALgHIAIglIgHgGQgDgCgFAAIgJAAQgFAAgDACgAI5ApQgFAAgEgBQgEgCgDgDIgDgGIABgKIADgOQABgGAEgEIAEgEIAGgCQgFgCgBgEQgCgEACgHIACgLIADgHIAEgGIAHgEIAIgBIAQAAQAFABAEABQAEACADACIADAHQAAAEgBAFIgCAKQgCAGgDAFQgDAEgGABQAGACACAEQACAEgCAHIgDAPIgDAIIgEAFIgHAEIgIABgAI4gDQgDADgBAFIgEAQQgBAFACAEQADADAGAAIASAAQAFAAADgDQAEgDABgEIADgRQACgGgDgCQgCgDgHAAIgSAAQgFAAgDACgAJDguQgEADgBAFIgCAMQgCAGADADQACAEAHAAIAOAAQAFgBAEgCQADgDABgFIADgNQABgFgCgEQgDgCgGAAIgPAAQgFAAgDACgAHjApIgIgBQgDgBgCgDQgDgCAAgCIAAgJIABgFIAJAAIgBAIQgBAEACACQACACAFAAIAQAAQAFAAACgCQADgCABgEIACgJQABgEgFgBIgZgHQgFAAgCgDIgCgEIAAgFIABgIIADgGIAEgFIAGgDIAIAAIAPAAIAIABQADABACACQADACAAADIAAAIIgBAEIgJAAIABgGQABgEgCgCQgCgCgFAAIgPAAQgEAAgDACQgDACgBAEIgBAIQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIADACIAaAGQAGABACADQACAEgBAFIgCAJIgCAGIgFAFQgCABgEABIgHABgAGmApQgEAAgEgBQgDgBgCgDQgCgDgBgDIABgIIAHgiQABgEACgEQABgDADgCIAGgDIAHgBIALAAQAFAAAFADIAGAFIAIgjIAJAAIgVBhIgIAAIABgIIgJAFQgGADgFAAgAGrgTQgDADgBAEIgHAjQgBAEACADQACADAFAAIAIAAQAEAAAEgCIALgHIAIglIgHgGQgDgCgFAAIgJAAQgFAAgDACgAEtApQgGAAgDgBQgEgBgCgEQgCgCgBgEIABgJIAHggIACgIIAFgFIAGgDIAIgBIAPAAIAIABQAEABACAEQACACABAEIgBAJIgDAPIgsAAIgEAQQgBAFACADQACADAGgBIAPAAQAEABADgDQADgDABgEIABgGIAJAAIgBAGIgCAIQgCACgDACQgCADgDABIgIABgAEwgUQgDADgBAFIgDAMIAkAAIACgLQABgGgCgCQgCgDgFABIgPAAQgFAAgDABgADWApQgFAAgDgBQgEgBgCgDQgCgDAAgDIAAgIIAIgiQAAgEACgEQACgDACgCIAGgDIAIgBIALAAQAFAAAFADIAGAFIAHgjIAJAAIgUBhIgJAAIABgIIgIAFQgGADgFAAgADagTQgCADgBAEIgIAjQgBAEACADQACADAGAAIAHAAQAFAAAEgCIALgHIAIglIgIgGQgDgCgEAAIgKAAQgEAAgEACgABYApQgFAAgDgBQgEgBgCgDQgCgCAAgEIAAgIIAIgjQAAgEACgDIAEgFIAGgDIAIgBIAKAAQAGAAAFADIAGAFIACgIIAJAAIgPBGIgJAAIABgIIgIAFQgGADgFAAgABcgTQgDACAAAFIgIAjQgBAEACADQACADAGAAIAHAAQAEAAAFgCIALgHIAIglIgIgGQgDgCgEAAIgKAAQgEAAgEACgAj5ApQgFAAgDgBQgEgBgCgDQgCgCAAgEIAAgIIAIgjQAAgEACgDIAEgFIAGgDIAIgBIAKAAQAGAAAFADIAGAFIACgIIAJAAIgPBGIgJAAIABgIIgIAFQgGADgFAAgAj1gTQgDACAAAFIgIAjQgBAEACADQACADAGAAIAHAAQAEAAAFgCIALgHIAIglIgIgGQgDgCgEAAIgKAAQgEAAgEACgAngApQgEAAgEgBQgDgBgCgDQgCgCgBgEIABgIIAHgjQABgEACgDIAEgFIAGgDIAHgBIALAAQAFAAAFADIAHAFIACgIIAIAAIgPBGIgIAAIABgIIgJAFQgGADgFAAgAnbgTQgDACgBAFIgHAjQgBAEACADQACADAFAAIAIAAQAEAAAEgCIALgHIAIglIgHgGQgDgCgFAAIgJAAQgFAAgDACgArXApQgGAAgEgBIgGgFQgCgCgBgEQgBgEACgFIABgGIAJAAIgCAIQgBAGADACQACADAHAAIARAAQAFAAADgDQAEgDABgEIAEgUQABgEgCgDQgDgDgGgBIgkAAIALgwIA2AAIgCAIIgtAAIgHAgIAaAAQAFAAAEACQAEABADADQACADABAEIgBAIIgEASQAAAFgCADIgFAFIgGAEIgJABgAuQApQgFAAgEgBQgEgCgDgDIgDgGIABgKIADgOQABgGAEgEIAEgEIAGgCQgFgCgBgEQgCgEACgHIACgLIADgHIAEgGIAHgEIAIgBIAQAAQAFABAEABQAEACADACIADAHQAAAEgBAFIgCAKQgCAGgDAFQgDAEgGABQAGACACAEQACAEgCAHIgDAPIgDAIIgEAFIgHAEIgIABgAuRgDQgDADgBAFIgEAQQgBAFACAEQADADAGAAIASAAQAFAAADgDQAEgDABgEIADgRQACgGgDgCQgCgDgHAAIgSAAQgFAAgDACgAuGguQgEADgBAFIgCAMQgCAGADADQACAEAHAAIAOAAQAFgBAEgCQADgDABgFIADgNQABgFgCgEQgDgCgGAAIgPAAQgFAAgDACgAvmApIgIgBQgDgBgCgDQgDgCAAgCIAAgJIABgFIAJAAIgBAIQgBAEACACQACACAFAAIAQAAQAFAAACgCQADgCABgEIACgJQABgEgFgBIgZgHQgFAAgCgDIgCgEIAAgFIABgIIADgGIAEgFIAGgDIAIAAIAPAAIAIABQADABACACQADACAAADIAAAIIgBAEIgJAAIABgGQABgEgCgCQgCgCgFAAIgPAAQgEAAgDACQgDACgBAEIgBAIQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIADACIAaAGQAGABACADQACAEgBAFIgCAJIgCAGIgFAFQgCABgEABIgHABgAyvApQgFAAgEgBQgDgBgDgEQgCgCAAgEIAAgJIAHggIADgIIAEgFIAGgDIAIgBIAPAAIAJABQAEABACAEQACACAAAEIAAAJIgEAPIgsAAIgDAQQgBAFACADQACADAFgBIAPAAQAFABADgDQADgDABgEIABgGIAJAAIgBAGIgDAIQgBACgDACQgDADgDABIgIABgAyrgUQgDADgBAFIgDAMIAjAAIADgLQABgGgCgCQgDgDgFABIgPAAQgFAAgCABgAznApIgFgBIgEgCIgHgFIgCAIIgIAAIAUhhIAKAAIgIAjIANgIIAHAAIAIAAIAIABIAFAEIADAGIgBAIIgHAiIgDAIIgEAFIgGADIgHABgAzigTIgLAHIgIAlIAIAGQADACAFAAIAJAAQAFAAADgCQADgDABgFIAHgiQABgFgCgDQgCgCgGAAIgHAAQgEAAgFACgA1XApQgFAAgDgBQgEgBgCgDQgCgCAAgEIAAgIIAIgjQAAgEACgDIAEgFIAGgDIAIgBIAKAAQAGAAAFADIAGAFIACgIIAJAAIgPBGIgJAAIABgIIgIAFQgGADgFAAgA1TgTQgDACAAAFIgIAjQgBAEACADQACADAGAAIAHAAQAEAAAFgCIALgHIAIglIgIgGQgDgCgEAAIgKAAQgEAAgEACgA4EApQgFAAgEgBQgDgBgDgEQgCgCAAgEIAAgJIAHggIADgIIAEgFIAGgDIAIgBIAPAAIAJABQAEABACAEQACACAAAEIAAAJIgEAPIgsAAIgDAQQgBAFACADQACADAFgBIAPAAQAFABADgDQADgDABgEIABgGIAJAAIgBAGIgDAIQgBACgDACQgDADgDABIgIABgA4AgUQgDADgBAFIgDAMIAjAAIADgLQABgGgCgCQgDgDgFABIgPAAQgFAAgCABgA4/ApQgGAAgDgBQgEgBgCgEQgCgCgBgEIABgJIAHggIACgIIAFgFIAGgDIAIgBIAPAAIAIABQAEABACAEQACACABAEIgBAJIgDAPIgsAAIgEAQQgBAFACADQACADAGgBIAPAAQAEABADgDQADgDABgEIABgGIAJAAIgBAGIgCAIQgCACgDACQgCADgDABIgIABgA48gUQgDADgBAFIgDAMIAkAAIACgLQABgGgCgCQgCgDgFABIgPAAQgFAAgDABgAZUApIAThZIgbAAIACgIIA/AAIgCAIIgaAAIgTBZgAX+ApIAVhhIAmAAQAFAAAEABQAEACACADQADACAAAFIAAAKIgFAUIgDAIQgBADgDACIgHADIgIABIghAAIgHAlgAYRgDIAfAAQAFgBADgCQAEgCABgGIAEgWQACgGgDgDQgCgDgGAAIgdAAgAXQApIARhQIgjAuIgHAAIgRguIgRBQIgJAAIAVhhIAIAAIATA1IApg1IAJAAIgVBhgAVHApIAVhhIAmAAQAGAAAEABQAEACACADQACACABAFIgBAKIgEAUIgDAIQgCADgDACIgGADIgIABIghAAIgIAlgAVbgDIAeAAQAFgBAEgCQADgCABgGIAFgWQABgGgCgDQgCgDgGAAIgeAAgAStApIADgOIAKAAIgDAOgAQ9ApIACgJIAYAAIARhQIgYAAIACgIIAhAAIgTBYIAtAAIARhQIgYAAIACgIIAhAAIgTBYIAXAAIgCAJgAQdApQgFgBgDgBQgDgBgCgDQgCgCgBgDIABgJIAJgpIgMAAIACgIIALAAIAFgUIAJAAIgEAUIAVAAIgCAIIgVAAIgJAqQgBAFACADQACADAFAAIALAAIgCAIgAN8ApIA5hZIgzAAIABgIIA/AAIgCA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");
	this.shape.setTransform(0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_legal, new cjs.Rectangle(-171.5,-7.3,344.2,13.5), null);


(lib.text_f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E474C").s().p("AorPtIIG/ZIJRAAIg4DfIlFAAIiyKvIFDAAIg4DeIlDAAIjjNtg");
	this.shape.setTransform(55.6,100.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_f, new cjs.Rectangle(0,0,111.2,201), null);


(lib.text_dates = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F79F11").s().p("AdfFVIEQpVIipAAIAVhUID1AAIAUAeIkqKLgAX6FVIAUhPQAHgfAQgXIAfgrIC4jhIAKgaIAniSQAFgagXABIggAAQgdgBgFAbIgWBTIhbAAIAThLQAfh1BsAAIAwAAQBuAAgfB1IgkCNQgFAUgLARIgbAlIi0DUQgNAPgDALIgIAdICaAAIgVBSgARJFVQg3AAgUgdQgUgdAQg6IB1nCQAdhzBtAAIA7AAQBuAAgfBzIgYBgIhcAAIAXhZQAGgWgGgJQgFgIgZAAIgSAAQgTgBgMALQgLAKgFATIhxG1QgFAVAFAJQAGAJAVAAIBBAAIAtiwIg3AAIAThNICTAAIhVFQgALlFVQhBAAgXggQgZghARhBICPonIBbAAIiQIqQgGAWAHAMQAHALAVgBIAXAAQAUABAOgLQANgMAGgWICPoqIBcAAIiPInQgIAhgOAZQgPAYgVAQQgUAQgbAIQgaAIggAAgAG0FVIBBj6IhoAAIhBD6IhcAAICRo0QAhh1BsAAIBEAAQBuAAgfB1IiSI0gAHcjaIg6DiIBnAAIA7jiQALgognABIgaAAQgogBgKAogAofFVQg3AAgTgdQgVgdAPg6IAPg1IBbAAIgQA7QgHAbAaAAIAkAAQAaAAAGgbIAwi5QAIgcgiAAIiPAAIBelmIEBAAIgWBUIisAAIg3DYQALgKARgHQAQgHATAAIAXAAQBlAAgXBdIgzC/QgfB5hsAAgAvaFVIAThPQAIgfAQgXIAegrIC6jhIAKgaIAmiSQAFgagXABIggAAQgcgBgGAbIgWBTIhcAAIAThLQAgh1BtAAIAvAAQBuAAgfB1IgkCNQgFAUgLARIgbAlIi0DUQgNAPgDALIgJAdICaAAIgVBSgA2LFVQg3AAgUgdQgUgdAQg6IB1nCQAehzBsAAIA7AAQBuAAgeBzIgZBgIhbAAIAWhZQAGgWgGgJQgFgIgZAAIgSAAQgTgBgLALQgMAKgEATIhyG1QgGAVAGAJQAGAJAVAAIBAAAIAuiwIg3AAIAThNICUAAIhWFQgA7vFVQhBAAgYggQgXghAQhBICOonIBcAAIiQIqQgGAWAHAMQAIALAUgBIAWAAQAVABANgLQANgMAHgWICPoqIBbAAIiPInQgHAhgOAZQgPAYgVAQQgUAQgaAIQgbAIghAAgEgggAFVIBBj6IhoAAIhBD6IhbAAICRo0QAfh1BsAAIBFAAQBuAAgfB1IiSI0gA/4jaIg7DiIBpAAIA6jiQALgogoABIgZAAQgpgBgJAogAhiArIAThKIDQAAIgTBKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_dates, new cjs.Rectangle(-227.6,-34.1,455.3,68.2), null);


(lib.reflection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F76423","rgba(247,159,17,0)"],[0,1],-60.5,0,60.5,0).s().p("ApcISIAAwjIS5AAIAAQjg");
	this.shape.setTransform(60.5,53);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflection, new cjs.Rectangle(0,0,121,106), null);


(lib.radial_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.radial();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.radial_1, new cjs.Rectangle(0,0,500,500), null);


(lib.platforms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6F6F").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.platforms, new cjs.Rectangle(-105.4,-8.9,210.9,18), null);


(lib.overwatch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6A03C").s().p("ARsDmID0AAIh6CugA1gjlIB8iuIB5Cug");
	this.shape.setTransform(-61.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464E51").s().p("EAnKADmIAAiwIkWAAIAACwIibAAIAAnFICbAAIAACfIEWAAIAAifICbAAIAAHFgAYhDmQg4AAgkgdQgkgdABgtIAAjHIBiiVIAEgBQALgBAOAAIE2AAQA7AAAjAcQAiAcABAvIAABFIicAAIAAg1IkAAAIAADWIEAAAIAAg9ICcAAIAABOQAAAsglAdQglAeg3AAgAQ0DmIAAlOIjGAAIAAh3IJMAAIhOB3IicAAIAAFOgAM4DmIi7kkIi9EkIipAAIExnFIB1AAIEpHFgABcDmIhkjlIhmDlIhlAAIjJnFICiAAIBfDjIBljjIBpAAIBmDmIBhjmICWAAIjHHFgAo8DmIi/irIAAhaICkAAQAHAAACgCIAAAAIAAhJIgJgBIjqAAIAAFRIibAAIAAnFIGvAAQA2AAAfAZQAgAZgBArIABBsQAAAkglAXQggAUguACIDDCrgA4DDmIAAlUIBQhxIGSAAIAAB3IlGAAIAAA2IDcAAIAABnIjcAAIAAA5IFGAAIAAB4gA+NDmIkfnFICvAAICqETICukTICrAAIkqHFgEgqIADmIB3h4IDVAAIAAjWIkhAAIAADhIhgBfIgHgDQgZgOgOgWQgOgWAAgcIAAj4QAAgvAjgcQAigbA7AAIFYAAQAeAAAYAHIADABIBHBsIAADqQAAAtgkAdQgjAdg5AAgEAq4gCUQgKgGgGgKQgGgLAAgKQAAgNAHgKQAHgKAKgGQAKgFALAAQALAAAKAGQAKAGAGAKQAFAKABAMQgBALgFAKQgGAKgLAGQgJAGgMAAQgMAAgKgGgEAq8gDYQgKAGgEAIQgEAIAAAJQAAAJAFAJQAFAIAIAFQAJAFAJAAQAKAAAHgFQAKgFADgIQAGgIAAgKQgBgQgMgMQgFgFgHgCQgGgCgEAAQgKAAgJAGgEArWgCgIgOgTIAAATIgLAAIAAgzIALAAIAMABQACAAAEADQAFAEAAAHQAAAMgLADIAPAVgEArIgC8IABAAQAGAAABgCQADgBAAgEQAAgDgCgCQgBgCgGAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.overwatch, new cjs.Rectangle(-280.9,-40.4,561.9,80.8), null);


(lib.lines_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lines();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lines_1, new cjs.Rectangle(0,0,492,90), null);


(lib.free = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E474C").s().p("AJNPtIIG/ZIJRAAIg4DfIlEAAIizKvIFEAAIg4DeIlEAAIirKNIFEAAIg4DggAhePtIIF/ZIJSAAIg4DfIlFAAIizKvIFEAAIg4DeIlEAAIirKNIFEAAIg4DggAmOPtIAhssIiiAAIjSMsIkNAAIIG/ZIIOAAQE2AAhcFYIh9HwQhIEFivBIIgbNEgAnVgkICxAAQB4AAAliRIBwmyQAShJgVglQgTgkg7ABIiwAAgA6jPtIIG/ZIJRAAIg4DfIlEAAIizKvIFEAAIg4DeIlEAAIjjNtg");
	this.shape.setTransform(170,100.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.free, new cjs.Rectangle(0,0,340.1,201), null);


(lib.EXIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ESRB_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ESRB();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ESRB_1, new cjs.Rectangle(0,0,137,70), null);


(lib.endframe_weekend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F79F12").s().p("AGSCsIBZlXIBQAAQARAAALADQALAEAHAHQAMAOgIAhIg9DoQgHAZgQANQgRAMgcAAgAHLCDIAiAAQAKAAAFgFQAGgEACgHIA5jcQADgMgEgGQgDgHgKAAIggAAgAE2CsIAShEIgJicIg6DgIguAAIBZlXIAuAAIAGCmIArimIAuAAIhZFXgABICsIBZlXIBmAAIgKAmIg3AAIgfB2IA4AAIgKAlIg4AAIgdBwIA4AAIgKAmgAAACsIgMioIgrCoIguAAIBZlXIAtAAIgsCsIBdisIAqAAIheCrIAQCsgAj0CsIBZlXIBmAAIgKAmIg3AAIgfB2IA4AAIgKAlIg4AAIgdBwIA4AAIgKAmgAmCCsIBZlXIBlAAIgJAmIg4AAIgeB2IA3AAIgKAlIg3AAIgdBwIA3AAIgJAmgAoFCsIAWjGIhPDGIgxAAIAllXIAuAAIgiEBIBjkBIAkAAIgiEBIBkkBIAtAAIiMFXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.endframe_weekend, new cjs.Rectangle(-62.4,-17.2,124.8,34.5), null);


(lib.endframe_free = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E474C").s().p("ACNCsIBZlXIBmAAIgKAmIg3AAIgeB2IA3AAIgKAlIg3AAIgeBwIA4AAIgJAmgAAACsIBYlXIBmAAIgKAmIg4AAIgeB2IA3AAIgKAlIg3AAIgdBwIA4AAIgKAmgAhUCsIAGiLIgcAAIgkCLIgvAAIBZlXIBaAAQA1AAgQA7IgWBVQgLAsgeAMIgECPgAhggFIAeAAQAUAAAHgZIAThLQADgMgEgGQgDgHgJAAIgfAAgAlLCsIBZlXIBmAAIgKAmIg3AAIgfB2IA3AAIgKAlIg3AAIgnCWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.endframe_free, new cjs.Rectangle(-33.2,-17.2,66.4,34.5), null);


(lib.endframe_dates = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C474D").s().p("AIiCvICKkuIhWAAIALgqIB8AAIAKAPIiXFJgAFwCvIAKgpQAEgPAHgMIAQgWIBdhxIAFgNIAUhJQADgNgNgBIgPAAQgPAAgDAOIgLAqIguAAIAKgmQAQg7A2AAIAZAAQA3AAgQA7IgSBHQgCAKgGAJIgNATIhcBqQgGAHgCAHIgEAOIBOAAIgLAqgAgbCvQgcAAgKgPQgKgPAIgdIAHgbIAuAAIgIAeQgDAOANAAIARAAQANAAADgOIAZheQADgNgQAAIhIAAIAui1ICCAAIgLAqIhXAAIgcBtQAGgFAIgDQAJgDAJgBIAMAAQAzABgMAtIgZBhQgQA+g2AAgAj5CvIAKgpQAEgPAIgMIAPgWIBehxIAFgNIAThJQADgNgMgBIgQAAQgOAAgDAOIgLAqIguAAIAJgmQAQg7A3AAIAYAAQA4AAgQA7IgSBHQgDAKgGAJIgNATIhbBqQgGAHgCAHIgEAOIBNAAIgKAqgAnPCvQgcAAgKgPQgKgPAIgdIA7jjQAPg6A3AAIAeAAQA3AAgPA6IgNAxIguAAIAMgtQADgLgDgFQgDgEgNgBIgJAAQgJAAgGAGQgGAFgCAKIg5DcQgDALADAEQADAFAKAAIAhAAIAXhaIgcAAIAKgmIBKAAIgrCqgAqBCvQghAAgMgRQgMgRAJggIBIkWIAuAAIhJEYQgDALAEAFQADAGALAAIALAAQAKAAAHgGQAHgFADgLIBJkYIAuAAIhIEWQgEARgIAMQgHANgLAHQgKAJgNADQgOAFgQAAgAsZCvIAhh/Ig1AAIggB/IgvAAIBKkdQAQg7A2AAIAjAAQA4AAgQA7IhKEdgAsEhrIgeBxIA1AAIAdhxQAFgVgTAAIgNAAQgVAAgEAVgADAAYIAKglIBqAAIgKAlgAMohJIgEgCIgsAlIgSgjIAwgVIAAgEIgogUIAmgmIAYAjIAFgDIARgyIApAQIgjArIABADIA0gLIgKApIgtgGIgDADIATAmIgtAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.endframe_dates, new cjs.Rectangle(-89.2,-17.4,178.6,34.9), null);


(lib.endframe_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.endframe();
	this.instance.parent = this;
	this.instance.setTransform(-379,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.endframe_1, new cjs.Rectangle(-379,0,379,250), null);


(lib.character_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.character();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character_1, new cjs.Rectangle(0,0,446,250), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFYBWIAsirIA0AAIgFATIgcAAIgQA7IAdAAIgGASIgbAAIgPA4IAcAAIgFATgAEtBWIADhFIgOAAIgSBFIgXAAIAsirIAuAAQAaAAgIAdIgLArQgGAVgPAHIgCBHgAEngCIAPAAQALAAADgMIAJgmQACgGgCgDQgCgDgFAAIgPAAgACxBWQgOAAgGgHQgEgHADgPIAehxQAHgdAcAAIAUAAQAbAAgHAdIgeBxQgDAPgKAHQgIAHgOAAgADVhAQgDADgBAEIgeBzQgDAJAKAAIAKAAQAEAAAEgCQACgCACgFIAehzQABgEgCgDQgCgCgEAAIgLAAQgEAAgDACgABlBWIAghwIgnBRIgSAAIAFhRIgbBwIgXAAIAsirIAZAAIgEBkIAwhkIAZAAIgsCrgAg6BWIAJgiIgEhOIgdBwIgXAAIAsirIAYAAIACBTIAWhTIAWAAIgsCrgAiVBWIADhFIgOAAIgSBFIgWAAIArirIAuAAQAaAAgHAdIgLArQgHAVgPAHIgCBHgAiagCIAOAAQALAAADgMIAKgmQABgGgBgDQgDgDgFAAIgPAAgAj4BWIAQg/IgaAAIgRA/IgWAAIAliOQAHgdAcAAIARAAQAbAAgHAdIglCOgAjug2IgOA4IAaAAIAOg4QADgKgKAAIgGAAQgKAAgDAKgAlwBWIAsirIAyAAIgEATIgcAAIgQA7IAcAAIgEASIgcAAIgPA4IAcAAIgFATgAm3BWIAsirIAYAAIgoCYIAcAAIgFATg");
	this.shape.setTransform(70.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFBA29").ss(1,1,1).p("ApIiyITKAAQAlAAAOAKQAUAOgLAkIg1DtQgIAhgKAMQgOAPgcAAIzPAAQhPAAATg8IA6jtQAJgjAKgLQAMgOAdAAg");
	this.shape_1.setTransform(70.2,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF6C00","#FB9903","#FF6C00"],[0.063,0.498,0.925],-70.6,0,70.6,0).s().p("AqCCzQhPAAATg8IA6jtQAJgjAKgLQAMgOAdAAITKAAQAlAAAOAKQAUAOgLAkIg1DtQgIAhgKAMQgOAPgcAAg");
	this.shape_2.setTransform(70.2,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(-1.4,-1,196.1,37.8), null);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_1, new cjs.Rectangle(0,0,970,250), null);


(lib.text_weekend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// txt
	this.instance = new lib.weekend();
	this.instance.parent = this;
	this.instance.setTransform(157.1,67.6,1,1,0,0,0,141.2,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,x:157},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.9,24.5,282.3,86.1);


(lib.text_free = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// free
	this.instance = new lib.free();
	this.instance.parent = this;
	this.instance.setTransform(169.6,100.8,1,1,0,0,0,170,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8},74).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0.3,340,201);


(lib.radial_add = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.radial_1();
	this.instance.parent = this;
	this.instance.setTransform(250,250,1,1,0,0,0,250,250);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.radial_add, new cjs.Rectangle(0,0,500,500), null);


(lib.overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reflection();
	this.instance.parent = this;
	this.instance.setTransform(60.5,53,1,1,0,0,0,60.5,53);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.overlay, new cjs.Rectangle(0,0,121,106), null);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_over:1,_out:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// txt
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(61.6,15.3,1,1,0,0,0,61.6,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:70.2,regY:17.9,scaleX:1.01,scaleY:1.01,x:70.4,y:18},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:70.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:18.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:70.6},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({regX:61.6,regY:15.2,scaleX:1.05,scaleY:1.05,x:61.7,y:15.4},0).wait(1).to({regX:70.2,regY:17.9,scaleX:1.05,scaleY:1.05,x:70.7,y:18.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:18.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:70.6,y:18.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:70.5,y:18.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:70.4,y:18.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:61.6,regY:15.3,scaleX:1,scaleY:1,x:61.6,y:15.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.5,142.3,36.8);


// stage content:
(lib.blizzard_overwatch_FW_970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		stage.enableMouseOver();
		
		this.exitBtn.addEventListener('mouseover', on_over.bind(this));
		this.exitBtn.addEventListener('mouseout', on_out.bind(this));
		this.exitBtn.addEventListener('click', on_click.bind(this));
		
		function on_over(){
			if(this.ctaBtn){
				this.ctaBtn.gotoAndPlay('_over');
			}
		}
		
		function on_out(){
			if(this.ctaBtn){
				this.ctaBtn.gotoAndPlay('_out');
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
	this.frame_254 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(250).call(this.frame_254).wait(1));

	// EXIT
	this.exitBtn = new lib.EXIT();
	this.exitBtn.parent = this;
	this.exitBtn.setTransform(485,125,3.233,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 2, false, new lib.EXIT(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exitBtn).wait(255));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_211 = new cjs.Graphics().p("AL1CsIBZlXIBQAAQAQAAALADIAAAAQAMAEAGAHIAAAAQAMAOgIAhIAAAAIg9DoQgGAZgRANIAAAAQgRAMgbAAIAAAAgAMuCDIAiAAQAKAAAFgFIAAAAQAFgEACgHIAAAAIA5jcQADgMgDgGIAAAAQgEgHgKAAIAAAAIggAAgAKZCsIAShEIgJicIg7DgIguAAIBZlXIAuAAIAHCmIArimIAuAAIhZFXgAGrCsIBZlXIBlAAIgJAmIg4AAIgeB2IA3AAIgKAlIg3AAIgdBwIA3AAIgJAmgAFjCsIgNioIgsCoIguAAIBZlXIAuAAIgsCsIBeisIAqAAIheCrIAQCsgABuCsIBZlXIBlAAIgJAmIg4AAIgeB2IA3AAIgKAlIg3AAIgdBwIA3AAIgJAmgAggCsIBYlXIBmAAIgKAmIg3AAIgfB2IA4AAIgKAlIg4AAIgdBwIA4AAIgKAmgAijCsIAXjGIhPDGIgyAAIAmlXIAuAAIgjEBIBkkBIAkAAIgiEBIBjkBIAtAAIiLFXgAn4CsIBZlXIBmAAIgKAmIg3AAIgfB2IA4AAIgKAlIg4AAIgdBwIA4AAIgKAmgAqGCsIBZlXIBlAAIgJAmIg4AAIgeB2IA3AAIgKAlIg3AAIgdBwIA3AAIgJAmgAraCsIAFiLIgcAAIgkCLIguAAIBZlXIBaAAQA2AAgQA7IAAAAIgWBVQgMAsgeAMIAAAAIgFCPgArngFIAfAAQAUAAAHgZIAAAAIAThLQADgMgEgGIAAAAQgDgHgKAAIAAAAIgeAAgAvRCsIBZlXIBlAAIgJAmIg4AAIgeB2IA3AAIgKAlIg3AAIgnCWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_graphics_211,x:504.6,y:155}).wait(20).to({graphics:null,x:0,y:0}).wait(24));

	// overlay
	this.instance = new lib.overlay();
	this.instance.parent = this;
	this.instance.setTransform(-666.4,62.7,8.247,8.247,0,15,-165,60.5,53.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(211).to({_off:false},0).to({x:1571.4},19).to({_off:true},1).wait(24));

	// OVERWATCH
	this.instance_1 = new lib.overwatch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(671,-41.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(198).to({_off:false},0).wait(1).to({y:-11},0).wait(1).to({y:18},0).wait(1).to({y:40.5},0).wait(1).to({y:55.8},0).wait(1).to({y:65.8},0).wait(1).to({y:72},0).wait(1).to({y:75.6},0).wait(1).to({y:77.5},0).wait(1).to({y:78.1},0).wait(48));

	// endframe_free
	this.instance_2 = new lib.endframe_free();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1010,155.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).wait(1).to({x:862.8},0).wait(1).to({x:725.3},0).wait(1).to({x:618.4},0).wait(1).to({x:545.5},0).wait(1).to({x:498.4},0).wait(1).to({x:468.8},0).wait(1).to({x:451.4},0).wait(1).to({x:442.6},0).wait(1).to({x:440},0).wait(46));

	// endframe_weekend
	this.instance_3 = new lib.endframe_weekend();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1110,155.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(202).to({_off:false},0).wait(1).to({x:962.8},0).wait(1).to({x:825.3},0).wait(1).to({x:718.4},0).wait(1).to({x:645.5},0).wait(1).to({x:598.4},0).wait(1).to({x:568.8},0).wait(1).to({x:551.4},0).wait(1).to({x:542.6},0).wait(1).to({x:540},0).wait(44));

	// endframe_dates
	this.instance_4 = new lib.endframe_dates();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1264.5,155);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(204).to({_off:false},0).wait(1).to({x:1117.3},0).wait(1).to({x:979.8},0).wait(1).to({x:872.9},0).wait(1).to({x:800},0).wait(1).to({x:752.9},0).wait(1).to({x:723.3},0).wait(1).to({x:705.9},0).wait(1).to({x:697.1},0).wait(1).to({x:694.5},0).wait(42));

	// CTA
	this.ctaBtn = new lib.CTA();
	this.ctaBtn.parent = this;
	this.ctaBtn.setTransform(1423.3,152.3,1.001,1.001,0,0,0,61.9,15.5);
	this.ctaBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(206).to({_off:false},0).wait(1).to({regX:70.7,regY:18.1,x:1284.9,y:154.9},0).wait(1).to({x:1147.3},0).wait(1).to({x:1040.5},0).wait(1).to({x:967.6},0).wait(1).to({x:920.4},0).wait(1).to({x:890.9},0).wait(1).to({x:873.5},0).wait(1).to({x:864.6},0).wait(1).to({regX:61.9,regY:15.5,x:853.3,y:152.3},0).wait(40));

	// ESRB
	this.instance_5 = new lib.ESRB_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(73.5,210,1,1,0,0,0,68.5,35);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(212).to({_off:false},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.687},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:1},0).wait(34));

	// endframe
	this.instance_6 = new lib.endframe_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-379,250,2,2,0,0,0,-189.5,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(198).to({_off:false},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:-322,y:237.5},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:-264.1,y:224.8},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:-206.9,y:212.2},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:-151.9,y:200.1},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:-100.4,y:188.8},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:-53.9,y:178.5},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-12.8,y:169.5},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:22.8,y:161.7},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:53.3,y:155},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:79.1,y:149.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:100.9,y:144.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:119.2,y:140.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:134.4,y:137.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:147.2,y:134.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:157.7,y:132},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:166.3,y:130.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:173.2,y:128.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:178.7,y:127.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:182.9,y:126.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:185.9,y:125.8},0).wait(1).to({scaleX:1,scaleY:1,x:188,y:125.4},0).wait(1).to({scaleX:1,scaleY:1,x:189.2,y:125.1},0).wait(1).to({scaleX:1,scaleY:1,x:189.5,y:125},0).wait(34));

	// platforms
	this.instance_7 = new lib.platforms();
	this.instance_7.parent = this;
	this.instance_7.setTransform(492,271.7,1,1,0,0,0,0,0.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(208).to({_off:false},0).wait(1).to({regY:0,y:258.4,alpha:0.258},0).wait(1).to({y:246.3,alpha:0.5},0).wait(1).to({y:237,alpha:0.687},0).wait(1).to({y:230.6,alpha:0.815},0).wait(1).to({y:226.4,alpha:0.898},0).wait(1).to({y:223.8,alpha:0.949},0).wait(1).to({y:222.3,alpha:0.98},0).wait(1).to({y:221.5,alpha:0.995},0).wait(1).to({regY:0.4,y:221.7,alpha:1},0).wait(38));

	// text_legal
	this.instance_8 = new lib.text_legal();
	this.instance_8.parent = this;
	this.instance_8.setTransform(787.4,273.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(210).to({_off:false},0).wait(1).to({regX:0.6,regY:-0.5,x:788,y:260.2,alpha:0.258},0).wait(1).to({y:248.1,alpha:0.5},0).wait(1).to({y:238.8,alpha:0.687},0).wait(1).to({y:232.4,alpha:0.815},0).wait(1).to({y:228.2,alpha:0.898},0).wait(1).to({y:225.6,alpha:0.949},0).wait(1).to({y:224.1,alpha:0.98},0).wait(1).to({y:223.3,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:787.4,y:223.6,alpha:1},0).wait(36));

	// radial
	this.instance_9 = new lib.radial_add();
	this.instance_9.parent = this;
	this.instance_9.setTransform(501.3,130.4,0.333,0.333,0,0,0,250.1,250);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(156).to({_off:false},0).to({regX:250,scaleX:2,scaleY:2,x:501.2},3).to({scaleX:2.67,scaleY:2.67,x:501.3,alpha:0},10).to({_off:true},1).wait(85));

	// radial
	this.instance_10 = new lib.radial_add();
	this.instance_10.parent = this;
	this.instance_10.setTransform(501.3,130.4,0.333,0.333,0,0,0,250.1,250);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(154).to({_off:false},0).to({regX:250,regY:249.8,scaleX:0.89,scaleY:0.89,y:130.3},1).to({regY:250,scaleX:2,scaleY:2,x:501.2,y:130.4},2).to({scaleX:2.67,scaleY:2.67,x:501.3,alpha:0},10).to({_off:true},1).wait(87));

	// text_dates
	this.instance_11 = new lib.text_dates();
	this.instance_11.parent = this;
	this.instance_11.setTransform(975.9,381.2,1.332,1.332,0,0,0,368.4,57.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(158).to({_off:false},0).wait(1).to({regX:0,regY:0,x:485,y:243.6},0).wait(1).to({y:206.2},0).wait(1).to({y:179.4},0).wait(1).to({y:160.5},0).wait(1).to({y:149},0).wait(1).to({regX:368.4,regY:57.2,x:975.9,y:221.2},0).to({y:181.2},27).wait(1).to({regX:0,regY:0,x:485,y:101.2},0).wait(1).to({y:91},0).wait(1).to({y:75.1},0).wait(1).to({y:53.8},0).wait(1).to({y:26.5},0).wait(1).to({y:-8.4},0).wait(1).to({regX:368.4,regY:57.2,x:975.9,y:21.2},0).to({_off:true},1).wait(56));

	// character
	this.instance_12 = new lib.character_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-295.9,140,1,1,0,0,0,150.1,140);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).wait(1).to({regX:223,regY:125,x:143.3,y:125},0).wait(1).to({x:254},0).wait(1).to({x:323.4},0).wait(1).to({x:371.8},0).wait(1).to({x:407.5},0).wait(1).to({regX:150.1,regY:140,x:362.1,y:140},0).to({x:462.1},27).wait(1).to({regX:223,regY:125,x:549.8,y:125},0).wait(1).to({x:592.4},0).wait(1).to({x:660.7},0).wait(1).to({x:753.6},0).wait(1).to({x:871.3},0).wait(1).to({x:1015.9},0).wait(1).to({regX:150.1,regY:140,x:1120.1,y:140},0).to({_off:true},1).wait(95));

	// lines
	this.instance_13 = new lib.lines_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1329.4,128.4,2.402,2.954,0,0,0,246,45.1);
	this.instance_13.compositeOperation = "lighter";
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(58).to({_off:false},0).to({regX:246.1,x:729.1},10,cjs.Ease.sineOut).to({regX:246,x:513,alpha:0},13,cjs.Ease.sineOut).to({_off:true},1).wait(173));

	// lines
	this.instance_14 = new lib.lines_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1329.4,128.4,2.402,2.954,0,0,0,246,45.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(54).to({_off:false},0).to({regX:246.1,x:729.1},10,cjs.Ease.sineOut).to({regX:246,x:248.9,alpha:0.219},30).to({x:104.8,alpha:0},11,cjs.Ease.sineOut).to({_off:true},1).wait(149));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_54 = new cjs.Graphics().p("AIUaFMhWVg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_55 = new cjs.Graphics().p("ADnaFMhWUg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AhEaFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AlwaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AqcaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AvIaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Az1aFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_1_graphics_61 = new cjs.Graphics().p("A4haFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_62 = new cjs.Graphics().p("A9NaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Egh5AaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgmmAaFMhWVg0JMEV6AAAMgqZA0Jg");
	var mask_1_graphics_65 = new cjs.Graphics().p("Egn1AaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgpFAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgqVAaFMhWVg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgrkAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Egs0AaFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EguEAaFMhWVg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgvTAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgwjAaFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgxyAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgzCAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Eg0SAaFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_82 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_83 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_87 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_88 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_93 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_95 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_101 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_102 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_103 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_104 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_105 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EhuvATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EhYFATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EhPbATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_122 = new cjs.Graphics().p("EhKAATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EhGOATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EhDcATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EhBSATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EhBAATiIAAhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EhAtATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_128 = new cjs.Graphics().p("EhAbATiIAAhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_129 = new cjs.Graphics().p("EhAIATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_130 = new cjs.Graphics().p("Eg/2ATiIAAhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_131 = new cjs.Graphics().p("Eg/jATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_132 = new cjs.Graphics().p("Eg/RATiIAAhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_133 = new cjs.Graphics().p("Eg++ATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_134 = new cjs.Graphics().p("Eg+sATiIAAhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDulAAAMAAAAnDg");
	var mask_1_graphics_135 = new cjs.Graphics().p("Eg+ZATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_136 = new cjs.Graphics().p("Eg+GATiIgBhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDulAAAMAAAAnDg");
	var mask_1_graphics_137 = new cjs.Graphics().p("Eg90ATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_138 = new cjs.Graphics().p("Eg9hATiIgBhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDulAAAMAAAAnDg");
	var mask_1_graphics_139 = new cjs.Graphics().p("Eg9PATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_140 = new cjs.Graphics().p("Eg88ATiIgBhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDulAAAMAAAAnDg");
	var mask_1_graphics_141 = new cjs.Graphics().p("Eg8qATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_142 = new cjs.Graphics().p("Eg8XATiIgBhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDulAAAMAAAAnDg");
	var mask_1_graphics_143 = new cjs.Graphics().p("Eg8FATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_144 = new cjs.Graphics().p("Eg7yATiIgBhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDulAAAMAAAAnDg");
	var mask_1_graphics_145 = new cjs.Graphics().p("Eg7gATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_146 = new cjs.Graphics().p("Eg7NATiIgBhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDulAAAMAAAAnDg");
	var mask_1_graphics_147 = new cjs.Graphics().p("Eg67ATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBGhSQAqgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_148 = new cjs.Graphics().p("Eg6oATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_149 = new cjs.Graphics().p("Eg6WATiIAAhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_150 = new cjs.Graphics().p("Eg6DATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_151 = new cjs.Graphics().p("Eg5xATiIAAhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_152 = new cjs.Graphics().p("Eg5eATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Eg4UATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_154 = new cjs.Graphics().p("Eg0/ATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_155 = new cjs.Graphics().p("EgvqATiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_156 = new cjs.Graphics().p("EgoZATiIgBhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDulAAAMAAAAnDg");
	var mask_1_graphics_157 = new cjs.Graphics().p("A/NTiIAAhuIgPhOQgKguAAggQgBg3ADhUIAGiMQABgvgBgFQgEgbgdgKQgQgGgkAfQgjAfgFAXIgaCjIgEAdQgJBRgjAtQgnAzhQARQgsAJgdAAQgkgBgmgOQg2gVhUgSQhfgUgwgMIBGhSQAqgzAbglQB/ivA+hqQAUghALgqQALgpAAgoQACicgVizQgEghgQgqIgehLQgIgUgihKQgbg7gMgmQgHgXADgfQACgcAKgbQAJgcATggQALgTAagnQAdgrAGgjQAIgrgYgrIAKgKIBWAqQANgWAEgLQAwiOAFiBQAGiNguiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_158 = new cjs.Graphics().p("Az6TiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AmETiIAAhuIgQhOQgJgugBggQgBg3AEhUIAFiMQACgvgBgFQgFgbgdgKQgQgGgjAfQgkAfgEAXIgbCjIgEAdQgJBRgiAtQgoAzhPARQgtAJgdAAQgkgBglgOQg3gVhTgSQhfgUgwgMIBFhSQArgzAaglQCAivA+hqQATghALgqQALgpABgoQABicgVizQgEghgPgqIgehLQgIgUgjhKQgag7gMgmQgHgXACgfQADgcAJgbQAKgcATggQAKgTAagnQAegrAGgjQAIgrgYgrIAKgKIBWAqQAMgWAEgLQAxiOAFiBQAFiNgtiEQgCgGgBgKIgCgSMDukAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_1_graphics_54,x:1279.4,y:124.1}).wait(1).to({graphics:mask_1_graphics_55,x:1249.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_56,x:1219.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_57,x:1189.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_58,x:1159.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_59,x:1129.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_60,x:1099.2,y:124.1}).wait(1).to({graphics:mask_1_graphics_61,x:1069.2,y:124.1}).wait(1).to({graphics:mask_1_graphics_62,x:1039.2,y:124.1}).wait(1).to({graphics:mask_1_graphics_63,x:1009.2,y:124.1}).wait(1).to({graphics:mask_1_graphics_64,x:979.1,y:124.1}).wait(1).to({graphics:mask_1_graphics_65,x:971.2,y:124.1}).wait(1).to({graphics:mask_1_graphics_66,x:963.2,y:124.1}).wait(1).to({graphics:mask_1_graphics_67,x:955.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_68,x:947.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_69,x:939.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_70,x:931.4,y:124.1}).wait(1).to({graphics:mask_1_graphics_71,x:923.4,y:124.1}).wait(1).to({graphics:mask_1_graphics_72,x:915.4,y:124.1}).wait(1).to({graphics:mask_1_graphics_73,x:907.5,y:124.1}).wait(1).to({graphics:mask_1_graphics_74,x:899.5,y:124.1}).wait(1).to({graphics:mask_1_graphics_75,x:891.5,y:124.1}).wait(1).to({graphics:mask_1_graphics_76,x:877.7,y:124.1}).wait(1).to({graphics:mask_1_graphics_77,x:861.8,y:124.1}).wait(1).to({graphics:mask_1_graphics_78,x:845.9,y:124.1}).wait(1).to({graphics:mask_1_graphics_79,x:830,y:124.1}).wait(1).to({graphics:mask_1_graphics_80,x:814,y:124.1}).wait(1).to({graphics:mask_1_graphics_81,x:798.1,y:124.1}).wait(1).to({graphics:mask_1_graphics_82,x:782.2,y:124.1}).wait(1).to({graphics:mask_1_graphics_83,x:766.2,y:124.1}).wait(1).to({graphics:mask_1_graphics_84,x:750.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_85,x:734.4,y:124.1}).wait(1).to({graphics:mask_1_graphics_86,x:718.4,y:124.1}).wait(1).to({graphics:mask_1_graphics_87,x:702.5,y:124.1}).wait(1).to({graphics:mask_1_graphics_88,x:686.6,y:124.1}).wait(1).to({graphics:mask_1_graphics_89,x:670.7,y:124.1}).wait(1).to({graphics:mask_1_graphics_90,x:654.7,y:124.1}).wait(1).to({graphics:mask_1_graphics_91,x:638.8,y:124.1}).wait(1).to({graphics:mask_1_graphics_92,x:622.9,y:124.1}).wait(1).to({graphics:mask_1_graphics_93,x:606.9,y:124.1}).wait(1).to({graphics:mask_1_graphics_94,x:591.2,y:124.1}).wait(1).to({graphics:mask_1_graphics_95,x:558.5,y:124.1}).wait(1).to({graphics:mask_1_graphics_96,x:525.8,y:124.1}).wait(1).to({graphics:mask_1_graphics_97,x:493,y:124.1}).wait(1).to({graphics:mask_1_graphics_98,x:460.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_99,x:427.5,y:124.1}).wait(1).to({graphics:mask_1_graphics_100,x:394.8,y:124.1}).wait(1).to({graphics:mask_1_graphics_101,x:362,y:124.1}).wait(1).to({graphics:mask_1_graphics_102,x:329.3,y:124.1}).wait(1).to({graphics:mask_1_graphics_103,x:296.5,y:124.1}).wait(1).to({graphics:mask_1_graphics_104,x:263.8,y:124.1}).wait(1).to({graphics:mask_1_graphics_105,x:231.1,y:124.1}).wait(1).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_1_graphics_119,x:708.9,y:125}).wait(1).to({graphics:mask_1_graphics_120,x:930.1,y:124.9}).wait(1).to({graphics:mask_1_graphics_121,x:985.5,y:124.9}).wait(1).to({graphics:mask_1_graphics_122,x:1020.2,y:124.9}).wait(1).to({graphics:mask_1_graphics_123,x:1044.4,y:124.9}).wait(1).to({graphics:mask_1_graphics_124,x:1062.2,y:124.9}).wait(1).to({graphics:mask_1_graphics_125,x:1076,y:125}).wait(1).to({graphics:mask_1_graphics_126,x:1077.8,y:125}).wait(1).to({graphics:mask_1_graphics_127,x:1079.7,y:125}).wait(1).to({graphics:mask_1_graphics_128,x:1081.5,y:125}).wait(1).to({graphics:mask_1_graphics_129,x:1083.4,y:125}).wait(1).to({graphics:mask_1_graphics_130,x:1085.2,y:125}).wait(1).to({graphics:mask_1_graphics_131,x:1087.1,y:125}).wait(1).to({graphics:mask_1_graphics_132,x:1088.9,y:125}).wait(1).to({graphics:mask_1_graphics_133,x:1090.8,y:125}).wait(1).to({graphics:mask_1_graphics_134,x:1092.7,y:125}).wait(1).to({graphics:mask_1_graphics_135,x:1094.5,y:125}).wait(1).to({graphics:mask_1_graphics_136,x:1096.4,y:125}).wait(1).to({graphics:mask_1_graphics_137,x:1098.2,y:125}).wait(1).to({graphics:mask_1_graphics_138,x:1100.1,y:125}).wait(1).to({graphics:mask_1_graphics_139,x:1101.9,y:125}).wait(1).to({graphics:mask_1_graphics_140,x:1103.8,y:125}).wait(1).to({graphics:mask_1_graphics_141,x:1105.6,y:125}).wait(1).to({graphics:mask_1_graphics_142,x:1107.5,y:125}).wait(1).to({graphics:mask_1_graphics_143,x:1109.3,y:125}).wait(1).to({graphics:mask_1_graphics_144,x:1111.2,y:125}).wait(1).to({graphics:mask_1_graphics_145,x:1113,y:125}).wait(1).to({graphics:mask_1_graphics_146,x:1114.9,y:125}).wait(1).to({graphics:mask_1_graphics_147,x:1116.7,y:125}).wait(1).to({graphics:mask_1_graphics_148,x:1118.6,y:125}).wait(1).to({graphics:mask_1_graphics_149,x:1120.4,y:125}).wait(1).to({graphics:mask_1_graphics_150,x:1122.3,y:125}).wait(1).to({graphics:mask_1_graphics_151,x:1124.1,y:125}).wait(1).to({graphics:mask_1_graphics_152,x:1126,y:125}).wait(1).to({graphics:mask_1_graphics_153,x:1133.4,y:125}).wait(1).to({graphics:mask_1_graphics_154,x:1154.7,y:125}).wait(1).to({graphics:mask_1_graphics_155,x:1188.8,y:125}).wait(1).to({graphics:mask_1_graphics_156,x:1235.3,y:125}).wait(1).to({graphics:mask_1_graphics_157,x:1294.1,y:125}).wait(1).to({graphics:mask_1_graphics_158,x:1366.4,y:125}).wait(1).to({graphics:mask_1_graphics_159,x:1455,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(95));

	// text_weekend
	this.instance_15 = new lib.text_weekend();
	this.instance_15.parent = this;
	this.instance_15.setTransform(466.8,127.2,2.281,2.281,0,0,0,140.4,66.5);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54).to({_off:false},0).to({_off:true},106).wait(95));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_54 = new cjs.Graphics().p("AIUaFMhWVg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_55 = new cjs.Graphics().p("ADnaFMhWUg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AhEaFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AlwaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AqcaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AvIaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_60 = new cjs.Graphics().p("Az1aFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_2_graphics_61 = new cjs.Graphics().p("A4haFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_62 = new cjs.Graphics().p("A9NaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_63 = new cjs.Graphics().p("Egh5AaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EgmmAaFMhWVg0JMEV6AAAMgqZA0Jg");
	var mask_2_graphics_65 = new cjs.Graphics().p("Egn1AaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_66 = new cjs.Graphics().p("EgpFAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_67 = new cjs.Graphics().p("EgqVAaFMhWVg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_68 = new cjs.Graphics().p("EgrkAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_69 = new cjs.Graphics().p("Egs0AaFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_2_graphics_70 = new cjs.Graphics().p("EguEAaFMhWVg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_71 = new cjs.Graphics().p("EgvTAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_72 = new cjs.Graphics().p("EgwjAaFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_2_graphics_73 = new cjs.Graphics().p("EgxyAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_74 = new cjs.Graphics().p("EgzCAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_75 = new cjs.Graphics().p("Eg0SAaFMhWWg0JMEV7AAAMgqZA0Jg");
	var mask_2_graphics_76 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_77 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_78 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_79 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_80 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_81 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_82 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_83 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_84 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_85 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_86 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_87 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_88 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_89 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_90 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_91 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_92 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_93 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_94 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_95 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_96 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_97 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_98 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_99 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_100 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_101 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_102 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_103 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_104 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");
	var mask_2_graphics_105 = new cjs.Graphics().p("Eg0nAaFMhWWg0JMEV7AAAMgqaA0Jg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_2_graphics_54,x:1279.4,y:124.1}).wait(1).to({graphics:mask_2_graphics_55,x:1249.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_56,x:1219.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_57,x:1189.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_58,x:1159.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_59,x:1129.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_60,x:1099.2,y:124.1}).wait(1).to({graphics:mask_2_graphics_61,x:1069.2,y:124.1}).wait(1).to({graphics:mask_2_graphics_62,x:1039.2,y:124.1}).wait(1).to({graphics:mask_2_graphics_63,x:1009.2,y:124.1}).wait(1).to({graphics:mask_2_graphics_64,x:979.1,y:124.1}).wait(1).to({graphics:mask_2_graphics_65,x:971.2,y:124.1}).wait(1).to({graphics:mask_2_graphics_66,x:963.2,y:124.1}).wait(1).to({graphics:mask_2_graphics_67,x:955.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_68,x:947.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_69,x:939.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_70,x:931.4,y:124.1}).wait(1).to({graphics:mask_2_graphics_71,x:923.4,y:124.1}).wait(1).to({graphics:mask_2_graphics_72,x:915.4,y:124.1}).wait(1).to({graphics:mask_2_graphics_73,x:907.5,y:124.1}).wait(1).to({graphics:mask_2_graphics_74,x:899.5,y:124.1}).wait(1).to({graphics:mask_2_graphics_75,x:891.5,y:124.1}).wait(1).to({graphics:mask_2_graphics_76,x:877.7,y:124.1}).wait(1).to({graphics:mask_2_graphics_77,x:861.8,y:124.1}).wait(1).to({graphics:mask_2_graphics_78,x:845.9,y:124.1}).wait(1).to({graphics:mask_2_graphics_79,x:830,y:124.1}).wait(1).to({graphics:mask_2_graphics_80,x:814,y:124.1}).wait(1).to({graphics:mask_2_graphics_81,x:798.1,y:124.1}).wait(1).to({graphics:mask_2_graphics_82,x:782.2,y:124.1}).wait(1).to({graphics:mask_2_graphics_83,x:766.2,y:124.1}).wait(1).to({graphics:mask_2_graphics_84,x:750.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_85,x:734.4,y:124.1}).wait(1).to({graphics:mask_2_graphics_86,x:718.4,y:124.1}).wait(1).to({graphics:mask_2_graphics_87,x:702.5,y:124.1}).wait(1).to({graphics:mask_2_graphics_88,x:686.6,y:124.1}).wait(1).to({graphics:mask_2_graphics_89,x:670.7,y:124.1}).wait(1).to({graphics:mask_2_graphics_90,x:654.7,y:124.1}).wait(1).to({graphics:mask_2_graphics_91,x:638.8,y:124.1}).wait(1).to({graphics:mask_2_graphics_92,x:622.9,y:124.1}).wait(1).to({graphics:mask_2_graphics_93,x:606.9,y:124.1}).wait(1).to({graphics:mask_2_graphics_94,x:591.2,y:124.1}).wait(1).to({graphics:mask_2_graphics_95,x:558.5,y:124.1}).wait(1).to({graphics:mask_2_graphics_96,x:525.8,y:124.1}).wait(1).to({graphics:mask_2_graphics_97,x:493,y:124.1}).wait(1).to({graphics:mask_2_graphics_98,x:460.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_99,x:427.5,y:124.1}).wait(1).to({graphics:mask_2_graphics_100,x:394.8,y:124.1}).wait(1).to({graphics:mask_2_graphics_101,x:362,y:124.1}).wait(1).to({graphics:mask_2_graphics_102,x:329.3,y:124.1}).wait(1).to({graphics:mask_2_graphics_103,x:296.5,y:124.1}).wait(1).to({graphics:mask_2_graphics_104,x:263.8,y:124.1}).wait(1).to({graphics:mask_2_graphics_105,x:231.1,y:124.1}).wait(150));

	// background
	this.instance_16 = new lib.background_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(54).to({_off:false},0).wait(201));

	// text_f
	this.instance_17 = new lib.text_f();
	this.instance_17.parent = this;
	this.instance_17.setTransform(425.2,231.8,3.721,3.721,0,0,0,42.2,127.9);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:55.6,regY:100.5,scaleX:2.91,scaleY:2.91,x:475,y:130,alpha:0.294},0).wait(1).to({scaleX:2.16,scaleY:2.16,alpha:0.564},0).wait(1).to({scaleX:1.55,scaleY:1.55,y:130.1,alpha:0.788},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.942},0).wait(1).to({regX:42.6,regY:128,scaleX:0.96,scaleY:0.96,x:462.1,y:156.4,alpha:1},0).to({_off:true},2).wait(248));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_6 = new cjs.Graphics().p("Egm4ATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_7 = new cjs.Graphics().p("EgoDATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_8 = new cjs.Graphics().p("EgohATkMAKEgnDMBG/gAEMgJ0AnHg");
	var mask_3_graphics_9 = new cjs.Graphics().p("EgohATkMAKEgnDMBG/gAEMgJ0AnHg");
	var mask_3_graphics_10 = new cjs.Graphics().p("EgkdATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EgleATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_12 = new cjs.Graphics().p("EgmLATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EgmzATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EgiRATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EgilATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EgjDATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EgjDATkMAKEgnDMBG+gAEMgJ0AnHg");
	var mask_3_graphics_18 = new cjs.Graphics().p("A25TkMAKEgnDMBG/gAEMgJ0AnHg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_3_graphics_6,x:269.8,y:124.9}).wait(1).to({graphics:mask_3_graphics_7,x:262.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_8,x:250.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_9,x:235.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_10,x:285.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_11,x:278.8,y:124.9}).wait(1).to({graphics:mask_3_graphics_12,x:274.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_13,x:270.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_14,x:299.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_15,x:297.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_16,x:294.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_17,x:294.3,y:124.9}).wait(1).to({graphics:mask_3_graphics_18,x:372.2,y:124.9}).wait(77).to({graphics:null,x:0,y:0}).wait(160));

	// text_free
	this.instance_18 = new lib.text_free();
	this.instance_18.parent = this;
	this.instance_18.setTransform(591.1,156.4,0.961,0.961,0,0,0,176.9,128);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(6).to({_off:false},0).wait(1).to({regX:169.6,regY:100.8,x:568.5,y:130.3},0).wait(1).to({x:553},0).wait(1).to({x:538.3},0).wait(1).to({x:524.9},0).wait(1).to({x:513.1},0).wait(1).to({x:503},0).wait(1).to({x:494.8},0).wait(1).to({x:488.2},0).wait(1).to({x:483.4},0).wait(1).to({x:480},0).wait(1).to({x:478.1},0).wait(1).to({regX:177,regY:128,x:484.6,y:156.4},0).to({_off:true},77).wait(160));

	// background
	this.instance_19 = new lib.background_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(255));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,-119.1,970,748);
// library properties:
lib.properties = {
	id: '721683B9D7F446C6A1C9740CFF103EC4',
	width: 970,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/background.jpg?1521604015859", id:"background"},
		{src:"images/character.png?1521604015859", id:"character"},
		{src:"images/endframe.png?1521604015859", id:"endframe"},
		{src:"images/ESRB.png?1521604015859", id:"ESRB"},
		{src:"images/lines.png?1521604015859", id:"lines"},
		{src:"images/radial.png?1521604015859", id:"radial"}
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
an.compositions['721683B9D7F446C6A1C9740CFF103EC4'] = {
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