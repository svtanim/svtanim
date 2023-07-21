(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Obliquite_atlas_", frames: [[1616,0,206,26],[1258,0,208,208],[1616,28,226,15],[0,0,1100,796],[1258,210,512,2],[1102,670,801,39],[1890,0,2,584],[1894,0,19,18],[1850,0,38,46],[1468,0,146,200],[1102,0,154,668],[1844,0,4,626]]}
];


// symbols:



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["Obliquite_atlas_"]);
	this.gotoAndStop(11);
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


(lib.Tracéangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_12();
	this.instance.parent = this;
	this.instance.setTransform(85.15,-2.6,0.2691,0.2691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tracéangle, new cjs.Rectangle(85.2,-2.6,60.8,4.1), null);


(lib.Soleil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_8();
	this.instance.parent = this;
	this.instance.setTransform(12.25,-12.35,0.0371,0.0371);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Soleil, new cjs.Rectangle(12.3,-12.3,5.699999999999999,24.8), null);


(lib.Demiterre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_7();
	this.instance.parent = this;
	this.instance.setTransform(4.4,-50.85,0.2691,0.2691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Demiterre, new cjs.Rectangle(4.4,-50.8,39.300000000000004,53.8), null);


(lib.Curseur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Curseur, new cjs.Rectangle(-0.5,-0.5,19,23), null);


(lib.Terre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Angle
	this.instance = new lib.Tracéangle();
	this.instance.parent = this;
	this.instance.setTransform(-73.15,-49.6,0.5235,1,-17.7247);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Axe_oblique
	this.instance_1 = new lib.CachedTexturedBitmap_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.75,-95.5,0.2691,0.2691);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Equateur
	this.instance_2 = new lib.CachedTexturedBitmap_10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.8,-4.65,0.2691,0.2691);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Terre
	this.instance_3 = new lib.CachedTexturedBitmap_11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-27.95,-27.95,0.2691,0.2691);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Terre, new cjs.Rectangle(-31.5,-95.5,59.6,168.5), null);


