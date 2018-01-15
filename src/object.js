//�O���[�o���ϐ���p��
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

//edit�̂��߂̃I�u�W�F�N�g�̃o�b�N�A�b�v�̓��ꕨ��p��
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

//�{�b�N�X����
function box_dropin(){
	
	//�o�b�N�A�b�v����
	backup(id);

	//������
	x = "0";
	y = "0";
	z = "0";
	color = "#cc3333";
	width = "1";
	height = "1";
	depth = "1";

	//�{�b�N�X�����t���O
	var flag = "0";

	//html�R�[�h�L�q
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';
	var recolor = 'color="' + color + '"';
	var rewidth = 'width="' + width + '" ';
	var reheight = 'height="' + height + '" ';
	var redepth = 'depth="' + depth + '" ';
	document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + '></a-box>';

	comment(flag);
}

//�X�t�B�A����
function sphere_dropin(){

	//�o�b�N�A�b�v����
	backup(id);

	//������
	x = "0";
	y = "0";
	z = "0";
	color = "#cc33FF";
	radius = "1";
	
	var flag = "1";

	//html�R�[�h�L�q
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" '
	var reradius = 'radius="'+ radius + '" ';
	var recolor = 'color="' + color + '"';
	document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + '></a-sphere>';

	comment(flag);
}

//�V�����_����
function cylinder_dropin(){

	//�o�b�N�A�b�v����
	backup(id);

	//������
	x = "0";
	y = "0";
	z = "0";
	color = "#ffa500";
	height = "1";
	radius = "1";

	//�V�����_�����t���O
	var flag = "2";

	//html�R�[�h�L�q
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';
	var recolor = 'color="' + color + '"';
	var reheight = 'height="' + height + '" ';
	var reradius = 'radius="' + radius + '" ';
	document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + '></a-cylinder>';

	comment(flag);
}

function stump_dropin(stump_code){

	//�o�b�N�A�b�v����
	backup(id);

	//������
	x = "0";
	y = "0";
	z = "0";
	width = "5";
	height = "5";
	var flag = 10;

	//�X�^���v�����B�X�^���v�ǉ����̕ҏW�ꏊ
	stump_src = 'src="img/stump' + stump_code + '.png"';

	//html�R�[�h�L�q
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';
	var rewidth = 'width="' + width + '" ';
	var reheight = 'height="' + height + '" ';

	document.getElementById("child_entity_"+id).innerHTML = '<a-image ' + stump_src + reposition + rewidth + reheight + '></a-image>';
	comment(flag);

}

