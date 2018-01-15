//グローバル変数を用意
var id = "0";
var x;
var y;
var z;
var color;
var width;
var height;
var depth;
var radius;
var top;
var bottom;
var stump_src;
var pre_grand;
var pre_sky = '<a-sky position="" rotation="0 0 0" material="" geometry="" scale="" visible="" color="#87ceeb"></a-sky>';
var pre_image = 'color="#87ceeb"';
var another_sky;
var another_image;
var ori_position = 'position="0 0 0" ';
var ori_rotation = 'rotation=""';

//editのためのオブジェクトのバックアップの入れ物を用意
for(var a=0 ; a<=id ; a++){
	eval('var pre_object_'+ a + ';');
	eval('var pre_position_' + a + ';');
	eval('var another_position_'+ a + ';');
	eval('var pre_rotation_' + a + ';');
	eval('var another_rotation_'+ a + ';');
}

var grand;
var sky;
var right;
var left;
var model;
var textarea_value = document.getElementById("textarea").value;

reset();

//ボックス生成
function box_dropin(){
	
	//バックアップ生成
	backup(id);

	//初期化
	x = "0";
	y = "0";
	z = "0";
	color = "#cc3333";
	width = "1";
	height = "1";
	depth = "1";

	//ボックス生成フラグ
	var flag = "0";

	//htmlコード記述
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';
	var recolor = 'color="' + color + '"';
	var rewidth = 'width="' + width + '" ';
	var reheight = 'height="' + height + '" ';
	var redepth = 'depth="' + depth + '" ';
	document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + '></a-box>';

	comment(flag);
}

//スフィア生成
function sphere_dropin(){

	//バックアップ生成
	backup(id);

	//初期化
	x = "0";
	y = "0";
	z = "0";
	color = "#cc33FF";
	radius = "1";
	
	var flag = "1";

	//htmlコード記述
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" '
	var reradius = 'radius="'+ radius + '" ';
	var recolor = 'color="' + color + '"';
	document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + '></a-sphere>';

	comment(flag);
}

//シリンダ生成
function cylinder_dropin(){

	//バックアップ生成
	backup(id);

	//初期化
	x = "0";
	y = "0";
	z = "0";
	color = "#ffa500";
	height = "1";
	radius = "1";

	//シリンダ生成フラグ
	var flag = "2";

	//htmlコード記述
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';
	var recolor = 'color="' + color + '"';
	var reheight = 'height="' + height + '" ';
	var reradius = 'radius="' + radius + '" ';
	document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + '></a-cylinder>';

	comment(flag);
}

function stump_dropin(stump_code){

	//バックアップ生成
	backup(id);

	//初期化
	x = "0";
	y = "0";
	z = "0";
	width = "5";
	height = "5";
	var flag = 10;

	//スタンプ生成。スタンプ追加時の編集場所
	stump_src = 'src="img/stump' + stump_code + '.png"';

	//htmlコード記述
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';
	var rewidth = 'width="' + width + '" ';
	var reheight = 'height="' + height + '" ';

	document.getElementById("child_entity_"+id).innerHTML = '<a-image ' + stump_src + reposition + rewidth + reheight + '></a-image>';
	comment(flag);

}

