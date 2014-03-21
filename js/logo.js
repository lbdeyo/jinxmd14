(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 348,
	height: 249,
	fps: 32,
	color: "#444444",
	manifest: []
};

// stage content:
(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_108 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(108).call(this.frame_108).wait(1));

	// estd
	this.instance = new lib.estd();
	this.instance.setTransform(103,18.8,1,1,0,0,0,48,12.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({alpha:1},9).wait(10));

	// 1998
	this.instance_1 = new lib._1998();
	this.instance_1.setTransform(283,18.8,1,1,0,0,0,48,12.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({alpha:1},9).wait(1));

	// topRightLine
	this.instance_2 = new lib.topRightLine();
	this.instance_2.setTransform(231.4,24.1,0.037,1,0,0,0,54,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({scaleX:1,x:283.4},4).wait(30));

	// topLeftLine
	this.instance_3 = new lib.topLeftLine();
	this.instance_3.setTransform(145.4,24.1,0.157,1,0,0,0,51,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({scaleX:1,x:102.4},4).wait(28));

	// bottomLine
	this.instance_4 = new lib.bottomLine();
	this.instance_4.setTransform(193.4,234.1,0.076,1,0,0,0,144,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).to({scaleX:1},5,cjs.Ease.get(1)).wait(22));

	// crown
	this.instance_5 = new lib.crown();
	this.instance_5.setTransform(191.4,22.3,1,1,0,0,0,23.8,14.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:1},9).wait(25));

	// lbdeyoIs
	this.instance_6 = new lib.lbdeyoIs();
	this.instance_6.setTransform(187.7,62.5,1,1,0,0,0,72.8,15.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-1)).wait(68));

	// multimediaDesign
	this.instance_7 = new lib.multimediaDesign();
	this.instance_7.setTransform(199.6,203.2,1,1,0,0,0,105.5,11.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:false},0).to({alpha:1},20,cjs.Ease.get(-1)).wait(56));

	// JINX
	this.instance_8 = new lib.jinx();
	this.instance_8.setTransform(171.6,133.3,1,1,0,0,0,147,76.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:1},28).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218.6,181.4,293.9,152.8);


