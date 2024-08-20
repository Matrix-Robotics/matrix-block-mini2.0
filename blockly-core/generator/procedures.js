'use strict';

goog.provide('Blockly.Arduino.ProcedureUtils');

goog.require('Blockly.Generator');
goog.require('Blockly.Arduino');

Blockly.Arduino['argument_reporter_boolean'] = function (block) {
	// console.log("argument_reporter_boolean",block);
	let nameValue = String(block.getFieldValue("VALUE"));
	const code = Blockly.Arduino.proceduresDB_.getName(nameValue, "VARIABLE");
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['argument_reporter_string_number'] = function (block) {
	// console.log("argument_reporter_string_number",block);
	let nameValue = String(block.getFieldValue("VALUE"));
	let code = Blockly.Arduino.proceduresDB_.getName(nameValue, "VARIABLE");
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['argument_reporter_string_only'] = function (block) {
	// console.log("argument_reporter_string_only",block);
	let nameValue = String(block.getFieldValue("VALUE"));
	let code = Blockly.Arduino.proceduresDB_.getName(nameValue, "VARIABLE");
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['procedures_definition'] = function (block) {
	// console.log("procedures_definition",block);
	// console.log(" Blockly.Arduino.proceduresDB_", Blockly.Arduino.proceduresDB_);
	let protoblock = block.childBlocks_[0];
	let funcName = Blockly.Arduino.proceduresDB_.getName(protoblock.procCode_, 'PROCEDURE');

	//獲取變數型態
	let argsType = {};
	for (let i = 0; i < protoblock.childBlocks_.length; i++) {
		// console.log(protoblock.childBlocks_[i].type);
		if (protoblock.childBlocks_[i].type == 'argument_reporter_string_number') {
			argsType[i] = 'float ';
		} else if (protoblock.childBlocks_[i].type == 'argument_reporter_string_only') {
			argsType[i] = 'String ';
		} else {
			argsType[i] = 'bool '; //argument_reporter_boolean
		}
	}

	let argDispNames = protoblock.displayNames_;
	let args = "";
	for (let i = 0; i < argDispNames.length; i++) {
		const arg = Blockly.Arduino.proceduresDB_.getName(argDispNames[i], "VARIABLE");
		if (i == 0) {
			args = args + argsType[i] + arg;
		} else {
			args = args + ", " + argsType[i] + arg;
		}
	}
	let code = Blockly.Arduino.blockToCode(block.getNextBlock());
	code = code.replace(/^/gm, '  ').replace(/\s*$/, '\n');
	code = `void ${funcName}(${args}) {\n${code}}\n`;
	Blockly.Arduino.definitions_[funcName] = code;
	return null;
};

Blockly.Arduino['procedures_call'] = function (block) {
	// console.log("procedures_call",block);
	let funcName = Blockly.Arduino.proceduresDB_.getName(block.procCode_, 'PROCEDURE');
	let argIds = block.argumentIds_;
	let argsCode = "";

	for (let i = 0; i < argIds.length; i++) {
		const argId = argIds[i];
		const argBlock = block.getInputTargetBlock(argId);
		// console.log("argId " + i + ": ", argId);
		// console.log("argBlock: ", argBlock);
		let arg = "false";
		if (argBlock != null) {
			arg = Blockly.Arduino.blockToCode(argBlock);
			// console.log("argCode: ", arg);
			if (arg instanceof Array) {
				arg = arg[0];
			}
			// arg = Blockly.Arduino.removeQuotes(arg);
			// console.log("argCodeREE: ", arg);
		}

		if (i == 0) {
			argsCode = argsCode + arg;
		} else {
			argsCode = argsCode + ", " + arg;
		}
	}
	// console.log("argsCode",argsCode);
	let code = `${funcName}(${argsCode});\n`;
	return code;
};