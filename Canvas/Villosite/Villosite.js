(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Villosite_atlas_", frames: [[0,957,1355,652],[0,0,1166,955]]},
		{name:"Villosite_atlas_2", frames: [[0,1347,481,2],[1160,0,50,492],[0,711,1010,634],[0,0,1158,709],[1012,711,49,18],[1160,494,25,9],[1212,0,14,12]]}
];


// symbols:



(lib.CachedTexturedBitmap_207 = function() {
	this.initialize(ss["Villosite_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_208 = function() {
	this.initialize(img.CachedTexturedBitmap_208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3817,2129);


(lib.CachedTexturedBitmap_209 = function() {
	this.initialize(ss["Villosite_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_210 = function() {
	this.initialize(ss["Villosite_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_211 = function() {
	this.initialize(ss["Villosite_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_212 = function() {
	this.initialize(ss["Villosite_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_213 = function() {
	this.initialize(ss["Villosite_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_214 = function() {
	this.initialize(ss["Villosite_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_215 = function() {
	this.initialize(ss["Villosite_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_216 = function() {
	this.initialize(img.CachedTexturedBitmap_216);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2989,2989);


(lib.CachedTexturedBitmap_217 = function() {
	this.initialize(ss["Villosite_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Nutriment = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_217();
	this.instance.parent = this;
	this.instance.setTransform(-5.6,-1.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-1.1,7,6);


(lib.Cercle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_216();
	this.instance.parent = this;
	this.instance.setTransform(-646.1,-646.1,0.4323,0.4323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cercle, new cjs.Rectangle(-646.1,-646.1,1292.2,1292.2), null);


(lib.Cellulevaisseau = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_215();
	this.instance.parent = this;
	this.instance.setTransform(-4.5,0.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0.3,12.5,4.5);


(lib.Cellulealvéole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_214();
	this.instance.parent = this;
	this.instance.setTransform(-14.05,-4,0.4658,0.4658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-4,22.8,8.4);


(lib.MvtNtraversant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.instance = new lib.Nutriment("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-366.95,165.85,1,1,0,0,0,-2.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:346,y:175.3},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-370.4,160.9,719.9,17.400000000000006);


(lib.MvtNremontant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// N_remontant
	this.instance = new lib.Nutriment("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-351.95,166,1,1,0,0,0,-2.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-351.9,166,-336.1,168.7,-334.2,168.8,-332.2,169,-320.4,169,-318.8,169.1,-263,163.3,-225,164.6,-209.4,164.8,-184.2,165.1,-161.4,156,-138.7,146.9,-114.8,139,-91,131.2,-82.8,129.9,-74.7,128.6,-62.2,118.7,-45.5,97.5,-36,85.8,-26.6,74.2,-16.9,64.7,-7.3,55.3,7.6,48.1,22.5,41,34.7,59.4,46.9,77.9,57.6,94.8,68.2,111.9,80,121.8,91.7,131.8,122,136.6,152.4,141.4,167.4,140.7,182.4,140,197.4,138,202.4,138,228,137.7,253.6,137.4,264.6,137.5,275.7,137.6,297.6,138,319.6,138.4,343.9,138]}},121).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.4,43.3,702.9,128.7);


(lib.MvtNnonentrant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.instance = new lib.Nutriment("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-341.95,-174,1,1,0,0,0,-2.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-341.9,-173.9,-339.8,-173.9,-326.5,-176.4,-313.3,-178.9,-308.9,-178.9,-301.9,-178.9,-293.9,-177.5,-284.1,-175.5,-278,-174.4,-254.8,-170.1,-222.9,-169.9,-222.2,-169.9,-221.5,-169.9,-220.5,-169.9,-219.4,-169.9,-182.9,-170.4,-77,-178.9,-21.4,-183.4,29.3,-187.9,44,-187.9,116.8,-178.9,190,-169.9,195.8,-169.9,228.4,-169.4,270.2,-169.5,292.6,-169.6,332.9,-169.8]}},145).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.4,-190.9,681.9,24.30000000000001);


(lib.MvtNentrants = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.instance = new lib.Nutriment("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-567.2,3.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-567.1,3.6,-362.1,-8.3,-285.4,-2.3,-208.5,3.7,-202.6,10.8,-196.7,17.7,-188.6,20.8,-180.5,24,-155.7,25.5,-131,27,-113,27,-98.3,27,-76.3,24.7]}},68).to({guide:{path:[-76.2,24.7,-68.9,24,-60.8,23,-56,22.4,-51.3,21.8]}},12).to({guide:{path:[-51.3,21.9,-44.2,21,-37.2,20.1]}},2).to({guide:{path:[-37.2,20.1,-33.7,19.7,-30.2,19.2]}},6).to({guide:{path:[-30.1,19.3,-29.2,19.2,-28.4,19.1,-5.3,18.2,12,34.8,29.3,51.5,44.6,66.9,60,82.3,62.8,97.4,73.1,114.2,75.9,116.4,78.8,118.6,86,123.5,93.2,128.4,107.6,133.3,122,138.2,141.5,138.5,179.9,137.8,218.4,137,219.6,137,241.4,137.3,263.1,137.7,272.4,137.8,281.6,137.9,299.7,137.4,315.7,138.2,320.9,132]}},39).wait(13));

	// Calque_4
	this.instance_1 = new lib.Nutriment("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-299,-174);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[-297.9,-173.9,-283.5,-169.1,-230.9,-167.9,-228.4,-167.9,-182.9,-169.9,-176,-169.9,-105.9,-147.9,-85.3,-141.4,-70.4,-136.9]}},37).to({guide:{path:[-70.3,-136.9,-56.9,-132.8,-48.1,-130.2]}},12).to({guide:{path:[-48,-130.2,-32.9,-125.9,-30.9,-125.9,-30.2,-125.9,-15.6,-128.1]}},12).to({guide:{path:[-15.5,-128.1,-14.6,-128.2,-13.7,-128.4,3.8,-130.9,9.1,-130.9,44.9,-130.9,52.9,-100.9,55.7,-90.5,55.6,-74.3,55.6,-65.4,54.9,-49.9,54.9,-33.8,52,-17.6,49.1,-1.3,49.1,18,49.1,73.8,63.2,99.1,77.4,124.4,100.1,131.8,122.9,139.2,147.9,138.3,172.8,137.4,205.7,138,238.7,138.7,259.8,140,295.7,142,308.9,141.9,315.7,141.9,321.5,141.6]}},64).wait(15));

	// Calque_6
	this.instance_2 = new lib.Nutriment("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-415.45,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-2.1,regY:1.9,x:-409.35,y:-12.65},0).wait(1).to({x:-404.35,y:-12.6},0).wait(1).to({x:-398.15,y:-12.5},0).wait(1).to({x:-392.4,y:-12.4},0).wait(1).to({x:-386.45,y:-12.35},0).wait(1).to({x:-380.55,y:-12.25},0).wait(1).to({x:-374.65,y:-12.15},0).wait(1).to({x:-368.75,y:-12.1},0).wait(1).to({x:-362.85,y:-12},0).wait(1).to({x:-356.95,y:-11.9},0).wait(1).to({x:-351,y:-11.85},0).wait(1).to({x:-345.1,y:-11.75},0).wait(1).to({x:-339.15,y:-11.7},0).wait(1).to({x:-333.2,y:-11.6},0).wait(1).to({x:-327.3,y:-11.5},0).wait(1).to({x:-321.35,y:-11.45},0).wait(1).to({x:-315.35,y:-11.35},0).wait(1).to({x:-309.4,y:-11.3},0).wait(1).to({x:-303.4,y:-11.2},0).wait(1).to({x:-297.45,y:-11.15},0).wait(1).to({x:-291.45,y:-11.05},0).wait(1).to({x:-285.45,y:-11},0).wait(1).to({x:-279.45,y:-10.9},0).wait(1).to({x:-273.4,y:-10.85},0).wait(1).to({x:-267.4,y:-10.75},0).wait(1).to({x:-261.35,y:-10.7},0).wait(1).to({x:-255.3,y:-10.6},0).wait(1).to({x:-249.25,y:-10.55},0).wait(1).to({x:-243.15,y:-10.45},0).wait(1).to({x:-237.1,y:-10.4},0).wait(1).to({x:-231,y:-10.35},0).wait(1).to({x:-224.85,y:-10.25},0).wait(1).to({x:-218.75,y:-10.2},0).wait(1).to({x:-212.6,y:-10.15},0).wait(1).to({x:-206.4,y:-10.05},0).wait(1).to({x:-200.25,y:-10},0).wait(1).to({x:-194.05,y:-9.95},0).wait(1).to({x:-187.8,y:-9.9},0).wait(1).to({x:-181.55,y:-9.85},0).wait(1).to({x:-175.3,y:-9.8},0).wait(1).to({x:-169,y:-9.7},0).wait(1).to({x:-162.65,y:-9.65},0).wait(1).to({x:-156.3},0).wait(1).to({x:-149.9,y:-9.6},0).wait(1).to({x:-143.45,y:-9.55},0).wait(1).to({x:-136.95,y:-9.5},0).wait(1).to({x:-130.4,y:-9.45},0).wait(1).to({x:-123.8},0).wait(1).to({x:-117.15,y:-9.4},0).wait(1).to({x:-110.35},0).wait(1).to({x:-103.45},0).wait(1).to({x:-96.45},0).wait(1).to({x:-89.25,y:-9.45},0).wait(1).to({regX:0,regY:0,x:-79.75,y:-11.4},0).wait(1).to({regX:-2.1,regY:1.9,x:-79.25,y:-9.5},0).wait(1).to({x:-77.65,y:-9.55},0).wait(1).to({x:-75.7},0).wait(1).to({x:-73.85,y:-9.6},0).wait(1).to({x:-71.95},0).wait(1).to({x:-70.05,y:-9.65},0).wait(1).to({x:-68.1,y:-9.75},0).wait(1).to({x:-66.15,y:-9.8},0).wait(1).to({x:-64.2,y:-9.9},0).wait(1).to({x:-62.2,y:-10.05},0).wait(1).to({x:-59.4,y:-10.3},0).wait(1).to({regX:0,regY:0,x:-54.05,y:-12.25},0).to({guide:{path:[-54,-12.2,-50.8,-12.2,-46.6,-12]}},1).wait(1).to({regX:-2.1,regY:1.9,x:-47.5,y:-10.1},0).wait(1).to({x:-46.2,y:-10.05},0).wait(1).to({x:-44.9,y:-10},0).wait(1).to({x:-43.65,y:-9.95},0).wait(1).to({x:-42.45},0).wait(1).to({x:-41.3,y:-10},0).wait(1).to({x:-40.15,y:-10.05},0).wait(1).to({x:-39,y:-10.15},0).wait(1).to({x:-37.8,y:-10.25},0).wait(1).to({x:-36.65,y:-10.4},0).wait(1).to({x:-35.45,y:-10.55},0).wait(1).to({regX:0,regY:0,x:-32.2,y:-12.65},0).wait(1).to({regX:-2.1,regY:1.9,x:-26.55,y:-12.85},0).wait(1).to({x:-19.7,y:-17},0).wait(1).to({x:-14.35,y:-23.9},0).wait(1).to({x:-10.05,y:-28.35},0).wait(1).to({x:-1.8,y:-34.45},0).wait(1).to({x:8.7,y:-34.15},0).wait(1).to({x:17.45,y:-31.7},0).wait(1).to({x:25.85,y:-27.4},0).wait(1).to({x:33.1,y:-22.45},0).wait(1).to({x:38.6,y:-17.9},0).wait(1).to({x:42.75,y:-13.65},0).wait(1).to({x:46.15,y:-8.15},0).wait(1).to({x:47,y:0.75},0).wait(1).to({x:46.4,y:13.95},0).wait(1).to({x:45.6,y:23.85},0).wait(1).to({x:45.05,y:31.95},0).wait(1).to({x:44.9,y:39.75},0).wait(1).to({x:45.05,y:47.65},0).wait(1).to({x:45.55,y:55.65},0).wait(1).to({x:46.45,y:63.75},0).wait(1).to({x:48,y:71.9},0).wait(1).to({x:50.3,y:80.25},0).wait(1).to({x:53.35,y:88.3},0).wait(1).to({x:57,y:96.1},0).wait(1).to({x:61.15,y:103.45},0).wait(1).to({x:65.95,y:110.2},0).wait(1).to({x:71.7,y:116.4},0).wait(1).to({x:78.35,y:121.95},0).wait(1).to({x:85.6,y:126.7},0).wait(1).to({x:93.2,y:130.6},0).wait(1).to({x:100.95,y:133.75},0).wait(1).to({x:109.1,y:136.3},0).wait(1).to({x:117.55,y:138.25},0).wait(1).to({x:126.05,y:139.55},0).wait(1).to({x:134.55,y:140.25},0).wait(1).to({x:143,y:140.4},0).wait(1).to({x:151.2,y:140.35},0).wait(1).to({x:158.85,y:140.3},0).wait(1).to({x:166.65,y:140.25},0).wait(1).to({x:174.5,y:140.15},0).wait(1).to({x:182.5,y:140.1},0).wait(1).to({x:190.6,y:140},0).wait(1).to({x:198.8,y:139.9},0).wait(1).to({x:206.45,y:139.8},0).wait(1).to({x:214.2},0).wait(1).to({x:222.05},0).wait(1).to({x:230.05,y:139.85},0).wait(1).to({x:238.35,y:139.9},0).wait(1).to({x:247.5},0).wait(1).to({x:256.85,y:139.95},0).wait(1).to({x:266.1,y:140.05},0).wait(1).to({x:275.15,y:140.15},0).wait(1).to({x:284.05,y:140.25},0).wait(1).to({x:292.85,y:140.35},0).wait(1).to({x:301.5,y:140.5},0).wait(1).to({x:310.05,y:140.65},0).wait(1).to({x:318.5,y:140.8},0).wait(1).to({x:326.45,y:142.75},0).wait(1).to({x:333.65,y:138.3},0).wait(1).to({regX:0,regY:0,x:339.5,y:127.9},0).wait(1));

	// Calque_8
	this.instance_3 = new lib.Nutriment("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-348.85,-100.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-2.1,regY:1.9,x:-340.4,y:-99.95},0).wait(1).to({x:-321.1,y:-102.85},0).wait(1).to({x:-311,y:-104.4},0).wait(1).to({x:-303.95,y:-105.5},0).wait(1).to({x:-297.55,y:-106.4},0).wait(1).to({x:-292.25,y:-107.15},0).wait(1).to({x:-287,y:-107.8},0).wait(1).to({x:-281.7,y:-108.4},0).wait(1).to({x:-276.35,y:-108.9},0).wait(1).to({x:-270.95,y:-109.4},0).wait(1).to({x:-265.55,y:-109.8},0).wait(1).to({x:-260.1,y:-110.1},0).wait(1).to({x:-254.55,y:-110.35},0).wait(1).to({x:-249,y:-110.45},0).wait(1).to({x:-243.4,y:-110.5},0).wait(1).to({x:-237.75,y:-110.45},0).wait(1).to({x:-232.05,y:-110.25},0).wait(1).to({x:-226.35,y:-109.95},0).wait(1).to({x:-220.55,y:-109.45},0).wait(1).to({x:-214.7,y:-108.85},0).wait(1).to({x:-208.8,y:-108.05},0).wait(1).to({x:-202.9,y:-107.05},0).wait(1).to({x:-196.95,y:-105.85},0).wait(1).to({x:-190.95,y:-104.4},0).wait(1).to({x:-184.95,y:-102.7},0).wait(1).to({x:-178.9,y:-100.75},0).wait(1).to({x:-173.55,y:-98.95},0).wait(1).to({x:-168.45,y:-97.2},0).wait(1).to({x:-163.25,y:-95.4},0).wait(1).to({x:-158,y:-93.55},0).wait(1).to({x:-152.75,y:-91.65},0).wait(1).to({x:-147.5,y:-89.7},0).wait(1).to({x:-142.2,y:-87.7},0).wait(1).to({x:-136.85,y:-85.65},0).wait(1).to({x:-131.45,y:-83.5},0).wait(1).to({x:-126,y:-81.25},0).wait(1).to({x:-120.5,y:-78.9},0).wait(1).to({x:-115,y:-76.45},0).wait(1).to({x:-109.4,y:-73.9},0).wait(1).to({x:-103.3,y:-72.5},0).wait(1).to({x:-98.05,y:-71.55},0).wait(1).to({x:-92.6,y:-70.6},0).wait(1).to({regX:0,regY:0,x:-84.85,y:-71.7},0).wait(1).to({regX:-2.1,regY:1.9,x:-85.3,y:-69.6},0).wait(1).to({x:-84,y:-69.45},0).wait(1).to({x:-82.55,y:-69.3},0).wait(1).to({x:-81.15,y:-69.2},0).wait(1).to({x:-79.65,y:-69.1},0).wait(1).to({x:-78.15},0).wait(1).to({x:-76.5},0).wait(1).to({x:-74.8},0).wait(1).to({x:-73.1,y:-69.15},0).wait(1).to({x:-71.4,y:-69.25},0).wait(1).to({x:-69.75,y:-69.35},0).wait(1).to({regX:0,regY:0,x:-66,y:-71.4},0).wait(1).to({regX:-2.1,regY:1.9,x:-61.1,y:-70.15},0).wait(1).to({regX:0,regY:0,x:-52,y:-73.05},0).wait(1).to({regX:-2.1,regY:1.9,x:-53,y:-71.3},0).wait(1).to({x:-51.95,y:-71.5},0).wait(1).to({x:-50.85,y:-71.7},0).wait(1).to({x:-49.8,y:-71.9},0).wait(1).to({x:-48.4,y:-72.15},0).wait(1).to({x:-47.05,y:-72.45},0).wait(1).to({x:-45.7,y:-72.7},0).wait(1).to({x:-44.5,y:-72.95},0).wait(1).to({x:-43.3,y:-73.25},0).wait(1).to({x:-42.15,y:-73.5},0).wait(1).to({x:-41.05,y:-73.75},0).wait(1).to({regX:0,regY:0,x:-37.9,y:-75.9},0).wait(1).to({regX:-2.1,regY:1.9,x:-30.45,y:-76.2},0).wait(1).to({x:-20.9,y:-78.55},0).wait(1).to({x:-13,y:-80.35},0).wait(1).to({x:-5.5,y:-81.95},0).wait(1).to({x:2.35,y:-83.45},0).wait(1).to({x:11.35,y:-84.75},0).wait(1).to({x:20.2,y:-85.6},0).wait(1).to({x:29.2,y:-86.05},0).wait(1).to({x:38.05,y:-85.75},0).wait(1).to({x:45.2,y:-83.75},0).wait(1).to({x:50.85,y:-77.45},0).wait(1).to({x:52.7,y:-66},0).wait(1).to({x:52.15,y:-54.45},0).wait(1).to({x:50.85,y:-40.7},0).wait(1).to({x:49.95,y:-31.85},0).wait(1).to({x:49.35,y:-25.75},0).wait(1).to({x:48.85,y:-19.2},0).wait(1).to({x:48.7,y:-11.75},0).wait(1).to({x:48.55,y:-4.1},0).wait(1).to({x:48.25,y:2.8},0).wait(1).to({x:47.6,y:10.05},0).wait(1).to({x:46.25,y:17.85},0).wait(1).to({x:45.05,y:28.1},0).wait(1).to({x:44.75,y:38.65},0).wait(1).to({y:47.9},0).wait(1).to({y:57.2},0).wait(1).to({x:45.3,y:65.9},0).wait(1).to({x:48.5,y:75.05},0).wait(1).to({x:52.65,y:88.1},0).wait(1).to({x:56.35,y:96.85},0).wait(1).to({x:61.55,y:105.45},0).wait(1).to({x:67.5,y:113.15},0).wait(1).to({x:74.1,y:119.7},0).wait(1).to({x:82.6,y:125.45},0).wait(1).to({x:91.95,y:129.85},0).wait(1).to({x:101.35,y:132.9},0).wait(1).to({x:110.45,y:135.05},0).wait(1).to({x:120.15,y:136.6},0).wait(1).to({x:129.9,y:137.55},0).wait(1).to({x:139.55,y:137.9},0).wait(1).to({x:148.9,y:137.8},0).wait(1).to({x:158.1,y:137.7},0).wait(1).to({x:167.35,y:137.6},0).wait(1).to({x:176.6,y:137.55},0).wait(1).to({x:185.85},0).wait(1).to({x:195.05,y:137.6},0).wait(1).to({x:204.3,y:137.7},0).wait(1).to({x:213.5,y:137.85},0).wait(1).to({x:222.7,y:138.05},0).wait(1).to({x:231.95,y:138.25},0).wait(1).to({x:241.1,y:138.55},0).wait(1).to({x:248.75,y:138.8},0).wait(1).to({x:255.15,y:139},0).wait(1).to({x:262,y:139.2},0).wait(1).to({x:268.8,y:139.4},0).wait(1).to({x:275.65,y:139.6},0).wait(1).to({x:282.55,y:139.8},0).wait(1).to({x:289.5,y:140},0).wait(1).to({x:296.5,y:140.2},0).wait(1).to({x:303.65,y:140.4},0).wait(1).to({x:310.85,y:140.55},0).wait(1).to({x:318.3,y:140.75},0).wait(1).to({regX:0,regY:0,x:328,y:139.6},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-572.8,-175.1,913.6999999999999,321.9);


(lib.Entérocyte = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Cellulealvéole("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,1.25,0.78,1,90,0,0,-1.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-8.8,8.4,17.8);


(lib.Villosité = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Entérocyte();
	this.instance.parent = this;
	this.instance.setTransform(-296.5,38.35,0.9959,0.9959,42.5903);

	this.instance_1 = new lib.Entérocyte();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-291,43.85,0.9959,0.9959,42.5903);

	this.instance_2 = new lib.Entérocyte();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-285,49.85,0.9959,0.9959,42.5903);

	this.instance_3 = new lib.Entérocyte();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-279.5,55.1,0.9959,0.9959,42.5903);

	this.instance_4 = new lib.Entérocyte();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-274.5,59.6,0.9959,0.9959,42.5903);

	this.instance_5 = new lib.Entérocyte();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-269.75,65.1,0.9959,0.9959,42.5903);

	this.instance_6 = new lib.Entérocyte();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-264.75,70.85,0.9962,0.9962,38.2955);

	this.instance_7 = new lib.Entérocyte();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-259.25,75.6,0.9963,0.9963,36.2467);

	this.instance_8 = new lib.Entérocyte();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-253.5,79.85,0.9967,0.9967,29.7183);

	this.instance_9 = new lib.Entérocyte();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-248,84.35,0.997,0.997,35.7728);

	this.instance_10 = new lib.Entérocyte();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-242.75,88.6,0.997,0.997,35.2628);

	this.instance_11 = new lib.Entérocyte();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-236.5,93.35,0.997,0.997,35.2628);

	this.instance_12 = new lib.Entérocyte();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-224.25,101.1,0.9972,0.9972,32.7055);

	this.instance_13 = new lib.Entérocyte();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-230.25,97.6,0.9972,0.9972,32.7055);

	this.instance_14 = new lib.Entérocyte();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-218,105.1,0.9975,0.9975,37.2359);

	this.instance_15 = new lib.Entérocyte();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-212.75,110.1,0.9977,0.9977,40.5228);

	this.instance_16 = new lib.Entérocyte();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-206.75,114.6,0.9979,0.9979,36.5201);

	this.instance_17 = new lib.Entérocyte();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-201,118.6,0.998,0.998,34.2494);

	this.instance_18 = new lib.Entérocyte();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-194.75,121.85,0.9984,0.9984,28.4695);

	this.instance_19 = new lib.Entérocyte();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-188,124.6,0.9985,0.9985,25.9248);

	this.instance_20 = new lib.Entérocyte();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-181.25,126.85,0.9985,0.9985,25.9248);

	this.instance_21 = new lib.Entérocyte();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-174,128.85,0.9988,0.9988,21.4139);

	this.instance_22 = new lib.Entérocyte();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-167,130.85,0.999,0.999,16.6376);

	this.instance_23 = new lib.Entérocyte();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-160.25,132.1,0.9992,0.9992,13.0968);

	this.instance_24 = new lib.Entérocyte();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-152.75,133.6,0.9995,0.9995,9.566);

	this.instance_25 = new lib.Entérocyte();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-137.5,136.6,0.9995,0.9995,9.566);

	this.instance_26 = new lib.Entérocyte();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-145.25,134.85,0.9995,0.9995,9.566);

	this.instance_27 = new lib.Entérocyte();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-130.25,137.1);

	this.instance_28 = new lib.Entérocyte();
	this.instance_28.parent = this;
	this.instance_28.setTransform(285.05,49.35,0.9959,0.9959,0,-42.5903,137.4097);

	this.instance_29 = new lib.Entérocyte();
	this.instance_29.parent = this;
	this.instance_29.setTransform(279.55,54.6,0.9959,0.9959,0,-42.5903,137.4097);

	this.instance_30 = new lib.Entérocyte();
	this.instance_30.parent = this;
	this.instance_30.setTransform(274.55,59.1,0.9959,0.9959,0,-42.5903,137.4097);

	this.instance_31 = new lib.Entérocyte();
	this.instance_31.parent = this;
	this.instance_31.setTransform(269.8,64.6,0.9959,0.9959,0,-42.5903,137.4097);

	this.instance_32 = new lib.Entérocyte();
	this.instance_32.parent = this;
	this.instance_32.setTransform(264.8,70.35,0.9962,0.9962,0,-38.2955,141.7045);

	this.instance_33 = new lib.Entérocyte();
	this.instance_33.parent = this;
	this.instance_33.setTransform(259.3,75.1,0.9963,0.9963,0,-36.2467,143.7533);

	this.instance_34 = new lib.Entérocyte();
	this.instance_34.parent = this;
	this.instance_34.setTransform(253.55,79.35,0.9967,0.9967,0,-29.7183,150.2817);

	this.instance_35 = new lib.Entérocyte();
	this.instance_35.parent = this;
	this.instance_35.setTransform(248.05,83.85,0.997,0.997,0,-35.7728,144.2272);

	this.instance_36 = new lib.Entérocyte();
	this.instance_36.parent = this;
	this.instance_36.setTransform(242.8,88.1,0.997,0.997,0,-35.2628,144.7372);

	this.instance_37 = new lib.Entérocyte();
	this.instance_37.parent = this;
	this.instance_37.setTransform(236.55,92.85,0.997,0.997,0,-35.2628,144.7372);

	this.instance_38 = new lib.Entérocyte();
	this.instance_38.parent = this;
	this.instance_38.setTransform(224.3,100.6,0.9972,0.9972,0,-32.7055,147.2945);

	this.instance_39 = new lib.Entérocyte();
	this.instance_39.parent = this;
	this.instance_39.setTransform(230.3,97.1,0.9972,0.9972,0,-32.7055,147.2945);

	this.instance_40 = new lib.Entérocyte();
	this.instance_40.parent = this;
	this.instance_40.setTransform(218.05,104.6,0.9975,0.9975,0,-37.2359,142.7641);

	this.instance_41 = new lib.Entérocyte();
	this.instance_41.parent = this;
	this.instance_41.setTransform(212.8,109.6,0.9977,0.9977,0,-40.5228,139.4772);

	this.instance_42 = new lib.Entérocyte();
	this.instance_42.parent = this;
	this.instance_42.setTransform(206.8,114.1,0.9979,0.9979,0,-36.5201,143.4799);

	this.instance_43 = new lib.Entérocyte();
	this.instance_43.parent = this;
	this.instance_43.setTransform(201.05,118.1,0.998,0.998,0,-34.2494,145.7506);

	this.instance_44 = new lib.Entérocyte();
	this.instance_44.parent = this;
	this.instance_44.setTransform(194.8,121.35,0.9984,0.9984,0,-28.4695,151.5305);

	this.instance_45 = new lib.Entérocyte();
	this.instance_45.parent = this;
	this.instance_45.setTransform(188.05,124.1,0.9985,0.9985,0,-25.9248,154.0752);

	this.instance_46 = new lib.Entérocyte();
	this.instance_46.parent = this;
	this.instance_46.setTransform(181.3,126.35,0.9985,0.9985,0,-25.9248,154.0752);

	this.instance_47 = new lib.Entérocyte();
	this.instance_47.parent = this;
	this.instance_47.setTransform(174.05,128.35,0.9988,0.9988,0,-21.4139,158.5861);

	this.instance_48 = new lib.Entérocyte();
	this.instance_48.parent = this;
	this.instance_48.setTransform(167.05,130.35,0.999,0.999,0,-16.6376,163.3625);

	this.instance_49 = new lib.Entérocyte();
	this.instance_49.parent = this;
	this.instance_49.setTransform(160.3,131.6,0.9992,0.9992,0,-13.0968,166.9032);

	this.instance_50 = new lib.Entérocyte();
	this.instance_50.parent = this;
	this.instance_50.setTransform(152.8,133.1,0.9995,0.9995,0,-9.566,170.434);

	this.instance_51 = new lib.Entérocyte();
	this.instance_51.parent = this;
	this.instance_51.setTransform(137.55,136.1,0.9995,0.9995,0,-9.566,170.434);

	this.instance_52 = new lib.Entérocyte();
	this.instance_52.parent = this;
	this.instance_52.setTransform(145.3,134.35,0.9995,0.9995,0,-9.566,170.434);

	this.instance_53 = new lib.Entérocyte();
	this.instance_53.parent = this;
	this.instance_53.setTransform(130.3,136.6,1,1,0,0,180);

	this.instance_54 = new lib.Entérocyte();
	this.instance_54.parent = this;
	this.instance_54.setTransform(4.8,-136.65,1.0629,1.0262,0,1.1724,174.4262);

	this.instance_55 = new lib.Entérocyte();
	this.instance_55.parent = this;
	this.instance_55.setTransform(12.8,-136.15,1.0635,1.0267,0,8.4289,-178.3185);

	this.instance_56 = new lib.Entérocyte();
	this.instance_56.parent = this;
	this.instance_56.setTransform(20.05,-134.65,1.064,1.0273,0,18.2339,-168.513);

	this.instance_57 = new lib.Entérocyte();
	this.instance_57.parent = this;
	this.instance_57.setTransform(27.55,-133.4,1.0645,1.0278,0,26.0298,-160.7176);

	this.instance_58 = new lib.Entérocyte();
	this.instance_58.parent = this;
	this.instance_58.setTransform(35.3,-130.9,1.065,1.0282,0,33.0691,-153.678);

	this.instance_59 = new lib.Entérocyte();
	this.instance_59.parent = this;
	this.instance_59.setTransform(43.05,-127.9,1.0652,1.0284,0,36.8781,-149.8685);

	this.instance_60 = new lib.Entérocyte();
	this.instance_60.parent = this;
	this.instance_60.setTransform(50.3,-123.9,1.0654,1.0286,0,40.6302,-146.1158);

	this.instance_61 = new lib.Entérocyte();
	this.instance_61.parent = this;
	this.instance_61.setTransform(56.55,-119.15,1.0657,1.0289,0,45.6753,-141.0697);

	this.instance_62 = new lib.Entérocyte();
	this.instance_62.parent = this;
	this.instance_62.setTransform(62.3,-113.65,1.0662,1.0294,0,53.9319,-132.813);

	this.instance_63 = new lib.Entérocyte();
	this.instance_63.parent = this;
	this.instance_63.setTransform(67.55,-107.9,1.0664,1.0296,0,56.6959,-130.0488);

	this.instance_64 = new lib.Entérocyte();
	this.instance_64.parent = this;
	this.instance_64.setTransform(72.55,-101.9,1.0666,1.0298,0,61.2586,-125.486);

	this.instance_65 = new lib.Entérocyte();
	this.instance_65.parent = this;
	this.instance_65.setTransform(77.05,-95.15,1.0669,1.0301,0,65.2951,-121.4494);

	this.instance_66 = new lib.Entérocyte();
	this.instance_66.parent = this;
	this.instance_66.setTransform(80.05,-87.9,1.0671,1.0303,0,69.353,-117.3913);

	this.instance_67 = new lib.Entérocyte();
	this.instance_67.parent = this;
	this.instance_67.setTransform(82.3,-80.15,1.0673,1.0305,0,72.1665,-114.5784);

	this.instance_68 = new lib.Entérocyte();
	this.instance_68.parent = this;
	this.instance_68.setTransform(84.55,-72.65,1.0675,1.0307,0,75.1676,-111.5777);

	this.instance_69 = new lib.Entérocyte();
	this.instance_69.parent = this;
	this.instance_69.setTransform(85.55,-64.65,1.0677,1.0309,0,78.1791,-108.566);

	this.instance_70 = new lib.Entérocyte();
	this.instance_70.parent = this;
	this.instance_70.setTransform(86.05,-56.9,1.068,1.0312,0,82.4896,-104.2556);

	this.instance_71 = new lib.Entérocyte();
	this.instance_71.parent = this;
	this.instance_71.setTransform(85.55,-49.15,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_72 = new lib.Entérocyte();
	this.instance_72.parent = this;
	this.instance_72.setTransform(84.55,-41.65,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_73 = new lib.Entérocyte();
	this.instance_73.parent = this;
	this.instance_73.setTransform(84.3,-34.15,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_74 = new lib.Entérocyte();
	this.instance_74.parent = this;
	this.instance_74.setTransform(83.55,-26.4,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_75 = new lib.Entérocyte();
	this.instance_75.parent = this;
	this.instance_75.setTransform(82.3,-18.4,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_76 = new lib.Entérocyte();
	this.instance_76.parent = this;
	this.instance_76.setTransform(81.3,-10.4,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_77 = new lib.Entérocyte();
	this.instance_77.parent = this;
	this.instance_77.setTransform(80.3,-2.4,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_78 = new lib.Entérocyte();
	this.instance_78.parent = this;
	this.instance_78.setTransform(79.05,5.1,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_79 = new lib.Entérocyte();
	this.instance_79.parent = this;
	this.instance_79.setTransform(78.05,13.1,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_80 = new lib.Entérocyte();
	this.instance_80.parent = this;
	this.instance_80.setTransform(76.8,20.6,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_81 = new lib.Entérocyte();
	this.instance_81.parent = this;
	this.instance_81.setTransform(74.8,35.85,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_82 = new lib.Entérocyte();
	this.instance_82.parent = this;
	this.instance_82.setTransform(73.05,43.6,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_83 = new lib.Entérocyte();
	this.instance_83.parent = this;
	this.instance_83.setTransform(75.8,28.1,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_84 = new lib.Entérocyte();
	this.instance_84.parent = this;
	this.instance_84.setTransform(71.3,51.35,1.0682,1.0314,0,85.9992,-100.7464);

	this.instance_85 = new lib.Entérocyte();
	this.instance_85.parent = this;
	this.instance_85.setTransform(71.3,59.35,1.0686,1.0318,0,79.719,-107.026);

	this.instance_86 = new lib.Entérocyte();
	this.instance_86.parent = this;
	this.instance_86.setTransform(71.05,67.6,1.0688,1.032,0,76.424,-110.3213);

	this.instance_87 = new lib.Entérocyte();
	this.instance_87.parent = this;
	this.instance_87.setTransform(70.8,75.85,1.069,1.0321,0,73.4077,-113.3378);

	this.instance_88 = new lib.Entérocyte();
	this.instance_88.parent = this;
	this.instance_88.setTransform(72.3,83.85,1.0692,1.0323,0,70.362,-116.3833);

	this.instance_89 = new lib.Entérocyte();
	this.instance_89.parent = this;
	this.instance_89.setTransform(73.05,92.1,1.0694,1.0325,0,67.06,-119.6853);

	this.instance_90 = new lib.Entérocyte();
	this.instance_90.parent = this;
	this.instance_90.setTransform(74.55,100.1,1.0695,1.0327,0,64.7508,-121.9967);

	this.instance_91 = new lib.Entérocyte();
	this.instance_91.parent = this;
	this.instance_91.setTransform(77.05,107.1,1.07,1.033,0,57.9802,-128.7656);

	this.instance_92 = new lib.Entérocyte();
	this.instance_92.parent = this;
	this.instance_92.setTransform(79.8,114.6,1.0702,1.0333,0,54.1956,-132.5523);

	this.instance_93 = new lib.Entérocyte();
	this.instance_93.parent = this;
	this.instance_93.setTransform(83.55,121.85,1.0705,1.0336,0,49.667,-137.0812);

	this.instance_94 = new lib.Entérocyte();
	this.instance_94.parent = this;
	this.instance_94.setTransform(88.8,127.1,1.071,1.0341,0,41.3693,-145.3785);

	this.instance_95 = new lib.Entérocyte();
	this.instance_95.parent = this;
	this.instance_95.setTransform(94.8,131.35,1.0716,1.0346,0,31.8134,-154.9344);

	this.instance_96 = new lib.Entérocyte();
	this.instance_96.parent = this;
	this.instance_96.setTransform(102.3,134.35,1.0728,1.0359,0,22.5865,-164.1621);

	this.instance_97 = new lib.Entérocyte();
	this.instance_97.parent = this;
	this.instance_97.setTransform(109.55,136.1,1.0734,1.0364,0,13.2731,-173.4755);

	this.instance_98 = new lib.Entérocyte();
	this.instance_98.parent = this;
	this.instance_98.setTransform(116.3,137.1,0.9997,0.9997,0,4.2846,-175.7154);

	this.instance_99 = new lib.Entérocyte();
	this.instance_99.parent = this;
	this.instance_99.setTransform(122.8,137.1,1,1,0,0,180);

	this.instance_100 = new lib.Entérocyte();
	this.instance_100.parent = this;
	this.instance_100.setTransform(-3.3,-136.7,1.0629,1.0262,0,-1.1724,5.5738);

	this.instance_101 = new lib.Entérocyte();
	this.instance_101.parent = this;
	this.instance_101.setTransform(-11.3,-136.2,1.0635,1.0267,0,-8.4289,-1.6814);

	this.instance_102 = new lib.Entérocyte();
	this.instance_102.parent = this;
	this.instance_102.setTransform(-18.55,-134.7,1.064,1.0273,0,-18.2339,-11.487);

	this.instance_103 = new lib.Entérocyte();
	this.instance_103.parent = this;
	this.instance_103.setTransform(-26.05,-133.45,1.0645,1.0278,0,-26.0298,-19.2824);

	this.instance_104 = new lib.Entérocyte();
	this.instance_104.parent = this;
	this.instance_104.setTransform(-33.8,-130.95,1.065,1.0282,0,-33.0691,-26.322);

	this.instance_105 = new lib.Entérocyte();
	this.instance_105.parent = this;
	this.instance_105.setTransform(-41.55,-127.95,1.0652,1.0284,0,-36.8781,-30.1315);

	this.instance_106 = new lib.Entérocyte();
	this.instance_106.parent = this;
	this.instance_106.setTransform(-48.8,-123.95,1.0654,1.0286,0,-40.6301,-33.8842);

	this.instance_107 = new lib.Entérocyte();
	this.instance_107.parent = this;
	this.instance_107.setTransform(-55.05,-119.2,1.0657,1.0289,0,-45.6753,-38.9303);

	this.instance_108 = new lib.Entérocyte();
	this.instance_108.parent = this;
	this.instance_108.setTransform(-60.8,-113.7,1.0662,1.0294,0,-53.9319,-47.187);

	this.instance_109 = new lib.Entérocyte();
	this.instance_109.parent = this;
	this.instance_109.setTransform(-66.05,-107.95,1.0664,1.0296,0,-56.6959,-49.9512);

	this.instance_110 = new lib.Entérocyte();
	this.instance_110.parent = this;
	this.instance_110.setTransform(-71.05,-101.95,1.0666,1.0298,0,-61.2586,-54.514);

	this.instance_111 = new lib.Entérocyte();
	this.instance_111.parent = this;
	this.instance_111.setTransform(-75.55,-95.2,1.0669,1.0301,0,-65.2951,-58.5505);

	this.instance_112 = new lib.Entérocyte();
	this.instance_112.parent = this;
	this.instance_112.setTransform(-78.55,-87.95,1.0671,1.0303,0,-69.353,-62.6087);

	this.instance_113 = new lib.Entérocyte();
	this.instance_113.parent = this;
	this.instance_113.setTransform(-80.8,-80.2,1.0673,1.0305,0,-72.1665,-65.4215);

	this.instance_114 = new lib.Entérocyte();
	this.instance_114.parent = this;
	this.instance_114.setTransform(-83.05,-72.7,1.0675,1.0307,0,-75.1676,-68.4223);

	this.instance_115 = new lib.Entérocyte();
	this.instance_115.parent = this;
	this.instance_115.setTransform(-84.05,-64.7,1.0677,1.0309,0,-78.1791,-71.434);

	this.instance_116 = new lib.Entérocyte();
	this.instance_116.parent = this;
	this.instance_116.setTransform(-84.55,-56.95,1.068,1.0312,0,-82.4896,-75.7444);

	this.instance_117 = new lib.Entérocyte();
	this.instance_117.parent = this;
	this.instance_117.setTransform(-84.05,-49.2,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_118 = new lib.Entérocyte();
	this.instance_118.parent = this;
	this.instance_118.setTransform(-83.05,-41.7,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_119 = new lib.Entérocyte();
	this.instance_119.parent = this;
	this.instance_119.setTransform(-82.8,-34.2,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_120 = new lib.Entérocyte();
	this.instance_120.parent = this;
	this.instance_120.setTransform(-82.05,-26.45,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_121 = new lib.Entérocyte();
	this.instance_121.parent = this;
	this.instance_121.setTransform(-80.8,-18.45,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_122 = new lib.Entérocyte();
	this.instance_122.parent = this;
	this.instance_122.setTransform(-79.8,-10.45,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_123 = new lib.Entérocyte();
	this.instance_123.parent = this;
	this.instance_123.setTransform(-78.8,-2.45,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_124 = new lib.Entérocyte();
	this.instance_124.parent = this;
	this.instance_124.setTransform(-77.55,5.05,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_125 = new lib.Entérocyte();
	this.instance_125.parent = this;
	this.instance_125.setTransform(-76.55,13.05,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_126 = new lib.Entérocyte();
	this.instance_126.parent = this;
	this.instance_126.setTransform(-75.3,20.55,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_127 = new lib.Entérocyte();
	this.instance_127.parent = this;
	this.instance_127.setTransform(-73.3,35.8,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_128 = new lib.Entérocyte();
	this.instance_128.parent = this;
	this.instance_128.setTransform(-71.55,43.55,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_129 = new lib.Entérocyte();
	this.instance_129.parent = this;
	this.instance_129.setTransform(-74.3,28.05,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_130 = new lib.Entérocyte();
	this.instance_130.parent = this;
	this.instance_130.setTransform(-69.8,51.3,1.0682,1.0314,0,-85.9992,-79.2536);

	this.instance_131 = new lib.Entérocyte();
	this.instance_131.parent = this;
	this.instance_131.setTransform(-69.8,59.3,1.0686,1.0318,0,-79.719,-72.974);

	this.instance_132 = new lib.Entérocyte();
	this.instance_132.parent = this;
	this.instance_132.setTransform(-69.55,67.55,1.0688,1.032,0,-76.424,-69.6787);

	this.instance_133 = new lib.Entérocyte();
	this.instance_133.parent = this;
	this.instance_133.setTransform(-69.3,75.8,1.069,1.0321,0,-73.4077,-66.6622);

	this.instance_134 = new lib.Entérocyte();
	this.instance_134.parent = this;
	this.instance_134.setTransform(-70.8,83.8,1.0692,1.0323,0,-70.362,-63.6167);

	this.instance_135 = new lib.Entérocyte();
	this.instance_135.parent = this;
	this.instance_135.setTransform(-71.55,92.05,1.0694,1.0325,0,-67.06,-60.3147);

	this.instance_136 = new lib.Entérocyte();
	this.instance_136.parent = this;
	this.instance_136.setTransform(-73.05,100.05,1.0695,1.0327,0,-64.7508,-58.0033);

	this.instance_137 = new lib.Entérocyte();
	this.instance_137.parent = this;
	this.instance_137.setTransform(-75.55,107.05,1.07,1.033,0,-57.9802,-51.2344);

	this.instance_138 = new lib.Entérocyte();
	this.instance_138.parent = this;
	this.instance_138.setTransform(-78.3,114.55,1.0702,1.0333,0,-54.1956,-47.4477);

	this.instance_139 = new lib.Entérocyte();
	this.instance_139.parent = this;
	this.instance_139.setTransform(-82.05,121.8,1.0705,1.0336,0,-49.667,-42.9188);

	this.instance_140 = new lib.Entérocyte();
	this.instance_140.parent = this;
	this.instance_140.setTransform(-87.3,127.05,1.071,1.0341,0,-41.3693,-34.6215);

	this.instance_141 = new lib.Entérocyte();
	this.instance_141.parent = this;
	this.instance_141.setTransform(-93.3,131.3,1.0716,1.0346,0,-31.8134,-25.0656);

	this.instance_142 = new lib.Entérocyte();
	this.instance_142.parent = this;
	this.instance_142.setTransform(-100.8,134.3,1.0728,1.0359,0,-22.5865,-15.8379);

	this.instance_143 = new lib.Entérocyte();
	this.instance_143.parent = this;
	this.instance_143.setTransform(-108.05,136.05,1.0734,1.0364,0,-13.2731,-6.5245);

	this.instance_144 = new lib.Entérocyte();
	this.instance_144.parent = this;
	this.instance_144.setTransform(-114.8,137.05,0.9997,0.9997,-4.2846);

	this.instance_145 = new lib.Entérocyte();
	this.instance_145.parent = this;
	this.instance_145.setTransform(-121.3,137.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305.6,-146.2,599.8,292.6);


// stage content:
(lib.Villosite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var g1 = bol.bind(this);
				
				function bol()
				{
					this.cercle4.rotation++;
					this.cercle2.rotation--;
					this.cercle.rotation++;
					
					//stage.update(event); // important!!
					}
				
				
			createjs.Ticker.addEventListener("tick",g1 );	
				
				
			this.bouton.addEventListener("click",gh);
					function gh()
				{
		this.play();
					}		
					
					
					
					
					
					
				/*this.rondRouge.addEventListener("click",togglePause.bind(this));
				function togglePause()
					{
						
						createjs.Ticker.removeEventListener("tick",g1);
		
					}*/
		
				 //this.rotation += this.cercle4._x/100
	}
	this.frame_145 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(145).call(this.frame_145).wait(1));

	// Calque_3
	this.instance = new lib.CachedTexturedBitmap_207();
	this.instance.parent = this;
	this.instance.setTransform(9.5,21.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146));

	// Titre
	this.text = new cjs.Text("Une villosité intestinale", "bold 18px 'Arial Black'");
	this.text.lineHeight = 27;
	this.text.lineWidth = 298;
	this.text.parent = this;
	this.text.setTransform(12,2.75);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(146));

	// Copyright_2
	this.text_1 = new cjs.Text("F. Pellegrin\nhttps://svtanim.fr", "italic 9px 'Times New Roman'");
	this.text_1.lineHeight = 11;
	this.text_1.lineWidth = 104;
	this.text_1.parent = this;
	this.text_1.setTransform(478.65,9.25);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(146));

	// Copyright
	this.text_2 = new cjs.Text("CC-BY-NC", "italic 10px 'Arial'");
	this.text_2.lineHeight = 13;
	this.text_2.lineWidth = 73;
	this.text_2.parent = this;
	this.text_2.setTransform(482.05,49.05);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(146));

	// Cadre
	this.instance_1 = new lib.CachedTexturedBitmap_208();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-662.25,-266.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(146));

	// Accolade
	this.instance_2 = new lib.CachedTexturedBitmap_209();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375.9,34.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(146));

	// Légendes
	this.text_3 = new cjs.Text("Villosité", "bold 15px 'Arial Black'");
	this.text_3.lineHeight = 23;
	this.text_3.lineWidth = 122;
	this.text_3.parent = this;
	this.text_3.setTransform(403.95,147.5);

	this.text_4 = new cjs.Text("Lumière intestin grêle", "bold 15px 'Arial Black'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 23;
	this.text_4.lineWidth = 122;
	this.text_4.parent = this;
	this.text_4.setTransform(87.45,58.6);

	this.text_5 = new cjs.Text("Sang sortant", "bold 15px 'Arial Black'");
	this.text_5.lineHeight = 23;
	this.text_5.lineWidth = 134;
	this.text_5.parent = this;
	this.text_5.setTransform(440.95,310.5);

	this.text_6 = new cjs.Text("Sang arrivant", "bold 15px 'Arial Black'");
	this.text_6.lineHeight = 23;
	this.text_6.lineWidth = 122;
	this.text_6.parent = this;
	this.text_6.setTransform(10,324.5);

	this.instance_3 = new lib.Nutriment("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(431.85,221.35,1,1,0,0,0,-2.1,1.9);

	this.text_7 = new cjs.Text("Nutriments", "bold 15px 'Arial Black'");
	this.text_7.lineHeight = 23;
	this.text_7.lineWidth = 122;
	this.text_7.parent = this;
	this.text_7.setTransform(439.8,211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_7},{t:this.instance_3},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3}]}).wait(146));

	// Mvt_N_remontant
	this.instance_4 = new lib.MvtNremontant();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-77,365.8,1,1,0,0,0,-354,166.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).wait(74));

	// Mvt_N_remontant
	this.instance_5 = new lib.MvtNremontant();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-77,365.8,1,1,0,0,0,-354,166.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(145));

	// Mvt_N_traversant
	this.instance_6 = new lib.MvtNtraversant();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-91,366.25,1,1,0,0,0,-367,165.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85).to({_off:false},0).wait(61));

	// Mvt_N_traversant
	this.instance_7 = new lib.MvtNtraversant();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-91,366.25,1,1,0,0,0,-367,165.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(56).to({_off:false},0).wait(90));

	// Mvt_N_traversant
	this.instance_8 = new lib.MvtNtraversant();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-91,366.25,1,1,0,0,0,-367,165.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(145));

	// Clip_non_entrée
	this.instance_9 = new lib.MvtNnonentrant();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-67.5,25.85,1,1,0,0,0,-342,-174);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).wait(27));

	// Clip_non_entrée
	this.instance_10 = new lib.MvtNnonentrant();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-64.5,27.35,1,1,0,0,0,-342,-174);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(95).to({_off:false},0).wait(51));

	// Clip_non_entrée
	this.instance_11 = new lib.MvtNnonentrant();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-61.75,22.35,1,1,0,0,0,-342,-174);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(71).to({_off:false},0).wait(75));

	// Clip_non_entrée
	this.instance_12 = new lib.MvtNnonentrant();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-61.75,30.1,1,1,0,0,0,-342,-174);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).wait(99));

	// Clip_non_entrée
	this.instance_13 = new lib.MvtNnonentrant();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-63.25,18.85,1,1,0,0,0,-342,-174);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(23).to({_off:false},0).wait(123));

	// Clip_non_entrée
	this.instance_14 = new lib.MvtNnonentrant();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-67.5,25.85,1,1,0,0,0,-342,-174);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).wait(145));

	// Clip_entrée_N
	this.instance_15 = new lib.MvtNentrants();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-157.65,114.95,1,1,0,0,0,-433.1,-85.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(119).to({_off:false},0).wait(27));

	// Clip_entrée_N
	this.instance_16 = new lib.MvtNentrants();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-157.65,114.95,1,1,0,0,0,-433.1,-85.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(95).to({_off:false},0).wait(51));

	// Clip_entrée_N
	this.instance_17 = new lib.MvtNentrants();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-157.65,114.95,1,1,0,0,0,-433.1,-85.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(71).to({_off:false},0).wait(75));

	// Clip_entrée_N
	this.instance_18 = new lib.MvtNentrants();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-157.65,114.95,1,1,0,0,0,-433.1,-85.4);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(47).to({_off:false},0).wait(99));

	// Clip_entrée_N
	this.instance_19 = new lib.MvtNentrants();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-157.65,114.95,1,1,0,0,0,-433.1,-85.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(23).to({_off:false},0).wait(123));

	// Clip_entrée_N
	this.instance_20 = new lib.MvtNentrants();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-157.65,114.95,1,1,0,0,0,-433.1,-85.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).wait(145));

	// Cell_vaisseau
	this.instance_21 = new lib.Cellulevaisseau("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(146.45,347.1,0.9986,0.9987,-27.8458,0,0,-1.2,0.1);

	this.instance_22 = new lib.Cellulevaisseau("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(136.45,353.35,0.9986,0.9987,-27.8458,0,0,-1.2,0.1);

	this.instance_23 = new lib.Cellulevaisseau("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(140,354.05,1,1,-0.0009,0,0,-1.1,0.1);

	this.instance_24 = new lib.Cellulevaisseau("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(144.5,332.9,0.9975,0.9975,-17.818,0,0,-1,0.1);

	this.instance_25 = new lib.Cellulevaisseau("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(135.5,336.65,0.9977,0.9977,-21.3416,0,0,-1,0.1);

	this.instance_26 = new lib.Cellulevaisseau("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(124.7,341.45,0.9979,0.9979,-24.8691,0,0,-1.1,0.1);

	this.instance_27 = new lib.Cellulevaisseau("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(102.95,352.2,0.9982,0.9982,-20.8123,0,0,-1.1,0.1);

	this.instance_28 = new lib.Cellulevaisseau("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(175.45,352.8,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_29 = new lib.Cellulevaisseau("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(163.5,352.95,1,1,-0.0009,0,0,-1.1,0.1);

	this.instance_30 = new lib.Cellulevaisseau("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(152.25,353.55,1,1,-0.0009,0,0,-1.1,0.1);

	this.instance_31 = new lib.Cellulevaisseau("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(159.7,376.4,1,1,0,0,0,-1.1,0.1);

	this.instance_32 = new lib.Cellulevaisseau("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(147.7,376.4,1,1,0,0,0,-1.1,0.1);

	this.instance_33 = new lib.Cellulevaisseau("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(-34.2,375.4,1,1,0,0,0,-1.1,0.1);

	this.instance_34 = new lib.Cellulevaisseau("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(-22.45,375.55,1,1,0,0,0,-1.1,0.1);

	this.instance_35 = new lib.Cellulevaisseau("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(-10.3,375.55,1,1,0,0,0,-1.1,0.1);

	this.instance_36 = new lib.Cellulevaisseau("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(2.2,375.55,1,1,0,0,0,-1.1,0.1);

	this.instance_37 = new lib.Cellulevaisseau("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(14.55,375.75,1,1,0,0,0,-1.1,0.1);

	this.instance_38 = new lib.Cellulevaisseau("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(26.8,375.75,1,1,0,0,0,-1.1,0.1);

	this.instance_39 = new lib.Cellulevaisseau("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(39.3,375.75,1,1,0,0,0,-1.1,0.1);

	this.instance_40 = new lib.Cellulevaisseau("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(51.05,375.9,1,1,0,0,0,-1.1,0.1);

	this.instance_41 = new lib.Cellulevaisseau("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(63.2,375.9,1,1,0,0,0,-1.1,0.1);

	this.instance_42 = new lib.Cellulevaisseau("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(75.7,375.9,1,1,0,0,0,-1.1,0.1);

	this.instance_43 = new lib.Cellulevaisseau("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(87.7,375.9,1,1,0,0,0,-1.1,0.1);

	this.instance_44 = new lib.Cellulevaisseau("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(99.55,375.9,1,1,0,0,0,-1.1,0.1);

	this.instance_45 = new lib.Cellulevaisseau("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(111.7,375.9,1,1,0,0,0,-1.1,0.1);

	this.instance_46 = new lib.Cellulevaisseau("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(124.2,375.9,1,1,0,0,0,-1.1,0.1);

	this.instance_47 = new lib.Cellulevaisseau("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(136.2,375.9,1,1,0,0,0,-1.1,0.1);

	this.instance_48 = new lib.Cellulevaisseau("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(579.45,360.3,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_49 = new lib.Cellulevaisseau("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(576.45,383.05,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_50 = new lib.Cellulevaisseau("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(551.95,382.6,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_51 = new lib.Cellulevaisseau("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(554.95,359.6,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_52 = new lib.Cellulevaisseau("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(564.45,383.1,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_53 = new lib.Cellulevaisseau("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(539.95,382.3,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_54 = new lib.Cellulevaisseau("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(567.45,360.1,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_55 = new lib.Cellulevaisseau("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(542.7,359.55,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_56 = new lib.Cellulevaisseau("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(530.95,359.8,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_57 = new lib.Cellulevaisseau("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(527.95,382.55,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_58 = new lib.Cellulevaisseau("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(503.45,382.1,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_59 = new lib.Cellulevaisseau("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(506.45,359.1,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_60 = new lib.Cellulevaisseau("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(515.95,382.6,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_61 = new lib.Cellulevaisseau("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(491.45,381.8,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_62 = new lib.Cellulevaisseau("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(518.95,359.6,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_63 = new lib.Cellulevaisseau("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(494.2,359.05,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_64 = new lib.Cellulevaisseau("synched",0);
	this.instance_64.parent = this;
	this.instance_64.setTransform(482.95,359.05,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_65 = new lib.Cellulevaisseau("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(479.95,381.8,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_66 = new lib.Cellulevaisseau("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(455.45,381.35,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_67 = new lib.Cellulevaisseau("synched",0);
	this.instance_67.parent = this;
	this.instance_67.setTransform(458.45,358.35,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_68 = new lib.Cellulevaisseau("synched",0);
	this.instance_68.parent = this;
	this.instance_68.setTransform(467.95,381.85,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_69 = new lib.Cellulevaisseau("synched",0);
	this.instance_69.parent = this;
	this.instance_69.setTransform(443.45,381.05,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_70 = new lib.Cellulevaisseau("synched",0);
	this.instance_70.parent = this;
	this.instance_70.setTransform(470.95,358.85,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_71 = new lib.Cellulevaisseau("synched",0);
	this.instance_71.parent = this;
	this.instance_71.setTransform(446.2,358.3,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_72 = new lib.Cellulevaisseau("synched",0);
	this.instance_72.parent = this;
	this.instance_72.setTransform(434.7,358.8,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_73 = new lib.Cellulevaisseau("synched",0);
	this.instance_73.parent = this;
	this.instance_73.setTransform(431.7,381.55,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_74 = new lib.Cellulevaisseau("synched",0);
	this.instance_74.parent = this;
	this.instance_74.setTransform(407.2,381.1,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_75 = new lib.Cellulevaisseau("synched",0);
	this.instance_75.parent = this;
	this.instance_75.setTransform(410.2,358.1,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_76 = new lib.Cellulevaisseau("synched",0);
	this.instance_76.parent = this;
	this.instance_76.setTransform(419.7,381.6,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_77 = new lib.Cellulevaisseau("synched",0);
	this.instance_77.parent = this;
	this.instance_77.setTransform(395.2,380.8,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_78 = new lib.Cellulevaisseau("synched",0);
	this.instance_78.parent = this;
	this.instance_78.setTransform(422.7,358.6,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_79 = new lib.Cellulevaisseau("synched",0);
	this.instance_79.parent = this;
	this.instance_79.setTransform(397.95,358.05,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_80 = new lib.Cellulevaisseau("synched",0);
	this.instance_80.parent = this;
	this.instance_80.setTransform(383.7,380.55,0.999,0.999,7.5833,0,0,-1.1,0.1);

	this.instance_81 = new lib.Cellulevaisseau("synched",0);
	this.instance_81.parent = this;
	this.instance_81.setTransform(386.2,356.8,0.999,0.999,7.5833,0,0,-1.1,0.1);

	this.instance_82 = new lib.Cellulevaisseau("synched",0);
	this.instance_82.parent = this;
	this.instance_82.setTransform(374.2,355.55,0.999,0.999,7.5833,0,0,-1.1,0.1);

	this.instance_83 = new lib.Cellulevaisseau("synched",0);
	this.instance_83.parent = this;
	this.instance_83.setTransform(371.45,378.8,0.999,0.999,7.5833,0,0,-1.1,0.1);

	this.instance_84 = new lib.Cellulevaisseau("synched",0);
	this.instance_84.parent = this;
	this.instance_84.setTransform(359.7,377.3,0.999,0.999,7.5833,0,0,-1.1,0.1);

	this.instance_85 = new lib.Cellulevaisseau("synched",0);
	this.instance_85.parent = this;
	this.instance_85.setTransform(361.95,354.05,0.999,0.999,7.5833,0,0,-1.1,0.1);

	this.instance_86 = new lib.Cellulevaisseau("synched",0);
	this.instance_86.parent = this;
	this.instance_86.setTransform(347.45,377.05,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_87 = new lib.Cellulevaisseau("synched",0);
	this.instance_87.parent = this;
	this.instance_87.setTransform(349.95,354.3,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_88 = new lib.Cellulevaisseau("synched",0);
	this.instance_88.parent = this;
	this.instance_88.setTransform(338.45,355.05,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_89 = new lib.Cellulevaisseau("synched",0);
	this.instance_89.parent = this;
	this.instance_89.setTransform(335.45,377.8,0.9995,0.9995,-0.9316,0,0,-1.1,0.1);

	this.instance_90 = new lib.Cellulevaisseau("synched",0);
	this.instance_90.parent = this;
	this.instance_90.setTransform(310.95,377.35,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_91 = new lib.Cellulevaisseau("synched",0);
	this.instance_91.parent = this;
	this.instance_91.setTransform(313.95,354.35,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_92 = new lib.Cellulevaisseau("synched",0);
	this.instance_92.parent = this;
	this.instance_92.setTransform(323.45,377.85,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_93 = new lib.Cellulevaisseau("synched",0);
	this.instance_93.parent = this;
	this.instance_93.setTransform(298.95,377.05,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_94 = new lib.Cellulevaisseau("synched",0);
	this.instance_94.parent = this;
	this.instance_94.setTransform(286.95,377.05,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_95 = new lib.Cellulevaisseau("synched",0);
	this.instance_95.parent = this;
	this.instance_95.setTransform(275.95,376.8,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_96 = new lib.Cellulevaisseau("synched",0);
	this.instance_96.parent = this;
	this.instance_96.setTransform(264.95,376.55,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_97 = new lib.Cellulevaisseau("synched",0);
	this.instance_97.parent = this;
	this.instance_97.setTransform(326.45,354.85,0.9998,0.9998,3.854,0,0,-1.1,0.1);

	this.instance_98 = new lib.Cellulevaisseau("synched",0);
	this.instance_98.parent = this;
	this.instance_98.setTransform(301.7,354.3,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_99 = new lib.Cellulevaisseau("synched",0);
	this.instance_99.parent = this;
	this.instance_99.setTransform(290.7,354.05,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_100 = new lib.Cellulevaisseau("synched",0);
	this.instance_100.parent = this;
	this.instance_100.setTransform(279.7,353.8,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_101 = new lib.Cellulevaisseau("synched",0);
	this.instance_101.parent = this;
	this.instance_101.setTransform(267.95,354.05,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_102 = new lib.Cellulevaisseau("synched",0);
	this.instance_102.parent = this;
	this.instance_102.setTransform(255.95,354.05,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_103 = new lib.Cellulevaisseau("synched",0);
	this.instance_103.parent = this;
	this.instance_103.setTransform(244.95,353.8,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_104 = new lib.Cellulevaisseau("synched",0);
	this.instance_104.parent = this;
	this.instance_104.setTransform(233.95,353.55,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_105 = new lib.Cellulevaisseau("synched",0);
	this.instance_105.parent = this;
	this.instance_105.setTransform(253.2,376.8,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_106 = new lib.Cellulevaisseau("synched",0);
	this.instance_106.parent = this;
	this.instance_106.setTransform(241.2,376.8,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_107 = new lib.Cellulevaisseau("synched",0);
	this.instance_107.parent = this;
	this.instance_107.setTransform(230.2,376.55,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_108 = new lib.Cellulevaisseau("synched",0);
	this.instance_108.parent = this;
	this.instance_108.setTransform(219.2,376.3,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_109 = new lib.Cellulevaisseau("synched",0);
	this.instance_109.parent = this;
	this.instance_109.setTransform(222.2,353.55,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_110 = new lib.Cellulevaisseau("synched",0);
	this.instance_110.parent = this;
	this.instance_110.setTransform(207.7,376.05,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_111 = new lib.Cellulevaisseau("synched",0);
	this.instance_111.parent = this;
	this.instance_111.setTransform(195.95,375.8,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_112 = new lib.Cellulevaisseau("synched",0);
	this.instance_112.parent = this;
	this.instance_112.setTransform(210.45,353.3,0.9998,0.9998,3.0602,0,0,-1.1,0.1);

	this.instance_113 = new lib.Cellulevaisseau("synched",0);
	this.instance_113.parent = this;
	this.instance_113.setTransform(198.5,353.45,1,1,-0.0009,0,0,-1.1,0.1);

	this.instance_114 = new lib.Cellulevaisseau("synched",0);
	this.instance_114.parent = this;
	this.instance_114.setTransform(183.95,376.25,1,1,-0.0009,0,0,-1.1,0.1);

	this.instance_115 = new lib.Cellulevaisseau("synched",0);
	this.instance_115.parent = this;
	this.instance_115.setTransform(186.75,353.05,1,1,-0.0009,0,0,-1.1,0.1);

	this.instance_116 = new lib.Cellulevaisseau("synched",0);
	this.instance_116.parent = this;
	this.instance_116.setTransform(172.45,376.75,1,1,-0.0009,0,0,-1.1,0.1);

	this.instance_117 = new lib.Cellulevaisseau("synched",0);
	this.instance_117.parent = this;
	this.instance_117.setTransform(-63.45,352.9,1,1,0,0,0,-1.1,0.1);

	this.instance_118 = new lib.Cellulevaisseau("synched",0);
	this.instance_118.parent = this;
	this.instance_118.setTransform(-51.2,352.9,1,1,0,0,0,-1.1,0.1);

	this.instance_119 = new lib.Cellulevaisseau("synched",0);
	this.instance_119.parent = this;
	this.instance_119.setTransform(-38.7,352.9,1,1,0,0,0,-1.1,0.1);

	this.instance_120 = new lib.Cellulevaisseau("synched",0);
	this.instance_120.parent = this;
	this.instance_120.setTransform(-26.95,353.05,1,1,0,0,0,-1.1,0.1);

	this.instance_121 = new lib.Cellulevaisseau("synched",0);
	this.instance_121.parent = this;
	this.instance_121.setTransform(-14.8,353.05,1,1,0,0,0,-1.1,0.1);

	this.instance_122 = new lib.Cellulevaisseau("synched",0);
	this.instance_122.parent = this;
	this.instance_122.setTransform(-4.8,353.05,1,1,0,0,0,-1.1,0.1);

	this.instance_123 = new lib.Cellulevaisseau("synched",0);
	this.instance_123.parent = this;
	this.instance_123.setTransform(7.55,353.25,1,1,0,0,0,-1.1,0.1);

	this.instance_124 = new lib.Cellulevaisseau("synched",0);
	this.instance_124.parent = this;
	this.instance_124.setTransform(19.8,353.25,1,1,0,0,0,-1.1,0.1);

	this.instance_125 = new lib.Cellulevaisseau("synched",0);
	this.instance_125.parent = this;
	this.instance_125.setTransform(32.3,353.25,1,1,0,0,0,-1.1,0.1);

	this.instance_126 = new lib.Cellulevaisseau("synched",0);
	this.instance_126.parent = this;
	this.instance_126.setTransform(44.05,353.4,1,1,0,0,0,-1.1,0.1);

	this.instance_127 = new lib.Cellulevaisseau("synched",0);
	this.instance_127.parent = this;
	this.instance_127.setTransform(56.2,353.4,1,1,0,0,0,-1.1,0.1);

	this.instance_128 = new lib.Cellulevaisseau("synched",0);
	this.instance_128.parent = this;
	this.instance_128.setTransform(68.7,353.4,1,1,0,0,0,-1.1,0.1);

	this.instance_129 = new lib.Cellulevaisseau("synched",0);
	this.instance_129.parent = this;
	this.instance_129.setTransform(80.7,353.4,1,1,0,0,0,-1.1,0.1);

	this.instance_130 = new lib.Cellulevaisseau("synched",0);
	this.instance_130.parent = this;
	this.instance_130.setTransform(92.55,353.4,1,1,0,0,0,-1.1,0.1);

	this.instance_131 = new lib.Cellulevaisseau("synched",0);
	this.instance_131.parent = this;
	this.instance_131.setTransform(113.95,347.2,0.9979,0.9979,-24.8691,0,0,-1.1,0.1);

	this.instance_132 = new lib.Cellulevaisseau("synched",0);
	this.instance_132.parent = this;
	this.instance_132.setTransform(512.65,341.5,1,1,0,0,0,-1.1,0.1);

	this.instance_133 = new lib.Cellulevaisseau("synched",0);
	this.instance_133.parent = this;
	this.instance_133.setTransform(524.9,341.5,1,1,0,0,0,-1.1,0.1);

	this.instance_134 = new lib.Cellulevaisseau("synched",0);
	this.instance_134.parent = this;
	this.instance_134.setTransform(537.4,341.5,1,1,0,0,0,-1.1,0.1);

	this.instance_135 = new lib.Cellulevaisseau("synched",0);
	this.instance_135.parent = this;
	this.instance_135.setTransform(549.15,341.65,1,1,0,0,0,-1.1,0.1);

	this.instance_136 = new lib.Cellulevaisseau("synched",0);
	this.instance_136.parent = this;
	this.instance_136.setTransform(561.3,341.65,1,1,0,0,0,-1.1,0.1);

	this.instance_137 = new lib.Cellulevaisseau("synched",0);
	this.instance_137.parent = this;
	this.instance_137.setTransform(573.8,341.65,1,1,0,0,0,-1.1,0.1);

	this.instance_138 = new lib.Cellulevaisseau("synched",0);
	this.instance_138.parent = this;
	this.instance_138.setTransform(439.15,341.5,1,1,0,0,0,-1.1,0.1);

	this.instance_139 = new lib.Cellulevaisseau("synched",0);
	this.instance_139.parent = this;
	this.instance_139.setTransform(451.4,341.5,1,1,0,0,0,-1.1,0.1);

	this.instance_140 = new lib.Cellulevaisseau("synched",0);
	this.instance_140.parent = this;
	this.instance_140.setTransform(463.9,341.5,1,1,0,0,0,-1.1,0.1);

	this.instance_141 = new lib.Cellulevaisseau("synched",0);
	this.instance_141.parent = this;
	this.instance_141.setTransform(475.65,341.65,1,1,0,0,0,-1.1,0.1);

	this.instance_142 = new lib.Cellulevaisseau("synched",0);
	this.instance_142.parent = this;
	this.instance_142.setTransform(487.8,341.65,1,1,0,0,0,-1.1,0.1);

	this.instance_143 = new lib.Cellulevaisseau("synched",0);
	this.instance_143.parent = this;
	this.instance_143.setTransform(500.3,341.65,1,1,0,0,0,-1.1,0.1);

	this.instance_144 = new lib.Cellulevaisseau("synched",0);
	this.instance_144.parent = this;
	this.instance_144.setTransform(514.75,328.25,1,1,0,0,0,-1.1,0.1);

	this.instance_145 = new lib.Cellulevaisseau("synched",0);
	this.instance_145.parent = this;
	this.instance_145.setTransform(527,328.25,1,1,0,0,0,-1.1,0.1);

	this.instance_146 = new lib.Cellulevaisseau("synched",0);
	this.instance_146.parent = this;
	this.instance_146.setTransform(539.5,328.25,1,1,0,0,0,-1.1,0.1);

	this.instance_147 = new lib.Cellulevaisseau("synched",0);
	this.instance_147.parent = this;
	this.instance_147.setTransform(551.25,328.4,1,1,0,0,0,-1.1,0.1);

	this.instance_148 = new lib.Cellulevaisseau("synched",0);
	this.instance_148.parent = this;
	this.instance_148.setTransform(563.4,328.4,1,1,0,0,0,-1.1,0.1);

	this.instance_149 = new lib.Cellulevaisseau("synched",0);
	this.instance_149.parent = this;
	this.instance_149.setTransform(575.9,328.4,1,1,0,0,0,-1.1,0.1);

	this.instance_150 = new lib.Cellulevaisseau("synched",0);
	this.instance_150.parent = this;
	this.instance_150.setTransform(441.25,328.25,1,1,0,0,0,-1.1,0.1);

	this.instance_151 = new lib.Cellulevaisseau("synched",0);
	this.instance_151.parent = this;
	this.instance_151.setTransform(453.5,328.25,1,1,0,0,0,-1.1,0.1);

	this.instance_152 = new lib.Cellulevaisseau("synched",0);
	this.instance_152.parent = this;
	this.instance_152.setTransform(466,328.25,1,1,0,0,0,-1.1,0.1);

	this.instance_153 = new lib.Cellulevaisseau("synched",0);
	this.instance_153.parent = this;
	this.instance_153.setTransform(477.75,328.4,1,1,0,0,0,-1.1,0.1);

	this.instance_154 = new lib.Cellulevaisseau("synched",0);
	this.instance_154.parent = this;
	this.instance_154.setTransform(489.9,328.4,1,1,0,0,0,-1.1,0.1);

	this.instance_155 = new lib.Cellulevaisseau("synched",0);
	this.instance_155.parent = this;
	this.instance_155.setTransform(502.4,328.4,1,1,0,0,0,-1.1,0.1);

	this.instance_156 = new lib.Cellulevaisseau("synched",0);
	this.instance_156.parent = this;
	this.instance_156.setTransform(292,253.45,0.9827,0.9827,0,-139.1655,40.8345,-1.1,0.1);

	this.instance_157 = new lib.Cellulevaisseau("synched",0);
	this.instance_157.parent = this;
	this.instance_157.setTransform(277.75,247.8,0.9819,0.9819,0,153.1248,-26.8752,-1,0.1);

	this.instance_158 = new lib.Cellulevaisseau("synched",0);
	this.instance_158.parent = this;
	this.instance_158.setTransform(252.9,227.1,0.9802,0.9802,0,-178.1883,1.8117,-1.2,0.1);

	this.instance_159 = new lib.Cellulevaisseau("synched",0);
	this.instance_159.parent = this;
	this.instance_159.setTransform(263.25,228.1,0.9813,0.9813,0,-158.4102,21.5898,-1.2,0.1);

	this.instance_160 = new lib.Cellulevaisseau("synched",0);
	this.instance_160.parent = this;
	this.instance_160.setTransform(265.75,219.1,0.9801,0.9801,0,178.7939,-1.2061,-1.2,0.1);

	this.instance_161 = new lib.Cellulevaisseau("synched",0);
	this.instance_161.parent = this;
	this.instance_161.setTransform(276.25,220.35,0.9813,0.9813,0,-158.4102,21.5898,-1.2,0.1);

	this.instance_162 = new lib.Cellulevaisseau("synched",0);
	this.instance_162.parent = this;
	this.instance_162.setTransform(272.5,231.85,0.9809,0.9809,0,-152.5975,27.4025,-1.2,0.1);

	this.instance_163 = new lib.Cellulevaisseau("synched",0);
	this.instance_163.parent = this;
	this.instance_163.setTransform(267.5,254.3,0.9825,0.9825,0,143.3606,-36.6394,-1.1,0.1);

	this.instance_164 = new lib.Cellulevaisseau("synched",0);
	this.instance_164.parent = this;
	this.instance_164.setTransform(259.25,261.55,0.9821,0.9821,0,135.8454,-44.1546,-1.1,0.1);

	this.instance_165 = new lib.Cellulevaisseau("synched",0);
	this.instance_165.parent = this;
	this.instance_165.setTransform(266.15,268.3,0.9824,0.9824,0,141.379,-38.621,-1,0.1);

	this.instance_166 = new lib.Cellulevaisseau("synched",0);
	this.instance_166.parent = this;
	this.instance_166.setTransform(310.25,268.8,0.9823,0.9823,0,-146.6772,33.3228,-1.1,0.2);

	this.instance_167 = new lib.Cellulevaisseau("synched",0);
	this.instance_167.parent = this;
	this.instance_167.setTransform(307.55,251.8,0.9822,0.9822,0,-129.1305,50.8695,-1.1,0.2);

	this.instance_168 = new lib.Cellulevaisseau("synched",0);
	this.instance_168.parent = this;
	this.instance_168.setTransform(299.6,243.1,0.9831,0.9831,0,-131.6177,48.3823,-1.2,0.2);

	this.instance_169 = new lib.Cellulevaisseau("synched",0);
	this.instance_169.parent = this;
	this.instance_169.setTransform(292.75,233.95,0.9837,0.9837,0,-127.1031,52.8969,-1.1,0.1);

	this.instance_170 = new lib.Cellulevaisseau("synched",0);
	this.instance_170.parent = this;
	this.instance_170.setTransform(286,224.9,0.9827,0.9827,0,-128.8317,51.1683,-1.2,0.1);

	this.instance_171 = new lib.Cellulevaisseau("synched",0);
	this.instance_171.parent = this;
	this.instance_171.setTransform(301.5,261.2,0.9827,0.9827,0,-139.1655,40.8345,-1.1,0.1);

	this.instance_172 = new lib.Cellulevaisseau("synched",0);
	this.instance_172.parent = this;
	this.instance_172.setTransform(283,255.35,0.9807,0.9807,0,161.4644,-18.5356,-1.1,0.2);

	this.instance_173 = new lib.Cellulevaisseau("synched",0);
	this.instance_173.parent = this;
	this.instance_173.setTransform(274.8,261.55,0.9825,0.9825,0,143.1502,-36.8498,-1.1,0.1);

	this.instance_174 = new lib.Cellulevaisseau("synched",0);
	this.instance_174.parent = this;
	this.instance_174.setTransform(280.6,236.85,0.9847,0.9847,0,-124.5398,55.4602,-1.1,0.2);

	this.instance_175 = new lib.Cellulevaisseau("synched",0);
	this.instance_175.parent = this;
	this.instance_175.setTransform(319.7,141.85,0.9802,0.9802,178.1883,0,0,-1.2,0.1);

	this.instance_176 = new lib.Cellulevaisseau("synched",0);
	this.instance_176.parent = this;
	this.instance_176.setTransform(309.1,143.1,0.9813,0.9813,158.4102,0,0,-1.2,0.1);

	this.instance_177 = new lib.Cellulevaisseau("synched",0);
	this.instance_177.parent = this;
	this.instance_177.setTransform(308.35,134.6,0.9801,0.9801,-178.7939,0,0,-1.2,0.1);

	this.instance_178 = new lib.Cellulevaisseau("synched",0);
	this.instance_178.parent = this;
	this.instance_178.setTransform(297.85,135.6,0.9813,0.9813,158.4102,0,0,-1.2,0.1);

	this.instance_179 = new lib.Cellulevaisseau("synched",0);
	this.instance_179.parent = this;
	this.instance_179.setTransform(298.85,147.1,0.9809,0.9809,152.5975,0,0,-1.2,0.1);

	this.instance_180 = new lib.Cellulevaisseau("synched",0);
	this.instance_180.parent = this;
	this.instance_180.setTransform(295.25,163.55,0.9831,0.9831,-154.1759,0,0,-1,0.1);

	this.instance_181 = new lib.Cellulevaisseau("synched",0);
	this.instance_181.parent = this;
	this.instance_181.setTransform(305.75,168.55,0.9831,0.9831,-154.1759,0,0,-1,0.1);

	this.instance_182 = new lib.Cellulevaisseau("synched",0);
	this.instance_182.parent = this;
	this.instance_182.setTransform(304.2,180.55,0.9824,0.9824,-141.379,0,0,-1,0.1);

	this.instance_183 = new lib.Cellulevaisseau("synched",0);
	this.instance_183.parent = this;
	this.instance_183.setTransform(258.7,174.65,0.9823,0.9823,146.6772,0,0,-1.1,0.2);

	this.instance_184 = new lib.Cellulevaisseau("synched",0);
	this.instance_184.parent = this;
	this.instance_184.setTransform(259.35,186.95,0.9823,0.9823,146.6772,0,0,-1,0.1);

	this.instance_185 = new lib.Cellulevaisseau("synched",0);
	this.instance_185.parent = this;
	this.instance_185.setTransform(268.35,180.05,0.9823,0.9823,146.6772,0,0,-1.1,0.2);

	this.instance_186 = new lib.Cellulevaisseau("synched",0);
	this.instance_186.parent = this;
	this.instance_186.setTransform(267.5,167.3,0.9827,0.9827,139.1655,0,0,-1.1,0.2);

	this.instance_187 = new lib.Cellulevaisseau("synched",0);
	this.instance_187.parent = this;
	this.instance_187.setTransform(275.5,158.35,0.9831,0.9831,131.6177,0,0,-1.2,0.2);

	this.instance_188 = new lib.Cellulevaisseau("synched",0);
	this.instance_188.parent = this;
	this.instance_188.setTransform(282.35,149.2,0.9837,0.9837,127.1031,0,0,-1.1,0.1);

	this.instance_189 = new lib.Cellulevaisseau("synched",0);
	this.instance_189.parent = this;
	this.instance_189.setTransform(289.1,140.15,0.9827,0.9827,128.8317,0,0,-1.2,0.1);

	this.instance_190 = new lib.Cellulevaisseau("synched",0);
	this.instance_190.parent = this;
	this.instance_190.setTransform(276.85,172.45,0.9827,0.9827,139.1655,0,0,-1.1,0.1);

	this.instance_191 = new lib.Cellulevaisseau("synched",0);
	this.instance_191.parent = this;
	this.instance_191.setTransform(285.35,171.35,0.9814,0.9814,-174.7421,0,0,-1.1,0.2);

	this.instance_192 = new lib.Cellulevaisseau("synched",0);
	this.instance_192.parent = this;
	this.instance_192.setTransform(295,175.05,0.9831,0.9831,-154.1759,0,0,-1,0.1);

	this.instance_193 = new lib.Cellulevaisseau("synched",0);
	this.instance_193.parent = this;
	this.instance_193.setTransform(292.2,152.1,0.9855,0.9855,121.3185,0,0,-1.1,0.2);

	this.instance_194 = new lib.Cellulevaisseau("synched",0);
	this.instance_194.parent = this;
	this.instance_194.setTransform(314.65,116.2,0.9842,0.9842,7.5815,0,0,-1,0.2);

	this.instance_195 = new lib.Cellulevaisseau("synched",0);
	this.instance_195.parent = this;
	this.instance_195.setTransform(302.9,114.95,0.9842,0.9842,7.5815,0,0,-1,0.2);

	this.instance_196 = new lib.Cellulevaisseau("synched",0);
	this.instance_196.parent = this;
	this.instance_196.setTransform(312.15,104.45,0.9842,0.9842,7.5815,0,0,-1,0.2);

	this.instance_197 = new lib.Cellulevaisseau("synched",0);
	this.instance_197.parent = this;
	this.instance_197.setTransform(300.9,103.7,0.9842,0.9842,7.5815,0,0,-1,0.2);

	this.instance_198 = new lib.Cellulevaisseau("synched",0);
	this.instance_198.parent = this;
	this.instance_198.setTransform(291.45,114.65,0.9846,0.9846,0.0693,0,0,-1,0.1);

	this.instance_199 = new lib.Cellulevaisseau("synched",0);
	this.instance_199.parent = this;
	this.instance_199.setTransform(279.6,116.15,0.9851,0.9851,-7.479,0,0,-1.1,0.1);

	this.instance_200 = new lib.Cellulevaisseau("synched",0);
	this.instance_200.parent = this;
	this.instance_200.setTransform(268.3,118.7,0.9856,0.9856,-11.9924,0,0,-1.1,0.1);

	this.instance_201 = new lib.Cellulevaisseau("synched",0);
	this.instance_201.parent = this;
	this.instance_201.setTransform(257.25,121.15,0.9846,0.9846,-10.2647,0,0,-1.2,0.1);

	this.instance_202 = new lib.Cellulevaisseau("synched",0);
	this.instance_202.parent = this;
	this.instance_202.setTransform(289.45,103.9,0.9846,0.9846,0.0693,0,0,-1,0.1);

	this.instance_203 = new lib.Cellulevaisseau("synched",0);
	this.instance_203.parent = this;
	this.instance_203.setTransform(277.6,105.65,0.9851,0.9851,-7.479,0,0,-1.1,0.1);

	this.instance_204 = new lib.Cellulevaisseau("synched",0);
	this.instance_204.parent = this;
	this.instance_204.setTransform(266.05,108.45,0.9856,0.9856,-11.9924,0,0,-1.1,0.1);

	this.instance_205 = new lib.Cellulevaisseau("synched",0);
	this.instance_205.parent = this;
	this.instance_205.setTransform(254.5,111.15,0.9846,0.9846,-10.2647,0,0,-1.2,0.1);

	this.instance_206 = new lib.Cellulevaisseau("synched",0);
	this.instance_206.parent = this;
	this.instance_206.setTransform(250.9,117.15,0.9836,0.9836,156.7652,0,0,-0.9,0.1);

	this.instance_207 = new lib.Cellulevaisseau("synched",0);
	this.instance_207.parent = this;
	this.instance_207.setTransform(246.35,126,0.9879,0.9879,-26.8017,0,0,-1.1,0.2);

	this.instance_208 = new lib.Cellulevaisseau("synched",0);
	this.instance_208.parent = this;
	this.instance_208.setTransform(245.5,280.2,0.9886,0.9886,-39.7993,0,0,-1.1,0.1);

	this.instance_209 = new lib.Cellulevaisseau("synched",0);
	this.instance_209.parent = this;
	this.instance_209.setTransform(247.9,266.3,0.9892,0.9892,-44.9319,0,0,-1.1,0.2);

	this.instance_210 = new lib.Cellulevaisseau("synched",0);
	this.instance_210.parent = this;
	this.instance_210.setTransform(259.9,217.95,0.9875,0.9875,-166.2386,0,0,-1,0.2);

	this.instance_211 = new lib.Cellulevaisseau("synched",0);
	this.instance_211.parent = this;
	this.instance_211.setTransform(254.85,272.75,0.9886,0.9886,-40.8191,0,0,-1.1,0.2);

	this.instance_212 = new lib.Cellulevaisseau("synched",0);
	this.instance_212.parent = this;
	this.instance_212.setTransform(317.2,172.3,0.9892,0.9892,0,44.9319,-135.0681,-1.1,0.2);

	this.instance_213 = new lib.Cellulevaisseau("synched",0);
	this.instance_213.parent = this;
	this.instance_213.setTransform(242.05,114.2,0.9894,0.9894,-70.1874,0,0,-1,0.2);

	this.instance_214 = new lib.Cellulevaisseau("synched",0);
	this.instance_214.parent = this;
	this.instance_214.setTransform(298.5,75.9,0.9865,0.9865,0,19.0627,-160.9373,-1,0.2);

	this.instance_215 = new lib.Cellulevaisseau("synched",0);
	this.instance_215.parent = this;
	this.instance_215.setTransform(309.3,82.7,0.9878,0.9878,0,41.9345,-138.0655,-1,0.2);

	this.instance_216 = new lib.Cellulevaisseau("synched",0);
	this.instance_216.parent = this;
	this.instance_216.setTransform(316.5,91.95,0.9886,0.9886,0,55.827,-124.173,-1,0.2);

	this.instance_217 = new lib.Cellulevaisseau("synched",0);
	this.instance_217.parent = this;
	this.instance_217.setTransform(321,103.45,0.9894,0.9894,0,70.1874,-109.8126,-1,0.2);

	this.instance_218 = new lib.Cellulevaisseau("synched",0);
	this.instance_218.parent = this;
	this.instance_218.setTransform(324.05,126.2,0.9905,0.9905,0,88.7606,-91.2394,-1,0.1);

	this.instance_219 = new lib.Cellulevaisseau("synched",0);
	this.instance_219.parent = this;
	this.instance_219.setTransform(314.2,133.95,0.9875,0.9875,0,166.2386,-13.7614,-1,0.2);

	this.instance_220 = new lib.Cellulevaisseau("synched",0);
	this.instance_220.parent = this;
	this.instance_220.setTransform(433.35,341.65,1,1,0,0,180,-1.1,0.1);

	this.instance_221 = new lib.Cellulevaisseau("synched",0);
	this.instance_221.parent = this;
	this.instance_221.setTransform(421,341.95,0.9981,0.9981,0,-6.9077,173.0923,-1.1,0.2);

	this.instance_222 = new lib.Cellulevaisseau("synched",0);
	this.instance_222.parent = this;
	this.instance_222.setTransform(409.3,342.7,0.9986,0.9986,0,2.474,-177.526,-1,0.2);

	this.instance_223 = new lib.Cellulevaisseau("synched",0);
	this.instance_223.parent = this;
	this.instance_223.setTransform(398.15,341.45,0.9981,0.9981,0,10.2431,-169.7569,-1.1,0.1);

	this.instance_224 = new lib.Cellulevaisseau("synched",0);
	this.instance_224.parent = this;
	this.instance_224.setTransform(386.3,338.9,0.9973,0.9973,0,12.2397,-167.7603,-1,0.1);

	this.instance_225 = new lib.Cellulevaisseau("synched",0);
	this.instance_225.parent = this;
	this.instance_225.setTransform(375.25,335.7,0.9963,0.9963,0,22.3307,-157.6693,-1,0.1);

	this.instance_226 = new lib.Cellulevaisseau("synched",0);
	this.instance_226.parent = this;
	this.instance_226.setTransform(364.75,330.7,0.9952,0.9952,0,25.9313,-154.0687,-1.1,0.2);

	this.instance_227 = new lib.Cellulevaisseau("synched",0);
	this.instance_227.parent = this;
	this.instance_227.setTransform(355,324.9,0.9948,0.9948,0,33.2367,-146.7633,-1.1,0.1);

	this.instance_228 = new lib.Cellulevaisseau("synched",0);
	this.instance_228.parent = this;
	this.instance_228.setTransform(346.1,318.6,0.9941,0.9941,0,44.745,-135.255,-1.1,0.1);

	this.instance_229 = new lib.Cellulevaisseau("synched",0);
	this.instance_229.parent = this;
	this.instance_229.setTransform(338.05,310.15,0.9937,0.9937,0,53.0534,-126.9466,-1.1,0.1);

	this.instance_230 = new lib.Cellulevaisseau("synched",0);
	this.instance_230.parent = this;
	this.instance_230.setTransform(323.3,279.45,0.9925,0.9925,0,73.1396,-106.8604,-1,0.1);

	this.instance_231 = new lib.Cellulevaisseau("synched",0);
	this.instance_231.parent = this;
	this.instance_231.setTransform(327,290.95,0.9923,0.9923,0,70.0702,-109.9298,-1,0.2);

	this.instance_232 = new lib.Cellulevaisseau("synched",0);
	this.instance_232.parent = this;
	this.instance_232.setTransform(332.05,301.15,0.9932,0.9932,0,60.8363,-119.1637,-1.1,0.1);

	this.instance_233 = new lib.Cellulevaisseau("synched",0);
	this.instance_233.parent = this;
	this.instance_233.setTransform(322.5,149.45,0.9908,0.9908,0,94.8022,-85.1978,-1,0.1);

	this.instance_234 = new lib.Cellulevaisseau("synched",0);
	this.instance_234.parent = this;
	this.instance_234.setTransform(320.8,162.05,0.9909,0.9909,0,96.0905,-83.9095,-1.1,0.1);

	this.instance_235 = new lib.Cellulevaisseau("synched",0);
	this.instance_235.parent = this;
	this.instance_235.setTransform(319.35,174.05,0.991,0.991,0,94.2977,-85.7023,-1.1,0.3);

	this.instance_236 = new lib.Cellulevaisseau("synched",0);
	this.instance_236.parent = this;
	this.instance_236.setTransform(315,185.7,0.9895,0.9895,0,56.6109,-123.3891,-1,0.2);

	this.instance_237 = new lib.Cellulevaisseau("synched",0);
	this.instance_237.parent = this;
	this.instance_237.setTransform(317.8,198.2,0.9913,0.9913,0,90.6933,-89.3067,-1,0.2);

	this.instance_238 = new lib.Cellulevaisseau("synched",0);
	this.instance_238.parent = this;
	this.instance_238.setTransform(317.3,210.2,0.9913,0.9913,0,90.6933,-89.3067,-1,0.2);

	this.instance_239 = new lib.Cellulevaisseau("synched",0);
	this.instance_239.parent = this;
	this.instance_239.setTransform(317.25,220.95,0.9914,0.9914,0,87.4074,-92.5926,-1,0.2);

	this.instance_240 = new lib.Cellulevaisseau("synched",0);
	this.instance_240.parent = this;
	this.instance_240.setTransform(317.5,233.45,0.9916,0.9916,0,85.3942,-94.6058,-1,0.2);

	this.instance_241 = new lib.Cellulevaisseau("synched",0);
	this.instance_241.parent = this;
	this.instance_241.setTransform(318,244.95,0.9916,0.9916,0,85.3942,-94.6058,-1,0.2);

	this.instance_242 = new lib.Cellulevaisseau("synched",0);
	this.instance_242.parent = this;
	this.instance_242.setTransform(318.75,256.95,0.9916,0.9916,0,85.3942,-94.6058,-1,0.2);

	this.instance_243 = new lib.Cellulevaisseau("synched",0);
	this.instance_243.parent = this;
	this.instance_243.setTransform(280.35,72.7,0.9855,0.9855,0.267,0,0,-1,0.2);

	this.instance_244 = new lib.Cellulevaisseau("synched",0);
	this.instance_244.parent = this;
	this.instance_244.setTransform(268.05,75.9,0.9865,0.9865,-19.0627,0,0,-1,0.2);

	this.instance_245 = new lib.Cellulevaisseau("synched",0);
	this.instance_245.parent = this;
	this.instance_245.setTransform(257.25,82.7,0.9878,0.9878,-41.9345,0,0,-1,0.2);

	this.instance_246 = new lib.Cellulevaisseau("synched",0);
	this.instance_246.parent = this;
	this.instance_246.setTransform(250.05,91.95,0.9886,0.9886,-55.827,0,0,-1,0.2);

	this.instance_247 = new lib.Cellulevaisseau("synched",0);
	this.instance_247.parent = this;
	this.instance_247.setTransform(245.55,103.45,0.9894,0.9894,-70.1874,0,0,-1,0.2);

	this.instance_248 = new lib.Cellulevaisseau("synched",0);
	this.instance_248.parent = this;
	this.instance_248.setTransform(243.3,137.7,0.9907,0.9907,-92.0426,0,0,-1,0.1);

	this.instance_249 = new lib.Cellulevaisseau("synched",0);
	this.instance_249.parent = this;
	this.instance_249.setTransform(157.25,342.7,0.9986,0.9986,-2.474,0,0,-1,0.2);

	this.instance_250 = new lib.Cellulevaisseau("synched",0);
	this.instance_250.parent = this;
	this.instance_250.setTransform(168.4,341.45,0.9981,0.9981,-10.2431,0,0,-1.1,0.1);

	this.instance_251 = new lib.Cellulevaisseau("synched",0);
	this.instance_251.parent = this;
	this.instance_251.setTransform(180.25,338.9,0.9973,0.9973,-12.2397,0,0,-1,0.1);

	this.instance_252 = new lib.Cellulevaisseau("synched",0);
	this.instance_252.parent = this;
	this.instance_252.setTransform(191.3,335.7,0.9963,0.9963,-22.3307,0,0,-1,0.1);

	this.instance_253 = new lib.Cellulevaisseau("synched",0);
	this.instance_253.parent = this;
	this.instance_253.setTransform(201.8,330.7,0.9952,0.9952,-25.9313,0,0,-1.1,0.2);

	this.instance_254 = new lib.Cellulevaisseau("synched",0);
	this.instance_254.parent = this;
	this.instance_254.setTransform(211.55,324.9,0.9948,0.9948,-33.2367,0,0,-1.1,0.1);

	this.instance_255 = new lib.Cellulevaisseau("synched",0);
	this.instance_255.parent = this;
	this.instance_255.setTransform(220.45,318.6,0.9941,0.9941,-44.745,0,0,-1.1,0.1);

	this.instance_256 = new lib.Cellulevaisseau("synched",0);
	this.instance_256.parent = this;
	this.instance_256.setTransform(228.5,310.15,0.9937,0.9937,-53.0534,0,0,-1.1,0.1);

	this.instance_257 = new lib.Cellulevaisseau("synched",0);
	this.instance_257.parent = this;
	this.instance_257.setTransform(246.1,267.5,0.9921,0.9921,-79.8968,0,0,-1,0.2);

	this.instance_258 = new lib.Cellulevaisseau("synched",0);
	this.instance_258.parent = this;
	this.instance_258.setTransform(239.55,290.95,0.9923,0.9923,-70.0702,0,0,-1,0.2);

	this.instance_259 = new lib.Cellulevaisseau("synched",0);
	this.instance_259.parent = this;
	this.instance_259.setTransform(234.5,301.15,0.9932,0.9932,-60.8363,0,0,-1.1,0.1);

	this.instance_260 = new lib.Cellulevaisseau("synched",0);
	this.instance_260.parent = this;
	this.instance_260.setTransform(244.05,149.45,0.9908,0.9908,-94.8022,0,0,-1,0.1);

	this.instance_261 = new lib.Cellulevaisseau("synched",0);
	this.instance_261.parent = this;
	this.instance_261.setTransform(245.75,162.05,0.9909,0.9909,-96.0905,0,0,-1.1,0.1);

	this.instance_262 = new lib.Cellulevaisseau("synched",0);
	this.instance_262.parent = this;
	this.instance_262.setTransform(247.2,174.05,0.991,0.991,-94.2977,0,0,-1.1,0.3);

	this.instance_263 = new lib.Cellulevaisseau("synched",0);
	this.instance_263.parent = this;
	this.instance_263.setTransform(248.75,198.2,0.9913,0.9913,-90.6933,0,0,-1,0.2);

	this.instance_264 = new lib.Cellulevaisseau("synched",0);
	this.instance_264.parent = this;
	this.instance_264.setTransform(249.25,210.2,0.9913,0.9913,-90.6933,0,0,-1,0.2);

	this.instance_265 = new lib.Cellulevaisseau("synched",0);
	this.instance_265.parent = this;
	this.instance_265.setTransform(249.05,234.2,0.9916,0.9916,-85.3942,0,0,-1,0.2);

	this.instance_266 = new lib.Cellulevaisseau("synched",0);
	this.instance_266.parent = this;
	this.instance_266.setTransform(248.3,245.95,0.9916,0.9916,-85.3942,0,0,-1,0.2);

	this.instance_267 = new lib.Cellulevaisseau("synched",0);
	this.instance_267.parent = this;
	this.instance_267.setTransform(247.8,258.2,0.9916,0.9916,-85.3942,0,0,-1,0.2);

	this.instance_268 = new lib.Cellulevaisseau("synched",0);
	this.instance_268.parent = this;
	this.instance_268.setTransform(292.2,58.8,0.9855,0.9855,0,-0.267,179.733,-1,0.2);

	this.instance_269 = new lib.Cellulevaisseau("synched",0);
	this.instance_269.parent = this;
	this.instance_269.setTransform(304.25,61.5,0.9865,0.9865,0,19.0627,-160.9373,-1,0.2);

	this.instance_270 = new lib.Cellulevaisseau("synched",0);
	this.instance_270.parent = this;
	this.instance_270.setTransform(315,67.05,0.9873,0.9873,0,33.3526,-146.6474,-1,0.2);

	this.instance_271 = new lib.Cellulevaisseau("synched",0);
	this.instance_271.parent = this;
	this.instance_271.setTransform(324.3,75.85,0.988,0.988,0,44.9725,-135.0275,-1,0.2);

	this.instance_272 = new lib.Cellulevaisseau("synched",0);
	this.instance_272.parent = this;
	this.instance_272.setTransform(331,85.55,0.9886,0.9886,0,55.827,-124.173,-1,0.2);

	this.instance_273 = new lib.Cellulevaisseau("synched",0);
	this.instance_273.parent = this;
	this.instance_273.setTransform(335.75,97.05,0.9894,0.9894,0,70.1874,-109.8126,-1,0.2);

	this.instance_274 = new lib.Cellulevaisseau("synched",0);
	this.instance_274.parent = this;
	this.instance_274.setTransform(339.1,109.25,0.9898,0.9898,0,76.7033,-103.2967,-1,0.1);

	this.instance_275 = new lib.Cellulevaisseau("synched",0);
	this.instance_275.parent = this;
	this.instance_275.setTransform(339.55,121.3,0.9905,0.9905,0,88.7606,-91.2394,-1,0.1);

	this.instance_276 = new lib.Cellulevaisseau("synched",0);
	this.instance_276.parent = this;
	this.instance_276.setTransform(339.05,133.8,0.9907,0.9907,0,93.5135,-86.4865,-1,0.1);

	this.instance_277 = new lib.Cellulevaisseau("synched",0);
	this.instance_277.parent = this;
	this.instance_277.setTransform(338.25,146.3,0.9908,0.9908,0,94.8022,-85.1978,-1,0.1);

	this.instance_278 = new lib.Cellulevaisseau("synched",0);
	this.instance_278.parent = this;
	this.instance_278.setTransform(336.55,158.9,0.9909,0.9909,0,96.0905,-83.9095,-1.1,0.1);

	this.instance_279 = new lib.Cellulevaisseau("synched",0);
	this.instance_279.parent = this;
	this.instance_279.setTransform(335.1,170.9,0.991,0.991,0,94.2977,-85.7023,-1.1,0.3);

	this.instance_280 = new lib.Cellulevaisseau("synched",0);
	this.instance_280.parent = this;
	this.instance_280.setTransform(334.25,182.8,0.9911,0.9911,0,92.4989,-87.5011,-1,0.2);

	this.instance_281 = new lib.Cellulevaisseau("synched",0);
	this.instance_281.parent = this;
	this.instance_281.setTransform(333.55,195.05,0.9913,0.9913,0,90.6933,-89.3067,-1,0.2);

	this.instance_282 = new lib.Cellulevaisseau("synched",0);
	this.instance_282.parent = this;
	this.instance_282.setTransform(333.05,207.05,0.9913,0.9913,0,90.6933,-89.3067,-1,0.2);

	this.instance_283 = new lib.Cellulevaisseau("synched",0);
	this.instance_283.parent = this;
	this.instance_283.setTransform(333,219.05,0.9914,0.9914,0,87.4074,-92.5926,-1,0.2);

	this.instance_284 = new lib.Cellulevaisseau("synched",0);
	this.instance_284.parent = this;
	this.instance_284.setTransform(333.25,231.05,0.9916,0.9916,0,85.3942,-94.6058,-1,0.2);

	this.instance_285 = new lib.Cellulevaisseau("synched",0);
	this.instance_285.parent = this;
	this.instance_285.setTransform(334,242.8,0.9916,0.9916,0,85.3942,-94.6058,-1,0.2);

	this.instance_286 = new lib.Cellulevaisseau("synched",0);
	this.instance_286.parent = this;
	this.instance_286.setTransform(334.5,255.05,0.9916,0.9916,0,85.3942,-94.6058,-1,0.2);

	this.instance_287 = new lib.Cellulevaisseau("synched",0);
	this.instance_287.parent = this;
	this.instance_287.setTransform(336.2,266.35,0.9921,0.9921,0,79.8968,-100.1032,-1,0.2);

	this.instance_288 = new lib.Cellulevaisseau("synched",0);
	this.instance_288.parent = this;
	this.instance_288.setTransform(339.3,278.05,0.9925,0.9925,0,73.1396,-106.8604,-1,0.1);

	this.instance_289 = new lib.Cellulevaisseau("synched",0);
	this.instance_289.parent = this;
	this.instance_289.setTransform(343,289.55,0.9923,0.9923,0,70.0702,-109.9298,-1,0.2);

	this.instance_290 = new lib.Cellulevaisseau("synched",0);
	this.instance_290.parent = this;
	this.instance_290.setTransform(348.8,299.25,0.9937,0.9937,0,53.0534,-126.9466,-1.1,0.1);

	this.instance_291 = new lib.Cellulevaisseau("synched",0);
	this.instance_291.parent = this;
	this.instance_291.setTransform(356.6,308.45,0.9941,0.9941,0,44.745,-135.255,-1.1,0.1);

	this.instance_292 = new lib.Cellulevaisseau("synched",0);
	this.instance_292.parent = this;
	this.instance_292.setTransform(366.5,316,0.9948,0.9948,0,33.2367,-146.7633,-1.1,0.1);

	this.instance_293 = new lib.Cellulevaisseau("synched",0);
	this.instance_293.parent = this;
	this.instance_293.setTransform(377.25,321.55,0.9952,0.9952,0,25.9313,-154.0687,-1.1,0.2);

	this.instance_294 = new lib.Cellulevaisseau("synched",0);
	this.instance_294.parent = this;
	this.instance_294.setTransform(389,326.3,0.9963,0.9963,0,22.3307,-157.6693,-1,0.1);

	this.instance_295 = new lib.Cellulevaisseau("synched",0);
	this.instance_295.parent = this;
	this.instance_295.setTransform(400.3,329,0.9973,0.9973,0,12.2397,-167.7603,-1,0.1);

	this.instance_296 = new lib.Cellulevaisseau("synched",0);
	this.instance_296.parent = this;
	this.instance_296.setTransform(412.1,330,0.9985,0.9985,0,3.4711,-176.5289,-1.1,0.1);

	this.instance_297 = new lib.Cellulevaisseau("synched",0);
	this.instance_297.parent = this;
	this.instance_297.setTransform(423.6,329,0.9996,0.9996,0,-6.2912,173.7088,-1.1,0.1);

	this.instance_298 = new lib.Cellulevaisseau("synched",0);
	this.instance_298.parent = this;
	this.instance_298.setTransform(435.6,328.25,1,1,0,0,180,-1.1,0.1);

	this.instance_299 = new lib.Cellulevaisseau("synched",0);
	this.instance_299.parent = this;
	this.instance_299.setTransform(275.1,58.95,0.9855,0.9855,0.267,0,0,-1,0.2);

	this.instance_300 = new lib.Cellulevaisseau("synched",0);
	this.instance_300.parent = this;
	this.instance_300.setTransform(263.05,61.65,0.9865,0.9865,-19.0627,0,0,-1,0.2);

	this.instance_301 = new lib.Cellulevaisseau("synched",0);
	this.instance_301.parent = this;
	this.instance_301.setTransform(252.3,67.2,0.9873,0.9873,-33.3526,0,0,-1,0.2);

	this.instance_302 = new lib.Cellulevaisseau("synched",0);
	this.instance_302.parent = this;
	this.instance_302.setTransform(243,76,0.988,0.988,-44.9725,0,0,-1,0.2);

	this.instance_303 = new lib.Cellulevaisseau("synched",0);
	this.instance_303.parent = this;
	this.instance_303.setTransform(236.3,85.7,0.9886,0.9886,-55.827,0,0,-1,0.2);

	this.instance_304 = new lib.Cellulevaisseau("synched",0);
	this.instance_304.parent = this;
	this.instance_304.setTransform(231.55,97.2,0.9894,0.9894,-70.1874,0,0,-1,0.2);

	this.instance_305 = new lib.Cellulevaisseau("synched",0);
	this.instance_305.parent = this;
	this.instance_305.setTransform(228.2,109.4,0.9898,0.9898,-76.7033,0,0,-1,0.1);

	this.instance_306 = new lib.Cellulevaisseau("synched",0);
	this.instance_306.parent = this;
	this.instance_306.setTransform(227.75,121.45,0.9905,0.9905,-88.7606,0,0,-1,0.1);

	this.instance_307 = new lib.Cellulevaisseau("synched",0);
	this.instance_307.parent = this;
	this.instance_307.setTransform(228.25,133.95,0.9907,0.9907,-93.5135,0,0,-1,0.1);

	this.instance_308 = new lib.Cellulevaisseau("synched",0);
	this.instance_308.parent = this;
	this.instance_308.setTransform(229.05,146.45,0.9908,0.9908,-94.8022,0,0,-1,0.1);

	this.instance_309 = new lib.Cellulevaisseau("synched",0);
	this.instance_309.parent = this;
	this.instance_309.setTransform(230.75,159.05,0.9909,0.9909,-96.0905,0,0,-1.1,0.1);

	this.instance_310 = new lib.Cellulevaisseau("synched",0);
	this.instance_310.parent = this;
	this.instance_310.setTransform(232.2,171.05,0.991,0.991,-94.2977,0,0,-1.1,0.3);

	this.instance_311 = new lib.Cellulevaisseau("synched",0);
	this.instance_311.parent = this;
	this.instance_311.setTransform(233.05,182.95,0.9911,0.9911,-92.4989,0,0,-1,0.2);

	this.instance_312 = new lib.Cellulevaisseau("synched",0);
	this.instance_312.parent = this;
	this.instance_312.setTransform(233.75,195.2,0.9913,0.9913,-90.6933,0,0,-1,0.2);

	this.instance_313 = new lib.Cellulevaisseau("synched",0);
	this.instance_313.parent = this;
	this.instance_313.setTransform(234.25,207.2,0.9913,0.9913,-90.6933,0,0,-1,0.2);

	this.instance_314 = new lib.Cellulevaisseau("synched",0);
	this.instance_314.parent = this;
	this.instance_314.setTransform(234.3,219.2,0.9914,0.9914,-87.4074,0,0,-1,0.2);

	this.instance_315 = new lib.Cellulevaisseau("synched",0);
	this.instance_315.parent = this;
	this.instance_315.setTransform(234.05,231.2,0.9916,0.9916,-85.3942,0,0,-1,0.2);

	this.instance_316 = new lib.Cellulevaisseau("synched",0);
	this.instance_316.parent = this;
	this.instance_316.setTransform(233.3,242.95,0.9916,0.9916,-85.3942,0,0,-1,0.2);

	this.instance_317 = new lib.Cellulevaisseau("synched",0);
	this.instance_317.parent = this;
	this.instance_317.setTransform(232.8,255.2,0.9916,0.9916,-85.3942,0,0,-1,0.2);

	this.instance_318 = new lib.Cellulevaisseau("synched",0);
	this.instance_318.parent = this;
	this.instance_318.setTransform(231.1,266.5,0.9921,0.9921,-79.8968,0,0,-1,0.2);

	this.instance_319 = new lib.Cellulevaisseau("synched",0);
	this.instance_319.parent = this;
	this.instance_319.setTransform(228,278.2,0.9925,0.9925,-73.1396,0,0,-1,0.1);

	this.instance_320 = new lib.Cellulevaisseau("synched",0);
	this.instance_320.parent = this;
	this.instance_320.setTransform(224.3,289.7,0.9923,0.9923,-70.0702,0,0,-1,0.2);

	this.instance_321 = new lib.Cellulevaisseau("synched",0);
	this.instance_321.parent = this;
	this.instance_321.setTransform(218.5,299.4,0.9937,0.9937,-53.0534,0,0,-1.1,0.1);

	this.instance_322 = new lib.Cellulevaisseau("synched",0);
	this.instance_322.parent = this;
	this.instance_322.setTransform(210.7,308.6,0.9941,0.9941,-44.745,0,0,-1.1,0.1);

	this.instance_323 = new lib.Cellulevaisseau("synched",0);
	this.instance_323.parent = this;
	this.instance_323.setTransform(200.8,316.15,0.9948,0.9948,-33.2367,0,0,-1.1,0.1);

	this.instance_324 = new lib.Cellulevaisseau("synched",0);
	this.instance_324.parent = this;
	this.instance_324.setTransform(190.05,321.7,0.9952,0.9952,-25.9313,0,0,-1.1,0.2);

	this.instance_325 = new lib.Cellulevaisseau("synched",0);
	this.instance_325.parent = this;
	this.instance_325.setTransform(178.55,326.45,0.9963,0.9963,-22.3307,0,0,-1,0.1);

	this.instance_326 = new lib.Cellulevaisseau("synched",0);
	this.instance_326.parent = this;
	this.instance_326.setTransform(167,329.15,0.9973,0.9973,-12.2397,0,0,-1,0.1);

	this.instance_327 = new lib.Cellulevaisseau("synched",0);
	this.instance_327.parent = this;
	this.instance_327.setTransform(155.2,330.15,0.9985,0.9985,-3.4711,0,0,-1.1,0.1);

	this.instance_328 = new lib.CachedTexturedBitmap_210();
	this.instance_328.parent = this;
	this.instance_328.setTransform(77.75,61.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_328},{t:this.instance_327},{t:this.instance_326},{t:this.instance_325},{t:this.instance_324},{t:this.instance_323},{t:this.instance_322},{t:this.instance_321},{t:this.instance_320},{t:this.instance_319},{t:this.instance_318},{t:this.instance_317},{t:this.instance_316},{t:this.instance_315},{t:this.instance_314},{t:this.instance_313},{t:this.instance_312},{t:this.instance_311},{t:this.instance_310},{t:this.instance_309},{t:this.instance_308},{t:this.instance_307},{t:this.instance_306},{t:this.instance_305},{t:this.instance_304},{t:this.instance_303},{t:this.instance_302},{t:this.instance_301},{t:this.instance_300},{t:this.instance_299},{t:this.instance_298},{t:this.instance_297},{t:this.instance_296},{t:this.instance_295},{t:this.instance_294},{t:this.instance_293},{t:this.instance_292},{t:this.instance_291},{t:this.instance_290},{t:this.instance_289},{t:this.instance_288},{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(146));

	// V_droite (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApiS8IiFgyIhmgyIh4hSIhVhaIhLhnIgthkIhGjSIgPgLIgDiWQgBgzgKgtIgJiMIgCjoIAMiQIAFggQAFgugIglQAMg2AFg4QADgWgBgUIAgkZIgCAAQAMgmgEggQAMg3gBg8QgBhXgig9IAAgYIgQgiQAPgPATgHQAtgfAxgaIA6C3IAGD3IgjEmIgeFnIAAEaIAMEgIBGEDIApB1IBNBYIBqBqICxBwICZA1IC1AMIB8gMIF4gMIQ+gKIAACWIw+gOImQAOIiZANg");
	mask.setTransform(442.85,218.775);

	// Calque_21
	this.cercle3 = new lib.Cercle();
	this.cercle3.name = "cercle3";
	this.cercle3.parent = this;
	this.cercle3.setTransform(741.5,86.3,0.7548,0.7523);

	var maskedShapeInstanceList = [this.cercle3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.cercle3).wait(146));

	// Vais_horizontaux (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmnREIAggYIAAAAQAPgmgHgbIAAAAQgHgaADgHIAAAAQACgHAdgCIAAAAICIiGIB4hXIBtgmIgIglIgsgyIhpgyIhjgjIhpAAIAaiAIABAIIA+AeIBsAKIBrAZIBNAjICjDcIBeBwIAhAAQAhA4gkAvIAAAAIADAAIAFAtIABABIAAAAIgxgiIiRiCIhAgjIhjAZIlzEwQgqgKAWgTgAFWP5IAFAFIAAAAIgCADIAAAAgAlSKBIABAAIAAAAIgBACIAAgCgAEqFkIADACIAAAAIgCACIgCAIIAAAAgAEABuIg0gwIiqhZIhjAAIgPADIhuBlIiFBVIgEANQhEgiAvhoIAAAAIANAFIBkhAIBOhXIBNhOIA+hmIBIhEIEkg8IAaAAIgLBfIiHANIilBIIgvBaIDrBsIBMBCQAPBNgHBrIAAAAgAmLoqIACgDIAZgEIBBgeIBpgXIBNgMIBegXIBXgMIBeAAIBqAMIBTgFQAoA4gFBDIAAAAIj0gQIiiAIIh6AjIieAeIh7BAQAfhMAFhEgAEiscIhYhqIiUhHIiSAAIiHBBIheBeIgTA9QgtgkgogyIAAAAIgggQIAAAAIBNiCIDahvIETgYICxBSICTC9IAVBBQg9Aog/AjIAAAAIgFAAg");
	mask_1.setTransform(285.1002,171.5251);

	// Calque_11
	this.cercle = new lib.Cercle();
	this.cercle.name = "cercle";
	this.cercle.parent = this;
	this.cercle.setTransform(292.4,754.3,1.1566,1.0851,0,-8.5504,-8.0305);

	var maskedShapeInstanceList = [this.cercle];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.cercle).wait(146));

	// V_gauche (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AnBVWQiigCiVgRIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgFIAAAAIAAgCIAAAAIAAgGIAAAAIAAgBIAAAAIACgDIAAAAIAkABIAAAAIAAgMIAAAAQAfgJAhgHIAAAAIAAgXIAAAAQCchJCsg8IAAAAQAJgDAGgHIAAAAIARABIAAAAIBEADIAAAAIhEgDIAAAAIAAgQQARAAASgDIAAAAQBPgPBNgRIAAAAIABAAIAwgCIDZhNICZheIBwhqIBAh1IA7iZIAYilIARjaIAAkHIgGlzIgvlVIgGkJIA1jTIAmg/IAJAKIAAAAIAKAAIALALIAAAAQANALAJAOIAAAAQALAQAQAKIAAAAQAAAHAEADIAAAAQAGAEAFAGIAAAAQADAEAHABIAAAAIACAIIAHACIg+DFIASgEQghA5AKBVIAAAAQACAUAEARIAAAAIgBAGIASB1IARCjIAIB/IARAHQAAAZAHAcIAAAAQgIA6AEA9IAAAAIAAABIAABfIAPBnIAMAGIgCAKIAAAAQgQA0ABA7IAAAAIAAAPIAAAAIgmGjIAHgGQgdBGgLBTIAAAAIgEADIg6ClIhfCKIiCBuIivBhIiWA6IikAlIhkACIiPA5IAAAAQgJAegjAHIAAAAIAAANIAAAAIgUAGIAAAAQAAAeglAAIAAAAIgCAAgAjmR5IAoACIAAAAIgogCIAAAAIAAAAg");
	mask_2.setTransform(177.6249,222.1263);

	// Calque_20
	this.cercle2 = new lib.Cercle();
	this.cercle2.name = "cercle2";
	this.cercle2.parent = this;
	this.cercle2.setTransform(-319.4,-22.7);

	var maskedShapeInstanceList = [this.cercle2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.cercle2).wait(146));

	// V_bas_horiz (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ae6EGQghgBgHgPQofAcoShOQihAFiggBQpogGpkgPIAAAEIAAAFQhLADhLgFIAAgCIAAgDIAAgGIgjgBQhGAJhDAAQhZAHhSgKIgCAIQluAOl3gKQiCgEh/gOQh9ASiHgBQlKgClJAFQg9ABg9gJQgigFADgmIAKiiIABgCQAWgIAqgBQAVgDATgFQDeAEDdgJQC+gIC6AaQAXADAUAGIAfgHQENANEHgHQB3gDBwAKQAcgXAXgiQALAVAWAHQATAHAQgLIACgCQBLAOBRgTQAJgCAFgEQANAGAPADQBRASBQAPICpAEIAAgPIAAgBIA3ACIAAgBQABgKAOgBQC3gRCtALQH7AgH+AAQEHgBEJAnQNPABNPAIQCUABCNAEIAAAEIAAASIAAAEIAAAWQA/ACA+ADIAAACIAAAEIAAADIAAAEIAAALIAAAEIAAAEIAAAEIAABlIhpABIAAANQmpASmpAAQifAAiegCgA6BA3IAiAAIghgBIgBABgA/3A0IAXAAIgegBIAHABgA+SgkQAKgEAIgGQAMAFARABQAnABAkgPQDHhVDEhdQAfgPALgQQARAKAXACIAFAHQi3AyiqBfQg/Ajg6AlQgIAFAHAEIAEABQhCgLhDgIgA1jhYIAIgEIgEAEIgEAAgAyyicIAQAIIgpABIAZgJg");
	mask_3.setTransform(283.963,359.1789);

	// Calque_23
	this.cercle4 = new lib.Cercle();
	this.cercle4.name = "cercle4";
	this.cercle4.parent = this;
	this.cercle4.setTransform(252.4,889.5);

	var maskedShapeInstanceList = [this.cercle4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.cercle4).wait(146));

	// Calque_19
	this.instance_329 = new lib.CachedTexturedBitmap_211();
	this.instance_329.parent = this;
	this.instance_329.setTransform(-68.25,59.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_329).wait(146));

	// Villosité
	this.instance_330 = new lib.Villosité("synched",0);
	this.instance_330.parent = this;
	this.instance_330.setTransform(282.1,172);

	this.timeline.addTween(cjs.Tween.get(this.instance_330).wait(146));

	// Fond
	this.instance_331 = new lib.CachedTexturedBitmap_212();
	this.instance_331.parent = this;
	this.instance_331.setTransform(-14.5,34.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_331).wait(146));

	// Fond
	this.instance_332 = new lib.CachedTexturedBitmap_213();
	this.instance_332.parent = this;
	this.instance_332.setTransform(-12.5,-44,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_332).wait(146));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.2,-66.4,1633.5,864.5);
// library properties:
lib.properties = {
	id: '65F84DDEE92A504BABCD323A68F25EBF',
	width: 550,
	height: 400,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Canvas/Villosite/CachedTexturedBitmap_208.png", id:"CachedTexturedBitmap_208"},
		{src:"Canvas/Villosite/CachedTexturedBitmap_216.png", id:"CachedTexturedBitmap_216"},
		{src:"Canvas/Villosite/Villosite_atlas_.png", id:"Villosite_atlas_"},
		{src:"Canvas/Villosite/Villosite_atlas_2.png", id:"Villosite_atlas_2"}
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
an.compositions['65F84DDEE92A504BABCD323A68F25EBF'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;