'use strict';

goog.provide('Blockly.Arduino.math');

goog.require('Blockly.Generator');
goog.require('Blockly.Arduino');

Blockly.Arduino['math_number'] = function () {
	let code = (this.getFieldValue('NUM'));
	let order = code < 0 ?
		Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
	return [code, order];
};