// symbols:
(lib.topRightLine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AobAAIQ3AA");
	this.shape.setTransform(54,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,110,2);


(lib.topLeftLine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("An9AAIP7AA");
	this.shape.setTransform(51,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,104,2);


(lib.multimediaDesign = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("M U L T I M E D I A / D E S I G N", "bold 16px 'DIN Alternate'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.setTransform(103.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,211,22.6);


(lib.lbdeyoIs = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAxQgXgMgJgXIAQgGQAIAQARALQATALAIgNQAHgLgNgKIgMgKQgMgIgEgMQgDgMAGgKQAGgNAPgDQAMgDARAKQAVAMAJATIgQAGQgJgPgOgIQgIgEgHAAQgFABgFAHQgCAEACAGQABAFAGAGIALAJQAOAIACANQADALgHALQgKAQgPAAQgLAAgPgJg");
	this.shape.setTransform(139.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAwIAshmIARAIIgtBlg");
	this.shape_1.setTransform(128.4,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOA4QgNgEgHgIQgIgJgCgIIgCgFIAAgGIAFgYQAEgTADgHQACgGAEgEQAHgHALgDQAKgEANAEQAPADAIAJQAHAIADAKQABAGAAAGQgBAIgGAPQgFASgDAHQgDAGgEAEQgGAGgLADQgFACgFAAIgMgBgAgBgmIgJAEQgDABgEAHQgDAHgDAPQgEAPAAAFQgBAFADAGIAGAHQAEAEAFABQAHACADgCQAFgBADgCQAEgCADgGQADgGAFgQIAFgUQAAgHgDgEQgBgDgEgEQgEgDgHgDIgHgBIgDABg");
	this.shape_2.setTransform(107.2,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA5IAHguQgQgpgMgcIAUACIASA1IAggtIAUADIguA6IgHAug");
	this.shape_3.setTransform(93.8,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA3IAChwQAqABAjADIgBAQIg6gDIgBAhIAwABIgBAOIgvgCIgBAhIA2ADIgBAQIhHgDg");
	this.shape_4.setTransform(79.2,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Agsg1IArgEQAXgCAOATQAFAGACAHIACAYQAAANgBALIgBAHIgDAGQgFAIgJAGQgJAGgMABIglADgAgBgpIgXACIAIBPIATgBQAOgCAHgKQADgFAAgEIgBgTIgCgVQAAgGgFgEQgHgJgMAAIgBAAg");
	this.shape_5.setTransform(63,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIgEIAOgEIAEAOIgPADg");
	this.shape_6.setTransform(42.4,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1gqIAugQQAQgGALAFQALAFAFANQACAGgCAIIgDAHQgCAEgFAEIAAAAQAKgBAHAGQAHAFADAHQAEAPgGAKQgGAMgNAEIgtARgAALAAIgYAJIALAgIAYgJQAKgEACgGQADgGgCgGQgCgHgGgDQgEAAgDAAQgEAAgFAAgAgEgrIgaAJIALAfIAYgJQAKgEACgGQADgGgCgGQgCgHgGgDIgGgBIgIACg");
	this.shape_7.setTransform(28.7,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJgCIANgIIAGAOIgNAGg");
	this.shape_8.setTransform(19.2,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag9gqIARgKIAvBSIAzgdIAIAOQgZANgnAZg");
	this.shape_9.setTransform(6.3,25);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,145.5,30.4);


(lib.jinx = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("JINX", "130px 'Baskerville'", "#CCCDFD");
	this.text.textAlign = "center";
	this.text.lineHeight = 156;
	this.text.setTransform(165,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(20,0,293.9,152.8);


(lib.estd = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("est'd", "12px 'Baskerville'", "#CCCDFD");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 92;
	this.text.setTransform(46,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,25.8);


(lib.crown = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPAPQgJAAgEgIIgDgGIAEgHQAEgIAMAAIEbAAQAJAAAFAKQADAEgDAFQgDAGgFACQgEACgJAAg");
	this.shape.setTransform(23.7,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiXB7IgEAAIgCgEIgOgiIgcgwIgUgbIgJgKIgFgCIgDgCIAAgDQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIAHADQADABAJAHIACACIACgFQABgCAHgCIAEgCQALAAAEALQACAFgCAFIgHAHIgEABQgDADADAEIATATIAGADQAGADAGAAQAGAAAFgDQALgFAFgIQACgCACgGQACgDgBgGIABgIIgBgFIgBgBIgDgBIgFgCIgDgDQgEgCgCgHIABgGQACgIAHgEIAIgCIACAAIADACQAMACABALIABACIABACIgFAJIgBACQgBAAgBAAQAAABAAAAQAAABAAAAQAAABAAABQACAGAHADIAHAFIAJADIAMAEIACABIAJAAQAMAAAIgIIAFgDQAHgGADgKIAEgGIAAgEIgJADQgFACgDgBQgKgDgFgHIgEgJQgCgCABgEIABgHQAAgCADgEQAGgHAFgCIAKgBIADAAIABgEQgDgHABgLQAAgGAKgTIAMgWQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAABIAEAEIAPAeIAFANIAAAHIgBAEIgCAKIACACIAFAAQAIgBAFAGIAIAJIABAIQABAGgGAIQgDAFgFADQgHAEgGgBIgKgDIABAHQADADABAFQABACAHAHQADADAOAHQAGACALgBQAEAAAHgDIANgFQAJgGAGgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgHgGABgJIAEgIIABgBQACgDAEgCIAHgCIAIADQAFABACAEQAFAIgBAFIgDAGQgCAEgEABQgGADgCgBQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAABIAAAOIAEANQAEAIAHAEQALAIALgCQAEgBAKgGIAKgJIAIgJIAFgDIgCgDIgFgCIgEgCQgGgGABgHQAAgHAHgDIAFgCQADgBADACQAGAAAFAHIAEgCQAGgFAFgBIAGgCQAEgCADABIAJAAIADACIgCACIgDACIgQAOIgIALIgEAEIgNAWIgJAOIgcA8g");
	this.shape_1.setTransform(23.8,12.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.6,28.6);


(lib.bottomLine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("A2fAAMAs/AAA");
	this.shape.setTransform(144,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,290,2);


(lib._1998 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1998", "12px 'Baskerville'", "#CCCDFD");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 92;
	this.text.setTransform(46,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,25.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;