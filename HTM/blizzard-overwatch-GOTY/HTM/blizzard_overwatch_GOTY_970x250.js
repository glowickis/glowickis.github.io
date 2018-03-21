(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.character_tracer = function() {
	this.initialize(img.character_tracer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,846,250);


(lib.esrb = function() {
	this.initialize(img.esrb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,99);


(lib.packaging = function() {
	this.initialize(img.packaging);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,181);


(lib.tracer_endframe = function() {
	this.initialize(img.tracer_endframe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,250);


(lib.tracer_masked = function() {
	this.initialize(img.tracer_masked);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,86);// helper functions:

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


(lib.text_limited_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANKDiIB0nDICGAAIgNAyIhJAAIgoCaIBJAAIgNAyIhJAAIgmCSIBJAAIgNAzgALlDiIBSknIhkDVIgvAAIAKjVIhGEnIg8AAIB0nDIBDAAIgNEJIB9kJIBDAAIh1HDgAHEDiIB0nDIA9AAIh1HDgAE4DiIBomRIg7AAIANgyICxAAIgNAyIg6AAIhoGRgAhcDiIB0nDIBpAAQAVAAAPAFQAPAEAIAJQARATgLArIhQExQgJAigWAQQgWAQgkAAgAgSCrIAtAAQAMAAAHgFQAHgGADgJIBLkhQAEgQgFgJQgEgHgNgBIgrAAgAkDDiIB0nDICGAAIgNAyIhJAAIgoCaIBJAAIgNAyIhJAAIgmCSIBJAAIgNAzgAmPDiIBomRIg7AAIANgyICxAAIgNAyIg6AAIhoGRgAobDiIB0nDIA9AAIh1HDgAqADiIBSknIhkDVIgvAAIAKjVIhGEnIg8AAIB0nDIBDAAIgNEJIB9kJIBDAAIh1HDgAuhDiIB0nDIA9AAIh1HDgAxDDiIB1nDIA8AAIhoGQIBJAAIgMAzgACmAdIANgyICLAAIgNAyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_limited_time, new cjs.Rectangle(-109.1,-22.6,533.3,90.6), null);


(lib.text_legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414749").s().p("ACfA2IgHgBIgFgDIgDgFIgBgHIAAgCIAIAAIAAADQAAAEACACQACACAEAAIAOAAQAEAAACgCQACgCAAgEIAAgSIgGAEQgFADgEAAIgJAAIgHgBIgEgDIgDgFIgBgGIAAgcIABgGIADgFIAEgCIAHgBIAJAAQAEAAAFACIAGAFIABgHIAHAAIAABDIgBAHIgDAFIgFADIgHABgACYgUQgCACAAADIAAAcQAAAEACACQACACAEAAIAIAAQADAAAEgCIAIgGIAAgcIgIgFQgEgCgDAAIgIAAQgEAAgCACgAh8A1IAAhSIAIAAIAAAHIAGgFIAEgCIAFAAIAJAAIAHABIAEACIADAFIABAGIAAAfIgBAGQgBADgCACIgEADIgHABIgJAAIgFgBIgEgCIgGgEIAAAdgAhsgUIgIAFIAAAfIAIAFQAEADADAAIAIAAQAEAAACgCQACgCAAgEIAAgfQAAgDgCgCQgCgCgEAAIgIAAQgDAAgEACgAnLA1IAAhSIAHAAIABAHIAGgFIAEgCIAFAAIAJAAIAGABIAFACIADAFIABAGIAAAfIgBAGQgBADgCACIgFADIgGABIgJAAIgFgBIgEgCIgGgEIAAAdgAm7gUIgIAFIAAAfIAIAFQADADAEAAIAIAAQAEAAACgCQACgCAAgEIAAgfQAAgDgCgCQgCgCgEAAIgIAAQgEAAgDACgAJ5AfIgHgBIgFgDIgDgEIgBgGIAAgGIAIAAIAAAGQAAAEACACQACABAEAAIAOAAQAEAAACgBQACgCAAgDIAAgHIgBgEIgDgBIgYgGQgEAAgCgCQgDgDAAgFIAAgGIABgGIADgEQACgCADAAIAHgBIAMAAIAHABQADAAACACIADAFIABAGIAAAEIgIAAIAAgFQAAgDgCgCQgCgCgEAAIgMAAQgEAAgCACQgCACAAADIAAAGIABADIADABIAYAGQAFAAACADQACADAAAEIAAAHIgBAGQgBADgCABIgFADIgHABgAIOAfIgHgBIgFgDIgDgFIgBgHIAAgcIABgHIADgFIAFgDIAHgBIAOAAIAHABIAFADIADAFQABADAAAEIAAAPIgmAAIAAAOQAAAEACACQACACAEAAIAOAAQAEAAACgCQACgCAAgEIAAgEIAIAAIAAADQAAAEgBADIgDAFIgFADIgHABgAIIgVQgCACAAAEIAAALIAeAAIAAgLQAAgEgCgCQgCgCgEAAIgOAAQgEAAgCACgAGUAfIgGgBQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAgBgBIgDgDIgBgGIAAgIIABgGIADgEQADgBAHgBIAXgDIAAgKQAAgEgCgCQgCgCgEAAIgMAAQgEAAgCACQgCACAAAEIAAAEIgIAAIAAgDIABgHQABgDACgBIAFgDIAHgBIANAAIAHABIAFACIACAFIABAGIAAAtIgHAAIAAgGIgGAEQgFADgFAAgAGVADIgFACQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAAIQAAADACACQABABAEAAIAIAAQADAAAEgCIAHgFIAAgQgAEsAfIgHgBIgFgDIgDgFIgBgHIAAgcIABgHIADgFIAFgDIAHgBIAOAAIAGABIAFADIADAFQACADAAAEIAAAPIgmAAIAAAOQAAAEACACQACACAEAAIAOAAQAEAAACgCQACgCAAgEIAAgEIAIAAIAAADQAAAEgCADIgDAFIgFADIgGABgAEmgVQgCACAAAEIAAALIAeAAIAAgLQAAgEgCgCQgCgCgEAAIgOAAQgEAAgCACgAguAfIgGgBQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBIgDgDIgBgGIAAgIIABgGIADgEQACgBAIgBIAXgDIAAgKQAAgEgCgCQgCgCgEAAIgMAAQgEAAgCACQgCACAAAEIAAAEIgIAAIAAgDIABgHQABgDACgBIAFgDIAHgBIANAAIAGABIAFACIADAFIABAGIAAAtIgHAAIgBgGIgGAEQgFADgEAAgAgtADIgGACQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABIAAAIQAAADABACQACABAEAAIAHAAQAEAAADgCIAIgFIAAgQgAjGAfIgHgBIgFgDIgDgFIgBgHIAAgcIABgHIADgFIAFgDIAHgBIANAAIAHABIAFADIADAFIABAHIAAAEIgIAAIAAgFQAAgEgCgCQgCgCgEAAIgNAAQgEAAgCACQgCACAAAEIAAAdQAAAFACACQACACAEAAIANAAQAEAAACgCQACgCAAgFIAAgGIAIAAIAAAGIgBAHIgDAFIgFADIgHABgAl+AfIgGgBQAAAAgBgBQAAAAgBAAQgBAAAAgBQAAAAgBgBIgDgDIgBgGIAAgIIABgGIADgEQADgBAHgBIAXgDIAAgKQAAgEgCgCQgCgCgEAAIgMAAQgEAAgCACQgCACAAAEIAAAEIgIAAIAAgDIABgHQABgDACgBIAFgDIAHgBIANAAIAHABIAFACIACAFIABAGIAAAtIgHAAIAAgGIgGAEQgFADgFAAgAl9ADIgFACQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAAIQAAADACACQABABAEAAIAIAAQADAAAEgCIAHgFIAAgQgAI+AeIAAg7IAIAAIAAAIIAIgGIAEgCIAFAAIAIAAIAAAHIgIAAQgEAAgDACIgKAIIAAAqgAHkAeIAAhSIAIAAIAABSgAHHAeIAAg7IAIAAIAAA7gAFwAeIgHgBIgFgDIgDgFIgBgGIAAgkIgKAAIAAgIIAKAAIAAgRIAIAAIAAARIASAAIAAAIIgSAAIAAAkQAAAIAIAAIAKAAIAAAHgADwAeIAAg7IAHAAIABAIIAHgGIAEgCIAFAAIAJAAIAAAHIgIAAQgEAAgDACIgKAIIAAAqgABzAeIAAgtQAAgDgCgCQgCgCgEAAIgIAAQgDAAgEACIgIAFIAAAtIgIAAIAAg7IAIAAIAAAHIAGgFIAEgCIAFAAIAJAAIAHABIAEACIADAFIABAGIAAAtgAAwAeIAAg7IAIAAIAAA7gAAYAeIgHgBIgFgDIgDgFIgBgGIAAgkIgJAAIAAgIIAJAAIAAgRIAIAAIAAARIASAAIAAAIIgSAAIAAAkQAAAIAIAAIAKAAIAAAHgAiYAeIAAg7IAIAAIAAA7gAjxAeIAAg7IAIAAIAAA7gAkKAeIgHgBIgEgDIgDgFIgBgGIAAgkIgKAAIAAgIIAKAAIAAgRIAIAAIAAARIASAAIAAAIIgSAAIAAAkQAAAIAIAAIAKAAIAAAHgAlLAeIAAg7IAIAAIAAAIIAIgGIAEgCIAFAAIAIAAIAAAHIgIAAQgEAAgDACIgKAIIAAAqgAoDAeIgHgBIgEgDIgDgFIgBgGIAAgkIgKAAIAAgIIAKAAIAAgRIAIAAIAAARIASAAIAAAIIgSAAIAAAkQAAAIAIAAIAKAAIAAAHgAovAeIAAgSIAAgDIgpAAIAAAVIgIAAIAAgTIABgHIAXg5IAJAAIAXA5QABADAAAEIAAATgAoxACIgSguIgSAuIAkAAgAqDgGIABgUIgMAIIgFACIgDgEIASgJIgSgJIADgFIAFADIAHAEIAFADIgBgTIAGAAIgBATIARgKIACAFIgRAJIARAJIgCAEIgGgCIgLgIIABAUgAHHgoIAAgMIAJAAIAAAMgAAwgoIAAgMIAJAAIAAAMgAiYgoIAAgMIAJAAIAAAMgAjxgoIAAgMIAIAAIAAAMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_legal, new cjs.Rectangle(-265.5,-15.2,331.8,20.6), null);


(lib.text_dates = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C78E1F").s().p("AKaCvQgcAAgKgPQgLgPAIgeIAThIQALgoAmgFQgPgEgGgJQgGgKAEgPIAShKQARg8A4AAIAcAAQA6AAgQA8IgUBKQgFAQgJAJQgKAJgQAEQAhAEgLApIgUBIQgHAegSAPQgRAPgcAAgAK1AiIgSBIQgGAaAUAAIANAAQAUAAAGgaIAUhIQAFgSgTAAIgUAAQgQABgFARgALhh1IgVBOQgDAQANAAIATAAQAOgBAFgQIAUhNQAEgOgRAAIgPAAQgPAAgEAOgAG/CvIAKgpQAFgPAHgNIBwiIIAFgNIAThMQADgMgMAAIgQAAQgPAAgEANIgLAqIgvAAIALgmQAQg8A4AAIAYAAQA4AAgQA8IgSBJQgCAKgGAIIgOATIheBsQgGAHgBAHIgFAPIBPAAIgJAqgAAXCvIAKgpQAFgPAHgNIBwiIIAFgNIAThMQADgMgMAAIgQAAQgPAAgEANIgLAqIgvAAIALgmQAQg8A4AAIAYAAQA4AAgQA8IgSBJQgCAKgGAIIgOATIheBsQgGAHgBAHIgFAPIBPAAIgJAqgAiTCvIAKgpQAFgPAHgNIBwiIIAFgNIAThMQACgMgMAAIgPAAQgOAAgEANIgLAqIgwAAIALgmQAQg8A4AAIAYAAQA4AAgQA8IgSBJQgDAKgGAIIgNATIhdBsQgGAHgCAHIgEAPIBPAAIgKAqgAlQCvIBRk2IgtAAIAKgnICJAAIgKAnIgtAAIhQE2gAoaCvIBaldIBZAAQA4AAgOA8IgXBaQgKAkgbAOQgbAQgtAAIgHAAIgiCFgAm+ADIAIAAQAWAAAMgHQAOgJAFgSIAXhYQAFgQgSAAIgjAAgAqfCvIBbldIBoAAIgJAnIg6AAIgfB4IA5AAIgKAmIg5AAIgdBxIA4AAIgKAngAsWCvQg4AAARhAIAGgbIAwAAIgKAlQgEAPAOAAIAUAAQAPAAACgPIAUhHQACgKgCgDIg0gnQgNgLgBgPQgBgNACgPIAPg/QAIgfASgMQARgMAdAAIAYAAQA5AAgPA8IgNAwIgvAAIAPg3QADgOgOAAIgPAAQgPAAgFAQIgSBGQgCALADABIA1ApQAMAIABALQABAKgDAUIgQBEQgHAegRAMQgTAMgcAAgAEaAXIAKgmIBrAAIgJAmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_dates, new cjs.Rectangle(-83.4,-17.5,168.4,35), null);


(lib.text_20_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxlKwIAiiBQipgEAzjDIAVhTICQAAIgbBpQgMAuAsAAIA9AAQAtAAAJguIAzjGQAHgegGgKIitiFIgfgeIgMgdIAAgeIBBkDQAvi1CogCIAiiDIBoAAIgjCEQCVAKgtCsIgbBrIiRAAIAehyQAOguguAAIgqAAQgyAAgJAwIg2DQQgHAeAIAKICzB/QAhAYAFAYQAEAXgNAzIg5DdQgXBYg0AtQg0AuhSAEIgjCBgAAOKdQjaAAA8jpIDlt7QA+joDXAAIB/AAQDaAAg+DoIjmN7QgeB0hFA6QhFA7hrAAgAEMnNIjoOEQgRBBA2AAIBXAAQA5AAARhCIDouDQARg+hCAAIhGAAQg+AAgRA+gAseKdIAoieQAPg8AfgxIA9hVIFvm/IATg1IBMkhQAMgygwgBIg+AAQg5AAgLA1IgrCmIi1AAIAliXQA/joDWAAIBfAAQDZAAg8DoIhIEaQgJAmgXAkIg1BIIlmGoQgZAcgGAXIgRA6IEyAAIgqCjgAM5KGIBhl5IBvAAIgLAqIg8AAIgiCAIA9AAIgLAqIg8AAIgrClgAKRKGIBhl5IBvAAIgKAqIg9AAIghCAIA8AAIgKAqIg9AAIgqClgAHqKGQgfAAgLgQQgLgQAJggIBAj4QARhBA8AAIAqAAQA9AAgRBBIhAD4QgIAggUAQQgTAQgeAAgAI6E8QgHAEgCAKIhCD+QgFAUAUAAIAXAAQAIAAAHgFQAIgEACgLIBCj+QACgKgDgEQgEgFgKAAIgYAAQgJAAgGAFgARqF2IgFgBIgwAnIgTgmIA1gWIAAgFIgsgWIApgpIAbAlIAFgCIASg2IAtAQIgmAvIABADIA4gMIgKAuIgxgHIgEAEIAVApIgxAZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_20_off, new cjs.Rectangle(-122.2,-68.8,435.8,292.8), null);


(lib.packaging_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.packaging();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.packaging_1, new cjs.Rectangle(0,0,134,181), null);


(lib.overwatch_logotype = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDA12B").s().p("AI2B0IB6AAIg9BZgAqvh0IA9hYIA9BYg");
	this.shape.setTransform(109.8,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ATmB0IAAhZIiMAAIAABZIhNAAIAAjlIBNAAIAABRICMAAIAAhRIBNAAIAADlgAMRB0QgcAAgSgOQgSgPAAgXIAAhkIAxhMIACAAIANgBICbAAQAdAAARAOQASAPAAAYIAAAiIhNAAIAAgbIiBAAIAABtICBAAIAAggIBNAAIAAAoQAAAXgSAPQgTAOgbAAgAIaB0IAAipIhjAAIAAg8IEmAAIgmA8IhPAAIAACpgAGcB0IhdiTIhfCTIhUAAICYjlIA7AAICUDlgAAuB0Igyh0IgzB0IgyAAIhkjlIBRAAIAvBzIAzhzIA0AAIAzB1IAxh1IBKAAIhjDlgAkdB0IhghWIAAguIBSAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABgBIAAglIgFAAIh1AAIAACqIhOAAIAAjlIDYAAQAbAAAPANQARAMgBAWIAAA4QAAARgSAMQgQAKgXABIBiBWgAsBB0IAAirIAog6IDJAAIAAA8IijAAIAAAcIBuAAIAAA0IhuAAIAAAdICjAAIAAA8gAvHB0IiPjlIBYAAIBVCLIBXiLIBWAAIiWDlgA1EB0IA8g8IBqAAIAAhtIiRAAIAAByIgvAxIgDgCQgNgHgHgLQgHgMAAgOIAAh9QAAgYARgOQARgOAeAAICsAAQAPAAAMADIACABIAjA3IAAB2QAAAXgSAPQgSAOgcAAgAVchKQgFgEgDgFQgCgFAAgFQAAgHADgFQADgFAFgDQAFgDAGAAQAFAAAGADQAFADACAGQADAEAAAHQAAAGgDAEQgCAFgFAEQgGACgGAAQgGAAgFgCgAVehuQgEADgCAFQgDAEAAAFQAAAEADAFIAGAHQAFACAEAAQAFAAAEgCQAEgDADgEQACgFAAgEQAAgJgFgGQgEgCgDgBIgFgBQgFAAgFACgAVrhRIgHgKIAAAKIgFAAIAAgaIAFAAIAHABIACACQADACAAADQAAAGgFABIAIALgAVkhfIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAgBIgBgCQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_1.setTransform(140.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.overwatch_logotype, new cjs.Rectangle(0,0,281,41), null);


(lib.linear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// linear
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,0.498,1,1],-37,0,37,0).s().p("AlxM+IAA57ILjAAIAAZ7g");
	this.shape.setTransform(37,83);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.linear, new cjs.Rectangle(0,0,74,166), null);


(lib.gold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C9962B","#F7CF74","#F7CF74","#A76F0D"],[0,0.251,0.498,1],-140.5,28.9,139.8,-28.7).s().p("A18EiIAApDMAr5AAAIAAJDg");
	this.shape.setTransform(50,50,0.356,1.724);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gold, new cjs.Rectangle(0,0,100,100), null);


(lib.EXIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HITBOX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(485,125,1.332,2.778);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.esrb_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.esrb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.esrb_1, new cjs.Rectangle(0,0,73,99), null);


(lib.endframe_tracer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.tracer_masked();
	this.instance.parent = this;
	this.instance.setTransform(0,164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(251.5,125);

	// Layer 1
	this.instance_1 = new lib.tracer_endframe();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.endframe_tracer, new cjs.Rectangle(0,0,503.1,250), null);


(lib.character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgsTATiQh0hSgegeQgugrABhNIABgmQBPgIDjgVQDJgTBDgWQgXgOhgg2QhRgugtgiQiOhpABiIQAAglAJgWQAIgXAAgWQAAgIgWgjIhBhkQhkiXg7inIgkhhQg7BGh5A9Qg+AfhYAnID0mdQAGgLAFgTQAFgRgBgEQABgSgFhDIgLioQi0AxhmAUQjLAmjIAAQiXABgsgXQgTgMgKgGQgUgKgkgEIAAgQIA5ACQCigBC7hlQDZh2CrjbQhLgTiBhQIiPhdMAu5AAAQAIAMAiBzQAnCDALBPIAWDqQAJAqAUAxQAeBLATA4QA9C5AYBqQAZBxAABnQAACpgvA4QgPATgeARQglAWgMAKIAEAPQBRgJEshCQD6g2CUAAIBOACQgFARg8B7Qg5B9AEAvQBAgiBZg1QBGgkBHgEQA8gEAjgGQAigHA4gSIAhgJQAMgKAfhEIBmjRQgqgFgJgHQgRgOgDg3QgBgigWgYQgJgJgigbIhchFIiYh4IjAiXQhvhWgtgZQg2gdg9AAQgSAAgrAHIgvAFQgoAAgYggQgUgcAAgfQAAgFAGgXQAEgWAAgGQAAgOgkhEQglhEAAgNQAAgXASgNQAIgGAngRQBXgmA0hPQAzhPAwgyQAOgPBFg+MA39AAAQAbA8A0AYQAYAKBQAAQB2AABmCVQBjCRAACdQAABkgdAgQgwAggqAsQgiAlihBXQhBAijpB3IjLBnQg/AhgSASQgPAPgHAfQgMAzgOAkQgoBjhBBEQgsAuh8BaQgVAQhPAkQhXAogqAJIh+AfIhLAPIgFANQgHAigpAcQg2AegdAVQg4AmgyBrQguBygPAbQg0BpgSAfQgbAwgUAAQggAAhFhhQhFhggMAAQgSAAgRAaQgSAZABAUQAAAQBCBAIDBCyg");
	mask.setTransform(422.6,125);

	// Layer 2
	this.instance = new lib.character_tracer();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character, new cjs.Rectangle(7.2,0,838,250), null);


(lib.button_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_foreground
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AELBhIANhvIgsBvIgcAAIAUjBIAbAAIgUCQIA4iQIAUAAIgTCQIA4iQIAZAAIhODBgABvBhQgQAAgFgIQgGgJAEgQIAhh/QAIghAfAAIAXAAQAfAAgJAhIghB/QgFAQgJAJQgKAIgQAAgACYhIQgDADgCAFIgiCBQgCAKAKAAIALAAQAFAAAEgCQADgDACgFIAiiBQABgFgCgDQgCgCgFAAIgMAAQgFAAgDACgAAeBhIAKgnIgGhXIggB+IgZAAIAxjBIAaAAIAEBeIAXheIAaAAIgxDBgAiMBhIAShHIAAh6IAaAAIgCBUIABAAIAmhUIAaAAIhAB/IgRBCgAjoBhQgTAAgGgJQgHgKAFgSIAoicIAaAAIgpCdQgCAGADADQABADAGAAIAGAAQAHAAADgDQAEgDACgGIAoidIAaAAIgoCcQgDAJgDAHQgFAHgFAFQgGAEgIADQgHACgJAAgAl1BhIAzjBIApAAQARAAAHAJQAGAJgFARIgKApQgCAJgFAGQgFAFgHABQAKABADAFQADAFgDAKIgQA7QgCAFgEAEQgFADgGACQgGACgJAAgAlVBLIAVAAQAJAAABgIIALgpQADgOgOAAIgPAAgAlAgIIAMAAQAIAAADgDQADgDACgHIAKgnQACgHgCgEQgCgDgGAAIgMAAg");
	this.shape.setTransform(55,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text_background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C37913").s().p("AELBhIANhvIgtBvIgcAAIAVjBIAaAAIgTCQIA4iQIAUAAIgTCQIA4iQIAZAAIhODBgABvBhQgQAAgFgIQgHgJAFgQIAhh/QAIghAgAAIAVAAQAgAAgJAhIghB/QgFAQgJAJQgKAIgPAAgACYhIQgDADgCAFIghCBQgDAKAKAAIAMAAQAEAAAEgCQADgDACgFIAiiBQABgFgCgDQgCgCgFAAIgMAAQgFAAgDACgAAeBhIAJgnIgEhXIghB+IgZAAIAxjBIAaAAIADBeIAZheIAaAAIgzDBgAiMBhIAShHIAAh6IAZAAIgBBUIAAAAIAnhUIAaAAIhBB/IgQBCgAjoBhQgSAAgIgJQgGgKAEgSIApicIAaAAIgpCdQgBAGACADQACADAFAAIAGAAQAGAAAFgDQADgDACgGIApidIAaAAIgpCcQgDAJgEAHQgDAHgHAFQgFAEgHADQgIACgJAAgAl1BhIAzjBIApAAQARAAAGAJQAHAJgFARIgLApQgCAJgEAGQgFAFgHABQAKABADAFQADAFgDAKIgQA7QgDAFgEAEQgDADgHACQgGACgKAAgAlVBLIAVAAQAJAAABgIIALgpQADgOgPAAIgNAAgAlAgIIANAAQAHAAADgDQADgDACgHIALgnQABgHgCgEQgCgDgFAAIgNAAg");
	this.shape_1.setTransform(56.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_label, new cjs.Rectangle(14.1,2.3,99,62.1), null);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-485,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_1, new cjs.Rectangle(-485,-125,970,250), null);


(lib.logo_wing_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AohNHQgFgkAkgYIHslMQATgCgDhOIAAgiQgFgoAjgaIFpjmIAWgZIACgFIAIgXIAUiAQABgKAIgFQAEgDADAAIABAAQAIAAAAAQIACC1QAEAagJARIAAACQg8CPgDADIgBABQgHAMgFABIqAGsIAAA7QAAANgMAKIjlCZIAABQQAAAUgQABIgHABQgJAEAAAOIAABGQAAAogPAHgAiVOAQgHgEAAgLIAAjCQAAgeAYgQIIxl6QALgJAKgRIA9iIQAJgSAHgJIAGgGQADgDAFAAQAGAAAAALIAAACIgDAXIg+D+QgIAngSANIgCABIg6AlQgWALgEAQQgCAIACAFIAAAvQAAAcgYASIneE7QgHAFgFAAQgDAAgCgCgAAeBXQAGgbAUgNIEdi2IASgUIACgEQAGgHABgLIAPhmQACgKAGgDIAEgBIABAAQAIAAgCAMIADCQQACAXgGANIgCAAIgvBzIgMAMIk2DNgAAehaQADgVAUgNID4ihIAPgPIADgEIAFgRIANhZQABgIAGgDIAFgBQAGAAAAAKIADB/QABAMgGARIgBACIgqBjIgBACQgDAIgGABIkOCxgAAej7QADgSARgOIDaiLIAOgPIABgDIAFgPIAMhOQABgFAFgEIAEgBQAGAAAAAJIACBwQABATgGAGIAAACIgmBXIgBACQgDAGgFABIjsCegAAdmJQADgQAPgLIC9h6IAMgLIABgDIAFgOIAKhCQABgHADgCIAFgCQAEAAAAAJIACBgQABAOgFAJIAAABIggBNIgBABIgGAIIjPCHgAAeoNQADgPAMgIICnhsIAKgKIACgEQADgDAAgHIAJg7QABgGADgBIADgCIACAAQAEAAgBAHIABBVQACAPgFAFIAAABIgcBDIgCACIgEAFIi2B5gAAeqFQADgOAJgHICSheIAJgJIACgDQACgDAAgGIAIg0QABgFADgBIADgCQAFAAgCAIIACBJQABAMgDAGIgBAAIgYA8IgBAAIgFAFIieBogAAgrwQADgLAHgGIB5hNIAGgIIABgBIADgHIAGgsIAGgGQADAAAAAFIACA9IgDAOIgVAyIgFAEIiBBXgAAjtHQAAgGAHgGIBZg4IAFgHIABgBIACgGIAEgfIAFgFIABAEIACAsIgCAMIgPAkIgBAAIgDAEIhfBAgAAktuIADhUIgEgSIg7iMQgDgIACgFQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIACgCQAEAAAFAHIBfCZQANAOAAAOIAAAkIgCAEIg2AkIgCABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	mask.setTransform(238.3,123.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C7902F","#CB9834","#D9A643","#E8BB5D","#F0C56D"],[0,0.251,0.498,0.749,1],53.8,0.1,-55.7,0.1).s().p("AojR0MAAAgjoIRIAAMAAAAjog");
	this.shape.setTransform(238.2,123.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_wing_right, new cjs.Rectangle(183.7,9,109.3,228.1), null);


(lib.logo_wing_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AITRFIAAhGQAAgOgHgEIgJgBQgLgBgEgKIgCgKIAAhQIjjiZQgMgKAAgNIAAg7IqBmsQgEgBgIgMIgBgBQgDgDg7iPIAAgCQgKgMACgfIAEi1QAAgEACgDQABgJAFAAIABAAIAHADQAIAFABAKIAUCAIAHAXIADAFIAXAZIFoDmQAjAagFAoIAAAiQgDBOATACIHsFMQAjAYgEAkIAAEtQgPgHAAgogACGN9Infk7QgYgSAAgcIAAgvQACgFgCgIQgEgQgWgLIg6glIgCgBQgRgNgKgnIg9j+IgDgXIAAgCQAAgLAGAAQAFAAADADIAGAGQAIAJAIASIA+CIQAJARALAJIIyF6QAXAQAAAeIAADCQAAALgHAEQgCACgDAAQgFAAgGgFgAlTAaIgMgMIgxhzQgFgNABgXIABiQIACgGQABgGAFAAIAGABQAGADABAKIAPBmIAJAWIASAUIEdC2QAUANAGAbIAACQgAkriQQgGgBgDgIIgBgCIgqhjIgBgCQgGgRABgMIADh/QAAgBABAAQAAgBAAgBQAAAAAAgBQABAAAAgBQABgFADAAIAFABQAGADABAIIAOBZIAEARIADAEIAPAPID4ChQARAKAGAYIAAB7gAkKkrQgEgBgDgGIgCgCIglhXIAAgCQgGgGABgTIAChwIACgEQABgFADAAIAFABQAEAEABAFIANBOIAEAPIABADIAOAPIDaCLQARAOADASIAABugAjrmwIgGgIIgBgBIghhNIAAgBQgEgJACgOIABhgIAAgFQABgEADAAIAFACQADACABAHIALBCIAEAOIABADIAMALIC9B6QARANAAAOIAABggAjToxQgEgBAAgEIgCgCIgchDIgCgBQgDgHAAgNIADhVIAAgDQAAgEADAAIAFACQADABABAGIAJA7IADAKIACAEIAKAKICnBsQAMAIADAPIAABVgAi7qlQgEgBAAgEIgCAAIgYg8IgBAAQgDgGABgMIAChJIAAgDQAAgEADgBIADACQADABABAFIAIA0IADAJIABADIAJAJICQBeQALAGADAPIAABIgAigsKIgFgEIgVgyIgCgOIABg9IADgFIAGAGIAGAsIADAHIABABIAGAIIB5BNQAHAGADALIAAA9gAiBtZIgDgEIgBAAIgPgkIgCgMIAAgsIADgEIAFAFIAEAfIACAGIABABIAFAHIBZA4QAHAGAAAGIAAAugAgmtsIg2gkIgDgEIAAgkQAAgOAOgOIBfiZIAIgHIADACQAGAGgGAMIg7CMIgGAXIAFAgIAAAvQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCgBg");
	mask.setTransform(61.7,123.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C7902F","#CB9834","#D9A643","#E8BB5D","#F0C56D"],[0,0.251,0.498,0.749,1],-53.6,0.1,55.9,0.1).s().p("AojR0MAAAgjoIRIAAMAAAAjog");
	this.shape.setTransform(61.9,123.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_wing_left, new cjs.Rectangle(7,9,109.3,228.1), null);


(lib.logo_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAB+IiZBwIA6i1IiZhxIC+AAIA6i1IA7C1IC+AAIiaBxIA7C1g");
	mask.setTransform(149.8,217.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EAAE34","#F0C66D","#F0C66D","#EAAE34"],[0,0.251,0.749,1],-24.9,0,25,0).s().p("Aj4DuIAAnbIHxAAIAAHbg");
	this.shape.setTransform(149.8,217.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_star, new cjs.Rectangle(124.9,193.5,49.8,47.6), null);


(lib.logo_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454C51").s().p("AFmBSIgTg/IgdAAIAAA/IgfAAIAAihIBOAAQAiAAAAAiIAAAfQAAAZgVAHIAVBAgAE2gFIAqAAQAHAAAAgKIAAgeQAAgJgHAAIgqAAgAA+BSIAAihIBmAAIAAAZIhHAAIAAAoIBCAAIAAAZIhCAAIAAAsIBJAAIAAAbgAh7BSIgnhvIgDgNIAAglIAeAAIAAAgIABAMIAbBQIAZhQIACgMIAAggIAeAAIAAAlIgDANIgnBvgAlkBSQgiAAAAgiIAAhfQAAgiAiAAIAtAAQAiAAAAAiIAABfQAAAigiAAgAlogtIAABdQAAAJAJAAIAkAAQAJAAAAgJIAAhdQAAgJgJAAIgkAAQgJAAAAAJg");
	this.shape.setTransform(150,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_over, new cjs.Rectangle(111,21.5,78.1,16.3), null);


(lib.logo_one_hundred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AGMGnQhWAAgtguQgugtAAhXIAAnrQAAhVAugtQAtguBWAAIDKAAQBWAAAtAuQAuAtAABVIAAHrQAABXguAtQgtAuhWAAgAGTjsIAAHXQAAAeAeAAIB/AAQAeAAAAgeIAAnXQAAgdgeAAIh/AAQgeAAAAAdgAjtGnQhVAAgsguQgugtAAhXIAAnrQAAhVAugtQAsguBVAAIDLAAQBVAAAtAuQAuAtAABVIAAHrQAABXguAtQgtAuhVAAgAjljsIAAHXQAAAeAeAAICAAAQAdAAAAgeIAAnXQAAgdgdAAIiAAAQgeAAAAAdgAqjGhIAAqjIhjAAIBIifIDRAAIAANCg");
	mask.setTransform(147.2,88.2);

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C7902F","#DDAD4B","#ECC267","#DDAD4B","#C7902F"],[0,0.251,0.498,0.749,1],-13.5,0,125.9,0).s().p("AiMGiIAAtDIEZAAIAANDg");
	this.shape.setTransform(83.8,88.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C7902F","#DDAD4B","#ECC267","#DDAD4B","#C7902F"],[0,0.251,0.498,0.749,1],-64.7,0,89.6,0).s().p("AkVGnIAAtNIIrAAIAANNg");
	this.shape_1.setTransform(133.6,88.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C7902F","#DDAD4B","#ECC267","#DDAD4B","#C7902F"],[0,0.251,0.498,0.749,1],-124.8,0,25.6,0).s().p("AkVGnIAAtNIIrAAIAANNg");
	this.shape_2.setTransform(196.9,88.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_one_hundred, new cjs.Rectangle(69.7,45.9,155,84.5), null);


(lib.logo_game_of_the_year = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALqBZIgVhDIgZAAIAABDIgnAAIAAixIBYAAQAnAAAAAnIAAAjQAAAagXAIIAXBFgAK8gJIAqAAQAFAAAAgIIAAgfQAAgGgFAAIgqAAgAJCBZIAAglIg4AAIAAAlIglAAIAAgoIACgQIArh5IApAAIAqB5IADAQIAAAogAI5AUIgThBIgUBBIAnAAgAFBBZIAAixIBwAAIAAAiIhKAAIAAAkIBEAAIAAAfIhEAAIAAAqIBNAAIAAAigAC8BZIAAg+Igqg/QgDgHAAgKIAAgjIAnAAIAAAfIACAMIAZAnIAWglIADgLIAAgiIAlAAIAAAjQAAAIgEAJIgpA/IAAA+gAjuBZIAAixIBwAAIAAAiIhJAAIAAAkIBCAAIAAAfIhCAAIAAAqIBLAAIAAAigAlIBZIAAhpIgbA1IgbAAIgbg1IAABpIglAAIAAixIAnAAIAmBSIAnhSIAnAAIAACxgAoSBZIAAglIg4AAIAAAlIglAAIAAgoQAAgHAEgJIAqh5IAoAAIAqB5IADAQIAAAogAoZAUIgUhBIgVBBIApAAgArtBZQglAAAAglIAAhnQAAglAlAAIAwAAQAmAAAAAlIAAATIgnAAIAAgRQABgHgHAAIghAAQgHAAAAAHIAABjQAAAHAHAAIAhAAQAHAAgBgHIAAgXIgWAAIAAgdIA9AAIAAA2QAAAlgmAAgABABVIAAhNIAzAAIAAAPIghAAIAAAQIAeAAIAAAOIgeAAIAAATIAhAAIAAANgAAXBVIAAggIgWAAIAAAgIgRAAIAAhNIARAAIAAAeIAWAAIAAgeIATAAIAABNgAhGBVIAAg+IgSAAIAAgPIA2AAIAAAPIgSAAIAAA+gAAegHIAAhQIAzAAIAAAQIggAAIAAATIAdAAIAAAOIgdAAIAAAfgAgegHQgRAAAAgRIAAguQAAgRARAAIAXAAQAQAAgBARIAAAuQABARgQAAgAgehEIAAArQAAAAAAABQAAAAAAABQABAAAAAAQABAAABAAIAQAAQAAAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgrQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgQAAQgBAAgBAAQAAAAgBABQAAAAAAAAQAAABAAABg");
	mask.setTransform(149.1,146.8);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-41.4,0,115.4,0).s().p("AhMBZIAAixICZAAIAACxg");
	this.shape.setTransform(112.2,146.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-22.3,0,134.5,0).s().p("AhBBZIAAixICDAAIAACxg");
	this.shape_1.setTransform(93.3,146.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-70.2,0,82.7,0).s().p("AgaAnIAAhNIA1AAIAABNg");
	this.shape_2.setTransform(142.9,151.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-77.7,0,75.2,0).s().p("AgcAnIAAhNIA5AAIAABNg");
	this.shape_3.setTransform(150.3,151.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-82.1,-0.1,70.8,-0.1).s().p("AgZAoIAAhPIAzAAIAABPg");
	this.shape_4.setTransform(154.7,142);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-87.3,0,69.5,0).s().p("AgYAnIAAhNIAxAAIAABNg");
	this.shape_5.setTransform(158,151.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-74.5,-0.1,78.3,-0.1).s().p("AgbAoIAAhPIA3AAIAABPg");
	this.shape_6.setTransform(147.1,142);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-58.3,0,94.5,0).s().p("Ag4BZIAAixIBxAAIAACxg");
	this.shape_7.setTransform(130.9,146.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-3.9,0,149,0).s().p("Ag9BZIAAixIB7AAIAACxg");
	this.shape_8.setTransform(76.5,146.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-99.3,0,57.5,0).s().p("Ag/BZIAAixIB/AAIAACxg");
	this.shape_9.setTransform(169.8,146.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-123.1,0,29.7,0).s().p("AARBZIAAixICDAAIAACxgAiSBZIAAixIBzAAIAACxg");
	this.shape_10.setTransform(195.9,146.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C79131","#D9A643","#E2B254","#D9A643","#C79131"],[0,0.251,0.498,0.749,1],-151.1,0,5.7,0).s().p("Ag+BZIAAixIB9AAIAACxg");
	this.shape_11.setTransform(221.5,146.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_game_of_the_year, new cjs.Rectangle(70.4,137.9,157.5,17.8), null);


(lib.logo_awards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454C51").s().p("AHNBEQgdAAAAgbIAAgMIAaAAIAAAMQAAAGAHAAIAeAAQAHAAAAgGIAAgTQAAgGgGAAIgsgMQgSgEAAgVIAAgTQAAgbAcAAIAkAAQAcAAAAAbIAAANIgZAAIAAgNQAAgGgIAAIgaAAQgIAAAAAGIAAAQQAAAGAFACIAsAKQAUAHAAAQIAAAYQAAAbgeAAgAD2BEIAAiHIBCAAQAeAAAAAfIAABIQAAAggeAAgAEQAtIAlAAQAHAAAAgHIAAhLQAAgHgHAAIglAAgAB/BEIgSg0IgXAAIAAA0IgaAAIAAiHIBAAAQAdAAAAAdIAAAaQAAAWgRAEIASA2gABWgEIAjAAQAIAAAAgIIAAgZQAAgHgIAAIgjAAgAg1BEIAAgeIgyAAIAAAeIgXAAIAAggIABgLIAhhcIAbAAIAgBcIADALIAAAggAg7ARIgUg5IgTA5IAnAAgAkGBEIgQg8IgRA8IgZAAIgZhcIgCgMIAAgfIAYAAIAAAdIARBHIARhHIAAgdIAXAAIAAAeIAQBGIARg/IABgIIAAgdIAYAAIAAAfIgcBogAnGBEIAAgeIgxAAIAAAeIgYAAIAAggIADgLIAhhcIAbAAIAhBcIACALIAAAggAnMARIgSg5IgTA5IAlAAg");
	this.shape.setTransform(149.7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_awards, new cjs.Rectangle(97,163.9,105.6,13.5), null);


(lib.text_over_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmCOFIAQmEIhOAAIhkGEIiBAAID4vBID8AAQCUAAgrCkIg9DtQgiB+hUAiIgNGQgAmkGTIBUAAQA6AAAShGIA1jQQAJgigKgSQgJgRgcAAIhVAAgAwhOFID4vBIEcAAIgaBqIicAAIhVFJICbAAIgbBrIibAAIhSE4ICbAAIgbBrgA2YOFIBcvBICAAAIhWLeIEnreIB/AAImTPBgA9+OFQhPAAgdgoQgcgqAWhRICjp6QAsikCZAAIBuAAQCbAAgsCkIijJ6QgWBRgxAqQgxAohNAAgA6zA7QgQAMgHAZIinKIQgNAyAzAAIA5AAQAXAAASgMQASgMAHgaICnqIQAHgZgJgMQgKgNgZAAIg9AAQgYAAgQANgASjN9QkiAABQkzIExycQBSkyEeAAICnAAQEhAAhREyIkyScQgoCZhbBNQhbBNiPAAgAX0pZIk0SoQgWBVBIAAIBzAAQBMAAAWhYIE0ylQAXhShYAAIhdAAQhSAAgXBSgAFkN9QiQAAg0hLQg1hNAniZIArilIDxAAIguCsQgUBRBGAAIBzAAQBIAAAVhRIBpmPQAMg4gWgdQgWgcg4AAIhaAAIA0jJIBHAAQA2AAAfgYQAhgZALgwIBlmCQAXhPhOAAIhYAAQhGAAgWBPIg0DPIjxAAIAyjIQBTkyEdAAICMAAQEhAAhREyIhiGAQgVBOgyAuQgzAthTAMQBaAPAkArQAjAsgSBMIh0G3QgnCZhcBNQhbBLiPAAg");
	mask.setTransform(204.3,90.1);

	// gold
	this.instance = new lib.gold();
	this.instance.parent = this;
	this.instance.setTransform(204.7,90.1,4.085,1.802,0,0,0,50.1,50);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_over_30, new cjs.Rectangle(-252.6,-157.9,661.2,338.2), null);


(lib.text_million_players = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AagClQg1AAAQg9IAGgZIAsAAIgJAkQgEANAOAAIATAAQANAAADgNIAShEQACgJgCgDIgxgmQgMgJgBgOQgBgNADgOIAOg8QAHgcARgLQAQgMAbAAIAXAAQA1AAgPA4IgLAuIgtAAIAOgzQAEgOgOAAIgNAAQgPAAgEAOIgRBDQgCAJADADIAxAmQALAJACAJQABAKgEARIgOBBQgIAcgQAMQgQALgbAAgAW3ClIAGiGIgbAAIgiCGIgtAAIBWlJIBWAAQAzAAgPA4IgVBSQgLAqgdAMIgFCJgAWsgFIAdAAQATAAAGgYIAThHQADgMgEgGQgDgGgJAAIgdAAgARlClIBWlJIBhAAIgJAlIg1AAIgeBwIA1AAIgJAkIg1AAIgcBrIA1AAIgJAlgAOBClIAfh5IgBjQIAsAAIgDCPIABAAIBDiPIArAAIhuDZIgcBwgAKmClIAgh5IgzAAIgfB5IgsAAIBGkRQAPg4A1AAIAhAAQA1AAgPA4IhHERgAK6hpIgdBtIAzAAIAchtQAFgTgTAAIgMAAQgUAAgEATgAFhClIBVlJIAsAAIhMEkIA2AAIgKAlgABMClIBVlJIBTAAQA1AAgOA4IgWBVQgJAhgZAPQgaAOgpAAIgIAAIggB+gACiACIAHAAQAVABAMgIQAMgHAFgSIAVhTQAFgOgQAAIghAAgAkkClIARhCIgJiWIg3DYIgtAAIBWlJIAsAAIAGCfIApifIAsAAIhVFJgAptClQgbAAgJgOQgKgOAHgcIA4jZQAPg4A1AAIAmAAQA1AAgPA4Ig4DZQgIAcgQAOQgSAOgaAAgAonh8QgFAFgDAIIg5DeQgFARASAAIAUAAQAHAAAHgEQAGgEACgJIA6jeQACgIgDgFQgDgDgJAAIgVAAQgIAAgGADgAtiClIBWlJIAsAAIhVFJgAxLClIBWlJIAsAAIhMEkIA1AAIgJAlgA00ClIBWlJIAsAAIhMEkIA1AAIgJAlgA3zClIBVlJIAsAAIhVFJgA6wClIA8jYIhKCdIgiAAIAIidIgzDYIgtAAIBWlJIAwAAIgJDBIBbjBIAxAAIhVFJg");
	mask.setTransform(184.9,16.5);

	// gold
	this.instance = new lib.gold();
	this.instance.parent = this;
	this.instance.setTransform(184.9,16.6,3.697,0.33,0,0,0,50,50.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_million_players, new cjs.Rectangle(-255.9,0,625.7,118.2), null);


(lib.text_game_of_the_year_edition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AQCBLIAHgdIgEhFIgZBiIgUAAIAniVIAUAAIACBJIAThJIAUAAIgnCVgAOCBLQgYAAAGgZIAZhiQAHgaAYAAIARAAQAYAAgHAaIgZBiQgGAZgYAAgAOegyIgaBlQgDAHAIAAIAKAAQAHAAADgHIAahlQACgHgIAAIgJAAQgIAAgCAHgAMoBLIAniVIATAAIglCVgALbBLIAiiEIgSAAIADgRIA6AAIgEARIgTAAIgiCEgAKOBLIAliVIAUAAIgmCVgAIhBLIAoiVIAiAAQAOAAAFAGQAGAGgEAQIgaBjQgGAWgXAAgAI6A5IAQAAQAHAAABgHIAahfQACgLgIAAIgOAAgAHLBLIAniVIArAAIgDARIgZAAIgNAzIAZAAIgGAQIgXAAIgNAwIAZAAIgEARgAFRBLIADg8IgMAAIgPA8IgUAAIAmiVIAoAAQAWAAgHAaIgJAkQgFATgNAFIgDA/gAFNgBIAMAAQAJAAADgMIAIggQADgLgIAAIgNAAgADkBLIAOg4IgXAAIgOA4IgUAAIAfh7QAHgaAYAAIAPAAQAYAAgHAaIgfB7gADsguIgNAwIAYAAIANgwQACgKgIAAIgGAAQgJAAgDAKgABkBLIAniVIArAAIgDARIgZAAIgOAzIAYAAIgEAQIgYAAIgNAwIAYAAIgDARgAARBLIAOg4IgBhdIAVAAIgCBBIABAAIAehBIAUAAIgyBiIgOAzgAiSBLIAmiVIAtAAIgEARIgZAAIgNAzIAYAAIgEAQIgYAAIgNAwIAZAAIgGARgAjTBLIAPhBIgVAAIgSBBIgTAAIAniVIATAAIgSBEIAYAAIARhEIAUAAIgmCVgAlMBLIAiiEIgTAAIAEgRIA7AAIgEARIgUAAIgiCEgAnrBLIAmiVIAtAAIgDARIgaAAIgNAzIAYAAIgDAQIgZAAIgRBBgApBBLQgZAAAHgZIAZhiQAIgaAXAAIASAAQAYAAgHAaIgaBiQgGAZgYAAgAolgyIgaBlQgCAHAHAAIAKAAQAJAAABgHIAZhlQAEgHgJAAIgJAAQgIAAgCAHgArrBLIAliVIAtAAIgEARIgZAAIgNAzIAYAAIgEAQIgYAAIgNAwIAYAAIgEARgAsuBLIAchiIggBGIgQAAIADhGIgXBiIgUAAIAniVIAVAAIgEBXIAqhXIAXAAIgoCVgAuqBLIANg4IgWAAIgOA4IgVAAIAgh7QAIgaAXAAIAPAAQAYAAgGAaIggB7gAuiguIgMAwIAWAAIANgwQADgKgJAAIgFAAQgJAAgDAKgAwoBLQgYAAAGgZIAahjQAGgZAZAAIAMAAQAYAAgGAZIgFAWIgUAAIAFgTQABgGgBgCQgDgCgFAAIgDAAQgJAAgBAKIgZBdQgCAFACAEQABABAFAAIAOAAIAKgnIgMAAIAEgRIAgAAIgSBKg");
	mask.setTransform(108.4,7.5);

	// gold
	this.instance = new lib.gold();
	this.instance.parent = this;
	this.instance.setTransform(108.6,7.5,2.168,0.15,0,0,0,50.1,50);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_game_of_the_year_edition, new cjs.Rectangle(0,0,216.8,15), null);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// linear
	this.instance = new lib.linear();
	this.instance.parent = this;
	this.instance.setTransform(37,83,1,1,0,0,0,37,83);
	this.instance.alpha = 0.699;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.23},9).to({alpha:0.699},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,166);


(lib.character_tracer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkFFqIhXgPIgIgBQgBgBA+hEIA/hCQgBgBCjhZQAsgYAdhTQgBAAAjg0IAig2QgCgBAShAIARhBQANhYgBgCIALgWIBPgcQAoAHgCgCIBxBsIgOALIgOALQgBgBhhCrIgRAdQhWCUgMARIggAnIgGAGIgyAyQgpAogcAXQgVAQgNAGQgPAIgcAJIhDAPIgVAFIgBAAQgqAJgJAAIgDgBgAFlj5IAAAAg");
	mask.setTransform(294.3,67.9);

	// character
	this.instance = new lib.character();
	this.instance.parent = this;
	this.instance.setTransform(-28.7,26.9,1.497,1.497,0,136.9,-43.1,399.9,125);
	this.instance.alpha = 0.102;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:791.3},79).wait(1));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApCJrQgmgJhzhTIhqhSIBJiZIAGABQAAABBRhBQBRhCAAABQABAAglBBQgmBAACAAQAAABD5j1QD7j1gBABIAPABIBXAPQADADAygLIACAAQAxgHASgHQAHgBAMgFQAdgJAPgIQAMgGAWgQIBDgiIA1hPIAGgGIAfgnQANgRBWiVQAtg7AeAAQAwACBMA4QBMA4AZA3QAWAuA3DBIA1C4IgiAQQAAABgdAOQgcALABACQABABgHAgIgnAnQAAABgPAIQgNAHAAACQAAABl/hQQABABg6gHQACABgjAOQgiAMAAABQABAAggAZQggAZACAAQAAACgaAgIgaAiQkSF4g+AzQgpAjhsAIQgbACgZAAQg5AAgngLg");
	mask_1.setTransform(274.9,122.1);

	// gradient
	this.instance_1 = new lib.gradient();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.4,99.9,3.402,1.998,-20.8,0,0,37.1,83.1);
	this.instance_1.alpha = 0.691;
	this.instance_1.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:520.3},79).wait(1));

	// character
	this.instance_2 = new lib.character();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-28.7,26.9,1.497,1.497,0,136.9,-43.1,399.9,125);
	this.instance_2.alpha = 0.25;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2.cache(5,-2,842,254);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:781.3},79).wait(1));

	// character
	this.instance_3 = new lib.character();
	this.instance_3.parent = this;
	this.instance_3.setTransform(245.9,132,1,1,0,0,0,251.5,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,0,846,250);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button_label
	this.instance = new lib.button_label();
	this.instance.parent = this;
	this.instance.setTransform(69,15.1,1,1,0,0,0,48.9,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button_hitbox
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E8BB47").ss(1,1,1).p("ArwCiQADAFAEAGIWNAAIAEgDQADgBAAgBIBGkjIABgHQAAgDABgBIACgVIAAgCIgHgNI1zgCQgLACgKACQgNAJgHAJIhFEjIgBARg");
	this.shape.setTransform(75.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D8B747","#C78E1F"],[0,1],-7.1,-0.1,0,-7.1,-0.1,49.3).s().p("ArpCtIgHgLIgEgEIABgRIBFkjQAHgJANgJIAVgEIVzACIAHANIAAACIgCAVIgBAEIgBAHIhGEjIgDACIgEADg");
	this.shape_1.setTransform(75.7,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(-1,-1,153.4,36.6), null);


(lib.logo_wing_blur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.logo_wing_right();
	this.instance.parent = this;
	this.instance.setTransform(64.5,114,1,1,0,0,0,238.2,123);
	this.instance.filters = [new cjs.BlurFilter(16, 16, 1)];
	this.instance.cache(182,7,113,232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_wing_blur, new cjs.Rectangle(1.6,-8,130,248), null);


(lib.logo_overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(104).call(this.frame_104).wait(1));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(141,121.6);

	// linear
	this.instance = new lib.linear();
	this.instance.parent = this;
	this.instance.setTransform(-55.9,42.8,2.263,2.072,41.8,0,0,37.1,83);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.84,scaleY:2.07,x:51.3,y:93},11).to({regX:37,scaleX:1.05,scaleY:2.07,x:256,y:188.6},21).wait(73));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AFRNGQgEgjAjgYIHslMQATgCgChOIAAgiQgFgoAjgaIFpjnIAWgYIADgFIAIgXIATiAQABgKAIgFQAFgDADAAIABAAQAHAAAAARIADC0QADAagIARIAAACQg9COgCADIgBACQgIAMgFACIqBGqIAAA8QAAAOgMAIIjkCZIAABRQAAATgRACIgGABQgJAEAAAOIAABGQAAAogQAIgAlgRFIAAhGQAAgOgGgEIgJgBQgLgBgEgKIgCgKIAAhRIjkiZQgMgIAAgOIAAg8IqBmqQgFgCgHgMIgCgCQgDgDg7iOIAAgCQgJgLACggIAEi0QAAgFABgDQACgJAFAAIABAAIAHADQAIAFABAKIATCAIAIAXIADAFIAXAYIFoDnQAjAagEAoIAAAiQgDBOATACIHsFMQAjAYgFAjIAAEvQgPgIAAgogALeOBQgIgFAAgLIAAjCQAAgeAYgRIIyl6QALgIALgRIA8iJQAKgRAGgKIAHgFQADgDAEAAQAGAAAAALIAAACIgDAWIg9D/QgJAngSANIgBABIg6AlQgWALgFAQQgCAIACAFIAAAvQAAAcgYASInfE7QgHAFgEAAQgDAAgCgBgArtN9Infk7QgYgSAAgcIAAgvQACgFgCgIQgFgQgWgLIg5glIgCgBQgSgNgJgnIg9j/IgDgWIAAgCQAAgLAGAAQAEAAADADIAHAFQAHAKAJARIA9CJQAKARALAIIIyF6QAYARAAAeIAADCQAAALgIAFQgCABgDAAQgEAAgHgFgAOSBXQAFgaAUgOIEei2IASgTIABgFQAGgIACgKIAOhmQACgJAGgEIAFgBIABAAQAHAAgCAMIAECRQABAWgGANIgCAAIgvBzIgMAMIk1DOgAzGAaIgMgMIgxhzQgGgNABgWIACiRIACgGQABgGAEAAIAGABQAGAEACAJIAOBmIAJAXIASATIEeC2QAUAOAFAaIAACRgAOShaQADgWATgNID4ihIAQgOIACgFIAFgQIANhaQABgHAHgDIAEgBQAGAAAAAKIADB+QABANgFARIgCACIgqBkIgBABQgDAIgGABIkNCygAyeiQQgGgBgDgIIgBgBIgqhkIgCgCQgFgRABgNIADh+QAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAAAQACgHADABIAEABQAHADABAHIANBaIAFAQIACAFIAQAOID4ChQARALAFAYIAAB8gAOSj7QACgSARgOIDaiLIAOgPIABgDIAFgPIAMhNQACgHAEgCIAEgCQAHAAAAAJIABBwQACATgHAGIAAACIglBYIgCABQgDAGgEABIjsCegAx9krQgEgBgDgGIgCgBIglhYIAAgCQgGgGABgTIABhwIACgFQACgEADAAIAEACQAEACACAHIAMBNIAFAPIABADIAOAPIDaCLQARAOACASIAABugAOQmJQADgQAPgLIC9h5IAMgMIABgDIAFgNIAKhEQABgFADgEIAFgBQAFAAgBAJIACBhQABANgEAJIAAABIggBNIgCABIgGAIIjPCHgAxemwIgGgIIgCgBIgghNIAAgBQgEgJABgNIAChhIAAgFQABgEADAAIAFABQACAEACAFIAKBEIAFANIABADIAMAMIC9B5QAQAMAAAPIAABggAOSoNQACgPANgIICmhsIAKgKIACgEQADgDAAgHIAJg7QABgGADgBIAEgCIABAAQAFAAgCAIIABBUQACAPgFAEIAAACIgcBDIgBACIgFAGIi1B4gAxGowQgFgCAAgEIgBgCIgdhDIgBgCQgDgFAAgOIADhUIAAgEQAAgEADAAIAFACQADABABAGIAJA7IADAKIACAEIAKAKICmBsQANAIACAPIAABVgAOSqGQADgNAIgHICTheIAJgJIABgDQACgDAAgGIAIg0QABgFADgBIAEgCQAEAAgCAIIACBJQABAMgDAGIgBAAIgYA7IgBAAIgEAHIieBngAwvqkQgEgCAAgFIgBAAIgYg7IgBAAQgDgGABgMIAChJIAAgDQAAgFACAAIAEACQADABABAFIAHA0IADAJIACADIAIAJICRBeQALAFACAPIAABJgAOTrxQADgKAHgGIB5hNIAGgIIACgBIADgIIAGgrIAFgGQADAAABAEIABA+IgDAOIgVAyIgEAEIiCBWgAwUsKIgEgEIgVgyIgDgOIABg+IAEgEIAFAGIAGArIADAIIACABIAGAIIB5BNQAHAGADAKIAAA9gAOWtHQAAgGAHgGIBag5IAEgGIACgBIABgGIAFgfIAEgEIABADIACAsIgCAMIgOAkIgCAAIgDAEIhfBAgAv0tZIgDgEIgCAAIgOgkIgCgMIAAgsIADgDIAEAEIAFAfIABAGIACABIAFAGIBZA5QAHAGAAAGIAAAugAOYtuIAChUIgEgSIg7iMQgDgIABgFQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIABgCQAEAAAFAHIBhCZQANAPAAANIAAAkIgDAEIg2AkIgBABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBgAuZtsIg2gkIgDgEIAAgkQAAgNANgPIBhiZIAIgHIACACQAHAGgHAMIg7CMIgGAYIAEAfIAAAvQAAABAAABQAAAAAAABQAAAAAAAAQAAAAgBAAIgBgBg");
	mask_1.setTransform(142.2,113.4);

	// linear
	this.instance_1 = new lib.linear();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.5,269,1,2.072,90,0,0,37,83);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-39.2},32).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.9,11.8,59.1,215);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_101 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(101).call(this.frame_101).wait(1));

	// logo_overlay
	this.overlayMC = new lib.logo_overlay();
	this.overlayMC.parent = this;
	this.overlayMC.setTransform(150.1,125.1,1,1,0,0,0,142.2,115.3);
	this.overlayMC.alpha = 0.301;
	this.overlayMC.compositeOperation = "lighter";
	this.overlayMC._off = true;

	this.timeline.addTween(cjs.Tween.get(this.overlayMC).wait(15).to({_off:false},0).wait(87));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("AiILkIAAgyIgKgyIgjhGIgKzcIBBiRID5gKIBFC5IAASqIgdAyIgKCHIiaBfg");
	var mask_graphics_11 = new cjs.Graphics().p("AmRKXIhFjIIAAzTICziRIIogKIDSCqIg3S5IgGA8IAACDImfEcg");
	var mask_graphics_12 = new cjs.Graphics().p("AhESQIAAmjIoilQIAA2RIDqiRILQgKIETCqIgQV8IotFeIAAGbg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai3S6IAAnzIAAAAIoclVIAA2QIETiRINRgKIFDCqIgTV8IosFaIADAAIAAHzg");
	var mask_graphics_14 = new cjs.Graphics().p("AjwTqIAApMIAAAAIoylbIAA2RIExiRIOugKIFmCqIgVV8IpYFhIArAAIAAJMg");
	var mask_graphics_15 = new cjs.Graphics().p("AjwTqIAApMIAAAAIoylbIAA2RIExiRIOugKIFmCqIgVV8IpYFhIArAAIAAJMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:149.8,y:92.6}).wait(1).to({graphics:mask_graphics_11,x:150.8,y:102.3}).wait(1).to({graphics:mask_graphics_12,x:150.9,y:126.3}).wait(1).to({graphics:mask_graphics_13,x:150.9,y:130.6}).wait(1).to({graphics:mask_graphics_14,x:150,y:135.3}).wait(1).to({graphics:mask_graphics_15,x:150,y:135.3}).wait(87));

	// logo_over
	this.instance = new lib.logo_over();
	this.instance.parent = this;
	this.instance.setTransform(150,145,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:125,alpha:1},7,cjs.Ease.get(1)).wait(85));

	// logo_100
	this.instance_1 = new lib.logo_one_hundred();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,145,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({y:125,alpha:1},7,cjs.Ease.get(1)).wait(84));

	// logo_game_of_the_year
	this.instance_2 = new lib.logo_game_of_the_year();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,145,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({y:125,alpha:1},7,cjs.Ease.get(1)).wait(83));

	// logo_awards
	this.instance_3 = new lib.logo_awards();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,145,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({y:125,alpha:1},7,cjs.Ease.get(1)).wait(81));

	// logo_star
	this.instance_4 = new lib.logo_star();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.7,218.1,0.05,0.05,0,0,0,151.1,218.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(1).to({regX:149.8,regY:217.2,scaleX:0.29,scaleY:0.29,rotation:90.7,x:150.9,y:217.7},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:169.2,x:151.4,y:218.4},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:229.4,x:150.8,y:219},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:272.8,x:150},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:303.4,x:149.5,y:218.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:324.8,x:149.3,y:218.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:339.6,y:217.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:349.5,y:217.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:355.7,x:149.4,y:217.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:359,y:217.2},0).wait(1).to({regX:150.7,regY:218.1,scaleX:1,scaleY:1,rotation:360,x:150.7,y:218.1},0).wait(79));

	// logo_wing_right
	this.instance_5 = new lib.logo_wing_right();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-249.4,116,1,1,0,0,0,58,116);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:238.3,regY:123,x:-68.5,y:123,alpha:0.002},0).wait(1).to({x:-66.6,alpha:0.008},0).wait(1).to({x:-63,alpha:0.02},0).wait(1).to({x:-57,alpha:0.039},0).wait(1).to({x:-47.7,alpha:0.07},0).wait(1).to({x:-33.1,alpha:0.117},0).wait(1).to({x:-9.2,alpha:0.195},0).wait(1).to({x:36.1,alpha:0.342},0).wait(1).to({x:114.1,alpha:0.596},0).wait(1).to({x:165.7,alpha:0.764},0).wait(1).to({x:193.1,alpha:0.853},0).wait(1).to({x:209.8,alpha:0.907},0).wait(1).to({x:220.8,alpha:0.943},0).wait(1).to({x:228.2,alpha:0.967},0).wait(1).to({x:233.2,alpha:0.983},0).wait(1).to({x:236.2,alpha:0.993},0).wait(1).to({x:237.9,alpha:0.998},0).wait(1).to({regX:58,regY:116,x:58,y:116,alpha:1},0).wait(84));

	// logo_wing_blur
	this.instance_6 = new lib.logo_wing_left();
	this.instance_6.parent = this;
	this.instance_6.setTransform(367.5,116,1,1,0,0,0,58,116);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:61.7,regY:123,x:370.6,y:123,alpha:0.002},0).wait(1).to({x:368.6,alpha:0.008},0).wait(1).to({x:365,alpha:0.02},0).wait(1).to({x:359,alpha:0.039},0).wait(1).to({x:349.6,alpha:0.07},0).wait(1).to({x:335,alpha:0.117},0).wait(1).to({x:310.8,alpha:0.195},0).wait(1).to({x:265.3,alpha:0.342},0).wait(1).to({x:186.7,alpha:0.596},0).wait(1).to({x:134.8,alpha:0.764},0).wait(1).to({x:107.3,alpha:0.853},0).wait(1).to({x:90.4,alpha:0.907},0).wait(1).to({x:79.3,alpha:0.943},0).wait(1).to({x:71.9,alpha:0.967},0).wait(1).to({x:66.9,alpha:0.983},0).wait(1).to({x:63.8,alpha:0.993},0).wait(1).to({x:62.2,alpha:0.998},0).wait(1).to({regX:58,regY:116,x:58,y:116,alpha:1},0).wait(84));

	// logo_wing_blur
	this.instance_7 = new lib.logo_wing_blur();
	this.instance_7.parent = this;
	this.instance_7.setTransform(686.6,132,1,1,0,0,180,64.5,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:64.6,x:685.3,alpha:0.999},0).wait(1).to({x:681.4,y:131.9,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:674.1,alpha:0.986},0).wait(1).to({scaleX:1,scaleY:1,x:662,alpha:0.972},0).wait(1).to({scaleX:1,scaleY:1,x:643.2,y:132,alpha:0.951},0).wait(1).to({scaleX:1,scaleY:1,x:613.8,y:131.9,alpha:0.918},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:565.3,alpha:0.864},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:473.8,alpha:0.761},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:316,alpha:0.583},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:211.7,alpha:0.466},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:156.4,alpha:0.404},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:122.6,alpha:0.366},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:100.3,alpha:0.341},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:85.3,alpha:0.324},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:75.4,y:132,alpha:0.313},0).wait(1).to({x:69.2,alpha:0.306},0).wait(1).to({x:65.9,y:131.9,alpha:0.302},0).wait(1).to({regX:64.4,regY:114.2,x:65,y:132,alpha:0.301},0).to({alpha:0},4,cjs.Ease.get(1)).wait(80));

	// logo_wing_blur
	this.instance_8 = new lib.logo_wing_blur();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-377.8,132,1,1,0,0,0,64.5,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:64.6,x:-376.5,alpha:0.999},0).wait(1).to({x:-372.7,y:131.9,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:-365.4,alpha:0.986},0).wait(1).to({scaleX:1,scaleY:1,x:-353.5,alpha:0.972},0).wait(1).to({scaleX:1,scaleY:1,x:-334.9,y:132,alpha:0.951},0).wait(1).to({scaleX:1,scaleY:1,x:-305.9,y:131.9,alpha:0.918},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-258,alpha:0.864},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-167.7,alpha:0.761},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-11.9,alpha:0.583},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:91.1,alpha:0.466},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:145.7,alpha:0.404},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:179.1,alpha:0.366},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:201.1,alpha:0.341},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:215.9,alpha:0.324},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:225.7,y:132,alpha:0.313},0).wait(1).to({x:231.8,alpha:0.306},0).wait(1).to({x:235.1,y:131.9,alpha:0.302},0).wait(1).to({regX:64.5,regY:114.2,x:235.9,y:132,alpha:0.301},0).to({alpha:0},4,cjs.Ease.get(1)).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440.7,9,1194.5,250);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_over:1,_out:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// button
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(64.6,15,1,1,0,0,0,68.7,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:75.7,scaleX:1,scaleY:1,x:71.6,y:15.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:71.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:71.4,y:15},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:71.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:70.9,y:15.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:70.8,y:15},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({regX:68.7,regY:17.2,scaleX:1.15,scaleY:1.15,x:62.7},0).wait(1).to({regX:75.7,regY:17.3,scaleX:1.15,scaleY:1.15,x:70.8,y:15.1},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:71},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:71.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:71.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:71.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:71.6},0).wait(1).to({scaleX:1,scaleY:1,x:71.7},0).wait(1).to({regX:68.7,scaleX:1,scaleY:1,x:64.6,y:15},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-2.8,152.4,35.6);


