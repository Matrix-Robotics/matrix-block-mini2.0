'use strict';

goog.provide('Blockly.Blocks.pins');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['mini_pins_high_low'] = {
  init: function() {
    this.jsonInit({
      "message0": '%1',
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUM",
          "options": profile.default.high_low
        }
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours__mini", "output_number"]
    });
  }
};

Blockly.Blocks['mini_setup'] = {
  init: function() {
    this.jsonInit({
      "id": "mini_setup",
      "message0": Blockly.Msg.MINI_SETUP,
      "message1": Blockly.Msg.MINI_SETUP2,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "miniBegin_AA",
          "options": profile.default.miniBeginAA
        },
        {
          "type": "field_dropdown",
          "name": "miniBegin_EnUART",
          "options": profile.default.miniBeginEnUART
        },
        {
          "type": "field_dropdown",
          "name": "miniBegin_Baud",
          "options": profile.default.miniBeginBaud
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        },
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini"]
    });
  }
};

// Mini.RGB1.setRGB(0,0,0);
Blockly.Blocks['mini_setRGB'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_SETRGB,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.builtinLed
        },
        {
          "type": "input_value",
          "name": "R",
        },
        {
          "type": "input_value",
          "name": "G",
        },
        {
          "type": "input_value",
          "name": "B",
        },
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "shape_statement"]
    });
  }
};

//Mini.M1.set(0); // Speed Range: 100 ~ -100
Blockly.Blocks['mini_Mset'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_MSET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.pwm
        },
        {
          "type": "input_value",
          "name": "Speed",
        }
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "shape_statement"]
    });
  }
};

//Mini.RC1.set(90); //Angle Range: 0 ~ 180
Blockly.Blocks['mini_RCset'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_RCSET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.rc
        },
        {
          "type": "input_value",
          "name": "Angle",
        }
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "shape_statement"]
    });
  }
};

//Mini.BTN1.get();
Blockly.Blocks['mini_BTNget'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_BTNGET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.buttons
        },
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "output_boolean"] //output_boolean
    });
  }
};

//Mini.D4.US.get();
Blockly.Blocks['mini_USget'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_USGET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.digital
        },
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "output_number"]
    });
  }
};

//Mini.D1.get();
Blockly.Blocks['mini_DIget'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_DIGET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.digital
        },
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "output_boolean"] //output_boolean
    });
  }
};

//Mini.A1.getANG();
Blockly.Blocks['mini_AIget'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_AIGET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.analog
        },
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "output_number"]
    });
  }
};

//Mini.D1.set(1);
Blockly.Blocks['mini_DOset'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_DOSET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.digital
        },
        {
          "type": "input_value",
          "name": "HIGHLOW",
        }
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "shape_statement"]
    });
  }
};




//Mini.I2C1.MXcolor.setGamma(true);
Blockly.Blocks['mini_i2c_MXcolor_setGamma'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXCOLOR_SETGAMMA,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "LOGIC",
          "options": [
            [ "On", "true" ],
            [ "Off", "false" ]
          ]
        }
      ],
      "category": Blockly.Categories._mini_sensors,
      "extensions": ["colours__mini_sensors", "shape_statement"]
    });
  }
};

//Mini.I2C1.MXcolor.getColorNumber();
Blockly.Blocks['mini_i2c_MXcolor_getColorNumber'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXCOLOR_GETCOLORNUMBER,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
      ],
      "category": Blockly.Categories._mini_sensors,
      "extensions": ["colours__mini_sensors", "output_number"]
    });
  }
};

//Mini.I2C1.MXcolor.getColor(M);
Blockly.Blocks['mini_i2c_MXcolor_getColor'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXCOLOR_GETCOLOR,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "COLOR",
          "options": [
            [ "R", "R" ],
            [ "G", "G" ],
            [ "B", "B" ],
            [ "C", "C" ],
            [ "M", "M" ],
            [ "Y", "Y" ],
            [ "K", "K" ]
          ]
        }
      ],
      "category": Blockly.Categories._mini_sensors,
      "extensions": ["colours__mini_sensors", "output_number"]
    });
  }
};


