'use strict';
goog.provide('Blockly.Arduino');
goog.require('Blockly.Generator');

Blockly.Arduino = new Blockly.Generator('Arduino');

Blockly.Arduino.addReservedWords(
	'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,short,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts,A0,A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13,A14,A15'
);

Blockly.Arduino.ORDER_ATOMIC = 0; // 0 "" ...
Blockly.Arduino.ORDER_UNARY_POSTFIX = 1; // expr++ expr-- () [] .
Blockly.Arduino.ORDER_UNARY_PREFIX = 2; // -expr !expr ~expr ++expr --expr
Blockly.Arduino.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.Arduino.ORDER_ADDITIVE = 4; // + -
Blockly.Arduino.ORDER_SHIFT = 5; // << >>
Blockly.Arduino.ORDER_RELATIONAL = 6; // is is! >= > <= <
Blockly.Arduino.ORDER_EQUALITY = 7; // == != === !==
Blockly.Arduino.ORDER_BITWISE_AND = 8; // &
Blockly.Arduino.ORDER_BITWISE_XOR = 9; // ^
Blockly.Arduino.ORDER_BITWISE_OR = 10; // |
Blockly.Arduino.ORDER_LOGICAL_AND = 11; // &&
Blockly.Arduino.ORDER_LOGICAL_OR = 12; // ||
Blockly.Arduino.ORDER_CONDITIONAL = 13; // expr ? expr : expr
Blockly.Arduino.ORDER_ASSIGNMENT = 14; // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.Arduino.ORDER_NONE = 99; // (...)

var profile = {
	softserial_select: [
		["SoftwareSerial", "Serial"]
	],
	arduino_standard: {
		description: "standard",
		digital: [
			["D1", "D1"],
			["D2", "D2"],
			["D3", "D3"],
			["D4", "D4"]
		],
		analog: [
			["A1", "A1"],
			["A2", "A2"],
			["A3", "A3"]
		],
		pwm: [
			["M1", "M1"],
			["M2", "M2"]
		],
		rc: [
			['RC1', 'RC1'], 
			['RC2', 'RC2'], 
			['RC3', 'RC3'], 
			['RC4', 'RC4']
		],
		serialSpeed: [
			['9600', '9600'], 
			['57600', '57600'], 
			['115200', '115200']
		],
		i2c: [
			['I2C1', 'I2C1'], 
			['I2C2', 'I2C2'], 
			['I2C3', 'I2C3'], 
			['I2C4', 'I2C4']
		],
		builtinLed: [
			['LED1', 'RGB1'], 
			['LED2', 'RGB2']
		],
		buttons: [
			['Button1', 'BTN1'], 
			['Button2', 'BTN2']
		],
		high_low: [
			["HIGH", "HIGH"],
			["LOW", "LOW"]
		],
		miniBeginAA: [
			['18650x2', 'LI_2'], 
			['18650x3', 'LI_3'], 
			['18650x4', 'LI_4'],
			['AAx6', 'AA_6']
		],
		miniBeginEnUART: [
			['On', '1'], 
			['Off', '0']
		],
		miniBeginBaud: [
			['9600', '9600'],
			['57600', '57600'], 
			['115200', '115200'], 
		],
		input_output: [
			["OUTPUT", "OUTPUT"],
			["INPUT", "INPUT"],
			["INPUT_PULLUP", "INPUT_PULLUP"],
		],
		serial_select: [
			["Serial", "Serial"]
		],
		serial: 9600
	}
};

profile["Arduino/Genuino Uno"] = profile["arduino_standard"];
profile["default"] = profile["Arduino/Genuino Uno"];

Blockly.Arduino.init = function (workspace) {
	Blockly.Arduino.definitions_ = Object.create(null);
	//Blockly.Arduino.variableTypes_ = Object.create(null); //變數資料型態
	Blockly.Arduino.setups_ = Object.create(null);
	Blockly.Arduino.loops_ = Object.create(null);

	//建立變數資料庫
	if (!Blockly.Arduino.variableDB_) {
		Blockly.Arduino.variableDB_ =
			new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
	} else {
		Blockly.Arduino.variableDB_.reset();
	}
	Blockly.Arduino.variableDB_.setVariableMap(workspace.getVariableMap());

	//建立myblock資料庫
	if (!Blockly.Arduino.proceduresDB_) {
		Blockly.Arduino.proceduresDB_ =
			new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
	} else {
		Blockly.Arduino.proceduresDB_.reset();
	}
	Blockly.Arduino.proceduresDB_.setVariableMap(workspace.getVariableMap());

};

