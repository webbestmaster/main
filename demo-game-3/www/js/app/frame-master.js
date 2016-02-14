import util from './../lib/util';
import frameTextures from './frame-textures';

var frameMaster = {

	original: {
		full: {
			w: 780,
			h: 520
		}
	},

	stage: null,
	renderer: null,

	isAnimate: false,

	init: function () {

		var frame = this;

		frame.animate = frame.animate.bind(frame);

		frame.initCanvas();

	},

	initCanvas: function () {

		var frame = this,
			q = 1,
			width = frame.original.full.w * q,
			height = frame.original.full.h * q;

		var renderer = PIXI.autoDetectRenderer(width, height, {transparent: true});
		frame.stage = new PIXI.Container();
		frame.renderer = renderer;
		frame.stage.scale.x = q;
		frame.stage.scale.y = q;
		renderer.view.className = 'frame-renderer';
		document.body.appendChild(renderer.view);

	},

	initSprites: function () {

		var frame = this;
		var frameStage = frame.stage;

		util.eachHash(frameTextures.textures, function (spriteData) {

			var sprite = new PIXI.Sprite(spriteData.texture.texture);

			spriteData.sprite = sprite;

			sprite.position.x = spriteData.x;
			sprite.position.y = spriteData.y;
			sprite.width = spriteData.w;
			sprite.height = spriteData.h;

			frameStage.addChild(sprite);

		});

		frame.updateAnimateLogo();
		frame.isAnimate = true; // for updateAnimateLogo
		frame.animate(); // for updateAnimateLogo

	},

	draw: function () {
		this.renderer.render(this.stage);
	},

	animate: function () {

		if (this.isAnimate) {
			requestAnimationFrame(this.animate);
			this.updateAnimateLogo();
			this.renderer.render(this.stage); // see this.draw
		}

	},


	// todo: remove this code -> create normal animator object and logic
	logoFrame: 100,

	updateAnimateLogo: function () {

		var frame = this;

		var logoSprite = frameTextures.textures.logo.sprite;

		var filter = new PIXI.filters.PixelateFilter();

		filter.size = new PIXI.Point(frame.logoFrame / 10, frame.logoFrame / 10);

		logoSprite.filters = [filter];

		frame.logoFrame -= 1;

		if (frame.logoFrame < 0) {
			logoSprite.filters = null;
			frame.isAnimate = false;
			frame.draw();
		}

	}

};

frameMaster.init();

export default frameMaster;