function comment(flag){

	cancel();

	//入力画面生成
	document.getElementById("field_0").innerHTML = '編集を終了する場合は確定ボタンを押してください（押さないと反映されません）<br />';
	document.getElementById("field_1").innerHTML = '　<button onclick="complete(' + id + ', ' + flag + ')">確定</button><p/>';

	if(flag == 0){
		//フラグが箱なら
		document.getElementById("field_2").innerHTML = '箱のサイズを指定してください<br />';
		document.getElementById("field_3").innerHTML = '　横はば：<input id="width" value="1"/>';
		document.getElementById("field_4").innerHTML = '　縦はば：<input id="height" value="1"/>';
		document.getElementById("field_5").innerHTML = '　奥行き：<input id="depth" value="1"/><br />';
		document.getElementById("field_6").innerHTML = '　<button onclick="resize(' + id + ', ' + flag + ')">このサイズを表示</button><p/>';
	
		document.getElementById("field_7").innerHTML = '箱の色を指定してください（赤色は red か #ff0000 と入力してください）<br />';
		document.getElementById("field_8").innerHTML = '　色：<input id="color" value="#cc3333"/><br />';
		document.getElementById("field_9").innerHTML = '　<button onclick="recolor(' + id + ', ' + flag + ')">この色を表示</button><p/>';

		document.getElementById("field_10").innerHTML = '箱の位置を指定してください<br />';
		document.getElementById("field_11").innerHTML = '　X座標：<input id="x" value="0"/>';
		document.getElementById("field_12").innerHTML = '　Y座標：<input id="y" value="0"/>';
		document.getElementById("field_13").innerHTML = '　Z座標：<input id="z" value="0"/><br />';
		document.getElementById("field_14").innerHTML = '　<button onclick="reposition(' + id + ', ' + flag + ')">この座標を表示</button><p/>';
	}

	if(flag == 1){
		//フラグが球なら
		document.getElementById("field_2").innerHTML = '球のサイズを指定してください<br />';
		document.getElementById("field_3").innerHTML = '　半径：<input id="radius" value="1"/><br />';
		document.getElementById("field_4").innerHTML = '　<button onclick="resize(' + id + ', ' + flag + ')">このサイズを表示</button><p/>';
	
		document.getElementById("field_5").innerHTML = '球の色を指定してください（赤色は red か #ff0000 と入力してください）<br />';
		document.getElementById("field_6").innerHTML = '　<input id="color" value="#cc33FF"/><br />';
		document.getElementById("field_7").innerHTML = '　<button onclick="recolor(' + id + ', ' + flag + ')">この色を表示</button><p/>';

		document.getElementById("field_8").innerHTML = '球の位置を指定してください<br />';
		document.getElementById("field_9").innerHTML = '　X座標：<input id="x" value="0"/>';
		document.getElementById("field_10").innerHTML = '　Y座標：<input id="y" value="0"/>';
		document.getElementById("field_11").innerHTML = '　Z座標：<input id="z" value="0"/><br />';
		document.getElementById("field_12").innerHTML = '　<button onclick="reposition(' + id + ', ' + flag + ')">この座標を表示</button><p/>';
	}

	if(flag == 2){
		//フラグが円柱なら
		document.getElementById("field_2").innerHTML = '円柱のサイズを指定してください<br />';
		document.getElementById("field_3").innerHTML = '　高さ：<input id="height" value="1"/>';
		document.getElementById("field_4").innerHTML = '　半径：<input id="radius" value="1"/><br />';
		document.getElementById("field_5").innerHTML = '　<button onclick="resize(' + id + ', ' + flag + ')">このサイズを表示</button><p/>';
	
		document.getElementById("field_6").innerHTML = '円柱の色を指定してください（赤色は red か #ff0000 と入力してください）<br />';
		document.getElementById("field_7").innerHTML = '　色：<input id="color" value="#ffa500"/><br />';
		document.getElementById("field_8").innerHTML = '　<button onclick="recolor(' + id + ', ' + flag + ')">この色を表示</button><p/>';

		document.getElementById("field_9").innerHTML = '円柱の位置を指定してください<br />';
		document.getElementById("field_10").innerHTML = '　X座標：<input id="x" value="0"/>';
		document.getElementById("field_11").innerHTML = '　Y座標：<input id="y" value="0"/>';
		document.getElementById("field_12").innerHTML = '　Z座標：<input id="z" value="0"/><br />';
		document.getElementById("field_13").innerHTML = '　<button onclick="reposition(' + id + ', ' + flag + ')">この座標を表示</button><p/>';
	}

	if(flag == 10){
		//フラグがスタンプなら
		document.getElementById("field_2").innerHTML = 'スタンプのサイズを指定してください<br />';
		document.getElementById("field_3").innerHTML = '　横はば：<input id="width" value="5"/>';
		document.getElementById("field_4").innerHTML = '　縦はば：<input id="height" value="5"/><br />';
		document.getElementById("field_5").innerHTML = '　<button onclick="resize(' + id + ', ' + flag + ')">このサイズを表示</button><p/>';

		document.getElementById("field_6").innerHTML = '<div id="color" value="#ffffff"/>';

		document.getElementById("field_7").innerHTML = 'スタンプの位置を指定してください<br />';
		document.getElementById("field_8").innerHTML = '　X座標：<input id="x" value="0"/>';
		document.getElementById("field_9").innerHTML = '　Y座標：<input id="y" value="0"/>';
		document.getElementById("field_10").innerHTML = '　Z座標：<input id="z" value="0"/><br />';
		document.getElementById("field_11").innerHTML = '　<button onclick="reposition(' + id + ', ' + flag + ')">この座標を表示</button><p/>';
	}

	document.getElementById("field_23").innerHTML = '　<button onclick="complete(' + id + ', ' + flag + ')">確定</button><p/>';
	document.getElementById("field_24").innerHTML = '　<button onclick="prereset2()">戻る</button><p/>';

}

