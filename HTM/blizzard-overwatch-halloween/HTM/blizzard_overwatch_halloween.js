(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.character_01_torbjorn = function() {
	this.initialize(img.character_01_torbjorn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.character_02_widowmaker = function() {
	this.initialize(img.character_02_widowmaker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.character_03_ana = function() {
	this.initialize(img.character_03_ana);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.character_04_zenyatta = function() {
	this.initialize(img.character_04_zenyatta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.lockup_2017 = function() {
	this.initialize(img.lockup_2017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,41);


(lib.lockup_halloween = function() {
	this.initialize(img.lockup_halloween);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,121);


(lib.lockup_overwatch = function() {
	this.initialize(img.lockup_overwatch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,41);


(lib.lockup_terror = function() {
	this.initialize(img.lockup_terror);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,78);


(lib.overlay = function() {
	this.initialize(img.overlay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text_for_the = function() {
	this.initialize(img.text_for_the);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,81);


(lib.text_has = function() {
	this.initialize(img.text_has);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,99);


(lib.text_the = function() {
	this.initialize(img.text_the);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,97);// helper functions:

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


(lib.text_dates = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH8BoIArinIgSAJIgGgWIAagOQAIgGAHgHIADAAIAQAJIg0DGgAFoBoIAVjPIAbAAIgTClIBBilIAbAAIhXDPgAD+BoQgJABgGgDQgFgCgDgFQgEgEAAgGQAAgIACgIIAjiJQAKgjAhAAIAYAAQAJAAAFABQAGACADAFQADAFAAAGQABAHgDAJIgjCJIgGAQQgEAGgFAEQgGAFgHACQgHADgIgBgAEqhOQgDADgCAGIgkCLQgCAGACACQACADAGAAIAMAAQAFAAAEgDQAEgCACgGIAkiLQACgGgDgDQgCgDgFAAIgNAAQgGAAgDADgACnBoIALgpIgGheIgjCHIgcAAIA2jPIAcAAIAEBkIAahkIAcAAIg2DPgAiEBoQghABAJglIAjiIQAKgjAhAAIAUAAQAIAAAGABQAGACADAFQADAFAAAGQAAAHgCAJIgkCIQgCAJgEAIQgDAGgGAEQgFAFgHACQgHADgIgBgAhchFIgkCKQgDAKAJAAIANAAQAJAAACgKIAkiKQADgJgKAAIgLAAQgKAAgCAJgAjcBoIArinIgSAJIgGgWIAagOQAIgGAHgHIADAAIAQAJIg0DGgAlhBoIAxi5IgbAAIAGgWIBRAAIgGAWIgaAAIgxC5gAm6BoQgIABgGgDQgGgCgDgFQgDgEgBgGQAAgIACgIIAkiJIAGgQQAEgGAGgFQAFgFAHgCQAGgBAJAAIASAAQAIAAAGABQAGACADAFQADAFAAAGQABAHgDAJIgHAdIgcAAIAHgdQACgHgCgCQgDgDgGgBIgFAAQgGABgEADQgDACgCAHIgkCJQgDAMALAAIAHAAQAGAAADgDQAEgDACgGIAFgUIAbAAIgEAUQgDAJgDAHQgEAGgFAEQgFAFgHACQgHADgJgBgAovBoQgIABgGgDQgGgCgDgFQgDgEgBgGQAAgIACgIIAkiJQAKgjAhAAIAYAAQAIAAAGABQAGACADAFQADAFAAAGQAAAHgCAJIgkCJIgGAQQgEAGgFAEQgFAFgHACQgHADgIgBgAoDhOQgDADgBAGIglCLQgBAGACACQACADAFAAIANAAQAFAAAEgDQAEgCABgGIAliLQABgGgCgDQgCgDgGAAIgNAAQgFAAgEADgAAGAOIAGgXIBAAAIgGAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_dates, new cjs.Rectangle(-109.3,-15.1,218.7,33.2), null);


(lib.mask_future = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask_future, new cjs.Rectangle(-675,-675,1350,1350), null);


(lib.mask_fright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask_fright, new cjs.Rectangle(-675,-675,1350,1350), null);


(lib.mask_begun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhpdBpeMAAAjS7MDS7AAAMAAADS7gAzNj2IAAPbICuCfID9lzIAAp/Ig2APIA9haIAAiwgAr5DHIAAGiICvCfID9l0IAAkCIiUguIAAFdIhPByIg2gzIAAlmIEZmhIkZBJIAAgsIC6gxIBfjIImsBxIAAGLICNgkgAkfnxIAAPbICwCfID8lzIAAoJIjGA1IAACyIAzgNIAAFbIhPBzIg2gzIAArqIEfhMIAAivgADlnYIAANjICGB/IC1gwICBi+IAAwLIiTDKIgCNSIiVAoIAAv0gAMKpoIAANTICUCKIAAs5ICbjjIAANBICVCKIAAynIiVAoIibDjIAAi6gAw6J8IAAnAIBYiEIAtgMIAAISIhPBygAw6htICRgnIg9BaIgqAMIgqA8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask_begun, new cjs.Rectangle(-675,-675,1350,1350), null);


(lib.lockup_terror_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lockup_terror();
	this.instance.parent = this;
	this.instance.setTransform(-69,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lockup_terror_1, new cjs.Rectangle(-69,-39,137,78), null);


(lib.lockup_overwatch_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lockup_overwatch();
	this.instance.parent = this;
	this.instance.setTransform(-69,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lockup_overwatch_1, new cjs.Rectangle(-69,-21,138,41), null);


(lib.lockup_halloween_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lockup_halloween();
	this.instance.parent = this;
	this.instance.setTransform(-124,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lockup_halloween_1, new cjs.Rectangle(-124,-61,248,121), null);


(lib.lockup_2017_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lockup_2017();
	this.instance.parent = this;
	this.instance.setTransform(-37,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lockup_2017_1, new cjs.Rectangle(-37,-21,74,41), null);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FFFFFF","#000000"],[0.251,0.498,0.749],-96.6,-55.8,96.7,55.8).s().p("AvnH0IAAvnIfPAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient, new cjs.Rectangle(-100,-50,200,100), null);


(lib.foreground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.overlay();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foreground, new cjs.Rectangle(-150,-300,300,600), null);


(lib.FFFFFF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.FFFFFF, new cjs.Rectangle(-50,-50,350,650), null);


(lib.EXIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(150,300,1.875,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.character_04_zenyatta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.character_04_zenyatta();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character_04_zenyatta_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.character_03_ana_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.character_03_ana();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character_03_ana_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.character_02_widowmaker_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.character_02_widowmaker();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character_02_widowmaker_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.character_01_torbjorn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.character_01_torbjorn();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character_01_torbjorn_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.button_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFhByIAQiDIg1CDIghAAIAZjjIAeAAIgWCwIBCiwIAYAAIgWCwIBBiwIAeAAIhcDjgACqByQgKABgGgDQgGgDgEgFQgDgEgBgHQAAgIADgJIAmiXQALgnAkABIAaAAQAKgBAGADQAGADAEAFQADAEAAAHQABAIgDAJIgnCXQgDAJgEAIQgEAHgGAEQgGAFgHADQgIADgJgBgADahVQgEADgBAGIgoCZQgCAGACADQADADAGAAIAOAAQAFAAAEgDQAFgDABgGIAoiZQACgGgDgDQgCgDgGAAIgOAAQgGAAgEADgABLByIALgtIgGhnIgmCUIgfAAIA7jjIAfAAIAEBuIAdhuIAeAAIg7DjgAh8ByIAWhUIgBiPIAfAAIgDBjIABAAIAuhjIAeAAIhLCWIgUBNgAjQByIAWhTIgjAAIgWBTIgeAAIAwi9QALgnAkABIAXAAQAJgBAHADQAGADADAFQAEAEAAAHQAAAIgCAJIgxC9gAi9hTQgEAEgBAGIgUBMIAjAAIAUhMQABgGgCgEQgDgCgGAAIgJAAQgGAAgFACgAloByIA7jjIAfAAIg1DKIAlAAIgGAZgAneByIA7jjIA5AAQAlgBgKAnIgPA8QgDAMgGAHQgGAIgJAFQgIAGgMACQgMADgOAAIgFAAIgXBWgAmjACIAFAAQAPAAAIgFQAIgFADgMIAPg6QAEgKgMAAIgWAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_label, new cjs.Rectangle(-84.7,-17.5,169.5,37.1), null);


(lib.button_hitbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF7200").ss(1,1,1).p("ApHipITeAAQANAAAHAJQAHAJgDAOIhBETQgDAOgLAJQgLAJgNAAIzeAAQgNAAgHgJQgHgJADgOIBBkTQADgNAMgKQALgJAMAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EF5C2F","#F58F31","#EF5C2F"],[0,0.498,1],-68.7,0,68.8,0).s().p("AqWCqQgNAAgHgJQgHgKADgNIBBkUQADgMAMgJQALgKAMAAITeAAQANAAAHAKQAHAJgDAMIhBEUQgDANgLAKQgLAJgNAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_hitbox, new cjs.Rectangle(-69.7,-18,139.6,36), null);


(lib._000000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,300,1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._000000, new cjs.Rectangle(0,0,300,600), null);


(lib.text_the_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.foreground();
	this.instance.parent = this;
	this.instance.setTransform(0,-40,0.3,0.3,0,180,0);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.text_the();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43,-44,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_the_1, new cjs.Rectangle(-45,-130,90,180), null);


(lib.text_has_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.foreground();
	this.instance.parent = this;
	this.instance.setTransform(0,-70,0.383,0.383,0,180,0);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.text_has();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58,-45,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_has_1, new cjs.Rectangle(-58,-185,115.5,230), null);


(lib.text_for_the_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.foreground();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-110,0.517,0.517,0,180,0,0.1,-0.1);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.text_for_the();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-77,-37,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_for_the_1, new cjs.Rectangle(-77.5,-265.1,155.3,310), null);


(lib.dust_future = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.foreground();
	this.instance.parent = this;
	this.instance.setTransform(0.1,110,0.833,0.833,180,0,0,0.1,0);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.mask_future();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.dust_future, new cjs.Rectangle(-675,-675,1350,1350), null);


(lib.dust_fright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.foreground();
	this.instance.parent = this;
	this.instance.setTransform(0,160,0.85,0.85);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.mask_fright();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.dust_fright, new cjs.Rectangle(-675,-675,1350,1350), null);


(lib.dust_begun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.foreground();
	this.instance.parent = this;
	this.instance.setTransform(0,150,0.833,0.833);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.mask_begun();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.dust_begun, new cjs.Rectangle(-675,-675,1350,1350), null);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqWCqQgNAAgHgJIAAAAQgFgHAAgIIAAAAIABgHIAAAAIBBkVQADgMAMgJIAAAAQALgKAMAAIAAAAITeAAQANAAAHAKIAAAAQAFAGAAAIIAAAAIgBAHIAAAAIhBEVQgDAMgLAKIAAAAQgLAJgNAAIAAAAg");

	// gradient
	this.instance = new lib.gradient();
	this.instance.parent = this;
	this.instance.setTransform(-170,0);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:170},15,cjs.Ease.get(1)).wait(1));

	// label
	this.instance_1 = new lib.button_label();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

	// hitbox
	this.instance_2 = new lib.button_hitbox();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-17.5,138.6,35);


// stage content:
(lib.blizzard_overwatch_halloween = function(mode,startPosition,loop) {
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
			   //
		   }
		}
		
		function on_click(){ 
			try{
				// CLICK
			}catch(e){
				console.log(e);
			}
		}
	}
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(355).call(this.frame_359).wait(1));

	// EXIT
	this.EXIT = new lib.EXIT();
	this.EXIT.parent = this;
	new cjs.ButtonHelper(this.EXIT, 0, 1, 2, false, new lib.EXIT(), 3);

	this.timeline.addTween(cjs.Tween.get(this.EXIT).wait(360));

	// FFFFFF (add)
	this.instance = new lib.FFFFFF();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(1).to({regX:150,regY:300,x:150,y:300,alpha:0.003},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.066},0).wait(1).to({alpha:0.11},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.374},0).wait(1).to({alpha:0.554},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).to({_off:true},1).wait(84).to({_off:false,alpha:0},0).wait(1).to({regX:150,regY:300,x:150,y:300,alpha:0.003},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.066},0).wait(1).to({alpha:0.11},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.374},0).wait(1).to({alpha:0.554},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).to({_off:true},1).wait(84).to({_off:false,alpha:0},0).wait(1).to({regX:150,regY:300,x:150,y:300,alpha:0.003},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.066},0).wait(1).to({alpha:0.11},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.374},0).wait(1).to({alpha:0.554},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(1).to({regX:150,regY:300,x:150,y:300,alpha:0.997},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.934},0).wait(1).to({alpha:0.89},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.626},0).wait(1).to({alpha:0.446},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(60));

	// FFFFFF
	this.instance_1 = new lib.FFFFFF();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:150,regY:300,x:150,y:300,alpha:0.996},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.916},0).wait(1).to({x:150.1,alpha:0.858},0).wait(1).to({alpha:0.776},0).wait(1).to({x:150.2,alpha:0.656},0).wait(1).to({x:150.3,alpha:0.471},0).wait(1).to({regX:0.5,regY:0,x:0.5,y:0,alpha:0},0).to({_off:true},1).wait(89).to({_off:false,regX:0,x:0,alpha:1},0).wait(1).to({regX:150,regY:300,x:150,y:300,alpha:0.997},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.934},0).wait(1).to({alpha:0.89},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.626},0).wait(1).to({alpha:0.446},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(84).to({_off:false,alpha:1},0).wait(1).to({regX:150,regY:300,x:150,y:300,alpha:0.997},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.934},0).wait(1).to({alpha:0.89},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.626},0).wait(1).to({alpha:0.446},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(155));

	// lockup_2017
	this.instance_2 = new lib.lockup_2017_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(206,136,2,2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(308).to({_off:false},0).wait(1).to({regY:-0.5,scaleX:1.52,scaleY:1.52,y:135.3,alpha:0.48},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.638},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:135.4,alpha:0.742},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.818},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:135.5,alpha:0.875},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.919},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.952},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.976},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.992},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:136,alpha:1},0).wait(42));

	// lockup_terror
	this.instance_3 = new lib.lockup_terror_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(176,118,2,2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(305).to({_off:false},0).wait(1).to({regX:-0.5,scaleX:1.52,scaleY:1.52,x:175.3,alpha:0.48},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.638},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:175.4,alpha:0.742},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.818},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:175.5,alpha:0.875},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.919},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.952},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.976},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.992},0).wait(1).to({regX:0,scaleX:1,scaleY:1,x:176,alpha:1},0).wait(45));

	// lockup_halloween
	this.instance_4 = new lib.lockup_halloween_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,99,2,2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(302).to({_off:false},0).wait(1).to({regY:-0.5,scaleX:1.52,scaleY:1.52,y:98.3,alpha:0.48},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.638},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:98.4,alpha:0.742},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.818},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:98.5,alpha:0.875},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.919},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.952},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.976},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.992},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:99,alpha:1},0).wait(48));

	// lockup_overwatch
	this.instance_5 = new lib.lockup_overwatch_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(144,39,2,2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(299).to({_off:false},0).wait(1).to({regY:-0.5,scaleX:1.52,scaleY:1.52,y:38.3,alpha:0.48},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.638},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:38.4,alpha:0.742},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.818},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:38.5,alpha:0.875},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.919},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.952},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.976},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.992},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:39,alpha:1},0).wait(51));

	// dates
	this.instance_6 = new lib.text_dates();
	this.instance_6.parent = this;
	this.instance_6.setTransform(400,535);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(310).to({_off:false},0).wait(1).to({x:280},0).wait(1).to({x:240.6},0).wait(1).to({x:214.5},0).wait(1).to({x:195.6},0).wait(1).to({x:181.3},0).wait(1).to({x:170.3},0).wait(1).to({x:162},0).wait(1).to({x:155.9},0).wait(1).to({x:151.9},0).wait(1).to({x:150},0).wait(40));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.parent = this;
	this.CTA.setTransform(400,572,0.95,0.95);
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(315).to({_off:false},0).wait(1).to({x:280},0).wait(1).to({x:240.6},0).wait(1).to({x:214.6},0).wait(1).to({x:195.6},0).wait(1).to({x:181.3},0).wait(1).to({x:170.3},0).wait(1).to({x:162},0).wait(1).to({x:156},0).wait(1).to({x:151.9},0).wait(1).to({regX:0.1,regY:0.1,x:150.1,y:572.1},0).wait(35));

	// character_zenyatta
	this.instance_7 = new lib.character_04_zenyatta_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.1,300.1,1.15,1.15,0,0,0,0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(289).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:150,y:300},19).wait(52));

	// foreground
	this.instance_8 = new lib.foreground();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,300);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(194).to({_off:false},0).wait(41).to({alpha:0.388},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.134},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(115));

	// text_has
	this.instance_9 = new lib.text_has_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-63,219.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(199).to({_off:false},0).wait(1).to({regX:-0.3,regY:-70,x:-61.1,y:149.5},0).wait(1).to({x:-53.6,y:148.1},0).wait(1).to({x:-39.2,y:145.6},0).wait(1).to({x:-16.9,y:141.6},0).wait(1).to({x:11.7,y:136.4},0).wait(1).to({x:40.4,y:131.3},0).wait(1).to({x:62.7,y:127.3},0).wait(1).to({x:77,y:124.7},0).wait(1).to({x:84.5,y:123.4},0).wait(1).to({regX:0,regY:0,x:87,y:193},0).wait(25).to({alpha:0},5).to({_off:true},1).wait(120));

	// mask_begun
	this.instance_10 = new lib.dust_begun();
	this.instance_10.parent = this;
	this.instance_10.setTransform(437.3,202.1);
	this.instance_10._off = true;

	this.instance_11 = new lib.mask_begun();
	this.instance_11.parent = this;
	this.instance_11.setTransform(151,281);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(199).to({_off:false},0).wait(1).to({x:433.3,y:203.2},0).wait(1).to({x:419.6,y:207},0).wait(1).to({x:393.6,y:214.1},0).wait(1).to({x:352.6,y:225.4},0).wait(1).to({x:298.9,y:240.2},0).wait(1).to({x:243.4,y:255.5},0).wait(1).to({x:199.1,y:267.7},0).wait(1).to({x:170.4,y:275.7},0).wait(1).to({x:155.4,y:279.8},0).wait(1).to({x:151,y:281},0).to({_off:true},25).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(234).to({_off:false},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:150.3,y:281.1},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:147.9,y:281.3},0).wait(1).to({scaleX:2,scaleY:2,x:143.7,y:281.7},0).wait(1).to({scaleX:2.87,scaleY:2.87,x:137.4,y:282.2},0).wait(1).to({scaleX:4.07,scaleY:4.07,x:128.7,y:283},0).wait(1).to({scaleX:5.64,scaleY:5.64,x:117.2,y:284},0).wait(1).to({scaleX:7.6,scaleY:7.6,x:102.9,y:285.3},0).wait(1).to({scaleX:9.96,scaleY:9.96,x:85.8,y:286.9},0).wait(1).to({scaleX:12.63,scaleY:12.63,x:66.4,y:288.6},0).wait(1).to({scaleX:15.5,scaleY:15.5,x:45.5,y:290.5},0).wait(1).to({scaleX:18.36,scaleY:18.36,x:24.6,y:292.4},0).wait(1).to({scaleX:21.04,scaleY:21.04,x:5.2,y:294.1},0).wait(1).to({scaleX:23.39,scaleY:23.39,x:-11.9,y:295.7},0).wait(1).to({scaleX:25.35,scaleY:25.35,x:-26.2,y:297},0).wait(1).to({scaleX:26.92,scaleY:26.92,x:-37.7,y:298},0).wait(1).to({scaleX:28.12,scaleY:28.12,x:-46.4,y:298.8},0).wait(1).to({scaleX:28.99,scaleY:28.99,x:-52.7,y:299.3},0).wait(1).to({scaleX:29.57,scaleY:29.57,x:-56.9,y:299.7},0).wait(1).to({scaleX:29.89,scaleY:29.89,x:-59.3,y:299.9},0).wait(1).to({scaleX:29.99,scaleY:29.99,x:-60,y:300},0).to({_off:true},1).wait(105));

	// 000000
	this.instance_12 = new lib._000000();
	this.instance_12.parent = this;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(199).to({_off:false},0).wait(36).to({regX:150,regY:300,x:150,y:300,alpha:0.969},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.031},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(118));

	// character_ana
	this.instance_13 = new lib.character_03_ana_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,300,1.1,1.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(234).to({_off:false},0).to({scaleX:1,scaleY:1},55).to({_off:true},1).wait(70));

	// foreground
	this.instance_14 = new lib.foreground();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,300);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(99).to({_off:false},0).wait(41).to({alpha:0.388},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.134},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(210));

	// text_for_the
	this.instance_15 = new lib.text_for_the_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-86,257.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(104).to({_off:false},0).wait(1).to({regX:0.1,regY:-110.1,x:-83.1,y:146.7},0).wait(1).to({x:-73.7,y:144.7},0).wait(1).to({x:-55.8,y:140.8},0).wait(1).to({x:-27.8,y:134.8},0).wait(1).to({x:8.1,y:127.1},0).wait(1).to({x:44,y:119.4},0).wait(1).to({x:72,y:113.4},0).wait(1).to({x:90,y:109.5},0).wait(1).to({x:99.4,y:107.5},0).wait(1).to({regX:0,regY:0,x:102,y:217},0).wait(25).to({alpha:0},5).to({_off:true},1).wait(215));

	// mask_future
	this.instance_16 = new lib.dust_future();
	this.instance_16.parent = this;
	this.instance_16.setTransform(439.3,197.2);
	this.instance_16._off = true;

	this.instance_17 = new lib.mask_future();
	this.instance_17.parent = this;
	this.instance_17.setTransform(153,276);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(104).to({_off:false},0).wait(1).to({x:435.3,y:198.3},0).wait(1).to({x:421.6,y:202},0).wait(1).to({x:395.6,y:209.2},0).wait(1).to({x:354.6,y:220.5},0).wait(1).to({x:300.9,y:235.3},0).wait(1).to({x:245.4,y:250.6},0).wait(1).to({x:201.1,y:262.8},0).wait(1).to({x:172.4,y:270.7},0).wait(1).to({x:157.4,y:274.8},0).wait(1).to({x:153,y:276},0).to({_off:true},25).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(139).to({_off:false},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:153.8,y:276.1},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:156.3,y:276.4},0).wait(1).to({scaleX:2.69,scaleY:2.69,x:160.9,y:276.8},0).wait(1).to({scaleX:4.16,scaleY:4.16,x:167.8,y:277.5},0).wait(1).to({scaleX:6.19,scaleY:6.19,x:177.2,y:278.5},0).wait(1).to({scaleX:8.84,scaleY:8.84,x:189.6,y:279.8},0).wait(1).to({scaleX:12.16,scaleY:12.16,x:205.1,y:281.5},0).wait(1).to({scaleX:16.13,scaleY:16.13,x:223.7,y:283.4},0).wait(1).to({scaleX:20.65,scaleY:20.65,x:244.8,y:285.6},0).wait(1).to({scaleX:25.49,scaleY:25.49,x:267.4,y:288},0).wait(1).to({scaleX:30.33,scaleY:30.33,x:290,y:290.4},0).wait(1).to({scaleX:34.85,scaleY:34.85,x:311.1,y:292.6},0).wait(1).to({scaleX:38.83,scaleY:38.83,x:329.6,y:294.5},0).wait(1).to({scaleX:42.15,scaleY:42.15,x:345.1,y:296.2},0).wait(1).to({scaleX:44.8,scaleY:44.8,x:357.5,y:297.5},0).wait(1).to({scaleX:46.83,scaleY:46.83,x:367,y:298.5},0).wait(1).to({scaleX:48.29,scaleY:48.29,x:373.9,y:299.2},0).wait(1).to({scaleX:49.27,scaleY:49.27,x:378.4,y:299.6},0).wait(1).to({scaleX:49.81,scaleY:49.81,x:381,y:299.9},0).wait(1).to({scaleX:49.99,scaleY:49.99,x:381.8,y:300},0).to({_off:true},1).wait(200));

	// 000000
	this.instance_18 = new lib._000000();
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(104).to({_off:false},0).wait(36).to({regX:150,regY:300,x:150,y:300,alpha:0.969},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.031},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(213));

	// character_widowmaker
	this.instance_19 = new lib.character_02_widowmaker_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,300,1.1,1.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(139).to({_off:false},0).to({scaleX:1,scaleY:1},55).to({_off:true},1).wait(165));

	// foreground
	this.instance_20 = new lib.foreground();
	this.instance_20.parent = this;
	this.instance_20.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(40).to({alpha:0.388},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.134},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(310));

	// text_the
	this.instance_21 = new lib.text_the_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-47,265.8);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).wait(1).to({regY:-40,x:-45.1,y:225.4},0).wait(1).to({x:-38.6,y:224},0).wait(1).to({x:-26.3,y:221.5},0).wait(1).to({x:-7.1,y:217.5},0).wait(1).to({x:17.5,y:212.4},0).wait(1).to({x:42.2,y:207.3},0).wait(1).to({x:61.4,y:203.3},0).wait(1).to({x:73.7,y:200.7},0).wait(1).to({x:80.1,y:199.4},0).wait(1).to({regY:0,x:82,y:239},0).wait(25).to({alpha:0},5).to({_off:true},1).wait(315));

	// mask_fright
	this.instance_22 = new lib.dust_fright();
	this.instance_22.parent = this;
	this.instance_22.setTransform(440.7,220.7);
	this.instance_22._off = true;

	this.instance_23 = new lib.mask_fright();
	this.instance_23.parent = this;
	this.instance_23.setTransform(150,288);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(4).to({_off:false},0).wait(1).to({x:436.6,y:221.6},0).wait(1).to({x:422.8,y:224.8},0).wait(1).to({x:396.3,y:231},0).wait(1).to({x:354.7,y:240.6},0).wait(1).to({x:300.2,y:253.2},0).wait(1).to({x:243.8,y:266.3},0).wait(1).to({x:198.8,y:276.7},0).wait(1).to({x:169.7,y:283.4},0).wait(1).to({x:154.5,y:287},0).wait(1).to({x:150,y:288},0).to({_off:true},25).wait(321));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(39).to({_off:false},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:148.6},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:144.3,y:288.2},0).wait(1).to({scaleX:2.35,scaleY:2.35,x:136.4,y:288.4},0).wait(1).to({scaleX:3.52,scaleY:3.52,x:124.7,y:288.8},0).wait(1).to({scaleX:5.13,scaleY:5.13,x:108.4,y:289.3},0).wait(1).to({scaleX:7.24,scaleY:7.24,x:87.1,y:289.9},0).wait(1).to({scaleX:9.88,scaleY:9.88,x:60.5,y:290.7},0).wait(1).to({scaleX:13.05,scaleY:13.05,x:28.6,y:291.7},0).wait(1).to({scaleX:16.64,scaleY:16.64,x:-7.7,y:292.8},0).wait(1).to({scaleX:20.5,scaleY:20.5,x:-46.5,y:294},0).wait(1).to({scaleX:24.35,scaleY:24.35,x:-85.3,y:295.2},0).wait(1).to({scaleX:27.95,scaleY:27.95,x:-121.6,y:296.3},0).wait(1).to({scaleX:31.11,scaleY:31.11,x:-153.5,y:297.3},0).wait(1).to({scaleX:33.76,scaleY:33.76,x:-180.1,y:298.1},0).wait(1).to({scaleX:35.87,scaleY:35.87,x:-201.4,y:298.7},0).wait(1).to({scaleX:37.48,scaleY:37.48,x:-217.7,y:299.2},0).wait(1).to({scaleX:38.65,scaleY:38.65,x:-229.4,y:299.6},0).wait(1).to({scaleX:39.43,scaleY:39.43,x:-237.3,y:299.8},0).wait(1).to({scaleX:39.86,scaleY:39.86,x:-241.6,y:300},0).wait(1).to({scaleX:40,scaleY:40,x:-243},0).to({_off:true},1).wait(300));

	// 000000
	this.instance_24 = new lib._000000();
	this.instance_24.parent = this;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(4).to({_off:false},0).wait(36).to({regX:150,regY:300,x:150,y:300,alpha:0.985},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.309},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.015},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0},0).to({_off:true},1).wait(310));

	// character_torbjorn
	this.instance_25 = new lib.character_01_torbjorn_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(150,300,1.1,1.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1},60).to({_off:true},1).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600.1);
// library properties:
lib.properties = {
	id: '049119DC60AD4E8EB72C2FDE0CE94620',
	width: 300,
	height: 600,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/character_01_torbjorn.jpg?1521596397785", id:"character_01_torbjorn"},
		{src:"images/character_02_widowmaker.jpg?1521596397785", id:"character_02_widowmaker"},
		{src:"images/character_03_ana.jpg?1521596397785", id:"character_03_ana"},
		{src:"images/character_04_zenyatta.jpg?1521596397785", id:"character_04_zenyatta"},
		{src:"images/lockup_2017.png?1521596397785", id:"lockup_2017"},
		{src:"images/lockup_halloween.png?1521596397785", id:"lockup_halloween"},
		{src:"images/lockup_overwatch.png?1521596397785", id:"lockup_overwatch"},
		{src:"images/lockup_terror.png?1521596397785", id:"lockup_terror"},
		{src:"images/overlay.png?1521596397785", id:"overlay"},
		{src:"images/text_for_the.png?1521596397785", id:"text_for_the"},
		{src:"images/text_has.png?1521596397785", id:"text_has"},
		{src:"images/text_the.png?1521596397785", id:"text_the"}
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
an.compositions['049119DC60AD4E8EB72C2FDE0CE94620'] = {
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