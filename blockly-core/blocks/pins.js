'use strict';

goog.provide('Blockly.Blocks.pins');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['pins_digital'] = {
  /**
   *
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.digital
        }
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours_data", "output_number"]
    });
  }
};

/**
 * 模拟引脚
 * @type {{init: Blockly.Blocks.pins_analog.init}}
 */
Blockly.Blocks['pins_analog'] = {
  /**
   *
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.analog
        }
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours_data", "output_number"]
    });
  }
};

/**
 * PWM引脚
 * @type {{init: Blockly.Blocks.pins_pwm.init}}
 */
Blockly.Blocks['pins_pwm'] = {
  /**
   *
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN",
          "options": profile.default.pwm
        }
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours_data", "output_number"]
    });
  }
};

/**
 * 高低电平
 * @type {{init: Blockly.Blocks.pins_high_low.init}}
 */
Blockly.Blocks['pins_high_low'] = {
  /**
   *
   * @this Blockly.Block
   */
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
      "extensions": ["colours_data", "output_number"]
    });
  }
};

/**
 * 输入输出
 * @type {{init: Blockly.Blocks.pins_input_output.init}}
 */
Blockly.Blocks['pins_input_output'] = {
  /**
   *
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": '%1',
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MODE",
          "options": profile.default.input_output
        }
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours_data", "output_number"]
    });
  }
};

/**
 * 输入输出
 * @type {{init: Blockly.Blocks.pins_digital.init}}
 */
Blockly.Blocks['pins_pin_mode'] = {
  /**
   *
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PINS_PIN_MODE,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
        },
        {
          "type": "input_value",
          "name": "MODE"
        }
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours_data", "shape_statement"]
    });
  }
};

/**
 * DigitalWrite
 * @type {{init: Blockly.Blocks.pins_digital_write.init}}
 */
Blockly.Blocks['pins_digital_write'] = {
  /**
   *
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PINS_DIGITAL_WRITE,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
        },
        {
          "type": "input_value",
          "name": "NUM",
        }
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours_data", "shape_statement"]
    });
  }
};

/**
 * DigitalRead
 * @type {{init: Blockly.Blocks.pins_digital_read.init}}
 */
Blockly.Blocks['pins_digital_read'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PINS_DIGITAL_READ,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
        },
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours_data", "output_number"]
    });
  }
};

/**
 * AnalogWrite
 * @type {{init: Blockly.Blocks.pins_analog_write.init}}
 */
Blockly.Blocks['pins_analog_write'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PINS_ANALOG_WRITE,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
        },
        {
          "type": "input_value",
          "name": "NUM",
        }
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours_data", "shape_statement"]
    });
  }
};

/**
 * AnalogRead
 * @type {{init: Blockly.Blocks.pins_analog_read.init}}
 */
Blockly.Blocks['pins_analog_read'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.PINS_ANALOG_READ,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
        },
      ],
      "category": Blockly.Categories.pins,
      "extensions": ["colours_data", "output_number"]
    });
  }
};