function resize(id, flag){
	
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';

	var recolor = 'color="' + color + '"';
	
	//フラグ設定
	if(flag == 0){
		//フラグが箱なら
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		depth = document.getElementById("depth").value;
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';
		var redepth = 'depth="' + depth + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + '></a-box>';
	}
	
	else if(flag == 1){
		//フラグが球なら
		radius = document.getElementById("radius").value;
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + '></a-sphere>';
	}

	else if(flag == 2){
		//フラグが円柱なら
		height = document.getElementById("height").value;
		radius = document.getElementById("radius").value;
		var reheight = 'height="' + height + '" ';
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + '></a-cylinder>';
	}

	else if(flag == 10){
		//フラグがスタンプなら
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-image ' + stump_src + reposition + rewidth + reheight + '></a-image>';

	}
}

function recolor(id, flag){

	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" '
	
	//色変更のみ
	color = document.getElementById("color").value;
	var recolor = 'color="' + color + '"';

	//フラグ設定
	if(flag == 0){
		//フラグが箱なら
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';
		var redepth = 'depth="' + depth + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + '></a-box>';
	}

	else if(flag == 1){
		//フラグが球なら
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + '></a-sphere>';
	}

	else if(flag == 2){
		//フラグが円柱なら
		var reheight = 'height="' + height + '" ';
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + '></a-cylinder>';
	}
}

function reposition(id, flag){
	
	//座標変更のみ
	x = document.getElementById("x").value;
	y = document.getElementById("y").value;
	z = document.getElementById("z").value;
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" '

	var recolor = 'color="' + color + '"';

	//フラグ設定
	if(flag == 0){
		//フラグが箱なら
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';
		var redepth = 'depth="' + depth + '" ';
	
		document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + '></a-box>';
	}

	else if(flag == 1){
		//フラグが球なら
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + '></a-sphere>';
	}

	else if(flag == 2){
		//フラグが円柱なら
		var reheight = 'height="' + height + '" ';
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + '></a-cylinder>';
	}

	else if(flag == 10){
		//フラグがスタンプなら
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-image ' + stump_src + reposition + rewidth + reheight + '></a-image>';
	}
}

function complete(id, flag){

	//編集終了。全ての変更を反映
	x = document.getElementById("x").value;
	y = document.getElementById("y").value;
	z = document.getElementById("z").value;
	color = document.getElementById("color").value;

	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';
	var recolor = 'color="' + color + '" ';

	if(flag == 0){
		//フラグが箱なら
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		depth = document.getElementById("depth").value;
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';
		var redepth = 'depth="' + depth + '" ';
	
		document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + 'rotation="" material="" geometry="" scale="" visible=""></a-box>';
	}

	else if(flag == 1){
		//フラグが球なら
		radius = document.getElementById("radius").value;
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + 'rotation="" material="" geometry="" scale="" visible="" ></a-sphere>';
	}

	else if(flag == 2){
		//フラグが円柱なら
		height = document.getElementById("height").value;
		radius = document.getElementById("radius").value;
		var reheight = 'height="' + height + '" ';
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + 'rotation="" material="" geometry="" scale="" visible="" ></a-cylinder>';
	}

	else if(flag == 10){
		//フラグがスタンプなら
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-image ' + reposition + 'rotation="" ' + rewidth + reheight + 'material="" geometry="" scale="" visible="" ' + stump_src + 'rotate=""></a-image>';
	}
	
	//編集したテキストとオブジェクトのバックアップ作成、編集画面リセット
	prereset1(id);

	//最初の位置と角度のバックアップ作成
	eval('pre_position_' + id + ' = reposition;');
	eval('pre_rotation_' + id + ' = ori_rotation;');	

	//新しいオブジェクト作成
	new_entity();
}