function comment(flag){

	cancel();

	//���͉�ʐ���
	document.getElementById("field_0").innerHTML = '�ҏW���I������ꍇ�͊m��{�^���������Ă��������i�����Ȃ��Ɣ��f����܂���j<br />';
	document.getElementById("field_1").innerHTML = '�@<button onclick="complete(' + id + ', ' + flag + ')">�m��</button><p/>';

	if(flag == 0){
		//�t���O�����Ȃ�
		document.getElementById("field_2").innerHTML = '���̃T�C�Y���w�肵�Ă�������<br />';
		document.getElementById("field_3").innerHTML = '�@���͂΁F<input id="width" value="1"/>';
		document.getElementById("field_4").innerHTML = '�@�c�͂΁F<input id="height" value="1"/>';
		document.getElementById("field_5").innerHTML = '�@���s���F<input id="depth" value="1"/><br />';
		document.getElementById("field_6").innerHTML = '�@<button onclick="resize(' + id + ', ' + flag + ')">���̃T�C�Y��\��</button><p/>';
	
		document.getElementById("field_7").innerHTML = '���̐F���w�肵�Ă��������i�ԐF�� red �� #ff0000 �Ɠ��͂��Ă��������j<br />';
		document.getElementById("field_8").innerHTML = '�@�F�F<input id="color" value="#cc3333"/><br />';
		document.getElementById("field_9").innerHTML = '�@<button onclick="recolor(' + id + ', ' + flag + ')">���̐F��\��</button><p/>';

		document.getElementById("field_10").innerHTML = '���̈ʒu���w�肵�Ă�������<br />';
		document.getElementById("field_11").innerHTML = '�@X���W�F<input id="x" value="0"/>';
		document.getElementById("field_12").innerHTML = '�@Y���W�F<input id="y" value="0"/>';
		document.getElementById("field_13").innerHTML = '�@Z���W�F<input id="z" value="0"/><br />';
		document.getElementById("field_14").innerHTML = '�@<button onclick="reposition(' + id + ', ' + flag + ')">���̍��W��\��</button><p/>';
	}

	if(flag == 1){
		//�t���O�����Ȃ�
		document.getElementById("field_2").innerHTML = '���̃T�C�Y���w�肵�Ă�������<br />';
		document.getElementById("field_3").innerHTML = '�@���a�F<input id="radius" value="1"/><br />';
		document.getElementById("field_4").innerHTML = '�@<button onclick="resize(' + id + ', ' + flag + ')">���̃T�C�Y��\��</button><p/>';
	
		document.getElementById("field_5").innerHTML = '���̐F���w�肵�Ă��������i�ԐF�� red �� #ff0000 �Ɠ��͂��Ă��������j<br />';
		document.getElementById("field_6").innerHTML = '�@<input id="color" value="#cc33FF"/><br />';
		document.getElementById("field_7").innerHTML = '�@<button onclick="recolor(' + id + ', ' + flag + ')">���̐F��\��</button><p/>';

		document.getElementById("field_8").innerHTML = '���̈ʒu���w�肵�Ă�������<br />';
		document.getElementById("field_9").innerHTML = '�@X���W�F<input id="x" value="0"/>';
		document.getElementById("field_10").innerHTML = '�@Y���W�F<input id="y" value="0"/>';
		document.getElementById("field_11").innerHTML = '�@Z���W�F<input id="z" value="0"/><br />';
		document.getElementById("field_12").innerHTML = '�@<button onclick="reposition(' + id + ', ' + flag + ')">���̍��W��\��</button><p/>';
	}

	if(flag == 2){
		//�t���O���~���Ȃ�
		document.getElementById("field_2").innerHTML = '�~���̃T�C�Y���w�肵�Ă�������<br />';
		document.getElementById("field_3").innerHTML = '�@�����F<input id="height" value="1"/>';
		document.getElementById("field_4").innerHTML = '�@���a�F<input id="radius" value="1"/><br />';
		document.getElementById("field_5").innerHTML = '�@<button onclick="resize(' + id + ', ' + flag + ')">���̃T�C�Y��\��</button><p/>';
	
		document.getElementById("field_6").innerHTML = '�~���̐F���w�肵�Ă��������i�ԐF�� red �� #ff0000 �Ɠ��͂��Ă��������j<br />';
		document.getElementById("field_7").innerHTML = '�@�F�F<input id="color" value="#ffa500"/><br />';
		document.getElementById("field_8").innerHTML = '�@<button onclick="recolor(' + id + ', ' + flag + ')">���̐F��\��</button><p/>';

		document.getElementById("field_9").innerHTML = '�~���̈ʒu���w�肵�Ă�������<br />';
		document.getElementById("field_10").innerHTML = '�@X���W�F<input id="x" value="0"/>';
		document.getElementById("field_11").innerHTML = '�@Y���W�F<input id="y" value="0"/>';
		document.getElementById("field_12").innerHTML = '�@Z���W�F<input id="z" value="0"/><br />';
		document.getElementById("field_13").innerHTML = '�@<button onclick="reposition(' + id + ', ' + flag + ')">���̍��W��\��</button><p/>';
	}

	if(flag == 10){
		//�t���O���X�^���v�Ȃ�
		document.getElementById("field_2").innerHTML = '�X�^���v�̃T�C�Y���w�肵�Ă�������<br />';
		document.getElementById("field_3").innerHTML = '�@���͂΁F<input id="width" value="5"/>';
		document.getElementById("field_4").innerHTML = '�@�c�͂΁F<input id="height" value="5"/><br />';
		document.getElementById("field_5").innerHTML = '�@<button onclick="resize(' + id + ', ' + flag + ')">���̃T�C�Y��\��</button><p/>';

		document.getElementById("field_6").innerHTML = '<div id="color" value="#ffffff"/>';

		document.getElementById("field_7").innerHTML = '�X�^���v�̈ʒu���w�肵�Ă�������<br />';
		document.getElementById("field_8").innerHTML = '�@X���W�F<input id="x" value="0"/>';
		document.getElementById("field_9").innerHTML = '�@Y���W�F<input id="y" value="0"/>';
		document.getElementById("field_10").innerHTML = '�@Z���W�F<input id="z" value="0"/><br />';
		document.getElementById("field_11").innerHTML = '�@<button onclick="reposition(' + id + ', ' + flag + ')">���̍��W��\��</button><p/>';
	}

	document.getElementById("field_23").innerHTML = '�@<button onclick="complete(' + id + ', ' + flag + ')">�m��</button><p/>';
	document.getElementById("field_24").innerHTML = '�@<button onclick="prereset2()">�߂�</button><p/>';

}

