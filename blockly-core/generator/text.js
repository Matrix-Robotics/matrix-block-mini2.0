'use strict';

goog.provide('Blockly.Arduino.text');

goog.require('Blockly.Generator');
goog.require('Blockly.Arduino');

Blockly.Arduino['text'] = function () {
	/**
	 * @this Blockly.Block
	 */
	const code = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};