function reset(){
	cancel();

	//編集終了をフラグとして、オブジェクト編集のボタンを生成
	document.getElementById("field_0").innerHTML = '《オブジェクトの編集》<br />';
	document.getElementById("field_1").innerHTML = '　<button onclick="edit1(1)" style="font-size:85%; width:115px; height:20px;">位置の変更する</button>';
	document.getElementById("field_2").innerHTML = '　<button onclick="edit1(2)" style="font-size:85%; width:115px; height:20px;">角度を変更する</button>';
	document.getElementById("field_3").innerHTML = '　<button onclick="edit1(3)" style="font-size:85%; width:115px; height:20px;">回転効果の編集</button>';
	document.getElementById("field_4").innerHTML = '　<button onclick="edit1(4)" style="font-size:75%; width:115px; height:20px;">オブジェクト複製</button><br /><br />';

	document.getElementById("field_5").innerHTML = '《オブジェクトの削除》<br />';
	document.getElementById("field_6").innerHTML = '　<button onclick="edit1(0)" style="font-size:75%; width:115px; height:20px;">オブジェクト削除</button>';
	document.getElementById("field_7").innerHTML = '　<button onclick="edit3_1()" style="font-size:85%; width:115px; height:20px;">地面を削除する</button>';
	document.getElementById("field_8").innerHTML = '　<button onclick="edit2()" style="font-size:75%; width:115px; height:20px;">コントローラ削除</button>';
	document.getElementById("field_9").innerHTML = '　<button onclick="model_dropout()" style="font-size:85%; width:115px; height:20px;">3Dモデル削除</button>';

	document.getElementById("field_10").innerHTML = '<button onclick="src_dl()" style="font-size:120%; margin:40px; float:right;">ソースコードを作成する</button>';
}

function prereset1(i){
	//現在のオブジェクトを保持
	backup(i);
	reset();
}

function prereset2(){
	//戻るボタンでオブジェクト消去
	document.getElementById("child_entity_"+id).innerHTML = '<a-entity id="child_entity_' + id + '"></a-entity>';
	reset();
}

function new_entity(){
	//新しいオブジェクト生成
	id++;
	var new_entity = document.createElement("a-entity");
	new_entity.innerHTML = '<a-entity id="child_entity_' + id + '"></a-entity>';
	var parent_entity = document.getElementById("parent_entity");
	parent_entity.appendChild(new_entity);
}

function cancel(){
	//入力画面消去
	for(var i=0 ; i<25 ; i++){
		document.getElementById("field_"+i).innerHTML = '<div id="field_' + i + '"></div>';
	}
}

function backup(i){
	var backup_bace = document.getElementById("child_entity_"+i).innerHTML;
	//現在のオブジェクトのバックアップ作成
	eval('pre_object_' + i + ' = backup_bace;');

	grand = document.getElementById("grand").innerHTML;
	sky = document.getElementById("sky").innerHTML;
	right = document.getElementById("right_entity").innerHTML
	left = document.getElementById("left_entity").innerHTML
	model = document.getElementById("model").innerHTML
}