function resize(id, flag){
	
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';

	var recolor = 'color="' + color + '"';
	
	//�t���O�ݒ�
	if(flag == 0){
		//�t���O�����Ȃ�
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		depth = document.getElementById("depth").value;
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';
		var redepth = 'depth="' + depth + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + '></a-box>';
	}
	
	else if(flag == 1){
		//�t���O�����Ȃ�
		radius = document.getElementById("radius").value;
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + '></a-sphere>';
	}

	else if(flag == 2){
		//�t���O���~���Ȃ�
		height = document.getElementById("height").value;
		radius = document.getElementById("radius").value;
		var reheight = 'height="' + height + '" ';
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + '></a-cylinder>';
	}

	else if(flag == 10){
		//�t���O���X�^���v�Ȃ�
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-image ' + stump_src + reposition + rewidth + reheight + '></a-image>';

	}
}

function recolor(id, flag){

	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" '
	
	//�F�ύX�̂�
	color = document.getElementById("color").value;
	var recolor = 'color="' + color + '"';

	//�t���O�ݒ�
	if(flag == 0){
		//�t���O�����Ȃ�
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';
		var redepth = 'depth="' + depth + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + '></a-box>';
	}

	else if(flag == 1){
		//�t���O�����Ȃ�
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + '></a-sphere>';
	}

	else if(flag == 2){
		//�t���O���~���Ȃ�
		var reheight = 'height="' + height + '" ';
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + '></a-cylinder>';
	}
}

function reposition(id, flag){
	
	//���W�ύX�̂�
	x = document.getElementById("x").value;
	y = document.getElementById("y").value;
	z = document.getElementById("z").value;
	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" '

	var recolor = 'color="' + color + '"';

	//�t���O�ݒ�
	if(flag == 0){
		//�t���O�����Ȃ�
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';
		var redepth = 'depth="' + depth + '" ';
	
		document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + '></a-box>';
	}

	else if(flag == 1){
		//�t���O�����Ȃ�
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + '></a-sphere>';
	}

	else if(flag == 2){
		//�t���O���~���Ȃ�
		var reheight = 'height="' + height + '" ';
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + '></a-cylinder>';
	}

	else if(flag == 10){
		//�t���O���X�^���v�Ȃ�
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-image ' + stump_src + reposition + rewidth + reheight + '></a-image>';
	}
}

function complete(id, flag){

	//�ҏW�I���B�S�Ă̕ύX�𔽉f
	x = document.getElementById("x").value;
	y = document.getElementById("y").value;
	z = document.getElementById("z").value;
	color = document.getElementById("color").value;

	var reposition = 'position="' + x + ' ' + y + ' ' + z + '" ';
	var recolor = 'color="' + color + '" ';

	if(flag == 0){
		//�t���O�����Ȃ�
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		depth = document.getElementById("depth").value;
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';
		var redepth = 'depth="' + depth + '" ';
	
		document.getElementById("child_entity_"+id).innerHTML = '<a-box class="collidable" ' + reposition + rewidth + reheight + redepth + recolor + 'rotation="" material="" geometry="" scale="" visible=""></a-box>';
	}

	else if(flag == 1){
		//�t���O�����Ȃ�
		radius = document.getElementById("radius").value;
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-sphere class="collidable" ' + reposition + reradius + recolor + 'rotation="" material="" geometry="" scale="" visible="" ></a-sphere>';
	}

	else if(flag == 2){
		//�t���O���~���Ȃ�
		height = document.getElementById("height").value;
		radius = document.getElementById("radius").value;
		var reheight = 'height="' + height + '" ';
		var reradius = 'radius="' + radius + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-cylinder class="collidable" ' + reposition + reheight + reradius + recolor + 'rotation="" material="" geometry="" scale="" visible="" ></a-cylinder>';
	}

	else if(flag == 10){
		//�t���O���X�^���v�Ȃ�
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		var rewidth = 'width="' + width + '" ';
		var reheight = 'height="' + height + '" ';

		document.getElementById("child_entity_"+id).innerHTML = '<a-image ' + reposition + 'rotation="" ' + rewidth + reheight + 'material="" geometry="" scale="" visible="" ' + stump_src + 'rotate=""></a-image>';
	}
	
	//�ҏW�����e�L�X�g�ƃI�u�W�F�N�g�̃o�b�N�A�b�v�쐬�A�ҏW��ʃ��Z�b�g
	prereset1(id);

	//�ŏ��̈ʒu�Ɗp�x�̃o�b�N�A�b�v�쐬
	eval('pre_position_' + id + ' = reposition;');
	eval('pre_rotation_' + id + ' = ori_rotation;');	

	//�V�����I�u�W�F�N�g�쐬
	new_entity();
}

