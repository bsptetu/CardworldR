/*:
 * @plugindesc 攻撃の命中率・回避率計算を統合します。
 * @author 茶の助
 *
 * @help デフォルトの計算式では命中率と回避率を個別に計算しているため、
 命中率をいくら上げても、
 敵の回避率が１％でもあると回避されてしまうことがあります。
 このスクリプトでは「攻撃者の命中率－対象の回避率」という計算のみに変更します。
 
 ステートのメモ欄に<回避不能>と書きこむと、
 お互いの命中・回避率に関わらずに攻撃が必ず命中するようになります。
 
 攻撃者の武器と攻撃対象のメモ欄に<条件必中>と書かれている場合、
 攻撃が必中するようになります。
 *
 * @param decisionType
 * @desc 攻撃失敗の扱い (0:ミス 1:回避)
 * @default 0
 */

(function(){

    var parameters = PluginManager.parameters('TYA_HitCalculation');
    var decisionType = Number(parameters['decisionType']) != 1;
    
    Game_Action.prototype.apply = function(target) {
        var result = target.result();
        this.subject().clearResult();
        result.clear();
        result.used = this.testApply(target);
        var success = (this.itemHit(target) - this.itemEva(target));
        var size = target.states().length;
        if (size > 0) {
            for (var i = 0; i < size; i++) {
              if (target.states()[i].note.match('<回避不能>')) {
                success = 100;
              }
            }
        }
        var at = this.subject();
        var ca = '<条件必中>';
        if (at.isActor() && !target.isActor()) { 
          if ($dataEnemies[target._enemyId].note.match(ca)) {
            if (at.weapons()[0] && at.weapons()[0].note.match(ca) || at.weapons()[1] && at.weapons()[1].note.match(ca)) {
                success = 100;
            }
          }
        }
        if(decisionType){
          result.missed = (result.used && Math.random() >= success);
        }else{
          result.evaded = (result.used && Math.random() >= success);
        }
        result.physical = this.isPhysical();
        result.drain = this.isDrain();
        if (result.isHit()) {
          if (this.item().damage.type > 0) {
            result.critical = (Math.random() < this.itemCri(target));
            var value = this.makeDamageValue(target, result.critical);
            this.executeDamage(target, value);
          }
          this.item().effects.forEach(function(effect) {
            this.applyItemEffect(target, effect);
          }, this);
          this.applyItemUserEffect(target);
        }
    };

})();