//オブジェクトの編集
function edit1(i){
	cancel();

	for(var b=0 ; b<id ; b++){
		if(document.getElementById("child_entity_" + b)){
			//現在のオブジェクトchild_entityをバックアップ
			backup(b);
			
			//回転表示用前準備
			if(document.getElementById("child_entity_"+b).getElementsByTagName("a-box").length == 1){
				var tag = '</a-box>';
			}
			else if(document.getElementById("child_entity_"+b).getElementsByTagName("a-cylinder").length == 1){
				var tag = '</a-cylinder>';
			}
			else if(document.getElementById("child_entity_"+b).getElementsByTagName("a-image").length == 1){
				var tag = '</a-image>';
			}
			var rotate = '\n' + '<a-animation id="' + b + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>' + '\n' + '<!--オブジェクト' + b + 'が回転します-->' + '\n';
			var place = document.getElementById("child_entity_"+b).innerHTML;
			var replace = document.getElementById("child_entity_"+b).innerHTML.replace(rotate + tag,tag);
			
			if(i == 0){
				//削除画面を表示
				document.getElementById("field_"+b).innerHTML = '　オブジェクト' + b + '　<button onclick="erase(' + b + ')">消去する</button><br />';
			}
			else if(i == 1){
				//位置の変更画面を表示
				document.getElementById("field_"+b).innerHTML = '　オブジェクト' + b + '　<button onclick="position_edit1(' + b + ')">位置を変更する</button><br />';
			}
			else if(i == 2){
				//角度の変更画面を表示
				document.getElementById("field_"+b).innerHTML = '　オブジェクト' + b + '　<button onclick="rotation_edit1(' + b + ')">角度を変更する</button><br />';
			}
			else if(i == 3){
				//回転の変更画面を表示
				if(place == replace){
					document.getElementById("field_"+b).innerHTML = '　オブジェクト' + b + '　<button onclick="rotate(' + b + ')">回転させる</button><br />';
				}
				else {
					document.getElementById("field_"+b).innerHTML = '　オブジェクト' + b + '　<button onclick="unrotate(' + b + ')">回転を解除</button><br />';	
				}
			}
			else if(i == 4){
				//オブジェクトの複製画面を表示
				document.getElementById("field_"+b).innerHTML = '　オブジェクト' + b + '　<button onclick="object_copy(' + b + ')">複製する</button><br />';
			}
		}

		if(document.getElementById("old_entity_" + b)){
			//消去済みオブジェクトold_entityを除外
			document.getElementById("field_"+b).innerHTML = '';
		}
	}

	document.getElementById("field_"+id).innerHTML = '<br />　<button onclick="prereset1(' + b + ')">戻る</button><p/>';
}

//オブジェクトの削除
function erase(i){
	document.getElementById("field_"+i).innerHTML = '　オブジェクト' + i + '　<button onclick="reference(' + i + ')">復元する</button><br />';
	document.getElementById("child_entity_"+i).innerHTML = '<a-entity id="old_entity_' + i + '"></a-entity>';	
	backup(i);
}

//オブジェクトを復元
function reference(i){
	document.getElementById("field_"+i).innerHTML = '　オブジェクト' + i + '　<button onclick="erase(' + i + ')">消去する</button><br />';
	document.getElementById("child_entity_"+i).innerHTML = eval('pre_object_'+ i + ';');
	backup(i);
}

//オブジェクトの位置を変更
function position_edit1(i){
	eval('another_position_' + i + ' = ' + 'pre_position_' + i + ';');

	cancel();
	document.getElementById("field_0").innerHTML = '編集を終了する場合は確定ボタンを押してください（押さないと反映されません）<br />';
	document.getElementById("field_1").innerHTML = '　<button onclick="position_complete(' + i + ')">確定</button><p/>';

	document.getElementById("field_2").innerHTML = 'オブジェクトの位置を指定してください<br />';
	document.getElementById("field_3").innerHTML = '　X座標：<input id="x" value="0"/>';
	document.getElementById("field_4").innerHTML = '　Y座標：<input id="y" value="0"/>';
	document.getElementById("field_5").innerHTML = '　Z座標：<input id="z" value="0"/><br />';
	document.getElementById("field_6").innerHTML = '　<button onclick="position_edit2(' + i + ')">この位置を表示</button><p/>';

	document.getElementById("field_23").innerHTML = '　<button onclick="position_complete(' + i + ')">確定</button><p/>';
	document.getElementById("field_24").innerHTML = '　<button onclick="position_reset(' + i + ')">戻る</button><p/>';
}
function position_edit2(i){

	x = document.getElementById("x").value;
	y = document.getElementById("y").value;
	z = document.getElementById("z").value;
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '"';

	document.getElementById("child_entity_"+i).innerHTML = document.getElementById("child_entity_"+i).innerHTML.replace(eval('pre_position_' + i),reposition);
	eval('pre_position_' + i + '= reposition;');
	backup(i);
}
function position_complete(i){
	position_edit2(i);
	prereset1(i);
}
function position_reset(i){
	document.getElementById("child_entity_"+i).innerHTML = eval('pre_object_' + i);

	eval('pre_position_' + i + ' = ' + 'another_position_' + i + ';');
	prereset1(i);
}

