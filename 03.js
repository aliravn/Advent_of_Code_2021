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
	
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', () => readFile(day03));


// ========== DAY 1 ============ //

const parseStringAsArray = (input) => {
    const parsedInput = input.map( elm => elm.split(''));
    return parsedInput;
}

const getGErates = (arr) => {
    let gRate = '', eRate = '';

    for(i = 0; i < arr[0].length; i++) {
        const tempArray = []; 
        
        for(k = 0; k < arr.length; k++) {         
           tempArray.push(arr[k][i]);
        }
        
       gRate += getHighOccurence(tempArray);
       eRate += getLowOccurence(tempArray);
       
    }
    return {'gRate': gRate, 'eRate': eRate};
}

const getHighOccurence = (arr) => {
    return arr.sort((a,b) =>
        arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
    ).pop();
}

const getLowOccurence = (arr) => {   
    return arr.sort((a,b) =>
        arr.filter(v => v===b).length
      - arr.filter(v => v===a).length
    ).pop();
}

const getPowerConsumption = (rates) => {
    const gRateDec = parseInt(rates.gRate, 2);
    const eRateDec = parseInt(rates.eRate, 2);
    return gRateDec * eRateDec;
}

const day03 = (input) => {
    const parsedInput = parseStringAsArray(input);
    const rates = getGErates(parsedInput)
    const powerConsumption = getPowerConsumption(rates);
    document.getElementById("day031").innerHTML = powerConsumption;
    // document.getElementById("day032").innerHTML = result012;
}

