'use strict';

goog.provide('Blockly.Arduino.control');

goog.require('Blockly.Generator');
goog.require('Blockly.Arduino');


Blockly.Arduino['control_setup'] = function () {
	let branch = Blockly.Arduino.statementToCode(this, 'SUBSTACK');
	branch = branch.replace(/(^\s*)|(\s*$)/g, "");
	if (branch) {
		Blockly.Arduino.setups_['setup_setup'] = branch;
	}
	return '';
};

Blockly.Arduino['control_wait'] = function () {
	let delay = Blockly.Arduino.valueToCode(this, 'TIMES', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return 'delay(' + delay + ');\n';
};

Blockly.Arduino['control_if'] = function () {
	let argument = Blockly.Arduino.valueToCode(this, 'CONDITION', Blockly.Arduino.ORDER_NONE) || 'false';
	let branch = Blockly.Arduino.statementToCode(this, 'SUBSTACK');
	let code = 'if(' + argument + ')\n{\n' + branch + '}';
	return code + '\n';
};

Blockly.Arduino['control_if_else'] = function () {
	let argument = Blockly.Arduino.valueToCode(this, 'CONDITION', Blockly.Arduino.ORDER_NONE) || 'false';
	let branch = Blockly.Arduino.statementToCode(this, 'SUBSTACK');
	let code = 'if(' + argument + ')\n{\n' + branch + '}';
	branch = Blockly.Arduino.statementToCode(this, 'SUBSTACK2');
	code += '\nelse\n{\n' + branch + '}';
	return code + '\n';
};

Blockly.Arduino['control_forever'] = function () {
	let branch = Blockly.Arduino.statementToCode(this, 'SUBSTACK');
	let code = 'while(true)\n{\n' + branch + '}';
	return code + '\n';
};

Blockly.Arduino['control_repeat'] = function (block) {
	const i = 'i_' + Blockly.Arduino.getCount(block.id);
	const argument = Blockly.Arduino.valueToCode(this, 'TIMES', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const branch = Blockly.Arduino.statementToCode(this, 'SUBSTACK');
	const code = `for(int ${i} = 0; ${i} < ${argument}; ${i}++)\n{\n${branch}}`;
	return code + '\n';
};

Blockly.Arduino['control_wait_until'] = function () {
	const argument = Blockly.Arduino.valueToCode(this, 'CONDITION', Blockly.Arduino.ORDER_NONE) || 'false';
	return 'while(!' + argument + ');\n';
};

Blockly.Arduino['control_repeat_until'] = function () {
	const argument = Blockly.Arduino.valueToCode(this, 'CONDITION', Blockly.Arduino.ORDER_NONE) || 'false';
	const branch = Blockly.Arduino.statementToCode(this, 'SUBSTACK');
	return 'while(!' + argument + ')\n{\n' + branch + '}\n';
};
