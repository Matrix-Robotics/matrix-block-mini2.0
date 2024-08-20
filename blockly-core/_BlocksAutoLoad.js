const blocks_dir = "./matrix-block-mini2.0/blockly-core/blocks/";
const blocks_picker_dir = "./matrix-block-mini2.0/blockly-core/blocks/picker/";
const generator_dir = "./matrix-block-mini2.0/blockly-core/generator/";

const Files = [
  "_mini",
  "control",
  "data",
  "math",
  "operators",
  "pins",
  "procedures",
  "text"
];

const Picker = [
  "colour",
  "matrix"
];

//Loading Blocks
document.write('<!-- Blocks JS -->');
for (let i = 0, file; (file = Files[i]); i++) {
  path = blocks_dir + file + '.js';
  document.write(`<script type="text/javascript" src="${path}"></script>`);
}

//Loading Blocks (color, matrix picker)
for (let i = 0, file; (file = Picker[i]); i++) {
  path = blocks_picker_dir + file + '.js';
  document.write(`<script type="text/javascript" src="${path}"></script>`);
}

//Loading Generators
document.write('<!-- Generators JS -->');
for (let i = 0, file; (file = Files[i]); i++) {
  path = generator_dir + file + '.js';
  document.write(`<script type="text/javascript" src="${path}"></script>`);
}