function reset(){
	cancel();

	//�ҏW�I�����t���O�Ƃ��āA�I�u�W�F�N�g�ҏW�̃{�^���𐶐�
	document.getElementById("field_0").innerHTML = '�s�I�u�W�F�N�g�̕ҏW�t<br />';
	document.getElementById("field_1").innerHTML = '�@<button onclick="edit1(1)" style="font-size:85%; width:115px; height:20px;">�ʒu�̕ύX����</button>';
	document.getElementById("field_2").innerHTML = '�@<button onclick="edit1(2)" style="font-size:85%; width:115px; height:20px;">�p�x��ύX����</button>';
	document.getElementById("field_3").innerHTML = '�@<button onclick="edit1(3)" style="font-size:85%; width:115px; height:20px;">��]���ʂ̕ҏW</button>';
	document.getElementById("field_4").innerHTML = '�@<button onclick="edit1(4)" style="font-size:75%; width:115px; height:20px;">�I�u�W�F�N�g����</button><br /><br />';

	document.getElementById("field_5").innerHTML = '�s�I�u�W�F�N�g�̍폜�t<br />';
	document.getElementById("field_6").innerHTML = '�@<button onclick="edit1(0)" style="font-size:75%; width:115px; height:20px;">�I�u�W�F�N�g�폜</button>';
	document.getElementById("field_7").innerHTML = '�@<button onclick="edit3_1()" style="font-size:85%; width:115px; height:20px;">�n�ʂ��폜����</button>';
	document.getElementById("field_8").innerHTML = '�@<button onclick="edit2()" style="font-size:75%; width:115px; height:20px;">�R���g���[���폜</button>';
	document.getElementById("field_9").innerHTML = '�@<button onclick="model_dropout()" style="font-size:85%; width:115px; height:20px;">3D���f���폜</button>';

	document.getElementById("field_10").innerHTML = '<button onclick="src_dl()" style="font-size:120%; margin:40px; float:right;">�\�[�X�R�[�h���쐬����</button>';
}

function prereset1(i){
	//���݂̃I�u�W�F�N�g��ێ�
	backup(i);
	reset();
}

function prereset2(){
	//�߂�{�^���ŃI�u�W�F�N�g����
	document.getElementById("child_entity_"+id).innerHTML = '<a-entity id="child_entity_' + id + '"></a-entity>';
	reset();
}

function new_entity(){
	//�V�����I�u�W�F�N�g����
	id++;
	var new_entity = document.createElement("a-entity");
	new_entity.innerHTML = '<a-entity id="child_entity_' + id + '"></a-entity>';
	var parent_entity = document.getElementById("parent_entity");
	parent_entity.appendChild(new_entity);
}

function cancel(){
	//���͉�ʏ���
	for(var i=0 ; i<25 ; i++){
		document.getElementById("field_"+i).innerHTML = '<div id="field_' + i + '"></div>';
	}
}

function backup(i){
	var backup_bace = document.getElementById("child_entity_"+i).innerHTML;
	//���݂̃I�u�W�F�N�g�̃o�b�N�A�b�v�쐬
	eval('pre_object_' + i + ' = backup_bace;');

	grand = document.getElementById("grand").innerHTML;
	sky = document.getElementById("sky").innerHTML;
	right = document.getElementById("right_entity").innerHTML
	left = document.getElementById("left_entity").innerHTML
	model = document.getElementById("model").innerHTML
}

