'use strict';

goog.provide('Blockly.Arduino.pins');

goog.require('Blockly.Generator');
goog.require('Blockly.Arduino');

Blockly.Arduino['pins_digital'] = function () {
	const code = this.getFieldValue('PIN');
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pins_analog'] = function () {
	const code = this.getFieldValue('PIN');
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pins_pwm'] = function () {
	const code = this.getFieldValue('PIN');
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pins_high_low'] = function () {
	const code = this.getFieldValue('NUM');
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pins_input_output'] = function () {
	const code = this.getFieldValue('MODE');
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pins_pin_mode'] = function () {
	const pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	const mode = Blockly.Arduino.valueToCode(this, 'MODE', Blockly.Arduino.ORDER_ATOMIC);
	return `pinMode(${pin}, ${mode});\n`;
};

Blockly.Arduino['pins_digital_write'] = function () {
	const pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
	return `digitalWrite(${pin}, ${num});\n`;
};

Blockly.Arduino['pins_digital_read'] = function () {
	const argument = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 'D13';
	const code = `digitalRead(${argument})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pins_analog_write'] = function () {
	const pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
	return `analogWrite(${pin}, ${num});\n`;
};

Blockly.Arduino['pins_analog_read'] = function () {
	const argument = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || 'A0';
	const code = `analogRead(${argument})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};