//Mini.I2C1.MXmotion.setFilter(NONE);
Blockly.Blocks['mini_i2c_MXmotion_setFilter'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXMOTION_SETFILTER,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "FILTER",
          "options": [
            [ "None", "None" ],
            [ "Gyro", "GYRO" ],
            [ "Complimentary", "CPLTY" ],
            [ "Kalman", "KALMAN" ]
          ]
        }
      ],
      "category": Blockly.Categories._mini_sensors,
      "extensions": ["colours__mini_sensors", "shape_statement"]
    });
  }
};

//Mini.I2C1.MXmotion.getAccel(x);
Blockly.Blocks['mini_i2c_MXmotion_getAccel'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXMOTION_GETACCEL,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "AXIS",
          "options": [
            [ "X", "x" ],
            [ "Y", "y" ],
            [ "Z", "z" ]
          ]
        }
      ],
      "category": Blockly.Categories._mini_sensors,
      "extensions": ["colours__mini_sensors", "output_number"]
    });
  }
};

//Mini.I2C1.MXmotion.getGyro(x);
Blockly.Blocks['mini_i2c_MXmotion_getGyro'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXMOTION_GETGYRO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "AXIS",
          "options": [
            [ "X", "x" ],
            [ "Y", "y" ],
            [ "Z", "z" ]
          ]
        }
      ],
      "category": Blockly.Categories._mini_sensors,
      "extensions": ["colours__mini_sensors", "output_number"]
    });
  }
};

//Mini.I2C1.MXmotion.getPitch();Roll;Yaw
Blockly.Blocks['mini_i2c_MXmotion_getEULAR'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXMOTION_GETEULAR,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "AXIS",
          "options": [
            [ "Pitch", "Pitch" ],
            [ "Roll", "Roll" ],
            [ "Yaw", "Yaw" ]
          ]
        }
      ],
      "category": Blockly.Categories._mini_sensors,
      "extensions": ["colours__mini_sensors", "output_number"]
    });
  }
};

//Mini.I2C1.MXlaser.getDistance()
Blockly.Blocks['mini_i2c_MXlaser_getDistance'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXLASER_GETDISTANCE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
      ],
      "category": Blockly.Categories._mini_sensors,
      "extensions": ["colours__mini_sensors", "output_number"]
    });
  }
};

//Mini.I2C1.MXmotor.setPWM(1,0);
Blockly.Blocks['mini_i2c_MXmotor_setPWM'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXMOTOR_SETPWM,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "CHA",
          "options": [
            [ "Channel1", "1" ],
            [ "Channel2", "2" ],
            [ "Channel3", "3" ],
            [ "Channel4", "4" ]
          ]
        },
        {
          "type": "input_value",
          "name": "SPEED",
        }
      ],
      "category": Blockly.Categories._mini_boxs,
      "extensions": ["colours__mini_boxs", "shape_statement"]
    });
  }
};

//Mini.I2C1.MXservo.setAngle(1,90);
Blockly.Blocks['mini_i2c_MXservo_setAngle'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXSERVO_SETANGLE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "CHA",
          "options": [
            [ "Channel1", "1" ],
            [ "Channel2", "2" ],
            [ "Channel3", "3" ],
            [ "Channel4", "4" ],
            [ "Channel5", "5" ],
            [ "Channel6", "6" ],
            [ "Channel7", "7" ],
            [ "Channel8", "8" ]
          ]
        },
        {
          "type": "input_value",
          "name": "ANGLE",
        }
      ],
      "category": Blockly.Categories._mini_boxs,
      "extensions": ["colours__mini_boxs", "shape_statement"]
    });
  }
};


//Mini.I2C1.MXctrl.motorSet(1,0);
Blockly.Blocks['mini_i2c_MXctrl_motorSet'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXCTRL_MOTORSET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "CHA",
          "options": [
            [ "Motor1", "1" ],
            [ "Motor2", "2" ],
            [ "Motor3", "3" ],
            [ "Motor4", "4" ]
          ]
        },
        {
          "type": "input_value",
          "name": "SPEED",
        }
      ],
      "category": Blockly.Categories._mini_boxs,
      "extensions": ["colours__mini_boxs", "shape_statement"]
    });
  }
};

//Mini.I2C1.MXctrl.motorRound(1,0);
Blockly.Blocks['mini_i2c_MXctrl_motorRound'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXCTRL_MOTORROUND,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "CHA",
          "options": [
            [ "Motor1", "1" ],
            [ "Motor2", "2" ],
            [ "Motor3", "3" ],
            [ "Motor4", "4" ]
          ]
        },
        {
          "type": "input_value",
          "name": "ROUND",
        }
      ],
      "category": Blockly.Categories._mini_boxs,
      "extensions": ["colours__mini_boxs", "shape_statement"]
    });
  }
};