//�I�u�W�F�N�g�̕ҏW
function edit1(i){
	cancel();

	for(var b=0 ; b<id ; b++){
		if(document.getElementById("child_entity_" + b)){
			//���݂̃I�u�W�F�N�gchild_entity���o�b�N�A�b�v
			backup(b);
			
			//��]�\���p�O����
			if(document.getElementById("child_entity_"+b).getElementsByTagName("a-box").length == 1){
				var tag = '</a-box>';
			}
			else if(document.getElementById("child_entity_"+b).getElementsByTagName("a-cylinder").length == 1){
				var tag = '</a-cylinder>';
			}
			else if(document.getElementById("child_entity_"+b).getElementsByTagName("a-image").length == 1){
				var tag = '</a-image>';
			}
			var rotate = '\n' + '<a-animation id="' + b + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>' + '\n' + '<!--�I�u�W�F�N�g' + b + '����]���܂�-->' + '\n';
			var place = document.getElementById("child_entity_"+b).innerHTML;
			var replace = document.getElementById("child_entity_"+b).innerHTML.replace(rotate + tag,tag);
			
			if(i == 0){
				//�폜��ʂ�\��
				document.getElementById("field_"+b).innerHTML = '�@�I�u�W�F�N�g' + b + '�@<button onclick="erase(' + b + ')">��������</button><br />';
			}
			else if(i == 1){
				//�ʒu�̕ύX��ʂ�\��
				document.getElementById("field_"+b).innerHTML = '�@�I�u�W�F�N�g' + b + '�@<button onclick="position_edit1(' + b + ')">�ʒu��ύX����</button><br />';
			}
			else if(i == 2){
				//�p�x�̕ύX��ʂ�\��
				document.getElementById("field_"+b).innerHTML = '�@�I�u�W�F�N�g' + b + '�@<button onclick="rotation_edit1(' + b + ')">�p�x��ύX����</button><br />';
			}
			else if(i == 3){
				//��]�̕ύX��ʂ�\��
				if(place == replace){
					document.getElementById("field_"+b).innerHTML = '�@�I�u�W�F�N�g' + b + '�@<button onclick="rotate(' + b + ')">��]������</button><br />';
				}
				else {
					document.getElementById("field_"+b).innerHTML = '�@�I�u�W�F�N�g' + b + '�@<button onclick="unrotate(' + b + ')">��]������</button><br />';	
				}
			}
			else if(i == 4){
				//�I�u�W�F�N�g�̕�����ʂ�\��
				document.getElementById("field_"+b).innerHTML = '�@�I�u�W�F�N�g' + b + '�@<button onclick="object_copy(' + b + ')">��������</button><br />';
			}
		}

		if(document.getElementById("old_entity_" + b)){
			//�����ς݃I�u�W�F�N�gold_entity�����O
			document.getElementById("field_"+b).innerHTML = '';
		}
	}

	document.getElementById("field_"+id).innerHTML = '<br />�@<button onclick="prereset1(' + b + ')">�߂�</button><p/>';
}

//�I�u�W�F�N�g�̍폜
function erase(i){
	document.getElementById("field_"+i).innerHTML = '�@�I�u�W�F�N�g' + i + '�@<button onclick="reference(' + i + ')">��������</button><br />';
	document.getElementById("child_entity_"+i).innerHTML = '<a-entity id="old_entity_' + i + '"></a-entity>';	
	backup(i);
}

//�I�u�W�F�N�g�𕜌�
function reference(i){
	document.getElementById("field_"+i).innerHTML = '�@�I�u�W�F�N�g' + i + '�@<button onclick="erase(' + i + ')">��������</button><br />';
	document.getElementById("child_entity_"+i).innerHTML = eval('pre_object_'+ i + ';');
	backup(i);
}

