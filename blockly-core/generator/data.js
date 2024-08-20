'use strict';

goog.provide('Blockly.Arduino.data');

goog.require('Blockly.Generator');
goog.require('Blockly.Arduino');

Blockly.Arduino['data_variable'] = function (block) {
	// Variable getter.
	const code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VARIABLE'), "VARIABLE");
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['data_setvariableto'] = function () {
	//解析value
	let arg;
	arg = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT)
	if (this.getField('VALUE')) {
		arg = this.getFieldValue('VALUE');
	} else {
		arg = Blockly.Arduino.valueToCode(this, 'VALUE') || '0';
	}

	//去雙引號
	let argLen = arg.length;
	let _argStart = arg[0];
	let _argEnd = arg[argLen - 1];

	if (_argStart == "\"" && _argEnd == "\"") {
		arg = arg.substring(1, argLen - 1);
	}
	arg = arg.replace(/\\/g, "");

	//解析varname
	let varname_filedValue = this.getFieldValue('VARIABLE');
	if (varname_filedValue == null) {
		varname_filedValue = "null";
	}
	let varName = Blockly.Arduino.variableDB_.getName(varname_filedValue, "VARIABLE");

	const code = `${varName} = ${arg};\n`;
	return code;
};

Blockly.Arduino['data_changevariableby'] = function (block) {
	//解析value
	let arg;
	arg = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT)
	if (this.getField('VALUE')) {
		arg = this.getFieldValue('VALUE');
	} else {
		arg = Blockly.Arduino.valueToCode(this, 'VALUE') || '0';
	}

	//去雙引號
	let argLen = arg.length;
	let _argStart = arg[0];
	let _argEnd = arg[argLen - 1];

	if (_argStart == "\"" && _argEnd == "\"") {
		arg = arg.substring(1, argLen - 1);
	}
	arg = arg.replace(/\\/g, "");

	//解析varname
	let varname_filedValue = this.getFieldValue('VARIABLE');
	if (varname_filedValue == null) {
		varname_filedValue = "null";
	}
	let varName = Blockly.Arduino.variableDB_.getName(varname_filedValue, "VARIABLE");

	const code = `${varName} = ${varName} + ${arg};\n`;
	return code;
};