//Mini.I2C1.MXctrl.motorInvert(1,1);
Blockly.Blocks['mini_i2c_MXctrl_motorInvert'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXCTRL_MOTORINVERT,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "CHA",
          "options": [
            [ "Motor1", "1" ],
            [ "Motor2", "2" ],
            [ "Motor3", "3" ],
            [ "Motor4", "4" ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "ONOFF",
          "options": [
            [ "On", "1" ],
            [ "Off", "0" ],
          ]
        }
      ],
      "category": Blockly.Categories._mini_boxs,
      "extensions": ["colours__mini_boxs", "shape_statement"]
    });
  }
};

//Mini.I2C1.MXctrl.servoSet(1,90);
Blockly.Blocks['mini_i2c_MXctrl_servoSet'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_MXCTRL_SERVOSET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "CHA",
          "options": [
            [ "Servo1", "1" ],
            [ "Servo2", "2" ],
            [ "Servo3", "3" ],
            [ "Servo4", "4" ]
          ]
        },
        {
          "type": "input_value",
          "name": "ANGLE",
        }
      ],
      "category": Blockly.Categories._mini_boxs,
      "extensions": ["colours__mini_boxs", "shape_statement"]
    });
  }
};

//Mini.I2C1.PIXYcam.pixyinit(7);
Blockly.Blocks['mini_i2c_PIXYcam_pixyinit'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_PIXYCAM_PIXYINIT,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        }
      ],
      "category": Blockly.Categories._mini_thrdpty,
      "extensions": ["colours__mini_thrdpty", "shape_statement"]
    });
  }
};

//Mini.I2C1.PIXYcam.getblock(0,1);
Blockly.Blocks['mini_i2c_PIXYcam_getblock'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_PIXYCAM_GETBLOCK,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        }
      ],
      "category": Blockly.Categories._mini_thrdpty,
      "extensions": ["colours__mini_thrdpty", "shape_statement"]
    });
  }
};

//Mini.I2C1.PIXYcam.block.signature; x, y, width, height
Blockly.Blocks['mini_i2c_PIXYcam_INFO'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_PIXYCAM_INFO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        },
        {
          "type": "field_dropdown",
          "name": "INFO",
          "options": [
            [ "Signature", "signature" ],
            [ "X", "x" ],
            [ "Y", "y" ],
            [ "Width", "width" ],
            [ "Height", "height" ]
          ]
        }
      ],
      "category": Blockly.Categories._mini_thrdpty,
      "extensions": ["colours__mini_thrdpty", "output_number"]
    });
  }
};

//Mini.I2C1.HTcolor.getColorNumber();
Blockly.Blocks['mini_i2c_HTcolor_getColorNumber'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_HTCOLOR_GETCOLORNUMBER,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        }
      ],
      "category": Blockly.Categories._mini_thrdpty,
      "extensions": ["colours__mini_thrdpty", "output_number"]
    });
  }
};

//Mini.I2C1.HTcolor.get();
Blockly.Blocks['mini_i2c_HTcolor_getRed'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_HTCOLOR_GETRED,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        }
      ],
      "category": Blockly.Categories._mini_thrdpty,
      "extensions": ["colours__mini_thrdpty", "output_number"]
    });
  }
};

//Mini.I2C1.HTcompass.getHeading();
Blockly.Blocks['mini_i2c_HTcompass_getHeading'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_I2C_HTCOMPASS_GETHEADING,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.i2c
        }
      ],
      "category": Blockly.Categories._mini_thrdptyi,
      "extensions": ["colours__mini_thrdpty", "output_number"]
    });
  }
};

//Mini.PS2.begin();
Blockly.Blocks['mini_ps2_begin'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_PS2_BEGIN,
      "category": Blockly.Categories._mini_mj2,
      "extensions": ["colours__mini_mj2", "shape_statement"]
    });
  }
};

//Mini.PS2.polling();
Blockly.Blocks['mini_ps2_polling'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_PS2_POLLING,
      "category": Blockly.Categories._mini_mj2,
      "extensions": ["colours__mini_mj2", "shape_statement"]
    });
  }
};

