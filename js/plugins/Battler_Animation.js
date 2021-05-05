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
    if (this._effectType === 'Whiten') {
		var widthEnwmy = this.bitmap.width
		if (widthEnwmy < 120) {
		      this.setFrame(0, 0, this.bitmap.width, frameHeight);
		} else {		
		if (widthEnwmy > 480) {
		　　if ($gameSwitches.value(597)) {
   		　　   if ($gameSwitches.value(598)) {
		         var frameY = this._anime_cnt;
		         this.setFrame(0,300,120,150);
		　　   } else {
		         var frameY = this._anime_cnt;
		         this.setFrame(0,150,120,150);
		　　   }
		　　} else {
		      var frameY = this._anime_cnt;
		      this.setFrame(frameY * 120,0,120,150);
		　　}
		} else {
		      var frameY = this._anime_cnt;
		      this.setFrame(frameY * 80,108,80,108);
		}
		}
    } else {

    if (this._effectType === 'Attack') {
		var widthEnwmy = this.bitmap.width
		if (widthEnwmy < 120) {
		      this.setFrame(0, 0, this.bitmap.width, frameHeight);
		} else {		
		if (widthEnwmy > 480) {
		　　if ($gameSwitches.value(597)) {
   		　　   if ($gameSwitches.value(598)) {
		         var frameY = this._anime_cnt;
		         this.setFrame(0,300,120,150);
		　　   } else {
		         var frameY = this._anime_cnt;
		         this.setFrame(0,150,120,150);
		　　   }
		　　} else {
		      var frameY = this._anime_cnt;
		      this.setFrame(frameY * 120,0,120,150);
		　　}
		} else {
		      var frameY = this._anime_cnt;
		      this.setFrame(frameY * 80,108,80,108);
		}
		}
    } else {

		var widthEnwmy = this.bitmap.width
		if (widthEnwmy < 120) {
		      this.setFrame(0, 0, this.bitmap.width, frameHeight);
		} else {		
		if (widthEnwmy > 480) {
		　　if ($gameSwitches.value(597)) {
   		　　   if ($gameSwitches.value(598)) {
		         var frameY = this._anime_cnt;
		         this.setFrame(0,300,120,150);
		　　   } else {
		         var frameY = this._anime_cnt;
		         this.setFrame(0,150,120,150);
		　　   }
		　　} else {
		      var frameY = this._anime_cnt;
		      this.setFrame(frameY * 120,0,120,150);
		　　}
		} else {
		      var frameY = this._anime_cnt;
		      this.setFrame(frameY * 80,0,80,108);
		}
		}
		}
    }
};

Sprite_Enemy.prototype.updateWhiten = function() {
    var widthEnwmy = this.bitmap.width
    if (widthEnwmy > 480) {
    } else {
    this._shake = this._effectDuration % 5 * 3 - 2;
    //this.blendMode = Graphics.BLEND_ADD;
    //this.opacity *= this._effectDuration / (this._effectDuration + 1);
    //this.setBlendColor([255, 255, 255, 255 - this.opacity]);
    }
};

/***********************************************************
 * ■アクターのダメージ演出
 ***********************************************************/
/**
 * ●アクターの初期化処理
 */
var _Sprite_Actor_initMembers = Sprite_Actor.prototype.initMembers;
Sprite_Actor.prototype.initMembers = function() {
    _Sprite_Actor_initMembers.apply(this, arguments);

    this._effectType = null;
    this._effectDuration = 0;
    this._shake = 0;
};

Sprite_Battler.prototype.updatePosition = function() {
    this.x = this._homeX + this._offsetX;
    this.y = this._homeY + this._offsetY;
    this.x += this._shake;
};

/**
 * ●更新
 */
var _Sprite_Actor_update = Sprite_Actor.prototype.update;
Sprite_Actor.prototype.update = function() {
    _Sprite_Actor_update.apply(this, arguments);

    // エフェクト更新追加
    if (this._actor) {
        this.updateEffect();
    }
};

/**
 * ●ダメージ演出
 */
var _Game_Actor_performDamage = Game_Actor.prototype.performDamage;
Game_Actor.prototype.performDamage = function() {
    _Game_Actor_performDamage.apply(this, arguments);
        this.requestEffect('blink');
};

var _Game_Actor_performAttack = Game_Actor.prototype.performAttack;
Game_Actor.prototype.performAttack = function() {
    this.requestEffect('Attack');
};

/**
 * ●アクターのダメージ効果音
 */
var _SoundManager_playActorDamage = SoundManager.playActorDamage;
SoundManager.playActorDamage = function() {
    _SoundManager_playActorDamage.apply(this, arguments);
};

/**
 * ●点滅開始
 */
Sprite_Actor.prototype.startBlink = function() {
    // 点滅時間を設定
    this._effectDuration = 20;
};
Sprite_Actor.prototype.startAttack = function() {
    // 点滅時間を設定
    var bitmap = this._mainSprite.bitmap.width;
    if (bitmap < 82) {
AudioManager.playSe({"name":"Book1","volume":50,"pitch":150,"pan":0})
    this._effectDuration = 15;
    } else{
    this._effectDuration = 1;
    }
};

/**
 * ●エフェクトの設定
 */
Sprite_Actor.prototype.setupEffect = function() {
    if (this._actor.isEffectRequested()) {
        this.startEffect(this._actor.effectType());
        this._actor.clearEffect();
    }
};


/**
 * ●エフェクト開始
 */
Sprite_Actor.prototype.startEffect = function(effectType) {
    this._effectType = effectType;
    switch (this._effectType) {
    case 'blink':
        this.startBlink();
        break;
    case 'Attack':
        this.startAttack();
        break;
    }
    // this.revertToNormal();
};

/**
 * ●エフェクト更新
 */
Sprite_Actor.prototype.updateEffect = function() {
    this.setupEffect();
    if (this._effectDuration > 0) {
        this._effectDuration--;
        switch (this._effectType) {
        case 'blink':
            this.updateBlink();
            break;
        case 'Attack':
            this.updateAttack();
            break;
        }
        if (this._effectDuration === 0) {
            this._effectType = null;
        }
    }
};

/**
 * ●エフェクト判定
 */
Sprite_Actor.prototype.isEffecting = function() {
    return this._effectType !== null;
};

/**
 * ●点滅演出更新
 */
Sprite_Actor.prototype.updateBlink = function() {
      this._shake = (this._effectDuration % 5 * 3 - 2) * -1;
    //this.opacity = (this._effectDuration % 10 < 5) ? 255 : 0;
};
Sprite_Actor.prototype.updateAttack = function() {
    var bitmap = this._mainSprite.bitmap.width;
    if (bitmap < 82) {
    this.scale.x = (this._effectDuration/15);//this._shake = (this._effectDuration % 5 * 3 - 2) * -1;
    }//this.opacity = (this._effectDuration % 10 < 5) ? 255 : 0;
};