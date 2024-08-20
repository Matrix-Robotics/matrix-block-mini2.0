'use strict';

goog.provide('Blockly.Arduino._mini');

goog.require('Blockly.Generator');
goog.require('Blockly.Arduino');

Blockly.Arduino['mini_pins_high_low'] = function () {
	const code = this.getFieldValue('NUM');
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//miniBegin
Blockly.Arduino['mini_setup'] = function () {
	const miniAA = this.getFieldValue('miniBegin_AA');
	const miniEnUART = this.getFieldValue('miniBegin_EnUART');
	const miniBaud = this.getFieldValue('miniBegin_Baud');
	let miniSetupCode = 'Mini.begin(' + miniAA + ', 0, ' + miniBaud + ');\n';
	if (miniEnUART == 1) {
		miniSetupCode = 'Mini.begin(' + miniAA + ', 0, ' + miniBaud + ');\n  Serial.begin(' + miniBaud + ');\n';
	}
	let branch = miniSetupCode + Blockly.Arduino.statementToCode(this, 'SUBSTACK');
	let branch2 = Blockly.Arduino.statementToCode(this, 'SUBSTACK2');
	branch = branch.replace(/(^\s*)|(\s*$)/g, "");
	if (branch) {
		Blockly.Arduino.setups_['setup_setup'] = branch;
	}
	if (branch2) {
		Blockly.Arduino.loops_['loop'] = branch2;
	}
	return '';
};

//Mini.RGB1.setRGB(0,0,0);
Blockly.Arduino['mini_setRGB'] = function () {
	const pin = this.getFieldValue('PIN');
	const R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const G = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const B = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Mini.${pin}.setRGB(${R}, ${G}, ${B});\n`;
};

//Mini.M1.set(0); // Speed Range: 100 ~ -100
Blockly.Arduino['mini_Mset'] = function () {
	const pin = this.getFieldValue('PIN');
	const speed = Blockly.Arduino.valueToCode(this, 'Speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Mini.${pin}.set(${speed});\n`;
};

//Mini.RC1.set(90); //Angle Range: 0 ~ 180
Blockly.Arduino['mini_RCset'] = function () {
	const pin = this.getFieldValue('PIN');
	const angle = Blockly.Arduino.valueToCode(this, 'Angle', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Mini.${pin}.set(${angle});\n`;
};

//Mini.BTN1.get();
Blockly.Arduino['mini_BTNget'] = function () {
	const pin = this.getFieldValue('PIN');
	const code = `Mini.${pin}.get()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.D4.US.get();
Blockly.Arduino['mini_USget'] = function () {
	const pin = this.getFieldValue('PIN');
	const code = `Mini.${pin}.US.get()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.D1.get();
Blockly.Arduino['mini_DIget'] = function () {
	const pin = this.getFieldValue('PIN');
	const code = `Mini.${pin}.get()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.A1.getANG();
Blockly.Arduino['mini_AIget'] = function () {
	const pin = this.getFieldValue('PIN');
	const code = `Mini.${pin}.getANG()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.D1.set(1);
Blockly.Arduino['mini_DOset'] = function () {
	const pin = this.getFieldValue('PIN');
	const high_low = Blockly.Arduino.valueToCode(this, 'HIGHLOW', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Mini.${pin}.set(${high_low});\n`;
};




//Mini.I2C1.MXcolor.setGamma(true);
Blockly.Arduino['mini_i2c_MXcolor_setGamma'] = function () {
	const pin = this.getFieldValue('PIN');
	const logic = this.getFieldValue('LOGIC');
	return `Mini.${pin}.MXcolor.setGamma(${logic});\n`;
};

//Mini.I2C1.MXcolor.getColorNumber();
Blockly.Arduino['mini_i2c_MXcolor_getColorNumber'] = function () {
	const pin = this.getFieldValue('PIN');
	const code = `Mini.${pin}.MXcolor.getColorNumber()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.I2C1.MXcolor.getColor(R);
Blockly.Arduino['mini_i2c_MXcolor_getColor'] = function () {
	const pin = this.getFieldValue('PIN');
	const color = this.getFieldValue('COLOR');
	const code = `Mini.${pin}.MXcolor.getColor(${color})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.I2C1.MXmotion.setFilter(NONE);
Blockly.Arduino['mini_i2c_MXmotion_setFilter'] = function () {
	const pin = this.getFieldValue('PIN');
	const filter = this.getFieldValue('FILTER');
	return `Mini.${pin}.MXmotion.setFilter(${filter});\n`;
};

//Mini.I2C1.MXmotion.getAccel(x);
Blockly.Arduino['mini_i2c_MXmotion_getAccel'] = function () {
	const pin = this.getFieldValue('PIN');
	const axis = this.getFieldValue('AXIS');
	const code = `Mini.${pin}.MXmotion.getAccel(${axis})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.I2C1.MXmotion.getGyro(x);
Blockly.Arduino['mini_i2c_MXmotion_getGyro'] = function () {
	const pin = this.getFieldValue('PIN');
	const axis = this.getFieldValue('AXIS');
	const code = `Mini.${pin}.MXmotion.getGyro(${axis})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.I2C1.MXmotion.getPitch();Roll;Yaw
Blockly.Arduino['mini_i2c_MXmotion_getEULAR'] = function () {
	const pin = this.getFieldValue('PIN');
	const axis = this.getFieldValue('AXIS');
	const code = `Mini.${pin}.MXmotion.get${axis}()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.I2C1.MXlaser.getDistance()
Blockly.Arduino['mini_i2c_MXlaser_getDistance'] = function () {
	const pin = this.getFieldValue('PIN');
	const code = `Mini.${pin}.MXlaser.getDistance()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.I2C1.MXmotor.setPWM(1,0);
Blockly.Arduino['mini_i2c_MXmotor_setPWM'] = function () {
	const pin = this.getFieldValue('PIN');
	const channel = this.getFieldValue('CHA');
	const speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Mini.${pin}.MXmotor.setPWM(${channel}, ${speed});\n`;
};

//Mini.I2C1.MXservo.setAngle(1,90);
Blockly.Arduino['mini_i2c_MXservo_setAngle'] = function () {
	const pin = this.getFieldValue('PIN');
	const channel = this.getFieldValue('CHA');
	const angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Mini.${pin}.MXservo.setAngle(${channel}, ${angle});\n`;
};

//Mini.I2C1.MXctrl.motorSet(1,0);
Blockly.Arduino['mini_i2c_MXctrl_motorSet'] = function () {
	const pin = this.getFieldValue('PIN');
	const channel = this.getFieldValue('CHA');
	const speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Mini.${pin}.MXctrl.motorSet(${channel}, ${speed});\n`;
};

//Mini.I2C1.MXctrl.motorRound(1,0);
Blockly.Arduino['mini_i2c_MXctrl_motorRound'] = function () {
	const pin = this.getFieldValue('PIN');
	const channel = this.getFieldValue('CHA');
	const round = Blockly.Arduino.valueToCode(this, 'ROUND', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Mini.${pin}.MXctrl.motorRound(${channel}, ${round});\n`;
};

//Mini.I2C1.MXctrl.motorInvert(1,1);
Blockly.Arduino['mini_i2c_MXctrl_motorInvert'] = function () {
	const pin = this.getFieldValue('PIN');
	const channel = this.getFieldValue('CHA');
	const onoff = this.getFieldValue('ONOFF');
	return `Mini.${pin}.MXctrl.motorInvert(${channel}, ${onoff});\n`;
};

//Mini.I2C1.MXctrl.servoSet(1,90);
Blockly.Arduino['mini_i2c_MXctrl_servoSet'] = function () {
	const pin = this.getFieldValue('PIN');
	const channel = this.getFieldValue('CHA');
	const angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Mini.${pin}.MXctrl.servoSet(${channel}, ${angle});\n`;
};

//Mini.I2C1.PIXYcam.pixyinit(7);
Blockly.Arduino['mini_i2c_PIXYcam_pixyinit'] = function () {
	const pin = this.getFieldValue('PIN');
	return `Mini.${pin}.PIXYcam.pixyinit(7);\n`;
};

//Mini.I2C1.PIXYcam.getblock(0,1);
Blockly.Arduino['mini_i2c_PIXYcam_getblock'] = function () {
	const pin = this.getFieldValue('PIN');
	return `Mini.${pin}.PIXYcam.getblock(0,1);\n`;
};

//Mini.I2C1.PIXYcam.block.signature; x, y, width, height
Blockly.Arduino['mini_i2c_PIXYcam_INFO'] = function () {
	const pin = this.getFieldValue('PIN');
	const info = this.getFieldValue('INFO');
	const code = `Mini.${pin}.PIXYcam.block.${info}`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.I2C1.HTcolor.getColorNumber();
Blockly.Arduino['mini_i2c_HTcolor_getColorNumber'] = function () {
	const pin = this.getFieldValue('PIN');
	const code = `Mini.${pin}.HTcolor.getColorNumber()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.I2C1.HTcolor.get();
Blockly.Arduino['mini_i2c_HTcolor_getRed'] = function () {
	const pin = this.getFieldValue('PIN');
	const code = `Mini.${pin}.HTcolor.get()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.I2C1.HTcolor.get();
Blockly.Arduino['mini_i2c_HTcompass_getHeading'] = function () {
	const pin = this.getFieldValue('PIN');
	const code = `Mini.${pin}.HTcompass.getHeading()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.PS2.begin();
Blockly.Arduino['mini_ps2_begin'] = function () {
	return `Mini.PS2.begin();\n`;
};

//Mini.PS2.polling();
Blockly.Arduino['mini_ps2_polling'] = function () {
	return `Mini.PS2.polling();\n`;
};

//Mini.PS2.UP;
Blockly.Arduino['mini_ps2_btn'] = function () {
	const btns = this.getFieldValue('BTNS');
	const code = `Mini.PS2.${btns}`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Mini.PS2.RX
Blockly.Arduino['mini_ps2_joy'] = function () {
	const LR = this.getFieldValue('LR');
	const XY = this.getFieldValue('XY');
	const code = `Mini.PS2.${LR}${XY}`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Serial.print("hello");
Blockly.Arduino['mini_Serial_print'] = function () {
	const string = Blockly.Arduino.valueToCode(this, 'STRING', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Serial.print(${string});\n`;
};

//Serial.println();
Blockly.Arduino['mini_Serial_println'] = function () {
	const string = Blockly.Arduino.valueToCode(this, 'STRING', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Serial.println(${string});\n`;
};

//Serial.write();
Blockly.Arduino['mini_Serial_write'] = function () {
	const string = Blockly.Arduino.valueToCode(this, 'STRING', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `Serial.write(${string});\n`;
};

//Serial.println("{" + String(j) + "," + String(k) + "," + String(50) + "}");
Blockly.Arduino['mini_Serial_printAXIS'] = function () {
	const num1 = Blockly.Arduino.valueToCode(this, 'NUM1', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const num2 = Blockly.Arduino.valueToCode(this, 'NUM2', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const num3 = Blockly.Arduino.valueToCode(this, 'NUM3', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const delay = Blockly.Arduino.valueToCode(this, 'DELAY', Blockly.Arduino.ORDER_ATOMIC) || '0';
	// return `Serial.println(${string});\n`; 
	return `Serial.println("{" + String(${num1}) + "," + String(${num2}) + "," + String(${num3}) + "}");\ndelay(${delay});\n`;
};

//Serial.available()
Blockly.Arduino['mini_Serial_available'] = function () {
	const code = `Serial.available()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Serial.read()
Blockly.Arduino['mini_Serial_read'] = function () {
	const code = `Serial.read()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//millis()
Blockly.Arduino['mini_millis'] = function () {
	const code = `millis()`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//randomSeed(0);
Blockly.Arduino['mini_randomSeed'] = function () {
	const seed = Blockly.Arduino.valueToCode(this, 'SEED', Blockly.Arduino.ORDER_ATOMIC) || '0';
	return `randomSeed(${seed});\n`;
};

//map(value, fromLow, fromHigh, toLow, toHigh)
Blockly.Arduino['mini_map'] = function () {
	const value = Blockly.Arduino.valueToCode(this, 'VAL', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const fromLow = Blockly.Arduino.valueToCode(this, 'frmL', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const fromHigh = Blockly.Arduino.valueToCode(this, 'frmH', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const toLow = Blockly.Arduino.valueToCode(this, 'toL', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const toHigh = Blockly.Arduino.valueToCode(this, 'toH', Blockly.Arduino.ORDER_ATOMIC) || '0';
	const code = `map(${value}, ${fromLow}, ${fromHigh}, ${toLow}, ${toHigh})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//自訂代碼
Blockly.Arduino['mini_custom_code'] = function () {
	let code = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '';
	code = code.substring(1, code.length - 1);
	return code;
};

//自訂頭部
Blockly.Arduino['mini_custom_header'] = function () {
	let code = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '';
	code = code.substring(1, code.length - 1);
	Blockly.Arduino.definitions_['test'] = code
	return '';
};

//timer_n = millis();
Blockly.Arduino['mini_timer_reset'] = function () {
	const timerID = this.getFieldValue('TIMER');
	Blockly.Arduino.definitions_[`timer_${timerID}`] = `unsigned long timer_${timerID} = 0;`;//unsigned long timer_n;
	return `timer_${timerID} = millis();\n`;
};

//millis() - timer_n;;
Blockly.Arduino['mini_timer_read'] = function () {
	const timerID = this.getFieldValue('TIMER');
	Blockly.Arduino.definitions_[`timer_${timerID}`] = `unsigned long timer_${timerID} = 0;`;//unsigned long timer_n;
	const code = `(millis() - timer_${timerID})`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//No Begin, just declare some include
Blockly.Arduino['mini_mvision_begin'] = function () {
	Blockly.Arduino.definitions_['MVISION_LIB'] = '#include "SmartCamReader.h"';
	return '';
};

//int result = SmartCamReader(data);
//if (result > 0) {
Blockly.Arduino['mini_mvision_read'] = function () {
	const condCode = "unsigned int CamData[10];\nint CamStatus = SmartCamReader(CamData);\n"
	let branch = Blockly.Arduino.statementToCode(this, 'SUBSTACK');
	let code = condCode + `if(CamStatus > 0)\n{\n${branch}}`;
	branch = Blockly.Arduino.statementToCode(this, 'SUBSTACK2');
	code += '\nelse\n{\n' + branch + '}';
	return code + '\n';
};

//CamData[n]
Blockly.Arduino['mini_mvision_getdata'] = function () {
	const IDX = this.getFieldValue('IDX');
	const code = `CamData[${IDX}]`;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//huskylens.begin(Serial) and #include <HUSKYLENS.h>, HUSKYLENS huskylens, short hcamData[5], bool hcamIsDetect;
// while (!huskylens.begin(Serial1)){
//     delay(1);
//     Serial.println(F("--HUSKYLENS: Begin...--"));
//   }
// Blockly.Arduino['mini_huskylens_begin'] = function () {
// 	Blockly.Arduino.definitions_['huskylens_LIB'] = '#include "HUSKYLENS.h"';
// 	Blockly.Arduino.definitions_['huskylens_FNC'] = 'void pollingHuskylens();';
// 	Blockly.Arduino.definitions_['huskylens_OBJ'] = 'HUSKYLENS huskylens;\nshort hcamData[5];\nbool hcamIsDetect;';
// 	const code = 'while (!huskylens.begin(Serial1)){\n  delay(1);\n  Serial.println(F("--HUSKYLENS: Begin...--"));\n}\n';
// 	return code;
// };

// if (!huskylens.request()) {
//     Serial.println(F("--HUSKYLENS: Connection FAILED--"));
//   }else if (!huskylens.isLearned()) {
//     Serial.println(F("--HUSKYLENS: Nothing learned--"));
//   }else {
//     if (huskylens.available()) {
//       hcamIsDetect = true;
//       HUSKYLENSResult hresult = huskylens.read();
//       if (hresult.command == COMMAND_RETURN_BLOCK) {
//         hcamData[0] = hresult.xCenter;
//         hcamData[1] = hresult.yCenter;
//         hcamData[2] = hresult.width;
//         hcamData[3] = hresult.height;
//         hcamData[4] = hresult.ID;
//       }
//       else if (hresult.command == COMMAND_RETURN_ARROW) {
//         hcamData[0] = hresult.xOrigin;
//         hcamData[1] = hresult.yOrigin;
//         hcamData[2] = hresult.xTarget;
//         hcamData[3] = hresult.yTarget;
//         hcamData[4] = hresult.ID;
//       }
//     } else {
//       hcamIsDetect = false;
//       Serial.println(F("--HUSKYLENS: No Object detected--"));
//     }
//   }
// Blockly.Arduino['mini_huskylens_read'] = function () {
// 	const code = `if (!huskylens.request()) {
//     Serial.println(F("--HUSKYLENS: Connection FAILED--"));
// } else if (!huskylens.isLearned()) {
//     Serial.println(F("--HUSKYLENS: Nothing learned--"));
// } else {
//     if (huskylens.available()) {
//         hcamIsDetect = true;
//         HUSKYLENSResult hresult = huskylens.read();
//         if (hresult.command == COMMAND_RETURN_BLOCK || hresult.command == COMMAND_RETURN_ARROW) {
//             hcamData[0] = (hresult.command == COMMAND_RETURN_BLOCK) ? hresult.xCenter : hresult.xOrigin;
//             hcamData[1] = (hresult.command == COMMAND_RETURN_BLOCK) ? hresult.yCenter : hresult.yOrigin;
//             hcamData[2] = (hresult.command == COMMAND_RETURN_BLOCK) ? hresult.width : hresult.xTarget;
//             hcamData[3] = (hresult.command == COMMAND_RETURN_BLOCK) ? hresult.height : hresult.yTarget;
//             hcamData[4] = hresult.ID;
//         }
//     } else {
//         hcamIsDetect = false;
//         Serial.println(F("--HUSKYLENS: No Object detected--"));
//     }
// }
// `;
// 	return code;
// };

// //hcamData[n]
// Blockly.Arduino['mini_huskylens_getblock'] = function () {
// 	const IDX = this.getFieldValue('IDX');
// 	const code = `hcamData[${IDX}]`;
// 	return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

// //hcamData[n]
// Blockly.Arduino['mini_huskylens_getarrow'] = function () {
// 	const IDX = this.getFieldValue('IDX');
// 	const code = `hcamData[${IDX}]`;
// 	return [code, Blockly.Arduino.ORDER_ATOMIC];
// };