//Mini.PS2.UP
Blockly.Blocks['mini_ps2_btn'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_PS2_BTN,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BTNS",
          "options": [
            ["L1","L1"], ["R1","R1"], ["L2","L2"], ["R2","R2"], ["L3","L3"],
            ["R3","R3"], ["SELECT","SELECT"], ["START","START"], ["UP","UP"], ["RIGHT","RIGHT"],
            ["DOWN","DOWN"], ["LEFT","LEFT"], ["TRIANGLE","TRIANGLE"], ["CIRCLE","CIRCLE"], ["CROSS","CROSS"], ["SQUARE","SQUARE"]
          ]
        }
      ],
      "category": Blockly.Categories._mini_mj2,
      "extensions": ["colours__mini_mj2", "output_boolean"]
    });
  }
};

//Mini.PS2.RX
Blockly.Blocks['mini_ps2_joy'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_PS2_JOY,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LR",
          "options": [["Left","L"], ["Right","R"]]
        },
        {
          "type": "field_dropdown",
          "name": "XY",
          "options": [["X","X"], ["Y","Y"]]
        }
      ],
      "category": Blockly.Categories._mini_mj2,
      "extensions": ["colours__mini_mj2", "output_number"]
    });
  }
};

//Serial.print("hello");
Blockly.Blocks['mini_Serial_print'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_SERIAL_PRINT,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "category": Blockly.Categories._mini_serial,
      "extensions": ["colours__mini_serial", "shape_statement"]
    });
  }
};

//Serial.println();
Blockly.Blocks['mini_Serial_println'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_SERIAL_PRINTLN,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "category": Blockly.Categories._mini_serial,
      "extensions": ["colours__mini_serial", "shape_statement"]
    });
  }
};

//Serial.write();
Blockly.Blocks['mini_Serial_write'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_SERIAL_WRITE,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "category": Blockly.Categories._mini_serial,
      "extensions": ["colours__mini_serial", "shape_statement"]
    });
  }
};

//Serial.println("{" + String(j) + "," + String(k) + "," + String(50) + "}");
Blockly.Blocks['mini_Serial_printAXIS'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_SERIAL_PRINTAXIS,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1",
        },
        {
          "type": "input_value",
          "name": "NUM2",
        },
        {
          "type": "input_value",
          "name": "NUM3",
        },
        {
          "type": "input_value",
          "name": "DELAY",
        },
      ],
      "category": Blockly.Categories._mini_serial,
      "extensions": ["colours__mini_serial", "shape_statement"]
    });
  }
};

//Serial.available()
Blockly.Blocks['mini_Serial_available'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_SERIAL_AVAILABLE,
      "category": Blockly.Categories._mini_serial,
      "extensions": ["colours__mini_serial", "output_boolean"]
    });
  }
};

//Serial.read()
Blockly.Blocks['mini_Serial_read'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_SERIAL_READ,
      "category": Blockly.Categories._mini_serial,
      "extensions": ["colours__mini_serial", "output_string"]
    });
  }
};


//millis()
Blockly.Blocks['mini_millis'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_MILLIS,
      "category": Blockly.Categories._mini,
      "extensions": ["colours_control", "output_number"]
    });
  }
};

//randomSeed(0);
Blockly.Blocks['mini_randomSeed'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_RANDOMSEED,
      "args0": [
        {
          "type": "input_value",
          "name": "SEED"
        }
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours_operators", "shape_statement"]
    });
  }
};

//map(value, fromLow, fromHigh, toLow, toHigh)
Blockly.Blocks['mini_map'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_MAP,
      "args0": [
        {
          "type": "input_value",
          "name": "VAL"
        },
        {
          "type": "input_value",
          "name": "frmL"
        },
        {
          "type": "input_value",
          "name": "frmH"
        },
        {
          "type": "input_value",
          "name": "toL"
        },
        {
          "type": "input_value",
          "name": "toH"
        }
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours_operators", "output_number"]
    });
  }
};

//自訂代碼
Blockly.Blocks['mini_custom_code'] = {
  init: function() {
    this.jsonInit({
      "message0": "Code:%1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT",
        }
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "shape_statement"]
    });
  }
};

//自訂頭部
Blockly.Blocks['mini_custom_header'] = {
  init: function() {
    this.jsonInit({
      "message0": "Head:%1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT",
        }
      ],
      "category": Blockly.Categories._mini,
      "extensions": ["colours__mini", "shape_statement"]
    });
  }
};