(lib.ClipTerre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"23.3":0});

	// Cache
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(437.75,56.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Terre
	this.planete = new lib.Terre();
	this.planete.name = "planete";
	this.planete.parent = this;
	this.planete.setTransform(447.4,192.95,1.8576,1.8576,23.3245);

	this.timeline.addTween(cjs.Tween.get(this.planete).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipTerre, new cjs.Rectangle(379.1,29.5,139.19999999999993,288.2), null);


// stage content:
(lib.ObliquitédelaTerre_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable( stage, false, true );
		
		this.curseur.y = 326;
		
		this.curseur.addEventListener("mousedown", fct001.bind(this));
		
		function fct001(evt) {
			var pm = this.globalToLocal(evt.stageX, evt.stageY);
			var posX = pm.x;
			var posY = pm.y;
		
			var posRondX = this.curseur.x;
			var posRondY = this.curseur.y;
		
			exportRoot.differenceX = (posRondX - posX);
			exportRoot.differenceY = (posRondY - posY);
		
		};
		
		this.curseur.addEventListener("pressmove", fct002.bind(this));
		
		function fct002(evt)
		{
			
			var pm = this.globalToLocal(evt.stageX, evt.stageY);
		
			var posX =  pm.x;
			var posY =  pm.y;
			
			var a = exportRoot.differenceX;
			var b = exportRoot.differenceY;
		
			var resultX = Math.round(posX + a);
			var resultY = Math.round(posY + b);
		
			this.curseur.x = resultX;
			this.curseur.y = resultY;
		
			this.curseur.y = 326;
			if (this.curseur.x >500)
			{
				this.curseur.x = 500;
			}
			if (this.curseur.x < 100)
			{
				this.curseur.x = 100;
			}
		
		};
		
		this.addEventListener("pressup", fctTTC.bind(this));
		
		function fctTTC() 
		{
			createjs.Ticker.removeEventListener("tick", replaceBind);
		
		}
		
		var a = 0;
		var y = 0;
		var w = 0;
		var v = 0;
		var u = 0;
		
		
		var replaceBind = tick2.bind(this);	
		this.curseur.addEventListener("mousedown", fctTT.bind(this));
		
		
		function fctTT()
		{
			createjs.Ticker.addEventListener("tick", replaceBind);
		}
		
		function tick2()
		
		{
		
				a = this.curseur.x ;
				
				y= -(-a*410+205000);
				
				w = 410 * a - 41000;
				
				v = 23.27 + 1.3 * Math.sin(Math.PI * 2 * w / 41000);
				
				u = Math.round(v * 100) / 100;
				
				this.angle.text = u+"°";
			
			if (this.curseur.x == 500)
			{
				this.age.text = "Temps: 0";
			}
			else
			{
				this.age.text = "Temps: "+y+" ans";
				this.clipTerre.planete.rotation = v;
			}
				
			};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Copyright
	this.text = new cjs.Text("F. Pellegrin\nhttps://svtanim.fr", "italic 9px 'Times New Roman'");	this.text.lineHeight = 8;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(355.85,7.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// CC_BY_NC
	this.text_1 = new cjs.Text("CC-BY-NC", "italic 10px 'Arial'");
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 73;
	this.text_1.parent = this;
	this.text_1.setTransform(7.55,376.9);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// Cadre
	this.instance = new lib.CachedTexturedBitmap_15();
	this.instance.parent = this;
	this.instance.setTransform(0.5,1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Consigne
	this.text_2 = new cjs.Text("Déplacez le curseur bleu en bas et à droite de l'écran.", "12px 'Times New Roman'");
	this.text_2.lineHeight = 15;
	this.text_2.lineWidth = 356;
	this.text_2.parent = this;
	this.text_2.setTransform(55.05,264.65);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// Calque_1
	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.5,29.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Titre
	this.text_3 = new cjs.Text("L'OBLIQUITE DE LA TERRE", "20px 'Times New Roman'", "#FF0000");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 259;
	this.text_3.parent = this;
	this.text_3.setTransform(164.45,7.95);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// Curseur
	this.curseur = new lib.Curseur();
	this.curseur.name = "curseur";
	this.curseur.parent = this;
	this.curseur.setTransform(500,326,1,1,0,0,0,9,11);

	this.timeline.addTween(cjs.Tween.get(this.curseur).wait(1));

	// Ligne_curseur
	this.text_4 = new cjs.Text("- 123 000 ans", "bold 10px 'Times New Roman'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 13;
	this.text_4.lineWidth = 55;
	this.text_4.parent = this;
	this.text_4.setTransform(200.75,354.7);

	this.text_5 = new cjs.Text("- 164 000 ans", "bold 10px 'Times New Roman'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.lineWidth = 55;
	this.text_5.parent = this;
	this.text_5.setTransform(101.25,354.7);

	this.text_6 = new cjs.Text("- 41 000 ans", "bold 10px 'Times New Roman'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.lineWidth = 55;
	this.text_6.parent = this;
	this.text_6.setTransform(403.7,354.7);

	this.text_7 = new cjs.Text("Actuel", "bold 10px 'Times New Roman'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.lineWidth = 47;
	this.text_7.parent = this;
	this.text_7.setTransform(491.5,354.7);

	this.text_8 = new cjs.Text("- 82 000 ans", "bold 10px 'Times New Roman'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.lineWidth = 55;
	this.text_8.parent = this;
	this.text_8.setTransform(303.2,354.7);

	this.instance_2 = new lib.CachedTexturedBitmap_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(99.85,341.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4}]}).wait(1));

	// Calque_5
	this.text_9 = new cjs.Text("Soleil", "9px 'Arial'", "#FF0000");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 12;
	this.text_9.lineWidth = 44;
	this.text_9.parent = this;
	this.text_9.setTransform(29.3,154.45);

	this.timeline.addTween(cjs.Tween.get(this.text_9).wait(1));

	// Soleil
	this.instance_3 = new lib.Soleil();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-105,174.9,8.775,13.4677);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Calque_3
	this.instance_4 = new lib.Demiterre();
	this.instance_4.parent = this;
	this.instance_4.setTransform(461.15,188.85,1.8577,1.8554,22.9609,0,0,24,-24.1);
	this.instance_4.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Clip_terre
	this.clipTerre = new lib.ClipTerre();
	this.clipTerre.name = "clipTerre";
	this.clipTerre.parent = this;
	this.clipTerre.setTransform(447.3,181.95,1,1,0,0,0,448.8,189.8);

	this.timeline.addTween(cjs.Tween.get(this.clipTerre).wait(1));

	// Age_affichage
	this.age = new cjs.Text("", "12px 'Arial'");
	this.age.name = "age";
	this.age.textAlign = "center";
	this.age.lineHeight = 15;
	this.age.lineWidth = 165;
	this.age.parent = this;
	this.age.setTransform(264.05,289.1);

	this.timeline.addTween(cjs.Tween.get(this.age).wait(1));

	this.timeline.addTween(cjs.Tween.get(this.text_10).wait(1));

	// Affichage_angle
	this.angle = new cjs.Text("", "12px 'Arial'");
	this.angle.name = "angle";
	this.angle.textAlign = "center";
	this.angle.lineHeight = 15;
	this.angle.lineWidth = 130;
	this.angle.parent = this;
	this.angle.setTransform(480,29.85);

	this.timeline.addTween(cjs.Tween.get(this.angle).wait(1));

	// Axe_90_
	this.instance_5 = new lib.CachedTexturedBitmap_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(445.5,31.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.5,181.6,300,217.9);
// library properties:
lib.properties = {
	id: '3A82B272D1425B449306E0D396993A06',
	width: 550,
	height: 400,
	fps: 80,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Canvas/Obliquite/Obliquite_atlas_.png", id:"Obliquite_atlas_"}
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
an.compositions['3A82B272D1425B449306E0D396993A06'] = {
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