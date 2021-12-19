const whenFileLoaded = (reader, callback) => {
  const puzzleInput = reader.result.split(/\n/);
  console.log(puzzleInput);
  callback(puzzleInput);
};

const readFile = (callback) => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => whenFileLoaded(reader, callback);
  reader.readAsText(file);
};

const parseAsNumbers = (input) => {
  const parsedPuzzleInput = input.map((item) => parseInt(item, 10));
  return parsedPuzzleInput;
};

const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", () => readFile(day02));

// ========== DAY 2 ============ //

const parseCommands = (input) => {
  const splitCommands = input.map((entry) => entry.split(" "));
  const parsedInput = splitCommands.map((command) => ({
    direction: command[0],
    value: parseInt(command[1], 10),
  }));
  return parsedInput;
};

const getPositionSimple = (commands) => {
  let posX = 0, posY = 0;
  for(i = 0; i < commands.length; i++) {
    switch (commands[i].direction) {
      case "forward":
        posX = posX + commands[i].value;
        break;
      case "down":
        posY = posY + commands[i].value;
        break;
      case "up":
        posY = posY - commands[i].value;
        break;
    }
  }
  const position = posX * posY;
  return position;
};

const getPositionComplex = (commands) => {
    let posX = 0, posY = 0, aim = 0;
    for(i = 0; i < commands.length; i++) {
      switch (commands[i].direction) {
        case "forward":
          posX += commands[i].value;
          posY += aim * commands[i].value;
          break;
        case "down":
          aim += commands[i].value;
          break;
        case "up":
          aim -= commands[i].value;
          break;
      }
    }
    const position = posX * posY;
    return position;
  };


const day02 = (input) => {
  const parsedInput = parseCommands(input);
  const position = getPositionSimple(parsedInput);
  const positionAdvanced = getPositionComplex(parsedInput);
  document.getElementById("day021").innerHTML = position;
  document.getElementById("day022").innerHTML = positionAdvanced;
};
