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


// ========== DAY 3 ============ //

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


const getOxygenRate = (input) => {
    let oxyRate;
    let pointerOxy;
    let tempInput = input.slice();
    
    for(i = 0; i < input[0].length; i++) {
        
        const tempArray = []; 
        
        for(k = 0; k < tempInput.length; k++) {         
            tempArray.push(tempInput[k][i]);
        }
        
        pointerOxy = findPointerOxy(tempArray);
        
        tempInput = tempInput.filter(entry => entry[i] === pointerOxy);
        
        if(tempInput.length === 1) {
            oxyRate = tempInput[0];
            break;
        }

    }

    return oxyRate;
}

const getCarboRate = (input) => {
    let carboRate;
    let pointerCarbo;
    let tempInput = input.slice();
    
    for(i = 0; i < input[0].length; i++) {
        
        const tempArray = []; 
        
        for(k = 0; k < tempInput.length; k++) {         
            tempArray.push(tempInput[k][i]);
        }
        
        pointerCarbo = findPointerCarbo(tempArray);
        
        tempInput = tempInput.filter(entry => entry[i] === pointerCarbo);
        
        if(tempInput.length === 1) {
            carboRate = tempInput[0];
            break;
        }

    }

    return carboRate;
}

const findPointerOxy = (tempArr) => {
    let pointerOxy;
    const a = '0';
    const b = '1';
    const occurence =  tempArr.filter(v => v===a).length - tempArr.filter(v => v===b).length;

    if(occurence > 0) {
        pointerOxy = a;
    }
    if(occurence === 0) {
        pointerOxy = b;
    }
    if(occurence < 0) {
        pointerOxy = b;
    } 

 return pointerOxy;
}

const findPointerCarbo = (tempArr) => {
    let pointerCarbo;
    const a = '0';
    const b = '1';
    const occurence =  tempArr.filter(v => v===a).length - tempArr.filter(v => v===b).length;

    if(occurence > 0) {
        pointerCarbo = b;
    }
    if(occurence === 0) {
        pointerCarbo = a;
    }
    if(occurence < 0) {
        pointerCarbo = a;
    } 

 return pointerCarbo;
}

const getLifeSupportRating = (input) => {
    const oxyRate = parseInt(getOxygenRate(input),2);
    const carboRate = parseInt(getCarboRate(input),2);
    return oxyRate * carboRate;
}

const day03 = (input) => {
    const parsedInput = parseStringAsArray(input);
    const rates = getGErates(parsedInput)
    const powerConsumption = getPowerConsumption(rates);
    document.getElementById("day031").innerHTML = powerConsumption;
    const lifeSupportRating = getLifeSupportRating(input);
    document.getElementById("day032").innerHTML = lifeSupportRating;
}

