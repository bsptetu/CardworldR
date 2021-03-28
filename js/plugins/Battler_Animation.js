//=============================================================================
// Battler_Animation.js
//=============================================================================

/*:
 * @plugindesc 戦闘時、敵をアニメーションさせます。
 * @author 村人C
 *
 * @help
 *
 * 使い方
 * コマンド:
 * Wait
 * アニメーションを更新する間隔。
 *
 * Animation
 * アニメーションの数。
 *
 * アニメーションさせたい画像の名前の後ろに _〇〇 を追加して下さい。
 * 
 * 例 Enemy の画像を5アニメーションさせたい
 * Enemy_01
 * Enemy_02
 * Enemy_03
 * Enemy_04
 * Enemy_05
 * の様に連番にします。
 *
 * 仕様
 * 村人Aさんの簡易モーションを改変　改変：ナイン
 * アニメーションの判定で名前に _ があるかで分岐しているので
 * 名前に _ をつける場合は、アニメーション画像だけにして下さい。
 * デフォルトで入っている
 * Actor1_〇〇、General_〇〇は名前を変更しないとエラーが出ますので注意して下さい。
 *
 * アニメーション画像が、一瞬ちらつくことがありますがあったのをスプライトシートで対応。
 *
 * 
 * readmeやスタッフロールの明記、使用報告は任意
 *
 * @param Wait
 * @desc アニメーションを更新する間隔
 * デフォルト: 10
 * @default 10
 *
 * @param Animation
 * @desc アニメーションの数
 * デフォルト: 6
 * @default 6
 *
 */

var Battler_Animation = Battler_Animation || {};
Battler_Animation.Status = []; 
Battler_Animation.Parameters = PluginManager.parameters('Battler_Animation');

Battler_Animation.Status[0] = Number(Battler_Animation.Parameters["Wait"])  || 10
Battler_Animation.Status[1] = Number(Battler_Animation.Parameters["Animation"])  || 6

var _Sprite_Enemy_updateBitmap_Battler_Animation = Sprite_Enemy.prototype.updateBitmap;
Sprite_Enemy.prototype.updateBitmap = function() {
	_Sprite_Enemy_updateBitmap_Battler_Animation.call(this);
	var name = this._enemy.battlerName();
	var hue = this._enemy.battlerHue();
	this._set_animations(name, hue);
};

var _Sprite_Enemy_initialize_Battler_Animation = Sprite_Enemy.prototype.initialize;
Sprite_Enemy.prototype.initialize = function(battler) {
	_Sprite_Enemy_initialize_Battler_Animation.call(this, battler);
	this._wait_cnt  = 0;
	this._anime_cnt = 0;
	var name = battler.battlerName();
    var hue = battler.battlerHue();
	var _name = name.split("_")
	if (_name[1] === undefined) {
		this.loadBitmap(name, hue);
	}
	else {
		this._bitmaps  = [this.bitmap];
		if (this._bitmaps[2] === undefined) {
			for (var i = 2; i < Battler_Animation.Status[1]; i++) {
					var filename = _name[0] + '_' + String(0) + String(1);
				this._bitmaps[i] = ImageManager.loadEnemy(filename, hue);
			}
		}
	}
};

Sprite_Enemy.prototype._set_animations = function(name, hue) {
	if ((this._wait_cnt % Battler_Animation.Status[0]) === 0) {
		if (this._anime_cnt > Battler_Animation.Status[1]) {
			this._anime_cnt = 0
		}
		var _name = name.split("_")
		if (_name[1] === undefined) {
			this.loadBitmap(name, hue);
		}
		else {
				//this.loadBitmap(name, hue)
				//this.loadBitmap(_name[0] + '_' + String(0) + String(1), 0, false); // 画像の読み込み
				//var frameY = this._anime_cnt;
				//this.setFrame(0,frameY * 120,120,150);
		}
//
		this._anime_cnt += 1;
		if (this._anime_cnt === 5) {
		this._anime_cnt = 1;
		}
//
	}
	this._wait_cnt = (this._wait_cnt + 1) % (Battler_Animation.Status[1] * Battler_Animation.Status[0])
}

Sprite_Enemy.prototype.updateFrame = function() {
    Sprite_Battler.prototype.updateFrame.call(this);
    var frameHeight = this.bitmap.height;
    if (this._effectType === 'bossCollapse') {
        frameHeight = this._effectDuration;
    }
		var widthEnwmy = this.bitmap.width
		if (widthEnwmy < 120) {
		      this.setFrame(0, 0, this.bitmap.width, frameHeight);
		}
		else {
		if (widthEnwmy > 480) {
		　　if ($gameSwitches.value(597)) {
   		　　   if ($gameSwitches.value(598)) {
		         var frameY = this._anime_cnt;
		         this.setFrame(0,300,120,150);
		　　   }
		　　   else {
		         var frameY = this._anime_cnt;
		         this.setFrame(0,150,120,150);
		　　   }
		　　}
		　　else {
		      var frameY = this._anime_cnt;
		      this.setFrame(frameY * 120,0,120,150);
		　　}
		}
		else {
		      var frameY = this._anime_cnt;
		      this.setFrame(frameY * 80,0,80,108);
		}
		}
};