//read out puzzle inputfrom a text file parse it into int numbers
let rawData;
const readTextFile = (file) => {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                const allText = rawFile.responseText;
                rawData = allText.split(/\n/);
            }
        }
    }
    rawFile.send(null);
}
readTextFile("file:///home/alira/Documents/1-Programming/2-Advent_of_Code_2021/input011");

const puzzleInput = rawData.map(item => parseInt(item, 10));
console.log(puzzleInput);

// test if the function is correct
const testInput = [199,200,208,210,200,207,240,269,260,263];

//puzzle solution
const compareDepths = (data) => {
    let count = 0;
    for(i = 1; i < data.length; i++) {
        if(data[i] > data[i-1]) {
            count++;
        }
    } 
    return count;
    
}

const result = compareDepths(puzzleInput);


// This is the result of the day011 calculations
document.getElementById("day011").innerHTML = result;