//�I�u�W�F�N�g�̈ʒu��ύX
function position_edit1(i){
	eval('another_position_' + i + ' = ' + 'pre_position_' + i + ';');

	cancel();
	document.getElementById("field_0").innerHTML = '�ҏW���I������ꍇ�͊m��{�^���������Ă��������i�����Ȃ��Ɣ��f����܂���j<br />';
	document.getElementById("field_1").innerHTML = '�@<button onclick="position_complete(' + i + ')">�m��</button><p/>';

	document.getElementById("field_2").innerHTML = '�I�u�W�F�N�g�̈ʒu���w�肵�Ă�������<br />';
	document.getElementById("field_3").innerHTML = '�@X���W�F<input id="x" value="0"/>';
	document.getElementById("field_4").innerHTML = '�@Y���W�F<input id="y" value="0"/>';
	document.getElementById("field_5").innerHTML = '�@Z���W�F<input id="z" value="0"/><br />';
	document.getElementById("field_6").innerHTML = '�@<button onclick="position_edit2(' + i + ')">���̈ʒu��\��</button><p/>';

	document.getElementById("field_23").innerHTML = '�@<button onclick="position_complete(' + i + ')">�m��</button><p/>';
	document.getElementById("field_24").innerHTML = '�@<button onclick="position_reset(' + i + ')">�߂�</button><p/>';
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

//�I�u�W�F�N�g�̊p�x��ύX
function rotation_edit1(i){
	eval('another_rotation_' + i + ' = ' + 'pre_rotation_' + i + ';');

	cancel();
	document.getElementById("field_0").innerHTML = '�ҏW���I������ꍇ�͊m��{�^���������Ă��������i�����Ȃ��Ɣ��f����܂���j<br />';
	document.getElementById("field_1").innerHTML = '�@<button onclick="rotation_complete(' + i + ')">�m��</button><p/>';

	document.getElementById("field_2").innerHTML = '�I�u�W�F�N�g�̊p�x���w�肵�Ă�������<br />';
	document.getElementById("field_3").innerHTML = '�@X�����F<input id="x" value="0"/>';
	document.getElementById("field_4").innerHTML = '�@Y�����F<input id="y" value="0"/>';
	document.getElementById("field_5").innerHTML = '�@Z�����F<input id="z" value="0"/><br />';
	document.getElementById("field_6").innerHTML = '�@<button onclick="rotation_edit2(' + i + ')">���̊p�x��\��</button><p/>';

	document.getElementById("field_23").innerHTML = '�@<button onclick="rotation_complete(' + i + ')">�m��</button><p/>';
	document.getElementById("field_24").innerHTML = '�@<button onclick="rotation_reset(' + i + ')">�߂�</button><p/>';
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

//�I�u�W�F�N�g����]
function rotate(i){
	document.getElementById("field_"+i).innerHTML = '�@�I�u�W�F�N�g' + i + '�@<button onclick="unrotate(' + i + ')">��]������</button><br />';

	if(document.getElementById("child_entity_"+i).getElementsByTagName("a-box").length == 1){
		//�{�b�N�X����
		var rotate_tag = '></a-box>';
		var rotate = '>\n' + '<a-animation id="' + i + '" direction="normal" repeat="indefinite" to="-360 -360 -360" dur="4000" attribute="rotation"></a-animation>' + '\n' + '<!--�I�u�W�F�N�g' + i + '����]���܂�-->' + '\n';
		var tag = '</a-box>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-cylinder").length == 1){
		//�V�����_����
		var rotate_tag = '></a-cylinder>';
		var rotate = '>\n' + '<a-animation id="' + i + '" direction="normal" repeat="indefinite" to="-360 -360 -360" dur="4000" attribute="rotation"></a-animation>' + '\n' + '<!--�I�u�W�F�N�g' + i + '����]���܂�-->' + '\n';
		var tag = '</a-cylinder>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-image").length == 1){
		//�C���[�W����
		var rotate_tag = '></a-image>';
		var rotate = '>\n' + '<a-animation id="' + i + '" direction="normal" repeat="indefinite" to="-360 -360 -360" dur="4000" attribute="rotation"></a-animation>' + '\n' + '<!--�I�u�W�F�N�g' + i + '����]���܂�-->' + '\n';
		var tag = '</a-image>';
	}

	document.getElementById("child_entity_"+i).innerHTML = document.getElementById("child_entity_"+i).innerHTML.replace(rotate_tag,rotate + tag);
	backup(i);
}

//�I�u�W�F�N�g�̉�]������
function unrotate(i){
	document.getElementById("field_"+i).innerHTML = '�@�I�u�W�F�N�g' + i + '�@<button onclick="rotate(' + i + ')">��]������</button><br />';
	
	if(document.getElementById("child_entity_"+i).getElementsByTagName("a-box").length == 1){
		//�{�b�N�X����
		var rotate = '\n' + '<a-animation id="' + i + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>';
		var rotate_tag = '\n' + '<!--�I�u�W�F�N�g' + i + '����]���܂�-->' + '\n' + '</a-box>';
		var tag = '</a-box>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-cylinder").length == 1){
		//�V�����_����
		var rotate = '\n' + '<a-animation id="' + i + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>';
		var rotate_tag = '\n' + '<!--�I�u�W�F�N�g' + i + '����]���܂�-->' + '\n' + '</a-cylinder>';
		var tag = '</a-cylinder>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-image").length == 1){
		//�X�^���v����
		var rotate = '\n' + '<a-animation id="' + i + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>';
		var rotate_tag = '\n' + '<!--�I�u�W�F�N�g' + i + '����]���܂�-->' + '\n' + '</a-image>';
		var tag = '</a-image>';
	}
	document.getElementById("child_entity_"+i).innerHTML = document.getElementById("child_entity_"+i).innerHTML.replace(rotate + rotate_tag,tag);
	backup(i);
}

//�I�u�W�F�N�g�̕���
function object_copy(i){	
	eval('pre_position_' + id + ' = ori_position;');
	eval('pre_rotation_' + id + ' = pre_rotation_' + i + ';');	

	//��]�\���p�O����
	if(document.getElementById("child_entity_"+i).getElementsByTagName("a-box").length == 1){
		var tag = '</a-box>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-cylinder").length == 1){
		var tag = '</a-cylinder>';
	}
	else if(document.getElementById("child_entity_"+i).getElementsByTagName("a-image").length == 1){
		var tag = '</a-image>';
	}
	var rotate = '\n' + '<a-animation id="' + i + '" attribute="rotation" dur="4000" to="-360 -360 -360" repeat="indefinite" direction="normal"></a-animation>' + '\n' + '<!--�I�u�W�F�N�g' + i + '����]���܂�-->' + '\n';
	var child = document.getElementById("child_entity_"+i).innerHTML.replace(rotate + tag,tag);
	child = child.replace(eval('pre_position_' + i),eval('pre_position_' + id));
	document.getElementById("child_entity_"+id).innerHTML = child;

	//�ҏW�����e�L�X�g�ƃI�u�W�F�N�g�̃o�b�N�A�b�v�쐬�A�ҏW��ʃ��Z�b�g
	prereset1(id);

	//�V�����I�u�W�F�N�g�쐬
	new_entity();
}

//�n�ʃI�u�W�F�N�g����
function grand_dropin(){
	cancel();

	if(document.getElementById("grand").innerHTML == ''){

		//���͉�ʐ���
		document.getElementById("field_0").innerHTML = '�n�ʂ̐F���w�肵�Ă��������i��F�� orange �� #ffa500 �Ɠ��͂��Ă��������j<br />';
		document.getElementById("field_1").innerHTML = '���ӁFred��blue�ȂǁA�����F�ʂ͔����Ă�������<p />';
		document.getElementById("field_2").innerHTML = '�@�F�F<input id="color" value="#008000"/><br />';	
		document.getElementById("field_3").innerHTML = '�@<button onclick="grand_recolor()">���̐F��\��</button><p/>';

		document.getElementById("field_23").innerHTML = '�@<button onclick="grand_complete()">�m��</button><p/>';
		document.getElementById("field_24").innerHTML = '�@<button onclick="grand_reset()">�߂�</button><p/>';

		//html�R�[�h�L�q
		document.getElementById("grand").innerHTML = '<a-plane id="grand" rotation="-90 0 0" width="100" height="100" color="#008000" static=""></a-plane>';
	}

	else {
		alert('���łɒn�ʃI�u�W�F�N�g�����݂��܂�')
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

//�n�ʃI�u�W�F�N�g�̏���
function edit3_1(){
	document.getElementById("grand").innerHTML = '';	
}

//�w�i����
function image_dropin(image_code){
	
	if(image_code == 100){
		pre_sky = pre_sky.replace(pre_image,'color="#87ceeb"');
		document.getElementById("sky").innerHTML = pre_sky;
		pre_image = 'color="#87ceeb"';
		prereset1(id);
	}
	else if(image_code == 101){
		//���͉�ʐ���
		cancel();
		document.getElementById("field_0").innerHTML = '�w�i�̐F���w�肵�Ă��������i��F�� orange �� #ffa500 �Ɠ��͂��Ă��������j<br />';
		document.getElementById("field_1").innerHTML = '���ӁFred��blue�ȂǁA�����F�ʂ͔����Ă�������<p />';
		document.getElementById("field_2").innerHTML = '�@�F�F<input id="color" value="#87ceeb"/><br />';	
		document.getElementById("field_3").innerHTML = '�@<button onclick="sky_recolor()">���̐F��\��</button><p/>';

		document.getElementById("field_23").innerHTML = '�@<button onclick="sky_complete()">�m��</button><p/>';
		document.getElementById("field_24").innerHTML = '�@<button onclick="sky_reset()">�߂�</button><p/>';
		
		//���Z�b�g�p�o�b�N�A�b�v
		another_sky = pre_sky;
		another_image = pre_image;

		//�f�t�H���g�ݒ�
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

//�R���g���[������
function controller_dropin(){
	if(document.getElementById("right_entity").innerHTML == ''){
		document.getElementById("right_entity").innerHTML = '<a-entity vive-controls="hand: right" position="0 0.5 0" id="right" controller-cursor></a-entity>';
		document.getElementById("left_entity").innerHTML = '<a-entity vive-controls="hand: left" position="0 0.5 0" id="left"></a-entity>';
		alert('�R���g���[����ǉ����܂����BVR�N�����Ɏ��̉����܂�')
		prereset1(id);
	}
	else {
		alert('���łɃR���g���[�������݂��܂�')
		reset();
	}
}

//�R���g���[���̏���
function edit2(){
	document.getElementById("right_entity").innerHTML = '';
	document.getElementById("left_entity").innerHTML = '';
	alert('�R���g���[�����폜���܂���')
	prereset1(id);
}

//���f��
function model_dropin(){
	if(document.getElementById("model").innerHTML == ''){
		document.getElementById("model").innerHTML = '<a-entity position="0 0 -0.5" rotation="0 0 0" scale="0.11 0.11 0.11" mmd-model="model:lat/miku.pmd; vmd:lat/mikuplus_m.vmd;"></a-entity>';
		prereset1(id);
	}
	else {
		alert('���łɃ��f�������݂��܂�')
		reset();
	}


}
function model_dropout(){
	document.getElementById("model").innerHTML = '';
	prereset1(id);
}

function pre_src_dl(){
	//�I�u�W�F�N�g
	for(var a = 0;a < id;a++){
		textarea_value = textarea_value.replace('<!--�����ɃI�u�W�F�N�g���ǉ�����Ă����܂�-->',eval('pre_object_'+ a) + '\n' + '<!--�����ɃI�u�W�F�N�g���ǉ�����Ă����܂�-->');
	}
	
	//�~�N
	textarea_value = textarea_value.replace('<!--������3D���f�����ǉ�����܂�-->',model);

	//�n��
	textarea_value = textarea_value.replace('<!--�����ɒn�ʃI�u�W�F�N�g���ǉ�����܂�-->',grand);

	//�w�i
	textarea_value = textarea_value.replace('<a-sky position="" rotation="0 0 0" material="" geometry="" scale="" visible="" color="#87ceeb"></a-sky>',sky);

	//�R���g���[��
	textarea_value = textarea_value.replace('<!--�����ɉE��̃R���g���[�����ǉ�����܂�-->',right);
	textarea_value = textarea_value.replace('<!--�����ɍ���̃R���g���[�����ǉ�����܂�-->',left);
}

//�\�[�X�R�[�h�̃_�E�����[�h
function src_dl(){
	//WebVR����v���b�g�t�H�[���ɕۑ�����悤����
	alert('�\�[�X�R�[�h�̃_�E�����[�h���J�n���܂��B�\�[�X�R�[�h�́AWebVR����v���b�g�t�H�[���̃t�@�C���ɕۑ����Ă��������B');

	//���݂̊J����ʂ��e�L�X�g�G���A�ɔ��f
	pre_src_dl();
	
	var text = textarea_value;
	var blob = new Blob([text], {type: "text/plain"}); // �o�C�i���f�[�^�����܂��B

	// IE�����u���E�U���̔���
	if(window.navigator.msSaveBlob){
		// IE�Ȃ�Ǝ��֐����g���܂��B
		window.navigator.msSaveBlob(blob, "index.html");
	}
	else {
	    // ����ȊO��a�^�O�𗘗p���ăC�x���g�𔭉΂����܂�
	    var a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.target = '_blank';
		a.download = 'index.html';
		a.click();
	}

	//�e�L�X�g�G���A��������
	textarea_value = document.getElementById ("textarea").value;
}