//オブジェクトの角度を変更
function rotation_edit1(i){
	eval('another_rotation_' + i + ' = ' + 'pre_rotation_' + i + ';');

	cancel();
	document.getElementById("field_0").innerHTML = '編集を終了する場合は確定ボタンを押してください（押さないと反映されません）<br />';
	document.getElementById("field_1").innerHTML = '　<button onclick="rotation_complete(' + i + ')">確定</button><p/>';

	document.getElementById("field_2").innerHTML = 'オブジェクトの角度を指定してください<br />';
	document.getElementById("field_3").innerHTML = '　X方向：<input id="x" value="0"/>';
	document.getElementById("field_4").innerHTML = '　Y方向：<input id="y" value="0"/>';
	document.getElementById("field_5").innerHTML = '　Z方向：<input id="z" value="0"/><br />';
	document.getElementById("field_6").innerHTML = '　<button onclick="rotation_edit2(' + i + ')">この角度を表示</button><p/>';

	document.getElementById("field_23").innerHTML = '　<button onclick="rotation_complete(' + i + ')">確定</button><p/>';
	document.getElementById("field_24").innerHTML = '　<button onclick="rotation_reset(' + i + ')">戻る</button><p/>';
}
function rotation_edit2(i){

	x = document.getElementById("x").value;
	y = document.getElementById("y").value;
	z = document.getElementById("z").value;
	var rerotation = 'rotation="' + x + ' ' + y + ' ' + z + '"';

	document.getElementById("child_entity_"+i).innerHTML = document.getElementById("child_entity_"+i).innerHTML.replace(eval('pre_rotation_' + i),rerotation);

	eval('pre_rotation_' + i + '= rerotation;');
	backup(i);
}
function rotation_complete(i){
	rotation_edit2(i);
	prereset1(i);
}
function rotation_reset(i){
	document.getElementById("child_entity_"+i).innerHTML = eval('pre_object_' + i);

	eval('pre_rotation_' + i + ' = ' + 'another_rotation_' + i + ';');
	prereset1(i);
}

//オブジェクトを回転
function rotate(i){
	document.getElementById("field_"+i).innerHTML = '　オブジェクト' + i + '　<button onclick="unrotate(' + i + ')">回転を解除</button><br />';

	if(document.getElementById("child_entity_"+i).getElementsByTagName("a-box").length == 1){
		//ボックス限定
		var rotate_tag = '></a-box>';
		var rotate = '>\n' + '<a-animation id="' + i + '" direction="normal" repeat="indefinite" to="-360 -360 -360" dur="4000" attribute="rotation"></a-animation>' + '\n' + '<!--オブジェクト' + i + 'が回転します-->' + '\n';
		var tag = '</a-box>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-cylinder").length == 1){
		//シリンダ限定
		var rotate_tag = '></a-cylinder>';
		var rotate = '>\n' + '<a-animation id="' + i + '" direction="normal" repeat="indefinite" to="-360 -360 -360" dur="4000" attribute="rotation"></a-animation>' + '\n' + '<!--オブジェクト' + i + 'が回転します-->' + '\n';
		var tag = '</a-cylinder>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-image").length == 1){
		//イメージ限定
		var rotate_tag = '></a-image>';
		var rotate = '>\n' + '<a-animation id="' + i + '" direction="normal" repeat="indefinite" to="-360 -360 -360" dur="4000" attribute="rotation"></a-animation>' + '\n' + '<!--オブジェクト' + i + 'が回転します-->' + '\n';
		var tag = '</a-image>';
	}

	document.getElementById("child_entity_"+i).innerHTML = document.getElementById("child_entity_"+i).innerHTML.replace(rotate_tag,rotate + tag);
	backup(i);
}

//オブジェクトの回転を解除
function unrotate(i){
	document.getElementById("field_"+i).innerHTML = '　オブジェクト' + i + '　<button onclick="rotate(' + i + ')">回転させる</button><br />';
	
	if(document.getElementById("child_entity_"+i).getElementsByTagName("a-box").length == 1){
		//ボックス限定
		var rotate = '\n' + '<a-animation id="' + i + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>';
		var rotate_tag = '\n' + '<!--オブジェクト' + i + 'が回転します-->' + '\n' + '</a-box>';
		var tag = '</a-box>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-cylinder").length == 1){
		//シリンダ限定
		var rotate = '\n' + '<a-animation id="' + i + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>';
		var rotate_tag = '\n' + '<!--オブジェクト' + i + 'が回転します-->' + '\n' + '</a-cylinder>';
		var tag = '</a-cylinder>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-image").length == 1){
		//スタンプ限定
		var rotate = '\n' + '<a-animation id="' + i + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>';
		var rotate_tag = '\n' + '<!--オブジェクト' + i + 'が回転します-->' + '\n' + '</a-image>';
		var tag = '</a-image>';
	}
	document.getElementById("child_entity_"+i).innerHTML = document.getElementById("child_entity_"+i).innerHTML.replace(rotate + rotate_tag,tag);
	backup(i);
}

