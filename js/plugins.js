// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"TYA_HitCalculation","status":true,"description":"攻撃の命中率・回避率計算を統合します。","parameters":{"decisionType":"0"}},
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。","parameters":{"cacheLimit":"15","screenWidth":"750","screenHeight":"1080","changeWindowWidthTo":"750","changeWindowHeightTo":"1080","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"false","Made with MV Image":"gamesutato","Show Custom Splash":"true","Custom Image":"gamesutato","Fade Out Time":"20","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.50 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"51","Enemy Attack Animation":"1","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"750 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"0","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"0","Flinch Distance":"10","Show Shadows":"false","---Damage Popups---":"","Popup Duration":"65","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"20","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"false","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"false","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"10","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"false","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"false","Show Surprise Text":"false","Optimize Speed":"false","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"false","Show Reflect Text":"false","Show Substitute Text":"false","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"EasingPicture","status":true,"description":"ピクチャーの移動パターンを増やします。","parameters":{}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"true","Defeat First":"false","Always Visible":"true","---Appearance---":"","Minimum Gauge Width":"70","Gauge Height":"75","Back Color":"19","HP Color 1":"22","HP Color 2":"23","Gauge Duration":"20","Gauge Position":"false","Y Buffer":"-70","Use Thick Gauges":"false","---Text Display---":"","Show HP":"true","Show Value":"true","Show Max":"false"}},
{"name":"PictureAnimation","status":true,"description":"ピクチャのアニメーションプラグイン","parameters":{"最初のセルに戻る":"false"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"true","ピクチャ番号の変数番号":"0","ポインタX座標の変数番号":"337","ポインタY座標の変数番号":"338","タッチ操作抑制":"false","戦闘中常にコモン実行":"true","無効スイッチ":"0"}},
{"name":"ChangeBattleWindowRows","status":true,"description":"戦闘時におけるウィンドウの行数を変更します。","parameters":{"----基本設定----":"","ウィンドウの行数":"2","行数を同期させる":"false","高さだけ同期させる":"false"}},
{"name":"Trb_BattlerOperation","status":true,"description":"バトラーの位置を操作するプラグイン","parameters":{"向き固定":"true","歩きモーション":"false"}},
{"name":"ActorBattle","status":true,"description":"v1.4 - Provides you with tools to customize and manage actor\r\nbattle commands.","parameters":{}},
{"name":"BattleCommand","status":true,"description":"v1.2 - Allows you to use a skill directly from the command menu\r\nrather than going to the skill menu.","parameters":{}},
{"name":"BattlerGraphicExtend","status":true,"description":"バトラーグラフィック表示拡張プラグイン","parameters":{}},
{"name":"BordSkin","status":true,"description":"ver1.00 能力値にステートに設定した定数を加算します。","parameters":{}},
{"name":"PluginCommandBook","status":true,"description":"プラグインコマンド集","parameters":{"制御文字の拡張":"はい","スクリプトに制御文字適用":"いいえ"}},
{"name":"111_InputForm","status":true,"description":"フォーム作って文字入力（修正版）","parameters":{}},
{"name":"CounterExtend","status":true,"description":"反撃拡張プラグイン","parameters":{"PayCounterCost":"false","FailureCostShortage":"true","UsingForceAction":"true","EraseStateTiming":"0"}},
{"name":"TitleNewGameOnly","status":true,"description":"ニューゲームオンリープラグイン","parameters":{"startString":"Press Start","font":"","fileExistAction":"0","soundEffect":"","adjustY":"-115"}},
{"name":"MPP_SimpleTouch3","status":true,"description":"【ver.3.18】マウスやタッチ操作を変更します。","parameters":{"Cancel Enabled?":"false","Double Tap Interval":"30","Cursor SE Always?":"false","Scroll Warp?":"false","Scroll Warp SE":"{\"Name\":\"\",\"Volume\":\"90\",\"Pitch\":\"100\",\"Pan\":\"0\"}","Smooth Scroll?":"true","=== Default ===":"","Long Press Time":"12","Select Type Default":"1","Ok Type Default":"1","Outside Tap Default":"0","=== Option ===":"","Long Press Name":"","Select Type Name":"","Select Type Status":"[\"タッチ\",\"追従\"]","Ok Type Name":"決定操作","Ok Type Status _v3":"[\"デフォルト\",\"シングル\",\"ダブル\"]","Outside Tap Name":"","Outside Tap Status _v3":"[\"無効\",\"キャンセル\"]","=== Command ===":"","Plugin Commands":"{\"CancelOff\":\"CancelOff\"}"}},
{"name":"BattleEffectPopup","status":true,"description":"戦闘行動結果ポップアッププラグイン","parameters":{"クリティカル":"critical","クリティカルカラー":"255,255,255,255","回避":"miss","回避カラー":"0,128,255,255","ミス":"miss","ミスカラー":"0,0,0,0","無効":"mukou","無効カラー":"0,0,0,0","ガード":"mukou","ガードカラー":"0,128,255,255","魔法反射":"mukou","魔法反射カラー":"0,128,255,255","反撃":"mukou","反撃カラー":"0,128,255,255","弱点":"mukou","弱点カラー":"0,255,128,255","弱点閾値":"200","耐性":"Counter","耐性カラー":"0,0,128,255","耐性閾値":"50","味方ダメージカラー":"0,0,0,0","敵ダメージカラー":"0,0,0,0","フォントサイズ":"42","メッセージ最大幅":"240","フラッシュ時間":"60","X座標補正":"0","Y座標補正":"0","イタリック表示":"false","縁取り表示":"false","画像使用":"true"}},
{"name":"HzExState","status":true,"description":"ステートの拡張（ステート解除時に別のステートを自動付与など）を行います。","parameters":{}},
{"name":"FTKR_AISkillEvaluate","status":true,"description":"v1.2.6 自動戦闘時に使用するスキルの評価値を変更するプラグイン","parameters":{"Skill Evaluate Log":"false","Evaluate Models":"[]","Manual Mode Name":"手動戦闘","Default Tactics Name":"自動戦闘","Skip Party Command":"0","Menu Command":"","Party Command":"","Title Texts":"{\"party\":\"パーティー\",\"tactics\":\"作戦リスト\"}"}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{}},
{"name":"ServerTime","status":true,"description":"サーバータイムを取得します。","parameters":{}},
{"name":"LoadingExtend","status":true,"description":"ロード中画像拡張プラグイン","parameters":{"イメージ列数":"5","イメージ行数":"1","表示タイプ":"2","アニメーション間隔":"8","表示位置X座標":"375","表示位置Y座標":"540","待機フレーム数":"20","点滅なし":"OFF"}},
{"name":"SSEP_BattleSpeedUp","status":true,"description":"[ver1.51] 戦闘速度を上げるプラグインです。YanflyEngine対応。\n利用時は、必ずYanflyEngineの後に読み込んでください。","parameters":{"---General Setting---":"","BattleSpeed (Default)":"1.5","BattleSpeed (Boost)":"1.5","---Detail Setting---":"","StateIcon":"40","StateOverlay":"8","Weapon":"40","Motion":"40","Balloon":"12","Damage":"40","DamageMin":"40","--BattleLog Setting--":"","LogAnime BaseDelay":"1","LogAnime NextDelay":"1","LogWaitCount Default":"200","LogWaitCount Boost":"1","---YEP BattleCore---":"","YEP Battle MotionWait":"1","---YEP ATB---":"","YEP ATB BoostSwitch":"true","---ATB Speed---":"","ATB Speed(Default)":"1","ATB Speed(Boost)":"2","---YEP Victory AM---":"","YEP Victory Wait":"true"}},
{"name":"InputForm","status":true,"description":"フォーム作って文字入力（修正版）","parameters":{}},
{"name":"LightSaveData","status":true,"description":"セーブデータ軽量化プラグイン","parameters":{"現パーティのみ保持":"ON","ExceptionActorIds":"15,16,17,18,19,20,21,61,82,60"}},
{"name":"Torigoya_SaveCommand","status":true,"description":"プラグインコマンドからセーブを実行できるようにします。","parameters":{}},
{"name":"HyperLink","status":true,"description":"ゲーム中に外部ページへのリンクを貼ります。","parameters":{"description":"twitterへのリンク"}},
{"name":"chunkof_AudioAlert","status":true,"description":"WebAudio非対応ブラウザで開かれた場合「警告表示」「音声なしでプレイ続行」を行います。","parameters":{"displayAlert":"true"}},
{"name":"TMBackButton","status":true,"description":"メニューシーンにタップ操作用の戻るボタンを表示します。","parameters":{"buttonImage":"backButton","sceneMenuX":"0","sceneMenuY":"0","sceneItemX":"0","sceneItemY":"0","sceneSkillX":"0","sceneSkillY":"0","sceneEquipX":"0","sceneEquipY":"0","sceneStatusX":"0","sceneStatusY":"0","sceneOptionsX":"0","sceneOptionsY":"0","sceneSaveX":"0","sceneSaveY":"0","sceneLoadX":"450","sceneLoadY":"900","sceneGameEndX":"0","sceneGameEndY":"0","sceneShopX":"0","sceneShopY":"0","sceneNameX":"0","sceneNameY":"0"}},
{"name":"Torigoya_QuickSkill","status":true,"description":"選択するとターンを消費せずに即発動するスキルを追加します。","parameters":{"■ 上級者向け設定":"","Recalc Action Time Mode":""}},
{"name":"SubstituteExtend","status":true,"description":"身代わり拡張プラグイン","parameters":{"身代わり条件_瀕死":"false","身代わり条件_必中以外":"true","身代わり反撃":"false","混乱時の身代わり無効":"false"}},
{"name":"BB_WindowSelector3","status":true,"description":"ウインドウスキンと切り替えるプラグイン。","parameters":{"Variable ID":"323","Window1 Opacity":"192","Window2 Opacity":"200","Window3 Opacity":"255","Window1 OutlineColor":"rgba(0, 0, 0, 0.5)","Window1 OutlineWidth":"4","Window2 OutlineColor":"rgba(0, 0, 0, 0.5)","Window2 OutlineWidth":"4","Window3 OutlineColor":"rgba(0, 0, 0, 0.5)","Window3 OutlineWidth":"4","Window1 DimmerColor":"rgba(0, 0, 0, 0.6)","Window1 DimGradationColor":"rgba(0, 0, 0, 0)","Window2 DimmerColor":"rgba(0, 0, 0, 0.6)","Window2 DimGradationColor":"rgba(0, 0, 0, 0)","Window3 DimmerColor":"rgba(0, 0, 0, 0.6)","Window3 DimGradationColor":"rgba(0, 0, 0, 0)"}},
{"name":"BeforeCommon","status":true,"description":"ver1.01/スキルやアイテムの発動前に、スキルやアイテムに設定されたコモンイベントを発生させます。","parameters":{"IndexVariableID":"340","TargetIndexVariableID":"341"}},
{"name":"setItemMax","status":true,"description":"アイテムの最大所持個数をアイテムIdごとに指定できます。","parameters":{}},
{"name":"OnlineAvatar","status":false,"description":"Firebaseを使ってプレイヤーをオンライン同期します。","parameters":{"apiKey":"AIzaSyB4K8bEYWvm9zmhIztRN03ylljTYijbiT","authDomain":"cardworldr2.firebaseapp.com","databaseURL":"https://cardworldr2-default-rtdb.firebaseio.com","avatarEvent":"0","syncSwitchStart":"0","syncSwitchEnd":"0","syncVariableStart":"4002","syncVariableEnd":"4993"}},
{"name":"CustomizeErrorScreen","status":true,"description":"エラー画面表示改善プラグイン","parameters":{"MainMessage":"以下のエラーが発生しました。","HyperLink":"","OutputDetail":"true"}},
{"name":"PicturePriorityCustomize","status":true,"description":"ピクチャの表示優先度調整プラグイン","parameters":{"上層ピクチャ番号":"0","下層ピクチャ番号":"102","下層ピクチャZ座標":"9","戦闘下層ピクチャZ座標":"1"}},
{"name":"PictureVariableSetting","status":true,"description":"ピクチャ関連のイベント機能拡張プラグイン","parameters":{"初期値":"OFF","ピクチャ表示最大数":"120"}},
{"name":"YED_SideviewBattler","status":true,"description":"v1.0.0 様々なタイプのサイドビューバトラーを生成できます。","parameters":{"[Default Setting]":"","Default Frames":"1","Default Speed":"10","Default Frame Width":"96","Default Frame Height":"96","Enable Weapon":"true"}},
{"name":"kaihen","status":true,"description":"","parameters":{}},
{"name":"Battler_Animation","status":true,"description":"戦闘時、敵をアニメーションさせます。","parameters":{"Wait":"10","Animation":"5"}},
{"name":"CriticalCorrection","status":true,"description":"ver1.00/アイテムやスキルで個別にクリティカル率の修正を行います。","parameters":{}},
{"name":"StateRingIcon","status":true,"description":"リングステートプラグイン","parameters":{"X半径":"20","Y半径":"5","周期":"180","一列配置上限":"1","反時計回り":"false","ターン数表示":"true","ターン数X座標":"-30","ターン数Y座標":"5","ターン数補正":"0","味方ターン数表示":"true","フォントサイズ":"25","味方リングアイコン":"true","味方リングアイコンX座標":"0","味方リングアイコンY座標":"-128"}},
{"name":"FTKR_ExSvMotion","status":true,"description":"v1.4.0 SVキャラのモーションを拡張するプラグイン","parameters":{"--行動モーションの設定--":"","Wait Motion":"wait","Damage Motion":"damage","Evade Motion":"evade","Thrust Motion":"thrust","Swing Motion":"swing","Missile Motion":"missile","Skill Motion":"skill","Spell Motion":"spell","Item Motion":"item","Recovery Motion":"","Undecided Motion":"walk","--状態モーション1 設定--":"","Motion 1 name":"dying","Motion 1 Condition":"dying","--状態モーション2 設定--":"","Motion 2 name":"abnormal","Motion 2 Condition":"state1","--状態モーション3 設定--":"","Motion 3 name":"guard","Motion 3 Condition":"guard","--状態モーション4 設定--":"","Motion 4 name":"chant","Motion 4 Condition":"chant","--状態モーション5 設定--":"","Motion 5 name":"damage","Motion 5 Condition":"state2","--状態モーション6 設定--":"","Motion 6 name":"dead","Motion 6 Condition":"state3","--状態モーション7 設定--":"","Motion 7 name":"damage","Motion 7 Condition":"damage","--状態モーション8 設定--":"","Motion 8 name":"","Motion 8 Condition":"","--状態モーション9 設定--":"","Motion 9 name":"walk","Motion 9 Condition":"input","--状態モーション10 設定--":"","Motion 10 name":"victory","Motion 10 Condition":"victory","--状態モーション11 設定--":"","Motion 11 name":"escape","Motion 11 Condition":"escape","--状態モーション12 設定--":"","Motion 12 name":"abnormal","Motion 12 Condition":"state4","--状態モーション13 設定--":"","Motion 13 name":"","Motion 13 Condition":"","--状態モーション14 設定--":"","Motion 14 name":"","Motion 14 Condition":"","--状態モーション15 設定--":"","Motion 15 name":"","Motion 15 Condition":"","--状態モーション16 設定--":"","Motion 16 name":"","Motion 16 Condition":"action","--カスタムモーション1 設定--":"","Custom 1 Non Loop":"","Custom 1 Loop":"","--カスタムモーション2 設定--":"","Custom 2 Non Loop":"","Custom 2 Loop":"","--カスタムモーション3 設定--":"","Custom 3 Non Loop":"","Custom 3 Loop":"","--カスタムモーション4 設定--":"","Custom 4 Non Loop":"","Custom 4 Loop":"","--カスタムモーション5 設定--":"","Custom 5 Non Loop":"","Custom 5 Loop":"","--カスタムモーション6 設定--":"","Custom 6 Non Loop":"","Custom 6 Loop":"","--カスタムモーション7 設定--":"","Custom 7 Non Loop":"","Custom 7 Loop":"","--カスタムモーション8 設定--":"","Custom 8 Non Loop":"","Custom 8 Loop":"","--カスタムコンディション 設定--":"","Custom Condition 1":"","Custom Condition 2":"","Custom Condition 3":"","Custom Condition 4":"","Custom Condition 5":"","-- 特殊 設定--":"","Enabled Refresh In PartyCmd":"false","-- デバッグ 設定--":"","Output Motion Log":"0","Output Motion Pattern Log":"0"}},
{"name":"MpiComposePicture","status":true,"description":"2つのピクチャを合成します。","parameters":{"Plugin Command":"compose_picture"}},
{"name":"ItemNameEscape","status":true,"description":"項目名の制御文字適用プラグイン","parameters":{}},
{"name":"AutoLoad","status":true,"description":"タイトル画面仕様変更プラグイン","parameters":{"効果音演奏":"false","タイトルスキップポリシー":"2","タイトルマップID":"2"}}
];