Blockly.Arduino.finish = function (code) {
	var imports = [];
	var definitions_var = []; //變數
	var definitions_fun = []; //函式

	//固定引入Lib
	imports.push('#include "MatrixMini.h"');

	//函式放到開頭
	for (var name in Blockly.Arduino.definitions_) {
		var def = Blockly.Arduino.definitions_[name];
		if (def.match(/^#include/)) {
			imports.push(def);
		} else {
			definitions_fun.push(def);
		}
	}

	//變數放到開頭
	for (var name in Blockly.Arduino.variableDB_.db_) {
		// console.log(Blockly.Arduino.variableDB_.db_[name]);
		definitions_var.push('float ' + Blockly.Arduino.variableDB_.db_[name] + ';');
	}

	var setups = [];
	for (var name in Blockly.Arduino.setups_) {
		setups.push(Blockly.Arduino.setups_[name]);
		// console.log(Blockly.Arduino.setups_[name])
	}

	var loops = [];
	for (var name in Blockly.Arduino.loops_) {
		loops.push(Blockly.Arduino.loops_[name]);
		// console.log(Blockly.Arduino.loops_[name])
	}

	var allDefs = imports.join('\n') + '\n\n' +
		definitions_var.join('\n') + '\n\n' +
		definitions_fun.join('\n') + '\n\nvoid setup()\n{\n  ' + setups.join('\n  ') + '\n}' + '\n\n';

	// Indent every line.
	// code = '  ' + code.replace(/\n/g, '\n  '); //剩下的代碼全解析
	// code = loops.join('\n  ').replace(/\n/g, '\n  '); //改成只有在Setup-Loop方塊中的代碼才解析
	// code = code.replace(/\n\s+$/, '\n');
	code = 'void loop()\n{\n' + loops.join('\n  ') + '\n}';
	
	return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n') + code;
};

Blockly.Arduino.scrubNakedValue = function (line) {
	return line + ';\n';
};

Blockly.Arduino.quote_ = function (string) {
	// TODO: This is a quick hack.  Replace with goog.string.quote
	//return goog.string.quote(string);
	return "\"" + string + "\"";
};

Blockly.Arduino.removeQuotes = function (arg) {
	if (arg == null || arg == '' || arg == '\"\"') {
		return 0;
	}
	let argLen = arg.length;
	let _argStart = arg[0];
	let _argEnd = arg[argLen - 1]

	if (_argStart == "\"" && _argEnd == "\"") {
		arg = arg.substring(1, argLen - 1)
	}
	arg = arg.replace(/\\/g, "")
	return arg
}

Blockly.Arduino.scrub_ = function (block, code) {
	if (code === null) {
		return ''; // Block has handled code generation itself.
	}
	var commentCode = '';
	// Only collect comments for blocks that aren't inline.
	if (!block.outputConnection || !block.outputConnection.targetConnection) {
		// Collect comment for this block.
		var comment = block.getCommentText();
		if (comment) {
			commentCode += Blockly.Arduino.prefixLines(comment, '// ') + '\n';
		}
		// Collect comments for all value arguments.
		// Don't collect comments for nested statements.
		for (var x = 0; x < block.inputList.length; x++) {
			if (block.inputList[x].type === Blockly.INPUT_VALUE) {
				var childBlock = block.inputList[x].connection.targetBlock();
				if (childBlock) {
					comment = Blockly.Arduino.allNestedComments(childBlock);
					if (comment) {
						commentCode += Blockly.Arduino.prefixLines(comment, '// ');
					}
				}
			}
		}
	}
	var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	var nextCode = Blockly.Arduino.blockToCode(nextBlock);
	return commentCode + code + nextCode;
};

//迴圈計數器
Blockly.Arduino.NameDb_ = {};
Blockly.Arduino.getCount = function (block_id) {

	let count = 0;
	for (let id in Blockly.Arduino.NameDb_) {
		if (!Blockly.mainWorkspace.getBlockById(id)) {
			delete Blockly.Arduino.NameDb_[id];
		} else {
			Blockly.Arduino.NameDb_[id] = count++;
		}
	}

	if (!(block_id in Blockly.Arduino.NameDb_)) {
		Blockly.Arduino.NameDb_[block_id] = count;
	}

	return Blockly.Arduino.NameDb_[block_id];
};