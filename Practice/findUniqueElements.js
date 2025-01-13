

let str = "abcdeabcdefg" 
//op-abcdefg


let map ={}
let output = ''
for(let char of str){
    if(!map[char]){
        map[char] = true
        output += char
    }
}
//console.log('output:',output);

function findRepeatingelements(str){
    let map = new Map()
    let result = ''
    for (let char of str) {
        if (map.has(char)) {
            // If character is already in the map and not in result
            if (!result.includes(char)) {
                result += char;
            }
        } else {
            map.set(char, 1); // Add character to the map
        }
    }

    return result;
}


console.log(findRepeatingelements(str));

