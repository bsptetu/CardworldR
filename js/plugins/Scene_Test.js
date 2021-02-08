( function () {
    var _createBattleback = Spriteset_Battle.prototype.createBattleback ;
    Spriteset_Map.prototype.createBattleback = function () {
	_createBattleback.call( this );
	var sprite = new Sprite();
	sprite.bitmap = ImageManager.loadPicture("aberu4");
sprite.x = Graphics.width / 2;
sprite.y = Graphics.height / 2;
	this._battleField.addChild(sprite);
    }
})();