//オブジェクトの複製
function object_copy(i){	
	eval('pre_position_' + id + ' = ori_position;');
	eval('pre_rotation_' + id + ' = pre_rotation_' + i + ';');	

	//回転表示用前準備
	if(document.getElementById("child_entity_"+i).getElementsByTagName("a-box").length == 1){
		var tag = '</a-box>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-cylinder").length == 1){
		var tag = '</a-cylinder>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-image").length == 1){
		var tag = '</a-image>';
	}
	var rotate = '\n' + '<a-animation id="' + i + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>' + '\n' + '<!--オブジェクト' + i + 'が回転します-->' + '\n';
	var child = document.getElementById("child_entity_"+i).innerHTML.replace(rotate + tag,tag);
	child = child.replace(eval('pre_position_' + i),eval('pre_position_' + id));
	document.getElementById("child_entity_"+id).innerHTML = child;

	//編集したテキストとオブジェクトのバックアップ作成、編集画面リセット
	prereset1(id);

	//新しいオブジェクト作成
	new_entity();
}

//地面オブジェクト生成
function grand_dropin(){
	cancel();

	if(document.getElementById("grand").innerHTML == ''){

		//入力画面生成
		document.getElementById("field_0").innerHTML = '地面の色を指定してください（橙色は orange か #ffa500 と入力してください）<br />';
		document.getElementById("field_1").innerHTML = '注意：redやblueなど、強い色彩は避けてください<p />';
		document.getElementById("field_2").innerHTML = '　色：<input id="color" value="#008000"/><br />';	
		document.getElementById("field_3").innerHTML = '　<button onclick="grand_recolor()">この色を表示</button><p/>';

		document.getElementById("field_23").innerHTML = '　<button onclick="grand_complete()">確定</button><p/>';
		document.getElementById("field_24").innerHTML = '　<button onclick="grand_reset()">戻る</button><p/>';

		//htmlコード記述
		document.getElementById("grand").innerHTML = '<a-plane id="grand" rotation="-90 0 0" width="100" height="100" color="#008000" static=""></a-plane>';
	}

	else {
		alert('すでに地面オブジェクトが存在します')
		reset();
	}
}
function grand_recolor(){
	color = document.getElementById("color").value;
	var recolor = 'color="' + color + '"';

	document.getElementById("grand").innerHTML = '<a-plane id="grand" rotation="-90 0 0" width="100" height="100" ' + recolor + 'static=""></a-plane>';
	backup(id);
}
function grand_complete(){
	grand_recolor();
	prereset1(id);
}
function grand_reset(){
	document.getElementById("grand").innerHTML = '';	
	prereset1(id);
}

//地面オブジェクトの消去
function edit3_1(){
	document.getElementById("grand").innerHTML = '';	
}

