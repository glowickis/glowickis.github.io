var canvas, comp, lib, images, exportRoot, stage;

function init(){
	canvas = document.getElementById('canvas');
	comp = AdobeAn.getComposition(Object.keys(AdobeAn.compositions)[0]);
	lib = comp.getLibrary();
	images = comp.getImages();
	
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener('fileload', function(e){handleFileLoad(e)});
	loader.addEventListener('complete', function(e){handleComplete(e)});
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(e){
	if(e && (e.item.type == 'image')){ images[e.item.id] = e.result; }
}

function handleComplete(e){
	exportRoot = new lib.playstation_uncharted_300x600();
	
	stage = new lib.Stage(canvas);
	stage.addChild(exportRoot);
	
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener('tick', stage);
}

window.addEventListener('load', init);