// stage content:
(lib.blizzard_overwatch_GOTY_970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		stage.enableMouseOver();
		
		this.EXIT.addEventListener('mouseover', on_mouseover.bind(this));
		this.EXIT.addEventListener('mouseout', on_mouseout.bind(this));
		this.EXIT.addEventListener('click', on_click.bind(this));
		
		function on_mouseover(){
			if(this.CTA){
				this.CTA.gotoAndPlay('_over');
			}
		}
		
		function on_mouseout(){
			if(this.CTA){
				this.CTA.gotoAndPlay('_out');
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
	this.frame_261 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(257).call(this.frame_261).wait(17));

	// EXIT
	this.EXIT = new lib.EXIT();
	this.EXIT.parent = this;
	this.EXIT.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.EXIT, 0, 1, 2, false, new lib.EXIT(), 3);

	this.timeline.addTween(cjs.Tween.get(this.EXIT).to({_off:true},262).wait(16));

	// character_tracer
	this.instance = new lib.character();
	this.instance.parent = this;
	this.instance.setTransform(-160.5,300,1,1,0,0,0,689.5,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93).to({_off:false},0).wait(1).to({regX:422.6,regY:125,x:-393.6,y:125},0).wait(1).to({x:-298.6},0).wait(1).to({x:-132.3},0).wait(1).to({x:86},0).wait(1).to({x:296.2},0).wait(1).to({x:448.6},0).wait(1).to({x:536},0).wait(1).to({regX:689.5,regY:300,x:836.8,y:300},0).to({x:956.8},55).wait(1).to({regX:422.6,regY:125,x:709.1,y:125},0).wait(1).to({x:761.5},0).wait(1).to({x:853.3},0).wait(1).to({x:981},0).wait(1).to({x:1120.9},0).wait(1).to({x:1240.8},0).wait(1).to({x:1324.6},0).wait(1).to({x:1373.1},0).wait(1).to({regX:689.5,regY:300,x:1659.5,y:300},0).to({_off:true},1).wait(112));

	// character_tracer
	this.instance_1 = new lib.character_tracer_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-464,166,1,1,0,0,0,386,166);
	this.instance_1.alpha = 0.148;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(1).to({regX:417,regY:125,x:-400.2,y:125},0).wait(1).to({x:-307.9},0).wait(1).to({x:-146.3},0).wait(1).to({x:65.9},0).wait(1).to({x:270},0).wait(1).to({x:418.1},0).wait(1).to({x:503},0).wait(1).to({regX:386,regY:166,x:505,y:166},0).to({_off:true},1).wait(56).to({_off:false,x:678},0).wait(1).to({regX:417,regY:125,x:727.5,y:125},0).wait(1).to({x:778.1},0).wait(1).to({x:866.7},0).wait(1).to({x:989.9},0).wait(1).to({x:1124.9},0).wait(1).to({x:1240.5},0).wait(1).to({x:1321.3},0).wait(1).to({x:1368.1},0).wait(1).to({regX:386,regY:166,x:1356,y:166},0).to({_off:true},1).wait(111));

	// character_tracer
	this.instance_2 = new lib.character_tracer_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-464,166,1,1,0,0,0,386,166);
	this.instance_2.alpha = 0.148;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).wait(1).to({regX:417,regY:125,x:-403.1,y:125},0).wait(1).to({x:-319},0).wait(1).to({x:-171.7},0).wait(1).to({x:21.6},0).wait(1).to({x:207.6},0).wait(1).to({x:342.6},0).wait(1).to({x:419.9},0).wait(1).to({regX:386,regY:166,x:419,y:166},0).to({_off:true},1).wait(58).to({_off:false,x:729},0).wait(1).to({regX:417,regY:125,x:777.1,y:125},0).wait(1).to({x:823.9},0).wait(1).to({x:905.8},0).wait(1).to({x:1019.8},0).wait(1).to({x:1144.6},0).wait(1).to({x:1251.5},0).wait(1).to({x:1326.3},0).wait(1).to({x:1369.6},0).wait(1).to({regX:386,regY:166,x:1356,y:166},0).to({_off:true},1).wait(110));

	// ESRB
	this.instance_3 = new lib.esrb_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(925.5,198.5,1,1,0,0,0,36.5,49.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(183).to({_off:false},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.092},0).wait(1).to({alpha:0.187},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:1},0).wait(82));

	// text_legal
	this.instance_4 = new lib.text_legal();
	this.instance_4.parent = this;
	this.instance_4.setTransform(827.1,251.6,0.912,0.9,0,0,0,52.5,9.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(175).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.91,x:779.1,y:243.3,alpha:0.004},0).wait(1).to({scaleX:0.91,scaleY:0.9,alpha:0.017},0).wait(1).to({scaleX:0.92,scaleY:0.9,x:778.9,alpha:0.043},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:778.7,alpha:0.092},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:778.2,y:243.2,alpha:0.187},0).wait(1).to({scaleX:0.95,scaleY:0.94,x:777,y:243,alpha:0.414},0).wait(1).to({scaleX:0.99,scaleY:0.97,x:775.3,y:242.7,alpha:0.724},0).wait(1).to({scaleX:1,scaleY:0.99,x:774.6,y:242.6,alpha:0.858},0).wait(1).to({scaleX:1.01,scaleY:0.99,x:774.2,y:242.5,alpha:0.926},0).wait(1).to({scaleX:1.01,scaleY:1,x:774,alpha:0.964},0).wait(1).to({scaleX:1.01,scaleY:1,x:773.9,alpha:0.986},0).wait(1).to({scaleX:1.01,scaleY:1,alpha:0.997},0).wait(1).to({regX:52.5,regY:9.1,scaleX:1.01,x:827.1,y:251.6,alpha:1},0).to({_off:true},74).wait(16));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_188 = new cjs.Graphics().p("ArpCtIgHgLIgEgEIABgRIBFkjQAHgJANgJIAVgEIVzACIAHANIAAADIgCAUIgBAEIgBAHIhGEjIgDACIgEADg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(188).to({graphics:mask_graphics_188,x:777.4,y:210.9}).wait(19).to({graphics:null,x:0,y:0}).wait(71));

	// gradient
	this.instance_5 = new lib.gradient();
	this.instance_5.parent = this;
	this.instance_5.setTransform(665.1,177,1.098,0.9,16.4,0,0,37.1,83.1);
	this.instance_5.alpha = 0.691;
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(188).to({_off:false},0).to({x:915.1},18,cjs.Ease.get(1)).to({_off:true},1).wait(71));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.parent = this;
	this.CTA.setTransform(1050.7,211.1,1,1,0,0,0,64.8,15.2);
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(175).to({_off:false},0).wait(1).to({regX:70.7,regY:15,x:1055.5,y:210.9},0).wait(1).to({x:1051.9},0).wait(1).to({x:1044.4},0).wait(1).to({x:1030.7},0).wait(1).to({x:1004.1},0).wait(1).to({x:940.7},0).wait(1).to({x:853.8},0).wait(1).to({x:816.4},0).wait(1).to({x:797.4},0).wait(1).to({x:786.6},0).wait(1).to({x:780.5},0).wait(1).to({x:777.4},0).wait(1).to({regX:64.8,regY:15.2,x:770.7,y:211.1},0).to({_off:true},74).wait(16));

	// overwatch
	this.instance_6 = new lib.overwatch_logotype();
	this.instance_6.parent = this;
	this.instance_6.setTransform(789.7,28.4,0.833,0.83,0,0,0,141.5,21.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(164).to({_off:false},0).wait(1).to({regX:140.5,regY:20.5,scaleX:0.84,scaleY:0.84,x:788.8,y:27.2,alpha:0.106},0).wait(1).to({scaleX:0.85,scaleY:0.85,alpha:0.212},0).wait(1).to({scaleX:0.87,scaleY:0.86,alpha:0.317},0).wait(1).to({scaleX:0.88,scaleY:0.87,alpha:0.418},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:27.1,alpha:0.513},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:27.2,alpha:0.603},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:27.1,alpha:0.684},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:788.7,alpha:0.758},0).wait(1).to({scaleX:0.92,scaleY:0.91,alpha:0.822},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:788.8,alpha:0.877},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:788.7,alpha:0.921},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.956},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.981},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.995},0).wait(1).to({regX:141.5,regY:21.9,scaleY:0.93,x:789.7,y:28.4,alpha:1},0).to({_off:true},83).wait(16));

	// text_game_of_the_year_edition
	this.instance_7 = new lib.text_game_of_the_year_edition();
	this.instance_7.parent = this;
	this.instance_7.setTransform(749.6,52.9,0.9,0.9,0,0,0,70.6,4.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(167).to({_off:false},0).wait(1).to({regX:108.4,regY:7.5,scaleX:0.91,scaleY:0.91,x:784,y:55.2,alpha:0.114},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:784.4,alpha:0.227},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:784.9,y:55.3,alpha:0.339},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:785.3,alpha:0.445},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:785.7,alpha:0.546},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:786,y:55.4,alpha:0.639},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:786.3,alpha:0.722},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:786.6,alpha:0.796},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:786.8,alpha:0.858},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:787,alpha:0.91},0).wait(1).to({scaleX:1,scaleY:1,x:787.2,alpha:0.949},0).wait(1).to({scaleX:1,scaleY:1,x:787.3,y:55.5,alpha:0.978},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.994},0).wait(1).to({regX:70.5,regY:4.9,scaleX:1,scaleY:1,x:749.5,y:52.9,alpha:1},0).to({_off:true},81).wait(16));

	// packaging
	this.instance_8 = new lib.packaging_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1056,139,1,1,0,0,0,79,70);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(160).to({_off:false},0).wait(1).to({regX:67,regY:90.5,x:1042.9,y:159.5},0).wait(1).to({x:1038.8},0).wait(1).to({x:1030.1},0).wait(1).to({x:1013.4},0).wait(1).to({x:977.1},0).wait(1).to({x:887.9},0).wait(1).to({x:830.7},0).wait(1).to({x:806.3},0).wait(1).to({x:793.5},0).wait(1).to({x:786.4},0).wait(1).to({x:783},0).wait(1).to({regX:79,regY:70,x:794,y:139},0).to({_off:true},90).wait(16));

	// endframe_tracer
	this.instance_9 = new lib.endframe_tracer();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-384.5,45,1,1,0,0,0,125.5,45);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(170).to({_off:false},0).wait(1).to({regX:251.5,regY:125,x:-240.1,y:125},0).wait(1).to({x:-189.9},0).wait(1).to({x:-102},0).wait(1).to({x:20.4},0).wait(1).to({x:154.4},0).wait(1).to({x:269.1},0).wait(1).to({x:349.3},0).wait(1).to({x:395.8},0).wait(1).to({regX:125.5,regY:45,x:288.5,y:45},0).to({_off:true},91).wait(8));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_170 = new cjs.Graphics().p("EhgbA0hMAAAhpBMCKdAAAMA2aBpBg");
	var mask_1_graphics_171 = new cjs.Graphics().p("EhgbA0hMAAAhpBMCKeAAAMA2YBpBg");
	var mask_1_graphics_172 = new cjs.Graphics().p("EhgaA0hMAAAhpBMCKdAAAMA2YBpBg");
	var mask_1_graphics_173 = new cjs.Graphics().p("EhgbA0hMAAAhpBMCKdAAAMA2aBpBg");
	var mask_1_graphics_174 = new cjs.Graphics().p("EhgbA0hMAAAhpBMCKdAAAMA2aBpBg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EhgbA0hMAAAhpBMCKeAAAMA2ZBpBg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EhgaA0hMAAAhpBMCKcAAAMA2ZBpBg");
	var mask_1_graphics_177 = new cjs.Graphics().p("EhgbA0hMAAAhpBMCKeAAAMA2ZBpBg");
	var mask_1_graphics_178 = new cjs.Graphics().p("EhgbA0hMAAAhpBMCKeAAAMA2YBpBg");
	var mask_1_graphics_179 = new cjs.Graphics().p("EhgaA0hMAAAhpBMCKdAAAMA2YBpBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(170).to({graphics:mask_1_graphics_170,x:-602.8,y:336}).wait(1).to({graphics:mask_1_graphics_171,x:-584.5,y:336}).wait(1).to({graphics:mask_1_graphics_172,x:-534.6,y:336}).wait(1).to({graphics:mask_1_graphics_173,x:-447.1,y:336}).wait(1).to({graphics:mask_1_graphics_174,x:-325.3,y:336}).wait(1).to({graphics:mask_1_graphics_175,x:-191.9,y:336}).wait(1).to({graphics:mask_1_graphics_176,x:-77.6,y:336}).wait(1).to({graphics:mask_1_graphics_177,x:2.3,y:336}).wait(1).to({graphics:mask_1_graphics_178,x:48.5,y:336}).wait(1).to({graphics:mask_1_graphics_179,x:67.2,y:336}).wait(99));

	// text_limited_time
	this.instance_10 = new lib.text_limited_time();
	this.instance_10.parent = this;
	this.instance_10.setTransform(269.7,65.6,1,1,0,0,0,140.5,29);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(170).to({_off:false},0).to({_off:true},97).wait(11));

	// text_20_off
	this.instance_11 = new lib.text_20_off();
	this.instance_11.parent = this;
	this.instance_11.setTransform(240.1,233.9,1,1,0,0,0,102.2,99.4);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(170).to({_off:false},0).to({_off:true},97).wait(11));

	// text_dates
	this.instance_12 = new lib.text_dates();
	this.instance_12.parent = this;
	this.instance_12.setTransform(226,265.3,1,1,0,0,0,95.8,37.6);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(170).to({_off:false},0).to({_off:true},97).wait(11));

	// gold
	this.instance_13 = new lib.gold();
	this.instance_13.parent = this;
	this.instance_13.setTransform(250,125,5,2.5,0,0,0,50,50);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(170).to({_off:false},0).to({_off:true},99).wait(9));

	// MASK (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_93 = new cjs.Graphics().p("EgqCA0hMg2YhpBMDA1AAAMAAABpBg");
	var mask_2_graphics_94 = new cjs.Graphics().p("EgqCA0hMg2ZhpBMDA3AAAMAAABpBg");
	var mask_2_graphics_95 = new cjs.Graphics().p("EgqCA0hMg2ZhpBMDA3AAAMAAABpBg");
	var mask_2_graphics_96 = new cjs.Graphics().p("EgqBA0hMg2ahpBMDA3AAAMAAABpBg");
	var mask_2_graphics_97 = new cjs.Graphics().p("EgqBA0hMg2ahpBMDA3AAAMAAABpBg");
	var mask_2_graphics_98 = new cjs.Graphics().p("EgikA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_99 = new cjs.Graphics().p("EgctA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_100 = new cjs.Graphics().p("EgZXA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_101 = new cjs.Graphics().p("EgYDA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_102 = new cjs.Graphics().p("EgX+A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_103 = new cjs.Graphics().p("EgX4A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_104 = new cjs.Graphics().p("EgXyA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_105 = new cjs.Graphics().p("EgXtA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_106 = new cjs.Graphics().p("EgXnA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_107 = new cjs.Graphics().p("EgXhA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_108 = new cjs.Graphics().p("EgXcA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_109 = new cjs.Graphics().p("EgXWA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_110 = new cjs.Graphics().p("EgXRA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_111 = new cjs.Graphics().p("EgXLA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_112 = new cjs.Graphics().p("EgXFA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_113 = new cjs.Graphics().p("EgXAA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_114 = new cjs.Graphics().p("EgW6A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_115 = new cjs.Graphics().p("EgW0A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_116 = new cjs.Graphics().p("EgWvA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_117 = new cjs.Graphics().p("EgWpA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_118 = new cjs.Graphics().p("EgWjA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_119 = new cjs.Graphics().p("EgWeA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_120 = new cjs.Graphics().p("EgWYA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_121 = new cjs.Graphics().p("EgWTA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_122 = new cjs.Graphics().p("EgWNA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_123 = new cjs.Graphics().p("EgWHA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_124 = new cjs.Graphics().p("EgWCA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_125 = new cjs.Graphics().p("EgV8A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_126 = new cjs.Graphics().p("EgV2A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_127 = new cjs.Graphics().p("EgVxA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_128 = new cjs.Graphics().p("EgVrA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_129 = new cjs.Graphics().p("EgVlA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_130 = new cjs.Graphics().p("EgVgA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_131 = new cjs.Graphics().p("EgVaA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_132 = new cjs.Graphics().p("EgVVA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_133 = new cjs.Graphics().p("EgVPA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_134 = new cjs.Graphics().p("EgVJA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_135 = new cjs.Graphics().p("EgVEA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_136 = new cjs.Graphics().p("EgU+A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_137 = new cjs.Graphics().p("EgU4A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_138 = new cjs.Graphics().p("EgUzA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_139 = new cjs.Graphics().p("EgUtA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_140 = new cjs.Graphics().p("EgUnA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_141 = new cjs.Graphics().p("EgUiA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_142 = new cjs.Graphics().p("EgUcA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_143 = new cjs.Graphics().p("EgUXA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_144 = new cjs.Graphics().p("EgURA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_145 = new cjs.Graphics().p("EgULA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_146 = new cjs.Graphics().p("EgUGA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_147 = new cjs.Graphics().p("EgUAA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_148 = new cjs.Graphics().p("EgT6A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_149 = new cjs.Graphics().p("EgT1A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_150 = new cjs.Graphics().p("EgTvA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_151 = new cjs.Graphics().p("EgTpA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_152 = new cjs.Graphics().p("EgTkA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_153 = new cjs.Graphics().p("EgTeA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_154 = new cjs.Graphics().p("EgTZA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_155 = new cjs.Graphics().p("EgTTA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_156 = new cjs.Graphics().p("EgTNA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_157 = new cjs.Graphics().p("EgSIA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_158 = new cjs.Graphics().p("EgPJA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_159 = new cjs.Graphics().p("EgJ8A0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_160 = new cjs.Graphics().p("EgCtA0hMg2ZhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_161 = new cjs.Graphics().p("EAFOA0hMg2YhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_162 = new cjs.Graphics().p("EAMBA0hMg2YhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_163 = new cjs.Graphics().p("EAQxA0hMg2YhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_164 = new cjs.Graphics().p("EAThA0hMg2YhpBMDA2AAAMAAABpBg");
	var mask_2_graphics_165 = new cjs.Graphics().p("EAUoA0hMg2YhpBMDA2AAAMAAABpBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(93).to({graphics:mask_2_graphics_93,x:357.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_94,x:373.8,y:278.1}).wait(1).to({graphics:mask_2_graphics_95,x:420.5,y:278.1}).wait(1).to({graphics:mask_2_graphics_96,x:502.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_97,x:609.4,y:278.1}).wait(1).to({graphics:mask_2_graphics_98,x:664.9,y:278.1}).wait(1).to({graphics:mask_2_graphics_99,x:702.4,y:278.1}).wait(1).to({graphics:mask_2_graphics_100,x:723.8,y:278.1}).wait(1).to({graphics:mask_2_graphics_101,x:732.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_102,x:732.7,y:278.1}).wait(1).to({graphics:mask_2_graphics_103,x:733.3,y:278.1}).wait(1).to({graphics:mask_2_graphics_104,x:733.9,y:278.1}).wait(1).to({graphics:mask_2_graphics_105,x:734.4,y:278.1}).wait(1).to({graphics:mask_2_graphics_106,x:735,y:278.1}).wait(1).to({graphics:mask_2_graphics_107,x:735.6,y:278.1}).wait(1).to({graphics:mask_2_graphics_108,x:736.1,y:278.1}).wait(1).to({graphics:mask_2_graphics_109,x:736.7,y:278.1}).wait(1).to({graphics:mask_2_graphics_110,x:737.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_111,x:737.8,y:278.1}).wait(1).to({graphics:mask_2_graphics_112,x:738.4,y:278.1}).wait(1).to({graphics:mask_2_graphics_113,x:738.9,y:278.1}).wait(1).to({graphics:mask_2_graphics_114,x:739.5,y:278.1}).wait(1).to({graphics:mask_2_graphics_115,x:740.1,y:278.1}).wait(1).to({graphics:mask_2_graphics_116,x:740.6,y:278.1}).wait(1).to({graphics:mask_2_graphics_117,x:741.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_118,x:741.8,y:278.1}).wait(1).to({graphics:mask_2_graphics_119,x:742.3,y:278.1}).wait(1).to({graphics:mask_2_graphics_120,x:742.9,y:278.1}).wait(1).to({graphics:mask_2_graphics_121,x:743.4,y:278.1}).wait(1).to({graphics:mask_2_graphics_122,x:744,y:278.1}).wait(1).to({graphics:mask_2_graphics_123,x:744.6,y:278.1}).wait(1).to({graphics:mask_2_graphics_124,x:745.1,y:278.1}).wait(1).to({graphics:mask_2_graphics_125,x:745.7,y:278.1}).wait(1).to({graphics:mask_2_graphics_126,x:746.3,y:278.1}).wait(1).to({graphics:mask_2_graphics_127,x:746.8,y:278.1}).wait(1).to({graphics:mask_2_graphics_128,x:747.4,y:278.1}).wait(1).to({graphics:mask_2_graphics_129,x:748,y:278.1}).wait(1).to({graphics:mask_2_graphics_130,x:748.5,y:278.1}).wait(1).to({graphics:mask_2_graphics_131,x:749.1,y:278.1}).wait(1).to({graphics:mask_2_graphics_132,x:749.6,y:278.1}).wait(1).to({graphics:mask_2_graphics_133,x:750.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_134,x:750.8,y:278.1}).wait(1).to({graphics:mask_2_graphics_135,x:751.3,y:278.1}).wait(1).to({graphics:mask_2_graphics_136,x:751.9,y:278.1}).wait(1).to({graphics:mask_2_graphics_137,x:752.5,y:278.1}).wait(1).to({graphics:mask_2_graphics_138,x:753,y:278.1}).wait(1).to({graphics:mask_2_graphics_139,x:753.6,y:278.1}).wait(1).to({graphics:mask_2_graphics_140,x:754.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_141,x:754.7,y:278.1}).wait(1).to({graphics:mask_2_graphics_142,x:755.3,y:278.1}).wait(1).to({graphics:mask_2_graphics_143,x:755.8,y:278.1}).wait(1).to({graphics:mask_2_graphics_144,x:756.4,y:278.1}).wait(1).to({graphics:mask_2_graphics_145,x:757,y:278.1}).wait(1).to({graphics:mask_2_graphics_146,x:757.5,y:278.1}).wait(1).to({graphics:mask_2_graphics_147,x:758.1,y:278.1}).wait(1).to({graphics:mask_2_graphics_148,x:758.7,y:278.1}).wait(1).to({graphics:mask_2_graphics_149,x:759.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_150,x:759.8,y:278.1}).wait(1).to({graphics:mask_2_graphics_151,x:760.4,y:278.1}).wait(1).to({graphics:mask_2_graphics_152,x:760.9,y:278.1}).wait(1).to({graphics:mask_2_graphics_153,x:761.5,y:278.1}).wait(1).to({graphics:mask_2_graphics_154,x:762,y:278.1}).wait(1).to({graphics:mask_2_graphics_155,x:762.6,y:278.1}).wait(1).to({graphics:mask_2_graphics_156,x:763.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_157,x:770.1,y:278.1}).wait(1).to({graphics:mask_2_graphics_158,x:789.2,y:278.1}).wait(1).to({graphics:mask_2_graphics_159,x:822.5,y:278.1}).wait(1).to({graphics:mask_2_graphics_160,x:868.8,y:278.1}).wait(1).to({graphics:mask_2_graphics_161,x:919.6,y:278.1}).wait(1).to({graphics:mask_2_graphics_162,x:963.1,y:278.1}).wait(1).to({graphics:mask_2_graphics_163,x:993.5,y:278.1}).wait(1).to({graphics:mask_2_graphics_164,x:1011.1,y:278.1}).wait(1).to({graphics:mask_2_graphics_165,x:1018.2,y:278.1}).wait(1).to({graphics:null,x:0,y:0}).wait(112));

	// logo_container
	this.instance_14 = new lib.logo("synched",0,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(483.1,125.7,1.033,1.033,0,0,0,150.1,124.9);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(40).to({_off:false},0).to({_off:true},120).wait(118));

	// MASK (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_49 = new cjs.Graphics().p("A6PPWIEJwKIoNwPMA3YABjIowTSIN/NTg");
	var mask_3_graphics_50 = new cjs.Graphics().p("A65RPIIwsHIoc2VMAvZAAAIpYXQIPeLMg");
	var mask_3_graphics_51 = new cjs.Graphics().p("An4CqIoc0iMAgfAAAInlVPIKeNNMgmHABVg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_3_graphics_49,x:164.5,y:121.3}).wait(1).to({graphics:mask_3_graphics_50,x:169.3,y:120.3}).wait(1).to({graphics:mask_3_graphics_51,x:149.5,y:124.6}).wait(1).to({graphics:null,x:0,y:0}).wait(226));

	// text_over_30
	this.instance_15 = new lib.text_over_30();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-278,42.2,1,1,0,0,0,137.6,28.2);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({_off:false},0).wait(1).to({regX:204.3,regY:90.1,x:-74.7,y:104.1},0).wait(1).to({x:41.6,y:104},0).wait(1).to({x:138.7},0).wait(1).to({x:217.9},0).wait(1).to({x:281.3},0).wait(1).to({x:331.1},0).wait(1).to({x:369.3},0).wait(1).to({x:397.8},0).wait(1).to({x:418.5},0).wait(1).to({x:432.7},0).wait(1).to({x:441.7},0).wait(1).to({x:446.5},0).wait(1).to({regX:137.7,regY:28.1,x:381.3,y:42.1},0).to({x:441.3},29).to({x:1121.3},3).to({_off:true},1).wait(229));

	// text_million_players
	this.instance_16 = new lib.text_million_players();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1113.8,253.6,1,1,0,0,0,132.8,50.6);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({_off:false},0).wait(1).to({regX:184.8,regY:16.5,x:1010.8,y:219.5},0).wait(1).to({x:878.7},0).wait(1).to({x:768.6},0).wait(1).to({x:678.7},0).wait(1).to({x:606.7},0).wait(1).to({x:550.2},0).wait(1).to({x:506.8},0).wait(1).to({x:474.4},0).wait(1).to({x:450.9},0).wait(1).to({x:434.8},0).wait(1).to({x:424.6},0).wait(1).to({x:419.1},0).wait(1).to({regX:132.8,regY:50.6,x:365.5,y:253.6},0).to({x:425.5},27).to({x:1105.5},3).to({_off:true},1).wait(229));

	// background
	this.instance_17 = new lib.background_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1085,625,2,2,0,0,0,300,250);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:0,regY:0,scaleX:2,scaleY:2,x:485,y:125,alpha:0.049},0).wait(1).to({scaleX:2,scaleY:2,alpha:0.098},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.148},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.198},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.248},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.299},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.351},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.402},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.454},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.507},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.56},0).wait(1).to({scaleX:1.97,scaleY:1.97,alpha:0.614},0).wait(1).to({scaleX:1.97,scaleY:1.97,alpha:0.667},0).wait(1).to({scaleX:1.97,scaleY:1.97,alpha:0.722},0).wait(1).to({scaleX:1.97,scaleY:1.97,alpha:0.777},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.832},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.887},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.943},0).wait(1).to({regX:300,regY:250,scaleX:1.96,scaleY:1.96,x:1071.7,y:613.9,alpha:1},0).to({scaleX:1,scaleY:1,x:785,y:375},186).to({_off:true},57).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);
// library properties:
lib.properties = {
	id: '097D4118D1E74AF9B205A9E910BA34DC',
	width: 970,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/background.jpg?1521605500294", id:"background"},
		{src:"images/character_tracer.jpg?1521605500294", id:"character_tracer"},
		{src:"images/esrb.png?1521605500294", id:"esrb"},
		{src:"images/packaging.png?1521605500294", id:"packaging"},
		{src:"images/tracer_endframe.jpg?1521605500294", id:"tracer_endframe"},
		{src:"images/tracer_masked.png?1521605500294", id:"tracer_masked"}
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
an.compositions['097D4118D1E74AF9B205A9E910BA34DC'] = {
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