//背景実装
function image_dropin(image_code){
	
	if(image_code == 100){
		pre_sky = pre_sky.replace(pre_image,'color="#87ceeb"');
		document.getElementById("sky").innerHTML = pre_sky;
		pre_image = 'color="#87ceeb"';
		prereset1(id);
	}
	else if(image_code == 101){
		//入力画面生成
		cancel();
		document.getElementById("field_0").innerHTML = '背景の色を指定してください（橙色は orange か #ffa500 と入力してください）<br />';
		document.getElementById("field_1").innerHTML = '注意：redやblueなど、強い色彩は避けてください<p />';
		document.getElementById("field_2").innerHTML = '　色：<input id="color" value="#87ceeb"/><br />';	
		document.getElementById("field_3").innerHTML = '　<button onclick="sky_recolor()">この色を表示</button><p/>';

		document.getElementById("field_23").innerHTML = '　<button onclick="sky_complete()">確定</button><p/>';
		document.getElementById("field_24").innerHTML = '　<button onclick="sky_reset()">戻る</button><p/>';
		
		//リセット用バックアップ
		another_sky = pre_sky;
		another_image = pre_image;

		//デフォルト設定
		pre_sky = pre_sky.replace(pre_image,'color="#87ceeb"');
		document.getElementById("sky").innerHTML = pre_sky;
		pre_image = 'color="#87ceeb"';
	}

	else {
		pre_sky = pre_sky.replace(pre_image,'src="img/sky' + image_code + '.jpg"');
		document.getElementById("sky").innerHTML = pre_sky;
		pre_image = 'src="img/sky' + image_code + '.jpg"';
		prereset1(id);
	}
	pre_sky = document.getElementById("sky").innerHTML;
}
function sky_recolor(){
	color = document.getElementById("color").value;
	var recolor = 'color="' + color + '"';

	pre_sky = pre_sky.replace(pre_image,recolor);
	document.getElementById("sky").innerHTML = pre_sky;
	pre_image = recolor;
	backup(id);
}
function sky_complete(){
	sky_recolor();
	prereset1(id);
}
function sky_reset(){
	document.getElementById("sky").innerHTML = another_sky;
	prereset1(id);
}

//コントローラ実装
function controller_dropin(){
	if(document.getElementById("right_entity").innerHTML == ''){
		document.getElementById("right_entity").innerHTML = '<a-entity vive-controls="hand: right" position="0 0.5 0" id="right" controller-cursor></a-entity>';
		document.getElementById("left_entity").innerHTML = '<a-entity vive-controls="hand: left" position="0 0.5 0" id="left"></a-entity>';
		alert('コントローラを追加しました。VR起動時に実体化します')
		prereset1(id);
	}
	else {
		alert('すでにコントローラが存在します')
		reset();
	}
}

//コントローラの消去
function edit2(){
	document.getElementById("right_entity").innerHTML = '';
	document.getElementById("left_entity").innerHTML = '';
	alert('コントローラを削除しました')
	prereset1(id);
}

//モデル
function model_dropin(){
	if(document.getElementById("model").innerHTML == ''){
		document.getElementById("model").innerHTML = '<a-entity position="0 0 -0.5" rotation="0 0 0" scale="0.11 0.11 0.11" mmd-model="model:lat/miku.pmd; vmd:lat/mikuplus_m.vmd;"></a-entity>';
		prereset1(id);
	}
	else {
		alert('すでにモデルが存在します')
		reset();
	}


}
function model_dropout(){
	document.getElementById("model").innerHTML = '';
	prereset1(id);
}

function pre_src_dl(){
	//オブジェクト
	for(var a = 0;a < id;a++){
		textarea_value = textarea_value.replace('<!--ここにオブジェクトが追加されていきます-->',eval('pre_object_'+ a) + '\n' + '<!--ここにオブジェクトが追加されていきます-->');
	}
	
	//ミク
	textarea_value = textarea_value.replace('<!--ここに3Dモデルが追加されます-->',model);

	//地面
	textarea_value = textarea_value.replace('<!--ここに地面オブジェクトが追加されます-->',grand);

	//背景
	textarea_value = textarea_value.replace('<a-sky position="" rotation="0 0 0" material="" geometry="" scale="" visible="" color="#87ceeb"></a-sky>',sky);

	//コントローラ
	textarea_value = textarea_value.replace('<!--ここに右手のコントローラが追加されます-->',right);
	textarea_value = textarea_value.replace('<!--ここに左手のコントローラが追加されます-->',left);
}

//ソースコードのダウンロード
function src_dl(){
	//WebVR製作プラットフォームに保存するよう促す
	alert('ソースコードのダウンロードを開始します。ソースコードは、WebVR製作プラットフォームのファイルに保存してください。');

	//現在の開発画面をテキストエリアに反映
	pre_src_dl();
	
	var text = textarea_value;
	var blob = new Blob([text], {type: "text/plain"}); // バイナリデータを作ります。

	// IEか他ブラウザかの判定
	if(window.navigator.msSaveBlob){
		// IEなら独自関数を使います。
		window.navigator.msSaveBlob(blob, "index.html");
	}
	else {
	    // それ以外はaタグを利用してイベントを発火させます
	    var a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.target = '_blank';
		a.download = 'index.html';
		a.click();
	}

	//テキストエリアを初期化
	textarea_value = document.getElementById ("textarea").value;
}

