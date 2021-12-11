
const whenFileLoaded = (reader, callback) => {
    const puzzleInput = reader.result
                    .split(/\n/)
    console.log(puzzleInput);
    callback(puzzleInput);
}
    
const readFile = (callback) => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = () => whenFileLoaded(reader, callback);
    reader.readAsText(file);
}

const parseAsNumbers = (input) => {
    const parsedPuzzleInput = input.map(item => parseInt(item, 10));
    return parsedPuzzleInput;
}

const compareDepths = (data) => {
    let count = 0;
    for(i = 1; i < data.length; i++) {
        if(data[i] > data[i-1]) {
            count++;
        }
    } 
    return count;
}

const parseBySetsOfThree = (initialArray) => {
    const parsedPuzzleInput = [];
    for(i = 0; i < (initialArray.length - 2); i++) {
        const sum = initialArray[i] + initialArray[i+1] + initialArray[i+2];
        parsedPuzzleInput.push(sum);
    }
    return parsedPuzzleInput;
}

const day01 = (input) => {
    const parsedInput01 = parseAsNumbers(input);
    const result011 = compareDepths(parsedInput01);
    const parsedInput02 = parseBySetsOfThree(parsedInput01);
    const result012 = compareDepths(parsedInput02);
    document.getElementById("day011").innerHTML = result011;
    document.getElementById("day012").innerHTML = result012;
}

const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', () => readFile(day01));