//timer-reset
Blockly.Blocks['mini_timer_reset'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_TIMER_RESET,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TIMER",
          "options": [["1","1"], ["2","2"], ["3","3"]]
        },
      ],
      "category": Blockly.Categories._control,
      "extensions": ["colours__mini_thrdpty", "shape_statement"]
    });
  }
};

//timer-read
Blockly.Blocks['mini_timer_read'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MINI_TIMER_READ,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TIMER",
          "options": [["1","1"], ["2","2"], ["3","3"]]
        },
      ],
      "category": Blockly.Categories._control,
      "extensions": ["colours__mini_thrdpty", "output_number"]
    });
  }
};

//No Begin, just declare some include
Blockly.Blocks['mini_mvision_begin'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MINI_MVISION_BEGIN,
			"category": Blockly.Categories._mini_sensors,
			"extensions": ["colours__mini_sensors", "shape_statement"]
		});
	}
};

//int result = SmartCamReader(data);
//if (result > 0) {
Blockly.Blocks['mini_mvision_read'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MINI_MVISION_READ1,
			"message1": "%1", //Statement
			"message2": Blockly.Msg.MINI_MVISION_READ2, // TEXT
			"message3": "%1", //Statement
			"args1": [
				{
					"type": "input_statement",
					"name": "SUBSTACK"
				}
			],
			"args3": [
				{
					"type": "input_statement",
					"name": "SUBSTACK2"
				}
			],
			"category": Blockly.Categories._mini_sensors,
			"extensions": ["colours__mini_sensors", "shape_statement"]
		});
	}
};

//CamData[n]
Blockly.Blocks['mini_mvision_getdata'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MINI_MVISION_GETDATA,
			"args0": [
				{
					"type": "field_dropdown",
					"name": "IDX",
					"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"],
					["8", "8"], ["9", "9"], ["10", "10"]]
				}
			],
			"category": Blockly.Categories._mini_sensors,
			"extensions": ["colours__mini_sensors", "output_string"]
		});
	}
};

// //huskylens.begin(Serial) and #include <HUSKYLENS.h>, HUSKYLENS huskylens short hcamData[5], bool hcamIsDetect;
// Blockly.Blocks['mini_huskylens_begin'] = {
// 	init: function () {
// 		this.jsonInit({
// 			"message0": 'HUSKYLENS Begin',
// 			"category": Blockly.Categories._mini_sensors,
// 			"extensions": ["colours__mini_sensors", "shape_statement"]
// 		});
// 	}
// };

// //int result = SmartCamReader(data);
// //if (result > 0) {
// Blockly.Blocks['mini_huskylens_read'] = {
// 	init: function () {
// 		this.jsonInit({
// 			"message0": 'HUSKYLENS Polling',
// 			"category": Blockly.Categories._mini_sensors,
// 			"extensions": ["colours__mini_sensors", "shape_statement"]
// 		});
// 	}
// };

// //hcamData[n]
// Blockly.Blocks['mini_huskylens_getblock'] = {
// 	init: function () {
// 		this.jsonInit({
// 			"message0": "HUSKYLENS get block %1 data",
// 			"args0": [
// 				{
// 					"type": "field_dropdown",
// 					"name": "IDX",
// 					"options": [["X_Center", "0"], ["Y_Center", "1"], ["Width", "2"], ["Height", "3"], ["ID", "4"]]
// 				}
// 			],
// 			"category": Blockly.Categories._mini_sensors,
// 			"extensions": ["colours__mini_sensors", "output_string"]
// 		});
// 	}
// };

// //hcamData[n]
// Blockly.Blocks['mini_huskylens_getarrow'] = {
// 	init: function () {
// 		this.jsonInit({
// 			"message0": "HUSKYLENS get arrow %1 data",
// 			"args0": [
// 				{
// 					"type": "field_dropdown",
// 					"name": "IDX",
// 					"options": [["X_Origin", "0"], ["Y_Origin", "1"], ["X_Target", "2"], ["Y_Target", "3"], ["ID", "4"]]
// 				}
// 			],
// 			"category": Blockly.Categories._mini_sensors,
// 			"extensions": ["colours__mini_sensors", "output_string"]
// 		});
// 	}
// };

