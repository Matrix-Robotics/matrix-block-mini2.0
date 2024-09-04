'use strict';

goog.provide('Blockly.Arduino.operators');

goog.require('Blockly.Generator');
goog.require('Blockly.Arduino');

Blockly.Arduino['operator_add'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'NUM1', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const argument2 = Blockly.Arduino.valueToCode(this, 'NUM2', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `${argument1} + ${argument2}`;
	return [code, Blockly.Arduino.ORDER_ADDITIVE];
};

Blockly.Arduino['operator_subtract'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'NUM1', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const argument2 = Blockly.Arduino.valueToCode(this, 'NUM2', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `${argument1} - ${argument2}`;
	return [code, Blockly.Arduino.ORDER_ADDITIVE];
};

Blockly.Arduino['operator_multiply'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'NUM1', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const argument2 = Blockly.Arduino.valueToCode(this, 'NUM2', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `${argument1} * ${argument2}`;
	return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Arduino['operator_divide'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'NUM1', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const argument2 = Blockly.Arduino.valueToCode(this, 'NUM2', Blockly.Arduino.ORDER_ATOMIC) || '1';
	const code = `${argument1} / ${argument2}`;
	return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Arduino['operator_random'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const argument2 = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ATOMIC) || '1';
	const code = `random(${argument1}, ${argument2})`;
	return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Arduino['operator_mod'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'NUM1', Blockly.Arduino.ORDER_ATOMIC) || '1';
	const argument2 = Blockly.Arduino.valueToCode(this, 'NUM2', Blockly.Arduino.ORDER_ATOMIC) || '1';
	// const code = `${argument1} % ${argument2}`;
	const code = `fmod(${argument1}, ${argument2})`;
	return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Arduino['operator_lt'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'OPERAND1', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const argument2 = Blockly.Arduino.valueToCode(this, 'OPERAND2', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `${argument1} < ${argument2}`;
	return [code, Blockly.Arduino.ORDER_RELATIONAL];
};

Blockly.Arduino['operator_equals'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'OPERAND1', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const argument2 = Blockly.Arduino.valueToCode(this, 'OPERAND2', Blockly.Arduino.ORDEORDER_ATOMICR_EQUALITY) || '1';
	const code = `${argument1} == ${argument2}`;
	return [code, Blockly.Arduino.ORDER_EQUALITY];
};

Blockly.Arduino['operator_gt'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'OPERAND1', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const argument2 = Blockly.Arduino.valueToCode(this, 'OPERAND2', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `${argument1} > ${argument2}`;
	return [code, Blockly.Arduino.ORDER_RELATIONAL];
};

Blockly.Arduino['operator_and'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'OPERAND1', Blockly.Arduino.ORDER_ATOMIC) || 'false';
	const argument2 = Blockly.Arduino.valueToCode(this, 'OPERAND2', Blockly.Arduino.ORDER_ATOMIC) || 'false';
	const code = `${argument1} && ${argument2}`;
	return [code, Blockly.Arduino.ORDER_LOGICAL_AND];
};

Blockly.Arduino['operator_or'] = function () {
	const argument1 = Blockly.Arduino.valueToCode(this, 'OPERAND1', Blockly.Arduino.ORDER_ATOMIC) || 'false';
	const argument2 = Blockly.Arduino.valueToCode(this, 'OPERAND2', Blockly.Arduino.ORDER_ATOMIC) || 'false';
	const code = `${argument1}||${argument2}`;
	return [code, Blockly.Arduino.ORDER_LOGICAL_OR];
};

Blockly.Arduino['operator_not'] = function () {
	const argument = Blockly.Arduino.valueToCode(this, 'OPERAND', Blockly.Arduino.ORDER_ATOMIC) || 'false';
	const code = `!${argument}`;
	return [code, Blockly.Arduino.ORDER_UNARY_PREFIX];
};

Blockly.Arduino['operator_join'] = function () {
	const str1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_ATOMIC);
	const str2 = Blockly.Arduino.valueToCode(this, 'STRING2', Blockly.Arduino.ORDER_ATOMIC);
	const code = `String(${str1}) + String(${str2})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['operator_letter_of'] = function () {
	const str = Blockly.Arduino.valueToCode(this, 'STRING', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	const at = Blockly.Arduino.valueToCode(this, 'LETTER', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `String(${str}).charAt(${at})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['operator_length'] = function () {
	const str = Blockly.Arduino.valueToCode(this, 'STRING', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	const code = `String(${str}).length()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['operator_round'] = function () {
	const argument = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `round(${argument})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['operator_mathop'] = function () {
	const math = this.getFieldValue('OPERATOR');
	const argument = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `${math}(${argument})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['operator_toString'] = function () {
	const argument = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `String(${argument})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};